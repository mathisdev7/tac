"use client";

const chatHistory = [
  {
    sender: "USER",
    message: "Hello, how can I improve my productivity?",
    timestamp: "10:00 AM",
  },
  {
    sender: "AI",
    message:
      "Hi! Here are a few tips to improve your productivity: 1. Set clear goals. 2. Prioritize tasks. 3. Take regular breaks.",
    timestamp: "10:01 AM",
  },
  {
    sender: "USER",
    message: "Thank you! Can you suggest some tools for task management?",
    timestamp: "10:02 AM",
  },
  {
    sender: "AI",
    message:
      "Sure! Here are some popular tools: 1. Trello 2. Asana 3. Todoist.",
    timestamp: "10:03 AM",
  },
];

export function AppChatBox() {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-xl">
      <div className="flex-1 p-4 overflow-y-auto">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex ${
              chat.sender === "USER" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`p-3 rounded-lg shadow ${
                chat.sender === "USER"
                  ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              <p>{chat.message}</p>
              <span className="block mt-1 text-xs text-gray-500">
                {chat.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-100 rounded-b-lg">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button className="w-full px-4 py-2 mt-2 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
          Send
        </button>
      </div>
    </div>
  );
}
