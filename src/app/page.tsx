'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Database, 
  Cpu, 
  Cloud, 
  Globe, 
  Languages, 
  Sparkles, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import NeuronOrb from '@/components/NeuronOrb';
import NeuralChatUI from '@/components/NeuralChatUI';
import ProjectMap from '@/components/ProjectMap';

/**
 * Portfolio Home Page (Neural Restoration)
 * Restored the NeuronOrb (The Ball) and moved NeuralChatUI back to the Hero.
 * Maintains JULIE SHESTAKOVA branding and technical blueprint features.
 */

const TRANSLATIONS = {
  en: {
    nav: ['About', 'Projects', 'Expertise', 'Contact'],
    title: "JULIE SHESTAKOVA",
    subtitle: "Senior AI Architect",
    heroTitle: "JULIE SHESTAKOVA | SENIOR AI ARCHITECT",
    heroDesc: "Architecting the future through multi-model AI orchestration, generative media ecosystems, and AI-native engineering methodologies.",
    expertise: "EXPERTISE",
    projectMap: "PROJECT_MAP",
    footerCopyright: "© 2026 AI ARCHITECT // SYSTEM_STABLE // REV.2",
    skills: [
      { label: "AI Orchestration (GPT-4o/Claude 3.5)" },
      { label: "RU Ecosystem (GigaChat/YandexGPT)" },
      { label: "Generative Video (Runway/Sora)" },
      { label: "AI-Native Dev (Antigravity/Cursor)" },
      { label: "Real-time Systems (Messenger Engine)" },
      { label: "Scalable Infra (Supabase/Redis)" },
      { label: "Next.js 16 & React 18" },
      { label: "Python & Python-AI Integration" },
      { label: "Creative AI (Nano Banana)" },
      { label: "Mobile Native (Capacitor)" },
      { label: "High-Performance Architecture" },
      { label: "Product Design Strategy" }
    ]
  },
  ru: {
    nav: ['Обо мне', 'Проекты', 'Навыки', 'Контакты'],
    title: "JULIE SHESTAKOVA",
    subtitle: "Senior AI Архитектор",
    heroTitle: "JULIE SHESTAKOVA | SENIOR AI АРХИТЕКТОР",
    heroDesc: "Проектирование будущего через оркестрацию мультимодальных нейросетей, генеративные медиа-экосистемы и AI-native методологии разработки.",
    expertise: "НАВЫКИ",
    projectMap: "КАРТА_ПРОЕКТОВ",
    footerCopyright: "© 2026 AI АРХИТЕКТ // SYSTEM_STABLE // REV.2",
    skills: [
      { label: "AI Оркестрация (GPT-4o/Claude)" },
      { label: "RU Экосистемы (GigaChat/Yandex)" },
      { label: "Генеративное Видео (Runway/Sora)" },
      { label: "AI-Native Разработка (Antigravity)" },
      { label: "Real-time Системы (Messenger)" },
      { label: "Масштабируемая Infra (Supabase)" },
      { label: "Next.js 16 & React 18" },
      { label: "Python & AI Интеграция" },
      { label: "Креативный AI (Nano Banana)" },
      { label: "Mobile Native (Capacitor)" },
      { label: "High-Performance Архитектура" },
      { label: "Продуктовая Стратегия" }
    ]
  }
};

export default function PortfolioPage() {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [mounted, setMounted] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ru' : 'en');

  if (!mounted) return <div className="min-h-screen bg-[#020203]" />;

  return (
    <main className="min-h-screen bg-[#020203] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* 1. STICKY HEADER */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.03] bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">{t.title}</span>
                <span className="text-[8px] uppercase tracking-widest text-cyan-500/50 font-black">{t.subtitle}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item) => (
              <button key={item} className="text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer">
                // {item}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-white/10" />
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-cyan-400 hover:bg-white/5 transition-colors"
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO AREA (The Orb & The Chat) */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center">
        {/* Background Visuals */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/3 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Technical Console (Chat) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                    <NeuralChatUI lang={lang} />
                </div>
            </div>
          </motion.div>

          {/* CENTER: The Orb (CORE) */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, type: "spring" }}
             className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center py-10"
          >
            <div className="relative">
                <NeuronOrb size="lg" className="z-10" />
                {/* Visual Label for Orb */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                   <div className="flex flex-col items-center">
                      <div className="h-10 w-[1px] bg-gradient-to-b from-white/20 to-transparent mb-2" />
                      <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-[0.3em]">Neural Core Active</span>
                   </div>
                </div>
            </div>
          </motion.div>

          {/* RIGHT: High-Level Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 order-3 text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-[9px] font-black text-white/40 uppercase tracking-widest mb-6">
               Architectural Evolution
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 text-glow-white">
              {t.heroTitle}
            </h1>
            <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium mb-8 max-w-sm mx-auto lg:mx-0">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
                   Open Project Console <ArrowRight size={12} />
                </button>
            </div>
          </motion.div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-20">
            <span className="text-[8px] uppercase tracking-widest mb-2 font-black">Scroll</span>
            <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* 3. EXPERTISE GRID (Restored Professional Substance) */}
      <section className="py-24 bg-white/[0.01] border-y border-white/[0.03]">
        <div className="container mx-auto px-6">
          <header className="flex items-center gap-4 mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/90">{t.expertise}</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
             {t.skills.map((skill, idx) => (
                 <div key={idx} className="bg-[#020203] p-8 group hover:bg-white/[0.02] transition-colors border-r border-b border-white/5">
                    <div className="flex flex-col gap-4">
                        <Sparkles size={16} className="text-cyan-500/20 group-hover:text-cyan-400 transition-colors" />
                        <h3 className="text-[10px] font-black uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">{skill.label}</h3>
                    </div>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC PROJECTS (The Blueprint View) */}
      <section className="py-24 bg-black/20">
        <ProjectMap lang={lang} />
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 border-t border-white/[0.03] bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">
              {t.title}
            </span>
            <span className="text-[9px] text-white/20 uppercase tracking-widest">{t.footerCopyright}</span>
          </div>

          <div className="flex gap-10">
            <FooterLink label="GitHub" href="https://github.com/JuliShestakova" />
            <FooterLink label="LinkedIn" href="#" />
            <FooterLink label="Connect" href="#" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterLink({ label, href }: { label: string, href: string }) {
  return (
    <a href={href} 
       target="_blank" 
       rel="noreferrer" 
       className="group flex flex-col items-center gap-1"
    >
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-cyan-400 transition-colors">{label}</span>
      <div className="w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}
