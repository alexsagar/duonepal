const cloudinary = require('../utils/cloudinary');
const sendBookingEmail = require('../utils/email');
const sendTelegramNotification = require('../utils/telegram');

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

exports.bookTest = async (req, res) => {
  try {
    const { name, email, phone, date, message, tier, price } = req.body;
    let receiptUrl = null;
    const trimmedName = (name || '').trim();
    const trimmedEmail = (email || '').trim();
    const trimmedPhone = (phone || '').trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, '');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      return res.status(400).json({ success: false, message: 'Name, email and phone are required' });
    }

    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({ success: false, message: 'Invalid email address' });
    }

    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return res.status(400).json({ success: false, message: 'Invalid phone number' });
    }

    // Defensive: require receipt file
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Receipt is required' });
    }

    // Upload file if present
    if (req.file) {
      // NOTE: Multer is configured with memoryStorage; we receive buffer
      // TODO: validate mime/size (defense in depth)
      // TODO: Alternatively, forward to Telegram sendDocument using the buffer

      // Upload buffer to Cloudinary
      const uploadFromBuffer = () => new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'duolingo_receipts', resource_type: 'auto' },
          (error, result) => {
            if (error) return reject(error);
            return resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      const result = await uploadFromBuffer();
      receiptUrl = result.secure_url;
      if (!receiptUrl) {
        throw new Error('Receipt upload did not return a URL');
      }
    }

    // Prepare details
    const bookingDetails = `
      <b>Duolingo Booking</b>\n
      <b>Name:</b> ${escapeHtml(trimmedName)}\n
      <b>Email:</b> ${escapeHtml(trimmedEmail)}\n
      <b>Phone:</b> ${escapeHtml(trimmedPhone)}\n
      <b>Date:</b> ${escapeHtml((date || '-').trim())}\n
      <b>Package:</b> ${escapeHtml((tier || 'standard').trim())} (Nrs ${escapeHtml((price || '-').toString().trim())})\n
      <b>Message:</b> ${escapeHtml((message || '-').trim())}\n
    `;

    // Send Telegram
    await sendTelegramNotification(bookingDetails, receiptUrl);

    // Send Email
    await sendBookingEmail({
      to: process.env.NOTIFY_EMAIL,
      subject: 'New Duolingo Test Booking',
      text: bookingDetails.replace(/<[^>]+>/g, ''), // plain text
      html: bookingDetails + (receiptUrl ? `<br><a href="${receiptUrl}">View Receipt</a>` : ''),
      attachmentUrl: receiptUrl,
    });

    res.json({ success: true, message: 'Payment Received! You will be contacted via Whatsapp shortly' });
  } catch (err) {
    console.error('Booking flow failed:', err?.message || err);
    res.status(500).json({
      success: false,
      message: 'Booking failed while sending notification. Please try again.',
    });
  }
};
