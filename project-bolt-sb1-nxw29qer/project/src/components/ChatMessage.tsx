import React from 'react';
import { Message } from '../types';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
  onFollowUpClick?: (question: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, onFollowUpClick }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'} mb-4`}>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
        isBot ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600'
      }`}>
        {isBot ? <Bot size={24} /> : <User size={24} />}
      </div>
      <div className={`max-w-[80%] rounded-lg p-4 ${
        isBot ? 'bg-white shadow-sm border border-gray-100' : 'bg-blue-600 text-white'
      }`}>
        <p className="whitespace-pre-line text-[15px] leading-relaxed">{message.text}</p>
        {isBot && message.followUpQuestions && message.followUpQuestions.length > 0 && (
          <div className="mt-4 space-y-2">
            {message.followUpQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => onFollowUpClick?.(question)}
                className="block w-full text-left px-3 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        )}
        <span className={`text-xs ${isBot ? 'text-gray-400' : 'text-blue-100'} mt-2 block`}>
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};