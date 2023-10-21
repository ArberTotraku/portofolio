
import React, { useState } from 'react';
import OpenAI from 'openai';

import sendMessage from '../utils/sendMessage.js'; 



function ChatComponent() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
  
    const handleUserInput = async () => {
      const response = await sendMessage(userInput);
      console.log('response',response);
      setChatHistory([...chatHistory, { message: userInput, type: 'user' }, { message: response, type: 'bot' }]);
      setUserInput('');
    };
  
    return (
      <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className='text-2xl text-black text-center'>Arber bot in interaction with ChatGPT</h1>
        <div className="h-64 overflow-y-auto">
          {chatHistory.map((chat, index) => (
            <div key={index} className={`mb-2 p-2 ${chat.type === 'user' ? 'bg-blue-100 text-black' : 'bg-red-700 text-black'} rounded-lg p-4 m-2`}>
              {chat.message}
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleUserInput()}
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 text-black"
          />
          <button
            onClick={handleUserInput}
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>      
    );
  }
  
  export default ChatComponent;
  

