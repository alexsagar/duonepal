const express = require('express');
const router = express.Router();
const multer = require('multer');
const sendTelegramNotification = require('../utils/telegram')
const bookingController = require('../controllers/bookingController');
const inquiryController = require('../controllers/inquiryController');

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Multer memory storage with 10 MB cap and file type filter (images/PDF)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /^(image\/(png|jpeg|jpg|webp|gif)|application\/pdf)$/.test(file.mimetype);
    if (allowed) return cb(null, true);
    return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'));
  },
});

router.post('/send-telegram', async (req, res) => {
  try {
    const { name, email, phone, reason } = req.body;
    const message = `
<b>Incomplete Booking Attempt</b>
<b>Name:</b> ${escapeHtml((name || '-').trim())}
<b>Email:</b> ${escapeHtml((email || '-').trim())}
<b>Phone:</b> ${escapeHtml((phone || '-').trim())}
<b>Reason:</b> ${escapeHtml((reason || '-').trim())}
    `;
    await sendTelegramNotification(message, null);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

// Receipt upload (multipart)
router.post('/book', upload.single('receipt'), bookingController.bookTest);
router.post('/inquiries', inquiryController.submitInquiry);


module.exports = router;
