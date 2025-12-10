const path = require('path');
const bcrypt = require(path.join(__dirname, '../frontend/node_modules/bcryptjs'));
const { Client } = require(path.join(__dirname, '../frontend/node_modules/pg'));

async function createAdmin() {
  // Thông tin tài khoản admin mới
  const username = 'dteanh';
  const email = 'dteanh@admin.com';
  const displayName = 'Admin DTeanh';
  const password = 'Matkhau123';
  const role = 'admin';
  const trustLevel = 4;

  // Hash password
  const passwordHash = await bcrypt.hash(password, 12);
  console.log('Password hash created');

  const client = new Client({
    connectionString: 'postgresql://bangiaiphapblog:Matkhau@2024@34.126.103.48:5432/bangiaiphapblog'
  });

  try {
    await client.connect();
    console.log('Connected to database');

    // Add password_hash column if not exists
    await client.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255)
    `);
    console.log('Ensured password_hash column exists');

    // Check if user already exists
    const existing = await client.query(
      'SELECT id FROM users WHERE username = $1 OR email = $2',
      [username, email]
    );

    if (existing.rows.length > 0) {
      console.log('User already exists, updating...');
      await client.query(
        `UPDATE users SET 
          password_hash = $1, 
          role = $2, 
          trust_level = $3,
          display_name = $4
        WHERE username = $5 OR email = $6`,
        [passwordHash, role, trustLevel, displayName, username, email]
      );
      console.log('✅ Admin user updated!');
    } else {
      // Create new admin user
      const result = await client.query(
        `INSERT INTO users (username, email, display_name, password_hash, role, trust_level, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP)
         RETURNING id, username, email, role`,
        [username, email, displayName, passwordHash, role, trustLevel]
      );
      console.log('✅ Admin user created!');
      console.log('User:', result.rows[0]);
    }

    console.log('\n========================================');
    console.log('Thông tin đăng nhập:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);
    console.log('========================================');

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await client.end();
  }
}

createAdmin();
