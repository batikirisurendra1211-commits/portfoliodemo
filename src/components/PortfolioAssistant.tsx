import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const PortfolioAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    {
      sender: 'bot',
      text: `Hello! I'm Surendra's portfolio assistant. Ask me anything about his Python & FastAPI stack, his live silk sarees e-commerce store, or his deep learning models!`
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  const quickChips = [
    'Tell me about the live Silk Sarees project',
    'What is the AFFN deep learning model?',
    'What is Surendra’s tech stack?',
    'Is Surendra open to full-time roles?'
  ];

  const handleSend = (textToSend?: string) => {
    const q = (textToSend || inputVal).trim();
    if (!q) return;

    const newMsgs = [...messages, { sender: 'user' as const, text: q }];
    setMessages(newMsgs);
    setInputVal('');

    setTimeout(() => {
      const lower = q.toLowerCase();
      let reply = "";

      if (lower.includes('saree') || lower.includes('live') || lower.includes('e-commerce') || lower.includes('store')) {
        reply = "Surendra independently designed, built, and deployed Sri Someshwara Silk Sarees (live at sssilksarees.vercel.app). Built with Python, FastAPI, and PostgreSQL with responsive UI.";
      } else if (lower.includes('affn') || lower.includes('deep learning') || lower.includes('transit') || lower.includes('passenger')) {
        reply = "The Adaptive Feature Fusion Network (AFFN) is a deep learning model predicting metro passenger flow by combining spatial network topology and temporal rush sequences with adaptive attention gating.";
      } else if (lower.includes('stack') || lower.includes('skill') || lower.includes('technolog')) {
        reply = "Surendra's primary stack is Python, FastAPI, PostgreSQL, REST API Architecture, and Machine Learning / Deep Learning, with foundational knowledge in Core Java (6-Month Full Stack Bootcamp), SQL, Git, Linux, and Vercel.";
      } else if (lower.includes('hire') || lower.includes('availab') || lower.includes('role') || lower.includes('job')) {
        reply = "Yes! Surendra is actively open to Full Stack, Backend Developer, and AI/ML Engineer opportunities. He is based in Hyderabad, India, and open to remote and on-site positions.";
      } else {
        reply = `Surendra is a Computer Science graduate from Hyderabad with production FastAPI experience and deep learning research builds. You can contact him at ${PERSONAL_INFO.email} or call ${PERSONAL_INFO.phone}!`;
      }

      setMessages([...newMsgs, { sender: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Floating Toggle Button - Elevated so it never overlaps the bottom-right hero accents */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 sm:bottom-24 right-4 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-[#111111] text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 border border-white/20 cursor-pointer"
        aria-label="Open portfolio AI assistant"
      >
        <Bot size={18} className="text-[#C87A3E]" />
        <span className="text-[11px] font-mono font-bold hidden sm:inline-block pr-1">ASK AI</span>
      </button>

      {/* Assistant Modal Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-4 left-4 sm:left-auto sm:right-6 z-50 max-w-sm sm:w-96 bg-white border border-black/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[460px] sm:h-[480px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-[#ECEAE5] px-4 py-3 border-b border-black/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-[#C87A3E] rounded-lg text-white shadow-sm">
                <Bot size={16} />
              </span>
              <div>
                <p className="text-xs font-bold text-[#111111] font-hn">Portfolio AI Assistant</p>
                <p className="text-[10px] font-mono text-[#C87A3E] font-semibold">Resume Knowledge Base</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#666666] hover:text-[#111111] cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-white">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#C87A3E] text-white font-medium rounded-br-none shadow-sm'
                      : 'bg-[#ECEAE5] border border-black/5 text-[#222222] rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chips */}
          <div className="p-2 border-t border-black/10 bg-[#ECEAE5] flex gap-1.5 overflow-x-auto text-[10px] font-mono">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1 rounded-full bg-white border border-black/10 text-[#333333] hover:border-[#C87A3E] hover:text-[#C87A3E] whitespace-nowrap transition-all shadow-sm cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-black/10 flex gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about Surendra..."
              className="flex-1 bg-[#F5F3EF] border border-black/10 rounded-xl px-3 py-2 text-xs text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#C87A3E] focus:bg-white"
            />
            <button
              type="submit"
              className="p-2 bg-[#111111] text-white rounded-xl hover:bg-[#C87A3E] transition-colors cursor-pointer"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
