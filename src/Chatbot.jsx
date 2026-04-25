//   import { useState } from "react";
// import "./Chatbot.css";
// import { chatbotPrompt } from "./chatbotPrompt";
// function Chatbot()
// {
//     const [show,setShow]=useState(false);
//     const [messages, setMessages] = useState([
//     { text: "Hi 👋 I am your learning assistant!", sender: "bot" }
//   ]);

//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input === "") return;

//     const userMsg = { text: input, sender: "user" };
//     const botMsg = { text: getBotReply(input), sender: "bot" };

//     setMessages([...messages, userMsg, botMsg]);
//     setInput("");
//   };

//   const getBotReply = (message) => {
//     message = message.toLowerCase();

//     for (let key in chatbotPrompt) {
//       const { keywords, response } = chatbotPrompt[key];

//       if (keywords.some(word => message.includes(word))) {
//         return response;
//       }
//     }

//     return "Sorry 😔 I didn’t understand.";
//   };
//     return(
//         <>
//         <div className="assistant-btn-wrapper">
//         <button className="assistant-btn" onClick={()=>setShow(!show)}>Show Assitant</button>
//         </div>
//         {
//             show&&<div className="chatbot">
//       <div className="chat-header">📚 Tutor Chatbot</div>

//       <div className="chat-body">
//         {messages.map((msg, index) => (
//           <div key={index} className={msg.sender}>
//             {msg.text}
//           </div>
//         ))}
//       </div>

//       <div className="chat-input">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSend}>Send</button>

//       </div>
//     </div>
// }
//        </>
//     )
// };
// export default Chatbot;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Chatbot = () => {
//     const [message, setMessage] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);

//     const sendMessage = async () => {
//         if (!message) return;

//         // User ka message screen par dikhao
//         const newChat = [...chatHistory, { role: 'user', text: message }];
//         setChatHistory(newChat);
        
//         try {
//             // Flask Backend se baat karo
//             const response = await axios.post('http://127.0.0.1:5000/api/chat', { message });
            
//             // AI ka reply add karo
//             setChatHistory([...newChat, { role: 'ai', text: response.data.reply }]);
//             setMessage('');
//         } catch (error) {
//             console.error("Error connecting to AI:", error);
//         }
//     };

//     return (
//         <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '300px', border: '1px solid #ccc', backgroundColor: 'white', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
//             <h4 style={{ margin: '0 0 10px 0' }}>AI Assistant ✨</h4>
//             <div style={{ height: '200px', overflowY: 'auto', marginBottom: '10px', borderBottom: '1px solid #eee' }}>
//                 {chatHistory.map((chat, index) => (
//                     <p key={index} style={{ color: chat.role === 'user' ? 'blue' : 'green', fontSize: '14px' }}>
//                         <strong>{chat.role === 'user' ? 'You: ' : 'AI: '}</strong> {chat.text}
//                     </p>
//                 ))}
//             </div>
//             <input 
//                 type="text" 
//                 value={message} 
//                 onChange={(e) => setMessage(e.target.value)} 
//                 placeholder="Ask a doubt..."
//                 style={{ width: '80%', padding: '5px' }}
//             />
//             <button onClick={sendMessage} style={{ width: '18%' }}>Send</button>
//         </div>
//     );
// };

// export default Chatbot;

// import React, { useState } from 'react';

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I help you with your studies today?", sender: "ai" }
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     // Add user message to chat
//     const newMessages = [...messages, { text: input, sender: "user" }];
//     setMessages(newMessages);
//     setInput("");

//     // Simulate AI Response (Or call API here)
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { text: "That's an interesting question about E-learning! (Backend-free response)", sender: "ai" }
//       ]);
//     }, 1000);
//   };

//   return (
//     <div className="flex flex-col h-96 w-80 border rounded-lg shadow-lg bg-white">
//       {/* Chat Header */}
//       <div className="bg-blue-600 text-white p-3 rounded-t-lg font-bold text-center">
//         E-Learning Assistant
//       </div>

//       {/* Message Area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
//         {messages.map((msg, index) => (
//           <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//             <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
//               msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
//             }`}>
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Input Area */}
//       <div className="p-2 border-t flex gap-2">
//         <input
//           className="flex-1 border rounded-full px-3 py-1 outline-none text-sm"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//         />
//         <button 
//           onClick={handleSend}
//           className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;



import React, { useState } from 'react';
import './chatbot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you with your studies today?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  // --- YAHAN APNE QUESTIONS AUR ANSWERS ADD KAREIN ---
  const qaDatabase = {
    "course": "Hum Full-stack development aur Java ke advanced courses offer karte hain.",
    "fees": "Rural area ke students ke liye hamare saare courses free hain!",
    "offline": "Ji haan, aap content download karke offline bhi padh sakte hain.",
    "project": "E-learning Reinvented ka maksad har bache tak education pahunchana hai.",
    "help": "Aap mujhse courses, timing, ya technical support ke baare mein puch sakte hain.",
    "default": "Mujhe iska answer nahi pata, par aap 'course' ya 'fees' ke baare mein puch sakte hain!",
    "hi":"hlo how are you",
    "how u feel today":"i m very happy today"

  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input.toLowerCase();
    
    // Add user message to chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // AI Response Logic based on QA Database
    setTimeout(() => {
      let botResponse = qaDatabase["default"];

      // Check if user input contains any of our keywords
      Object.keys(qaDatabase).forEach((keyword) => {
        if (userText.includes(keyword)) {
          botResponse = qaDatabase[keyword];
        }
      });

      setMessages((prev) => [
        ...prev,
        { text: botResponse, sender: "ai" }
      ]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-96 w-80 border rounded-lg shadow-lg bg-white">
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-3 rounded-t-lg font-bold text-center">
        E-Learning Assistant
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
              msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-2 border-t flex gap-2">
        <input
          className="flex-1 border rounded-full px-3 py-1 outline-none text-sm"
          placeholder="Try typing 'fees'..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button 
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;