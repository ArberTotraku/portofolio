
import React, { useState } from 'react';
import openai from 'openai';
import sendMessage from '../utils/sendMessage.js'; 

openai.apiKey = 'sk-f3XkkGkymb72413e6e12T3BlbkFJRImnpuNrIvpKxST6'


function ChatComponent() {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
  
    const handleUserInput = async () => {
      const response = await sendMessage(userInput);
      setChatHistory([...chatHistory, { message: userInput, type: 'user' }, { message: response, type: 'bot' }]);
      setUserInput('');
    };
  
    return (
      <div className="bg-gray-100 p-4 rounded-lg">
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
  

