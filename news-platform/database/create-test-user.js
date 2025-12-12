const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

async function createTestUser() {
  const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_USJKRivcTx80@ep-billowing-pine-a10ro73q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
  });
  
  try {
    // Create a regular user (role = reader)
    const passwordHash = await bcrypt.hash('Test@123', 10);
    
    // Check if user exists
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', ['testuser@example.com']);
    
    if (existing.rows.length > 0) {
      console.log('Test user already exists, ID:', existing.rows[0].id);
    } else {
      const result = await pool.query(
        'INSERT INTO users (email, username, display_name, password_hash, role, trust_level) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
        ['testuser@example.com', 'testuser', 'Test User', passwordHash, 'reader', 0]
      );
      console.log('Created test user with ID:', result.rows[0].id);
    }
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await pool.end();
  }
}

createTestUser();
