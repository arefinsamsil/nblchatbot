// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'NBL Chatbot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#08aa6a',
    },
    chatButton: {
      backgroundColor: '#024731',
    },
  },
};

export default config;