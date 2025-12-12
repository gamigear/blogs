const bcrypt = require('../frontend/node_modules/bcryptjs');
const { Client } = require('../frontend/node_modules/pg');

async function checkUser() {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
  });

  try {
    await client.connect();

    const result = await client.query(
      'SELECT id, email, username, display_name, password_hash, role, trust_level FROM users WHERE email = $1',
      ['dteanh@gmail.com']
    );

    if (result.rows.length === 0) {
      console.log('User not found!');
      return;
    }

    const user = result.rows[0];
    console.log('User found:');
    console.log('  ID:', user.id);
    console.log('  Email:', user.email);
    console.log('  Username:', user.username);
    console.log('  Role:', user.role);
    console.log('  Trust Level:', user.trust_level);
    console.log('  Has password_hash:', !!user.password_hash);

    const isValid = await bcrypt.compare('Matkhau@123', user.password_hash);
    console.log('  Password valid:', isValid);

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

checkUser();
