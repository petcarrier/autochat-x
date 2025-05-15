import React, { useState } from 'react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const App: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const sendMessage = () => {
        if (!newMessage.trim()) return;

        setMessages(prev => [...prev, {
            role: 'user',
            content: newMessage
        }]);

        // TODO: Implement AI response logic here
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'This is a sample response. AI integration coming soon!'
            }]);
        }, 1000);

        setNewMessage('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <div className="p-4 border-b bg-white">
                <h1 className="text-xl font-semibold text-gray-800">AI Chat</h1>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-white border text-gray-800'
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                    <input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyUp={handleKeyPress}
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={sendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App; 