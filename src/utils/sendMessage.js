import OpenAI from 'openai';
import dotenv from "dotenv"
dotenv.config()

const openai = new OpenAI({ key: process.env.OPEN_AI_KEY });

async function sendMessage(userInput) {
  try {
    const response = await openai.completions.create({
      engine: 'davinci',
      prompt: userInput,
      max_tokens: 150,
    });

    if (response.choices && response.choices[0] && response.choices[0].text) {
      const chatResponse = response.choices[0].text;
      console.log('Chat Response:', chatResponse);
      return chatResponse;
    } else {
      console.error('Invalid API Response:', response);
      return 'Error: Invalid response';
    }
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Error: API request failed - ' + error.message;
  }
}

export default sendMessage;
