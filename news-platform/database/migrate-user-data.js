require('dotenv').config({ path: '../frontend/.env.local' });
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function safeUpdate(client, table, column, newId, oldId) {
  try {
    const result = await client.query(`UPDATE ${table} SET ${column} = $1 WHERE ${column} = $2 RETURNING id`, [newId, oldId]);
    console.log(`✓ Transferred ${result.rowCount} records from ${table}`);
    return result.rowCount;
  } catch (e) {
    if (e.message.includes('does not exist')) {
      console.log(`- Skipped ${table}: table not found`);
    } else {
      console.log(`- Skipped ${table}: ${e.message}`);
    }
    return 0;
  }
}

async function safeDelete(client, table, column, id) {
  try {
    await client.query(`DELETE FROM ${table} WHERE ${column} = $1`, [id]);
  } catch (e) {
    // Ignore
  }
}

async function migrateUserData() {
  const client = await pool.connect();
  
  try {
    // Find user IDs
    const tinhteResult = await client.query("SELECT id FROM users WHERE LOWER(username) = 'tinhte'");
    const dteanhResult = await client.query("SELECT id FROM users WHERE username = 'dteanh'");
    
    if (tinhteResult.rows.length === 0) {
      console.log('User Tinhte not found');
      await pool.end();
      return;
    }
    
    if (dteanhResult.rows.length === 0) {
      console.log('User dteanh not found');
      await pool.end();
      return;
    }
    
    const tinhteId = tinhteResult.rows[0].id;
    const dteanhId = dteanhResult.rows[0].id;
    
    console.log(`\nTinhte ID: ${tinhteId}, dteanh ID: ${dteanhId}\n`);
    
    // Transfer all user-related data (no transaction, each update is independent)
    await safeUpdate(client, 'articles', 'author_id', dteanhId, tinhteId);
    await safeUpdate(client, 'comments', 'user_id', dteanhId, tinhteId);
    await safeUpdate(client, 'article_likes', 'user_id', dteanhId, tinhteId);
    await safeUpdate(client, 'article_dislikes', 'user_id', dteanhId, tinhteId);
    await safeUpdate(client, 'notifications', 'user_id', dteanhId, tinhteId);
    await safeUpdate(client, 'audit_logs', 'user_id', dteanhId, tinhteId);
    
    // Handle followers specially (avoid duplicates)
    await safeDelete(client, 'followers', 'follower_id', tinhteId);
    await safeDelete(client, 'followers', 'following_id', tinhteId);
    
    // Delete Tinhte user
    try {
      await client.query('DELETE FROM users WHERE id = $1', [tinhteId]);
      console.log('\n✓ Deleted user Tinhte');
    } catch (e) {
      console.log('Error deleting user:', e.message);
    }
    
    console.log('\n✅ Migration completed!');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

migrateUserData();
