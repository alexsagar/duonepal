const axios = require('axios');

const sendTelegramNotification = async (message, fileUrl) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Send message text
  await axios.post(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }
  );

  // Send file if provided
  if (fileUrl) {
    await axios.post(
      `https://api.telegram.org/bot${token}/sendDocument`,
      {
        chat_id: chatId,
        document: fileUrl,
        caption: "Booking payment receipt"
      }
    );
  }
};

module.exports = sendTelegramNotification;
