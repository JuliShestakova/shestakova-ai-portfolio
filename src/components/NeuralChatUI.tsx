'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export default function NeuralChatUI() {
  const [messages, setMessages] = useState([{ id: 1, role: 'assistant', content: "SYSTEM ONLINE. Neural Engine initialized. How can I assist you today?" }]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newUserMsg = { id: Date.now(), role: 'user', content: inputValue };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = { id: Date.now() + 1, role: 'assistant', content: "Neural analysis complete. Your request has been processed within the HUD architecture." };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md h-[400px] flex flex-col glass-card rounded-2xl overflow-hidden shadow-2xl relative">
      <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-white/5">
        <div className="w-8 h-8 rounded-full bg-purple_neural-600 flex items-center justify-center animate-pulse"><Bot size={18} className="text-white" /></div>
        <div><h3 className="text-sm font-bold uppercase tracking-widest text-purple_neural-500">Neural Assistant</h3></div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-xs ${msg.role === 'user' ? 'bg-purple_neural-700/40 border border-purple-500/30 text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none font-light'}`}>{msg.content}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="p-4 bg-white/5 border-t border-white/10">
        <div className="relative flex items-center gap-2">
          <input type="text" placeholder="SYSTEM COMMAND..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 text-xs focus:outline-none focus:border-purple_neural-500 transition-all placeholder:opacity-30" />
          <button onClick={handleSend} className="w-8 h-8 rounded-full bg-purple_neural-700 flex items-center justify-center group hover:bg-purple_neural-600 transition-all"><Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></button>
        </div>
      </div>
    </div>
  );
}
