require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bookingRoutes = require('./routes/bookingRoutes');
const rateLimit = require('express-rate-limit');

const app = express();
app.disable('x-powered-by');

// Trust reverse proxy (Hostinger/NGINX)
app.set('trust proxy', 1);

// Optional: warn if critical env vars are missing (match utils/* usage)
;[
  'NOTIFY_EMAIL',
  'TELEGRAM_BOT_TOKEN',
  'TELEGRAM_CHAT_ID',
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
  'EMAIL_USERNAME',
  'EMAIL_PASSWORD',
].forEach((k) => {
  if (!process.env[k]) console.warn(`Missing env ${k}`);
});

// CORS: allow production domain and local dev
const allowedOrigins = [
  'https://duonepal.com',
  'http://duonepal.com',
  'https://www.duonepal.com',
  'http://www.duonepal.com',
  process.env.FRONTEND_ORIGIN,
  'http://localhost:5173',
  'http://localhost:5174',
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    const isLocalhostDevOrigin = /^http:\/\/localhost:\d+$/.test(origin || '');
    if (!origin || allowedOrigins.includes(origin) || isLocalhostDevOrigin) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

// Privacy-focused response headers for API responses
app.use('/api', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Referrer-Policy', 'no-referrer');
  next();
});


// Conservative limits for non-multipart endpoints
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Basic rate limiting for booking endpoints
const bookLimiter = rateLimit({ windowMs: 60_000, max: 10 });
app.use('/api/book', bookLimiter);
app.use('/api/send-telegram', bookLimiter);

app.use('/api', bookingRoutes);

// Simple health check for uptime monitors / Hostinger panel
app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Friendly error handling
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'Uploaded file too large (max 10 MB)' });
    }
    return res.status(400).json({ error: `Upload error: ${err.code}` });
  }
  if (err && err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Request body too large' });
  }
  return res.status(500).json({ error: 'Server error' });
});
