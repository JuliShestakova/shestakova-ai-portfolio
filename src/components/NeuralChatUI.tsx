'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

/**
 * NeuralChatUI (Interactive HUD Edition)
 * A sleek, high-transparancy glass widget for AI consultation.
 * Now supports real-time typing and simulated AI responses.
 */

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface NeuralChatUIProps {
  lang: 'en' | 'ru';
}

const INITIAL_MESSAGES: Record<'en' | 'ru', Message[]> = {
  en: [
    { role: 'assistant', content: 'Hello! I am your AI architect. How can I assist you today?' }
  ],
  ru: [
    { role: 'assistant', content: 'Здравствуйте! Я ваш AI-архитектор. Чем я могу вам помочь сегодня?' }
  ]
};

const RESPONSES: Record<'en' | 'ru', string[]> = {
  en: [
    "Analyzing your request... System optimization is recommended.",
    "The neural infrastructure is stable. Proceeding with deployment architecture.",
    "Based on current trends, I suggest implementing a multi-modal orchestration layer.",
    "Query processed. The 'Neural HUD' aesthetic ensures maximum data clarity."
  ],
  ru: [
    "Анализирую ваш запрос... Рекомендуется оптимизация системных процессов.",
    "Нейронная инфраструктура стабильна. Перехожу к проектированию архитектуры развертывания.",
    "Основываясь на текущих трендах, я предлагаю внедрить слой мультимодальной оркестрации.",
    "Запрос обработан. Эстетика 'Neural HUD' обеспечивает максимальную четкость данных."
  ]
};

export default function NeuralChatUI({ lang }: NeuralChatUIProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES[lang]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const possibleResponses = RESPONSES[lang];
      const randomResponse = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
      const assistantMessage: Message = { role: 'assistant', content: randomResponse };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const expertInitials = lang === 'en' ? 'AI' : 'ИИ';
  const userInitials = lang === 'en' ? 'User' : 'Вы';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-[360px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-2xl flex flex-col h-[400px] shadow-2xl relative overflow-hidden group"
    >
      {/* HUD Header */}
      <header className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
            AI_CONSULTATION <span className="text-cyan-500/50">[ACTIVE]</span>
          </h3>
          <p className="text-[8px] text-white/30 uppercase tracking-widest mt-1">Neural HUD v2.1</p>
        </div>
        <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        </div>
      </header>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide text-[11px]"
      >
        <AnimatePresence mode="popLayout">
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">
                [{msg.role === 'user' ? userInitials : expertInitials}]
              </span>
              <div className={`max-w-[85%] p-3 rounded-xl font-medium leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-cyan-500/10 text-cyan-100 border border-cyan-500/20' 
                : 'bg-white/5 text-white/80 border border-white/10'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <div className="flex gap-1.5 pt-1">
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-cyan-500 rounded-full" />
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 h-1 bg-cyan-500 rounded-full" />
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 h-1 bg-cyan-500 rounded-full" />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/5 bg-black/20">
        <div className="relative flex items-center">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={lang === 'en' ? "Query architectural model..." : "Запрос к архитектурной модели..."}
            className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2.5 px-4 pr-12 text-[11px] text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50 transition-all font-medium"
          />
          <button 
            onClick={handleSend}
            className="absolute right-2 p-1.5 text-cyan-500 hover:text-cyan-400 transition-colors"
          >
            <Send size={14} />
          </button>
        </div>
      </div>

      {/* Glassy Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
    </motion.div>
  );
}
