const cloudinary = require('../utils/cloudinary');
const sendBookingEmail = require('../utils/email');
const sendTelegramNotification = require('../utils/telegram');

exports.bookTest = async (req, res) => {
  try {
    const { name, email, phone, date, message } = req.body;
    let receiptUrl = null;

    // Upload file if present
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: 'duolingo_receipts',
      });
      receiptUrl = result.secure_url;
    }

    // Prepare details
    const bookingDetails = `
      <b>Duolingo Booking</b>\n
      <b>Name:</b> ${name}\n
      <b>Email:</b> ${email}\n
      <b>Phone:</b> ${phone}\n
      <b>Date:</b> ${date}\n
      <b>Message:</b> ${message || "-"}\n
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

    res.json({ success: true, message: 'Booking received! You will be contacted soon.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Booking failed. Try again.' });
  }
};
