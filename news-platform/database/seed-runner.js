// Run from frontend folder: node ../database/seed-runner.js
const path = require('path');
const fs = require('fs');

// Use pg from frontend's node_modules
const pgPath = path.join(__dirname, '../frontend/node_modules/pg');
const { Client } = require(pgPath);

async function runSeed() {
  const client = new Client({
    connectionString: 'postgresql://bangiaiphapblog:Matkhau@2024@34.126.103.48:5432/bangiaiphapblog'
  });

  try {
    await client.connect();
    console.log('Connected to database');

    const sqlFile = fs.readFileSync(path.join(__dirname, 'seed-demo.sql'), 'utf8');
    const statements = sqlFile.split(/;(?=\s*(?:INSERT|UPDATE|SELECT|TRUNCATE))/i).filter(s => s.trim());

    for (const stmt of statements) {
      if (stmt.trim()) {
        try {
          const result = await client.query(stmt);
          if (result.command === 'INSERT') console.log(`✓ INSERT: ${result.rowCount} rows`);
          else if (result.command === 'SELECT') console.log('Result:', result.rows);
          else console.log(`✓ ${result.command}`);
        } catch (err) {
          console.error('Error:', err.message);
        }
      }
    }
    console.log('\n✅ Seed completed!');
  } catch (err) {
    console.error('Connection error:', err.message);
  } finally {
    await client.end();
  }
}

runSeed();
