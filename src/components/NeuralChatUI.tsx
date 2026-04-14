'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, MessageSquare, Zap, ChevronDown } from 'lucide-react';

/**
 * Enhanced NeuralChatUI
 * Features: AI Assistant vs P2P Messenger toggle, Model Selector, and professional RU/EN support.
 */

interface NeuralChatUIProps {
  lang: 'en' | 'ru';
}

type ChatMode = 'ai' | 'messenger';
type ModelType = 'GigaChat Pro' | 'GPT-4o' | 'YandexGPT 3';

const CHAT_TRANSLATIONS = {
  en: {
    systemInit: "Neural Engine initialized. Current model: ",
    aiResponse: "Analysis complete. I've optimized the neural path for your request.",
    messengerInit: "Encrypted connection established with Aleksei.",
    placeholder: "Type a command...",
    headerAi: "AI Assistant",
    headerMsg: "Messenger",
    active: "Active Node"
  },
  ru: {
    systemInit: "Нейронный движок запущен. Текущая модель: ",
    aiResponse: "Анализ завершен. Нейронный путь оптимизирован под ваш запрос.",
    messengerInit: "Зашифрованное соединение с Алексеем установлено.",
    placeholder: "Введите команду...",
    headerAi: "AI Ассистент",
    headerMsg: "Мессенджер",
    active: "Активный узел"
  }
};

export default function NeuralChatUI({ lang }: NeuralChatUIProps) {
  const ct = CHAT_TRANSLATIONS[lang];
  const [mode, setMode] = useState<ChatMode>('ai');
  const [model, setModel] = useState<ModelType>('GPT-4o');
  const [showModelList, setShowModelList] = useState(false);

  const [aiMessages, setAiMessages] = useState([
    { id: 1, role: 'assistant', content: `${ct.systemInit} ${model}` }
  ]);

  const [msgMessages, setMsgMessages] = useState([
    { id: 1, role: 'assistant', content: ct.messengerInit, user: 'Aleksei' },
    { id: 2, role: 'user', content: lang === 'en' ? "Architecture doc updated." : "Документация по архитектуре обновлена." }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Sync initial message when model or lang changes
  useEffect(() => {
    if (mode === 'ai') {
      setAiMessages([{ id: Date.now(), role: 'assistant', content: `${ct.systemInit} ${model}` }]);
    }
  }, [lang, model, mode, ct.systemInit]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMsg = { id: Date.now(), role: 'user', content: inputValue };
    
    if (mode === 'ai') {
      setAiMessages(prev => [...prev, newUserMsg]);
      setIsTyping(true);
      setTimeout(() => {
        setAiMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: ct.aiResponse }]);
        setIsTyping(false);
      }, 1000);
    } else {
      setMsgMessages(prev => [...prev, newUserMsg]);
    }
    
    setInputValue('');
  };

  const models: ModelType[] = ['GigaChat Pro', 'GPT-4o', 'YandexGPT 3'];

  return (
    <div className="w-full max-w-sm min-h-[480px] flex flex-col glass-card rounded-2xl overflow-hidden relative shadow-2xl border border-white/5">
      
      {/* Mode & Model Selector Header */}
      <div className="bg-white/[0.03] border-b border-white/10 p-2">
        <div className="flex bg-black/40 rounded-lg p-1 gap-1">
          <button 
            onClick={() => setMode('ai')}
            className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-md text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'ai' ? 'bg-white/10 text-cyan-400 shadow-sm' : 'text-white/30 hover:text-white/60'}`}
          >
            <Bot size={12} /> {ct.headerAi}
          </button>
          <button 
            onClick={() => setMode('messenger')}
            className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-md text-[9px] font-black uppercase tracking-widest transition-all ${mode === 'messenger' ? 'bg-white/10 text-cyan-400 shadow-sm' : 'text-white/30 hover:text-white/60'}`}
          >
            <MessageSquare size={12} /> {ct.headerMsg}
          </button>
        </div>
      </div>

      {/* Sub-Header: Connection Status / Model Selector */}
      <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between text-[8px] font-mono tracking-widest uppercase text-white/40">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          {ct.active}
        </div>
        
        {mode === 'ai' ? (
          <div className="relative">
            <button 
              onClick={() => setShowModelList(!showModelList)}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              {model} <ChevronDown size={10} />
            </button>
            <AnimatePresence>
              {showModelList && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 top-full mt-2 w-32 bg-[#0c0c0e] border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  {models.map(m => (
                    <button 
                      key={m} 
                      onClick={() => { setModel(m); setShowModelList(false); }}
                      className={`w-full text-left px-3 py-2 hover:bg-white/5 transition-colors ${model === m ? 'text-cyan-400' : ''}`}
                    >
                      {m}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <span className="text-white/20">Secured P2P Node</span>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {(mode === 'ai' ? aiMessages : msgMessages).map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-blue-600/20 text-blue-400' : 'bg-white/5 text-white/40'
                }`}>
                  {mode === 'ai' ? (
                    msg.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-cyan-400" />
                  ) : (
                    <span className="text-[10px] font-black">{msg.role === 'user' ? 'JS' : 'AL'}</span>
                  )}
                </div>
                
                {/* Bubble */}
                <div className={`max-w-[80%] p-3 rounded-xl text-[10px] leading-relaxed border ${
                  msg.role === 'user' 
                  ? 'bg-blue-600/5 border-blue-500/20 text-blue-100 rounded-tr-none' 
                  : 'bg-white/[0.02] border-white/10 text-white/70 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {isTyping && (
          <div className="flex gap-1 px-10">
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
            <div className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>

      {/* Input Pad */}
      <div className="p-4 bg-white/[0.01] border-t border-white/5">
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder={ct.placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-black/30 border border-white/5 rounded-lg py-2 px-3 text-[10px] focus:outline-none focus:border-cyan-500/30 transition-all placeholder:text-white/5"
          />
          <button 
            onClick={handleSend}
            className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center hover:bg-cyan-500/20 transition-all group"
          >
            <Send size={12} className="text-cyan-400 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
