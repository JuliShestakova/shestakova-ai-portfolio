'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

/**
 * NeuralChatUI Component (Showcase)
 * A visually stunning chat interface with mock AI responses.
 * Highlights: Framer Motion transitions, Glassmorphism, and Neural HUD aesthetics.
 */

interface NeuralChatUIProps {
  lang: 'en' | 'ru';
}

const CHAT_TRANSLATIONS = {
  en: {
    systemInit: "SYSTEM ONLINE. Neural Engine initialized. How can I assist you today?",
    aiResponse: "Neural analysis complete. Your request has been processed.",
    placeholder: "Type a command...",
    header: "Neural Assistant"
  },
  ru: {
    systemInit: "СИСТЕМА ОНЛАЙН. Нейронный движок запущен. Чем я могу вам помочь?",
    aiResponse: "Нейронный анализ завершен. Ваш запрос обработан.",
    placeholder: "Введите команду...",
    header: "Нейро-Ассистент"
  }
};

export default function NeuralChatUI({ lang }: NeuralChatUIProps) {
  const ct = CHAT_TRANSLATIONS[lang];
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: ct.systemInit }
  ]);

  // Update initial message when language changes
  useEffect(() => {
    setMessages([{ id: Date.now(), role: 'assistant', content: ct.systemInit }]);
  }, [lang, ct.systemInit]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMsg = { id: Date.now(), role: 'user', content: inputValue };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI Response after a delay
    setTimeout(() => {
      const aiResponse = { 
        id: Date.now() + 1, 
        role: 'assistant', 
        content: ct.aiResponse 
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-sm min-h-[420px] flex flex-col glass-card rounded-2xl overflow-hidden relative shadow-xl">
      {/* Header */}
      <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">{ct.header}</h3>
        </div>
        <span className="text-[8px] font-mono text-white/20 uppercase">v4.0.0</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[90%] p-4 rounded-xl text-[11px] leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-blue-600/10 border border-blue-500/20 text-blue-100 rounded-tr-none' 
                : 'bg-white/5 border border-white/10 text-white/80 rounded-tl-none font-medium'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-1.5 px-2">
            <div className="w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce" />
            <div className="w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce [animation-delay:0.4s]" />
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="p-5 bg-white/[0.02] border-t border-white/5">
        <div className="relative flex items-center gap-3">
          <input 
            type="text" 
            placeholder={ct.placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="w-full bg-black/20 border border-white/10 rounded-lg py-2.5 px-4 text-[11px] focus:outline-none focus:border-white/30 transition-all placeholder:text-white/10"
          />
          <button 
            onClick={handleSend}
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
          >
            <Send size={14} className="text-white/50" />
          </button>
        </div>
      </div>
    </div>
  );
}
