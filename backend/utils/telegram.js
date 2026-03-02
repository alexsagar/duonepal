const axios = require('axios');

const TELEGRAM_API_BASE = 'https://api.telegram.org';
const DEFAULT_TIMEOUT_MS = 15000;
const MAX_RETRIES = 2;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const callTelegram = async (token, method, payload) => {
  const url = `${TELEGRAM_API_BASE}/bot${token}/${method}`;
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const response = await axios.post(url, payload, { timeout: DEFAULT_TIMEOUT_MS });
      if (!response?.data?.ok) {
        throw new Error(response?.data?.description || `Telegram API error on ${method}`);
      }
      return response.data;
    } catch (error) {
      lastError = error;
      if (attempt < MAX_RETRIES) {
        await sleep(400 * (attempt + 1));
      }
    }
  }

  throw lastError;
};

const sendTelegramNotification = async (message, fileUrl) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    throw new Error('Telegram bot token or chat ID is missing');
  }

  // Send message text
  await callTelegram(token, 'sendMessage', {
    chat_id: chatId,
    text: message,
    parse_mode: 'HTML',
  });

  // Send file if provided
  if (fileUrl) {
    await callTelegram(token, 'sendDocument', {
      chat_id: chatId,
      document: fileUrl,
      caption: 'Booking payment receipt',
    });
  }
};

module.exports = sendTelegramNotification;
