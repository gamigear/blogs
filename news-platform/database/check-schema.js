const path = require('path');
const { Client } = require(path.join(__dirname, '../frontend/node_modules/pg'));

async function checkSchema() {
  const client = new Client({
    connectionString: 'postgresql://bangiaiphapblog:Matkhau@2024@34.126.103.48:5432/bangiaiphapblog'
  });

  try {
    await client.connect();
    const result = await client.query(
      "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'users' ORDER BY ordinal_position"
    );
    console.log('Columns in users table:');
    result.rows.forEach(r => console.log('-', r.column_name, ':', r.data_type));
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

checkSchema();
