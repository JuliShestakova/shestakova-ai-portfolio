'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, MessageSquare, Zap, ChevronDown } from 'lucide-react';

/**
 * Clean NeuralChatUI (STRICT MINIMALIST)
 * Restored a subtle 'Form' container for better organization.
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
    <div className="w-full max-w-sm min-h-[500px] flex flex-col relative bg-white/[0.02] border border-white/5 rounded-3xl p-6 shadow-2xl backdrop-blur-sm">
      
      {/* Tab Switcher */}
      <div className="mb-6">
        <div className="flex bg-black/20 rounded-xl p-1 gap-1 border border-white/5">
          <button 
            onClick={() => setMode('ai')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'ai' ? 'bg-white/10 text-cyan-400 shadow-lg' : 'text-white/30'}`}
          >
            <Bot size={14} /> {ct.headerAi}
          </button>
          <button 
            onClick={() => setMode('messenger')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'messenger' ? 'bg-white/10 text-cyan-400 shadow-lg' : 'text-white/30'}`}
          >
            <MessageSquare size={14} /> {ct.headerMsg}
          </button>
        </div>
      </div>

      {/* Connection Bar */}
      <div className="px-1 pb-4 flex items-center justify-between text-[8px] font-mono tracking-[0.2em] uppercase text-white/30">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
          {ct.active}
        </div>
        {mode === 'ai' && (
          <button 
            onClick={() => setShowModelList(!showModelList)}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            {model} <ChevronDown size={10} />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div key={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
            {(mode === 'ai' ? aiMessages : msgMessages).map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[10px] leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-100' 
                  : 'bg-white/[0.03] border border-white/10 text-white/70 shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        {isTyping && <div className="flex gap-1 pl-1"><div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" /><div className="w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce [animation-delay:0.2s]" /></div>}
      </div>

      {/* Input */}
      <div className="relative mt-2">
        <input 
          type="text" 
          placeholder={ct.placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="w-full bg-black/20 border border-white/5 rounded-2xl py-3.5 px-4 text-[10px] focus:outline-none focus:border-cyan-500/40 transition-all placeholder:text-white/5"
        />
        <button 
          onClick={handleSend}
          className="absolute right-3 top-2.5 w-8 h-8 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition-all"
        >
          <Send size={14} />
        </button>
      </div>

      {/* Model Portal */}
      <AnimatePresence>
        {showModelList && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute bottom-full mb-4 right-6 w-36 bg-[#1a1a20] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden">
            {models.map(m => (
              <button key={m} onClick={() => { setModel(m); setShowModelList(false); }} className={`w-full text-left px-4 py-3 text-[9px] uppercase tracking-tighter hover:bg-white/5 transition-colors ${model === m ? 'text-cyan-400' : 'text-white/40'}`}>
                {m}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
