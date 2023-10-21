import openai from "openai";

async function sendMessage(input) {
    try {
      const response = await openai.Completion.create({
        engine: 'davinci',
        prompt: input,
        max_tokens: 150,
      });
  
      const message = response.choices[0].text;
      return message;
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  export default sendMessage;