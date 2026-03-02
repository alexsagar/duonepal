const sendTelegramNotification = require('../utils/telegram');
const sendBookingEmail = require('../utils/email');

const allowedTypes = new Set([
  'subscription',
  'contact',
  'partner',
  'bulk_booking',
  'refer',
]);

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isValidEmail = (value = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const toLine = (label, value) => `<b>${label}:</b> ${escapeHtml((value || '-').toString().trim() || '-')}`;

const validatePayload = (type, payload) => {
  const errors = [];
  const { email, name, phone, subject, message, consultancy, volume, quantity, identifier } = payload || {};

  if (type === 'subscription') {
    if (!email || !isValidEmail(email)) errors.push('Valid email is required');
  }

  if (type === 'contact') {
    if (!name || !String(name).trim()) errors.push('Name is required');
    if (!email || !isValidEmail(email)) errors.push('Valid email is required');
    if (!subject || !String(subject).trim()) errors.push('Subject is required');
    if (!message || !String(message).trim()) errors.push('Message is required');
  }

  if (type === 'partner') {
    if (!name || !String(name).trim()) errors.push('Name is required');
    if (!consultancy || !String(consultancy).trim()) errors.push('Consultancy is required');
    if (!email || !isValidEmail(email)) errors.push('Valid email is required');
    if (!phone || !String(phone).trim()) errors.push('Phone is required');
  }

  if (type === 'bulk_booking') {
    if (!name || !String(name).trim()) errors.push('Name is required');
    if (!consultancy || !String(consultancy).trim()) errors.push('Organization is required');
    if (!email || !isValidEmail(email)) errors.push('Valid email is required');
    if (!phone || !String(phone).trim()) errors.push('Phone is required');
    if (!quantity || Number(quantity) < 10) errors.push('Minimum quantity is 10');
  }

  if (type === 'refer') {
    if (!identifier || !String(identifier).trim()) errors.push('Identifier is required');
  }

  return errors;
};

const buildInquiryMessage = (type, payload = {}) => {
  const base = [`<b>Website Inquiry</b>`, toLine('Type', type)];

  if (type === 'subscription') {
    base.push(toLine('Email', payload.email));
  }

  if (type === 'contact') {
    base.push(toLine('Name', payload.name));
    base.push(toLine('Email', payload.email));
    base.push(toLine('Subject', payload.subject));
    base.push(toLine('Message', payload.message));
  }

  if (type === 'partner') {
    base.push(toLine('Name', payload.name));
    base.push(toLine('Consultancy', payload.consultancy));
    base.push(toLine('Email', payload.email));
    base.push(toLine('Phone', payload.phone));
    base.push(toLine('Volume', payload.volume || '-'));
    base.push(toLine('Message', payload.message || '-'));
  }

  if (type === 'bulk_booking') {
    base.push(toLine('Name', payload.name));
    base.push(toLine('Organization', payload.consultancy));
    base.push(toLine('Email', payload.email));
    base.push(toLine('Phone', payload.phone));
    base.push(toLine('Quantity', payload.quantity));
  }

  if (type === 'refer') {
    base.push(toLine('Identifier', payload.identifier));
    base.push(toLine('Generated Link', payload.generatedLink || '-'));
  }

  return `${base.join('\n')}\n`;
};

exports.submitInquiry = async (req, res) => {
  try {
    const { type, payload } = req.body || {};
    if (!allowedTypes.has(type)) {
      return res.status(400).json({ success: false, message: 'Invalid inquiry type' });
    }

    const errors = validatePayload(type, payload);
    if (errors.length) {
      return res.status(400).json({ success: false, message: errors[0] });
    }

    const telegramMessage = buildInquiryMessage(type, payload);
    await sendTelegramNotification(telegramMessage, null);

    try {
      await sendBookingEmail({
        to: process.env.NOTIFY_EMAIL,
        subject: `Website Inquiry: ${type}`,
        text: telegramMessage.replace(/<[^>]+>/g, ''),
        html: telegramMessage.replace(/\n/g, '<br>'),
      });
    } catch (emailError) {
      console.error('Inquiry email failed:', emailError?.message || emailError);
    }

    return res.json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Inquiry submit failed:', error?.message || error);
    return res.status(500).json({ success: false, message: 'Failed to submit inquiry' });
  }
};
