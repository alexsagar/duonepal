const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME, // your gmail
    pass: process.env.EMAIL_PASSWORD, // your app password (not your main Gmail password!)
  },
});

const sendBookingEmail = async ({ to, subject, text, html, attachmentUrl }) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to,
    subject,
    text,
    html,
    attachments: attachmentUrl
      ? [{ filename: 'receipt.jpg', path: attachmentUrl }]
      : [],
  };
  return transporter.sendMail(mailOptions);
};

module.exports = sendBookingEmail;
