const { Client } = require('../frontend/node_modules/pg');

const SOURCE_DB = 'postgresql://bangiaiphapblog:Matkhau@2024@34.126.103.48:5432/bangiaiphapblog';
const TARGET_DB = 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

async function migrate() {
  const source = new Client({ connectionString: SOURCE_DB });
  const target = new Client({ connectionString: TARGET_DB });

  try {
    await source.connect();
    console.log('✅ Connected to source database');
    
    await target.connect();
    console.log('✅ Connected to Neon database');

    // Get all tables from source
    const tablesResult = await source.query(`
      SELECT tablename FROM pg_tables 
      WHERE schemaname = 'public' 
      ORDER BY tablename
    `);
    const tables = tablesResult.rows.map(r => r.tablename);
    console.log('Tables to migrate:', tables.join(', '));

    // Get schema DDL for each table
    console.log('\n📋 Creating schema...');
    
    // Get and execute CREATE TABLE statements
    for (const table of tables) {
      // Get column definitions
      const colsResult = await source.query(`
        SELECT column_name, data_type, character_maximum_length, 
               column_default, is_nullable, udt_name
        FROM information_schema.columns 
        WHERE table_name = $1 AND table_schema = 'public'
        ORDER BY ordinal_position
      `, [table]);

      if (colsResult.rows.length === 0) continue;

      // Build CREATE TABLE statement
      const columns = colsResult.rows.map(col => {
        let type = col.data_type;
        if (col.data_type === 'character varying') {
          type = col.character_maximum_length ? `VARCHAR(${col.character_maximum_length})` : 'VARCHAR';
        } else if (col.data_type === 'ARRAY') {
          type = col.udt_name.replace('_', '') + '[]';
        } else if (col.data_type === 'USER-DEFINED') {
          type = col.udt_name;
        }
        
        let def = `"${col.column_name}" ${type}`;
        if (col.column_default && col.column_default.includes('nextval')) {
          def = `"${col.column_name}" SERIAL`;
        } else if (col.column_default) {
          def += ` DEFAULT ${col.column_default}`;
        }
        if (col.is_nullable === 'NO' && !col.column_default?.includes('nextval')) {
          def += ' NOT NULL';
        }
        return def;
      }).join(',\n  ');

      const createSQL = `CREATE TABLE IF NOT EXISTS "${table}" (\n  ${columns}\n)`;
      
      try {
        await target.query(createSQL);
        console.log(`  ✓ Created table: ${table}`);
      } catch (err) {
        console.log(`  ⚠ Table ${table}: ${err.message.split('\n')[0]}`);
      }
    }

    // Migrate data
    console.log('\n📦 Migrating data...');
    for (const table of tables) {
      try {
        // Get data from source
        const dataResult = await source.query(`SELECT * FROM "${table}"`);
        const rows = dataResult.rows;
        
        if (rows.length === 0) {
          console.log(`  - ${table}: 0 rows (skipped)`);
          continue;
        }

        // Clear target table
        await target.query(`DELETE FROM "${table}"`);

        // Insert data
        const columns = Object.keys(rows[0]);
        const placeholders = columns.map((_, i) => `$${i + 1}`).join(', ');
        const insertSQL = `INSERT INTO "${table}" ("${columns.join('", "')}") VALUES (${placeholders}) ON CONFLICT DO NOTHING`;

        let inserted = 0;
        for (const row of rows) {
          try {
            await target.query(insertSQL, columns.map(c => row[c]));
            inserted++;
          } catch (err) {
            // Skip on error
          }
        }
        console.log(`  ✓ ${table}: ${inserted}/${rows.length} rows`);
      } catch (err) {
        console.log(`  ✗ ${table}: ${err.message.split('\n')[0]}`);
      }
    }

    // Reset sequences
    console.log('\n🔄 Resetting sequences...');
    for (const table of tables) {
      try {
        await target.query(`
          SELECT setval(pg_get_serial_sequence('"${table}"', 'id'), 
                 COALESCE((SELECT MAX(id) FROM "${table}"), 1))
        `);
      } catch (err) {
        // Ignore if no sequence
      }
    }

    console.log('\n✅ Migration completed!');

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await source.end();
    await target.end();
  }
}

migrate();
