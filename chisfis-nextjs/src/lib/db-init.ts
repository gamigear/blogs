import { sql } from './db'

export async function initDatabase() {
  // Create media table
  await sql`
    CREATE TABLE IF NOT EXISTS media (
      id SERIAL PRIMARY KEY,
      filename VARCHAR(255) NOT NULL,
      original_name VARCHAR(255) NOT NULL,
      url TEXT NOT NULL,
      type VARCHAR(50) NOT NULL,
      mime_type VARCHAR(100),
      size INTEGER DEFAULT 0,
      width INTEGER,
      height INTEGER,
      alt_text VARCHAR(255),
      folder VARCHAR(100) DEFAULT 'general',
      uploaded_by INTEGER,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `

  // Create tables
  await sql`
    CREATE TABLE IF NOT EXISTS listings (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(50) NOT NULL,
      location VARCHAR(255),
      price VARCHAR(50),
      rating DECIMAL(2,1) DEFAULT 0,
      reviews_count INTEGER DEFAULT 0,
      status VARCHAR(20) DEFAULT 'Active',
      image TEXT,
      description TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255),
      role VARCHAR(20) DEFAULT 'User',
      status VARCHAR(20) DEFAULT 'Active',
      joined DATE DEFAULT CURRENT_DATE,
      bookings_count INTEGER DEFAULT 0,
      avatar TEXT,
      phone VARCHAR(50),
      address TEXT,
      bio TEXT,
      gender VARCHAR(20),
      date_of_birth DATE,
      email_verified BOOLEAN DEFAULT FALSE,
      phone_verified BOOLEAN DEFAULT FALSE,
      identity_verified BOOLEAN DEFAULT FALSE,
      verification_token VARCHAR(255),
      verification_expires TIMESTAMP,
      reset_token VARCHAR(255),
      reset_expires TIMESTAMP,
      last_login TIMESTAMP,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `

  // Create sessions table
  await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      token VARCHAR(500) NOT NULL,
      expires_at TIMESTAMP NOT NULL,
      ip_address VARCHAR(50),
      user_agent TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `

  // Create verification_requests table
  await sql`
    CREATE TABLE IF NOT EXISTS verification_requests (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      type VARCHAR(50) NOT NULL,
      document_url TEXT,
      status VARCHAR(20) DEFAULT 'Pending',
      admin_notes TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      reviewed_at TIMESTAMP,
      reviewed_by INTEGER REFERENCES users(id)
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id VARCHAR(20) PRIMARY KEY,
      guest_name VARCHAR(255) NOT NULL,
      guest_email VARCHAR(255),
      listing_id INTEGER REFERENCES listings(id),
      listing_name VARCHAR(255),
      listing_type VARCHAR(50),
      check_in DATE,
      check_out DATE,
      total VARCHAR(50),
      status VARCHAR(20) DEFAULT 'Pending',
      created_at TIMESTAMP DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      user_name VARCHAR(255),
      user_avatar TEXT,
      listing_id INTEGER REFERENCES listings(id),
      listing_name VARCHAR(255),
      rating INTEGER CHECK (rating >= 1 AND rating <= 5),
      comment TEXT,
      status VARCHAR(20) DEFAULT 'Pending',
      created_at DATE DEFAULT CURRENT_DATE
    )
  `

  console.log('Database tables created successfully')
}

export async function seedDatabase() {
  // Check if data exists
  const existingListings = await sql`SELECT COUNT(*) as count FROM listings`
  if (Number(existingListings[0].count) > 0) {
    console.log('Database already seeded')
    return
  }

  // Seed listings
  await sql`
    INSERT INTO listings (name, type, location, price, rating, reviews_count, status, image) VALUES
    ('Best Western Cedars Hotel', 'Hotel', '1 Anzinger Court', '$260/night', 4.8, 28, 'Active', 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=300'),
    ('Bell by Greene King Inns', 'Hotel', '32923 Judy Hill', '$250/night', 4.4, 198, 'Active', 'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=300'),
    ('Peugeot 108', 'Car', '8953 Golf Course Terrace', '$124/day', 5.0, 126, 'Active', 'https://images.pexels.com/photos/381292/pexels-photo-381292.jpeg?auto=compress&cs=tinysrgb&w=300'),
    ('City Photography Tour', 'Experience', '620 Clove Park, Toronto', '$249/person', 3.2, 566, 'Pending', 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=300'),
    ('KONA Electric', 'Car', '2606 Straubel Crossing', '$382/day', 4.6, 217, 'Inactive', 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=300'),
    ('Grand Hyatt Tokyo', 'Hotel', 'Roppongi Hills, Tokyo', '$450/night', 4.9, 342, 'Active', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=300'),
    ('Tesla Model 3', 'Car', 'Downtown LA', '$180/day', 4.7, 89, 'Active', 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=300'),
    ('Wine Tasting Tour', 'Experience', 'Napa Valley, CA', '$199/person', 4.5, 234, 'Active', 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=300')
  `

  // Seed users
  await sql`
    INSERT INTO users (name, email, role, status, joined, bookings_count, avatar) VALUES
    ('John Smith', 'john@email.com', 'Admin', 'Active', '2024-01-15', 12, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'),
    ('Sarah Johnson', 'sarah@email.com', 'Host', 'Active', '2024-02-20', 45, 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'),
    ('Mike Wilson', 'mike@email.com', 'User', 'Active', '2024-03-10', 8, 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'),
    ('Emily Brown', 'emily@email.com', 'Host', 'Inactive', '2024-04-05', 23, 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'),
    ('David Lee', 'david@email.com', 'User', 'Suspended', '2024-05-18', 3, 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100')
  `

  // Seed bookings
  await sql`
    INSERT INTO bookings (id, guest_name, guest_email, listing_id, listing_name, listing_type, check_in, check_out, total, status) VALUES
    ('BK001', 'John Smith', 'john@email.com', 1, 'Best Western Cedars Hotel', 'Hotel', '2024-12-15', '2024-12-18', '$780', 'Confirmed'),
    ('BK002', 'Sarah Johnson', 'sarah@email.com', 3, 'Peugeot 108', 'Car', '2024-12-10', '2024-12-12', '$248', 'Completed'),
    ('BK003', 'Mike Wilson', 'mike@email.com', 4, 'City Photography Tour', 'Experience', '2024-12-20', '2024-12-20', '$249', 'Pending'),
    ('BK004', 'Emily Brown', 'emily@email.com', 2, 'Bell by Greene King Inns', 'Hotel', '2024-12-22', '2024-12-25', '$750', 'Confirmed'),
    ('BK005', 'David Lee', 'david@email.com', 5, 'KONA Electric', 'Car', '2024-12-08', '2024-12-09', '$382', 'Cancelled'),
    ('BK006', 'Anna White', 'anna@email.com', 6, 'Grand Hyatt Tokyo', 'Hotel', '2024-12-28', '2024-12-31', '$1350', 'Confirmed'),
    ('BK007', 'Tom Green', 'tom@email.com', 7, 'Tesla Model 3', 'Car', '2024-12-25', '2024-12-27', '$360', 'Pending')
  `

  // Seed reviews
  await sql`
    INSERT INTO reviews (user_id, user_name, user_avatar, listing_id, listing_name, rating, comment, status, created_at) VALUES
    (1, 'John Smith', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100', 1, 'Best Western Cedars Hotel', 5, 'Amazing stay! The staff was incredibly helpful and the room was spotless.', 'Published', '2024-12-10'),
    (2, 'Sarah Johnson', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100', 3, 'Peugeot 108', 4, 'Great car for city driving. Fuel efficient and easy to park.', 'Published', '2024-12-09'),
    (3, 'Mike Wilson', 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100', 4, 'City Photography Tour', 3, 'Good tour but a bit rushed. Would have liked more time at each location.', 'Pending', '2024-12-08'),
    (4, 'Emily Brown', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100', 2, 'Bell by Greene King Inns', 2, 'Room was not as advertised. Disappointed with the experience.', 'Flagged', '2024-12-07'),
    (5, 'David Lee', 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100', 5, 'KONA Electric', 5, 'Perfect electric car! Smooth ride and great range.', 'Published', '2024-12-06')
  `

  // Seed media
  await sql`
    INSERT INTO media (filename, original_name, url, type, mime_type, size, alt_text, folder) VALUES
    ('hotel-1.jpg', 'hotel-room.jpg', 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 45000, 'Hotel room interior', 'hotels'),
    ('hotel-2.jpg', 'hotel-lobby.jpg', 'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 52000, 'Hotel lobby', 'hotels'),
    ('car-1.jpg', 'peugeot-108.jpg', 'https://images.pexels.com/photos/381292/pexels-photo-381292.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 38000, 'Peugeot 108 exterior', 'cars'),
    ('experience-1.jpg', 'photography-tour.jpg', 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 61000, 'City photography tour', 'experiences'),
    ('car-2.jpg', 'kona-electric.jpg', 'https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 42000, 'Kona Electric car', 'cars'),
    ('hotel-3.jpg', 'grand-hyatt.jpg', 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 55000, 'Grand Hyatt Tokyo', 'hotels'),
    ('car-3.jpg', 'tesla-model3.jpg', 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 48000, 'Tesla Model 3', 'cars'),
    ('experience-2.jpg', 'wine-tasting.jpg', 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=300', 'image', 'image/jpeg', 39000, 'Wine tasting tour', 'experiences')
  `

  console.log('Database seeded successfully')
}
