// lib/otpStore.js
// In-memory OTP store shared across API routes.
// Survives Next.js hot-reload via global._otpMap.
// ⚠️  Replace with Redis (Upstash) for multi-instance production.

if (!global._otpMap) global._otpMap = new Map();
const store = global._otpMap;

const OTP_TTL_MS          = 10 * 60 * 1000; // 10 min expiry
const COOLDOWN_MS         = 60 * 1000;       // 60 s between resends
export const MAX_ATTEMPTS = 5;

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function saveOTP(email, otp) {
  store.set(email.toLowerCase(), {
    otp,
    expiresAt: Date.now() + OTP_TTL_MS,
    sentAt:    Date.now(),
    attempts:  0,
  });
}

export function getRecord(email)    { return store.get(email.toLowerCase()) ?? null; }
export function deleteRecord(email) { store.delete(email.toLowerCase()); }

export function isOnCooldown(email) {
  const r = store.get(email.toLowerCase());
  return r ? Date.now() - r.sentAt < COOLDOWN_MS : false;
}

export function cooldownLeft(email) {
  const r = store.get(email.toLowerCase());
  return r ? Math.ceil((COOLDOWN_MS - (Date.now() - r.sentAt)) / 1000) : 0;
}