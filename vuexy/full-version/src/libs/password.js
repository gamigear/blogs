// Password hashing utilities using Web Crypto API (no external dependencies)

const ITERATIONS = 100000
const KEY_LENGTH = 64
const ALGORITHM = 'PBKDF2'

/**
 * Hash a password using PBKDF2
 * @param {string} password - Plain text password
 * @returns {Promise<string>} - Hashed password with salt
 */
export async function hashPassword(password) {
  const encoder = new TextEncoder()
  const salt = crypto.getRandomValues(new Uint8Array(16))
  
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    ALGORITHM,
    false,
    ['deriveBits']
  )
  
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: ALGORITHM,
      salt: salt,
      iterations: ITERATIONS,
      hash: 'SHA-512'
    },
    keyMaterial,
    KEY_LENGTH * 8
  )
  
  const hashArray = new Uint8Array(derivedBits)
  const saltHex = Array.from(salt).map(b => b.toString(16).padStart(2, '0')).join('')
  const hashHex = Array.from(hashArray).map(b => b.toString(16).padStart(2, '0')).join('')
  
  return `${saltHex}:${hashHex}`
}

/**
 * Verify a password against a hash
 * @param {string} password - Plain text password
 * @param {string} storedHash - Stored hash with salt
 * @returns {Promise<boolean>} - True if password matches
 */
export async function verifyPassword(password, storedHash) {
  if (!storedHash || !storedHash.includes(':')) {
    return false
  }
  
  const [saltHex, hashHex] = storedHash.split(':')
  const salt = new Uint8Array(saltHex.match(/.{2}/g).map(byte => parseInt(byte, 16)))
  
  const encoder = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    ALGORITHM,
    false,
    ['deriveBits']
  )
  
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: ALGORITHM,
      salt: salt,
      iterations: ITERATIONS,
      hash: 'SHA-512'
    },
    keyMaterial,
    KEY_LENGTH * 8
  )
  
  const hashArray = new Uint8Array(derivedBits)
  const computedHashHex = Array.from(hashArray).map(b => b.toString(16).padStart(2, '0')).join('')
  
  return computedHashHex === hashHex
}

/**
 * Generate a secure random token
 * @param {number} length - Token length in bytes
 * @returns {string} - Hex encoded token
 */
export function generateToken(length = 32) {
  const bytes = crypto.getRandomValues(new Uint8Array(length))
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')
}
