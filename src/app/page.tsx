'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import NeuronOrb from '@/components/NeuronOrb';
import NeuralChatUI from '@/components/NeuralChatUI';
import ProjectMap from '@/components/ProjectMap';

/**
 * Portfolio Home Page (Final Refined Edition)
 * - Ultra-Clean Hero: Standalone Chat | Standalone Orb
 * - Compact Typography: Professional & Minimalist
 */

const TRANSLATIONS = {
  en: {
    nav: ['About', 'Projects', 'Expertise', 'Contact'],
    title: "JULIE SHESTAKOVA",
    subtitle: "Senior AI Architect",
    heroBadge: "Architectural Evolution",
    heroTitle: "JULIE SHESTAKOVA | SENIOR AI ARCHITECT",
    heroDesc: "Architecting the future through multi-model AI orchestration, generative media ecosystems, and AI-native engineering methodologies.",
    cta: "Open Project Console",
    expertise: "EXPERTISE",
    projectMap: "PROJECT_MAP",
    footerCopyright: "© 2026 AI ARCHITECT // SYSTEM_STABLE",
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
      { label: "Mobile Native (Capacitor)" }
    ]
  },
  ru: {
    nav: ['Обо мне', 'Проекты', 'Навыки', 'Контакты'],
    title: "ЮЛИЯ ШЕСТАКОВА",
    subtitle: "Senior AI Архитектор",
    heroBadge: "Architectural Evolution",
    heroTitle: "ЮЛИЯ ШЕСТАКОВА | SENIOR AI АРХИТЕКТОР",
    heroDesc: "Проектирование будущего через оркестрацию мультимодальных нейросетей, генеративные медиа-экосистемы и AI-native методологии разработки.",
    cta: "Открыть консоль проектов",
    expertise: "НАВЫКИ",
    projectMap: "КАРТА_ПРОЕКТОВ",
    footerCopyright: "© 2026 AI АРХИТЕКТ // SYSTEM_STABLE",
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
      { label: "Mobile Native (Capacitor)" }
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

  if (!mounted) return <div className="min-h-screen bg-[#1a1a20]" />;

  return (
    <main className="min-h-screen bg-[#1a1a20] text-white selection:bg-cyan-500/30 overflow-x-hidden pt-20">
      
      {/* 1. HEADER */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#1a1a20]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
            <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/90">{t.title}</span>
                <span className="text-[7px] uppercase tracking-widest text-cyan-500/50 font-black">{t.subtitle}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item) => (
              <button key={item} className="text-[8px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                {item}
              </button>
            ))}
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-white/10 text-[8px] font-black uppercase tracking-widest text-cyan-400 hover:bg-white/5"
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO (STRICT MINIMAL) */}
      <section className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center">
        
        {/* ROW 1: Standalone Chat & Orb */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-40 mb-20">
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-auto">
                <NeuralChatUI lang={lang} />
           </motion.div>
           <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
                <NeuronOrb size="lg" />
                <div className="absolute inset-[-5%] bg-cyan-500/5 blur-[40px] rounded-full pointer-events-none opacity-20" />
           </motion.div>
        </div>

        {/* ROW 2: Compact Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[9px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-8">
               {t.heroBadge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-6 text-white/90">
              {t.heroTitle}
            </h1>
            <p className="text-xs md:text-base text-white/40 leading-relaxed font-medium mb-10 max-w-2xl px-4">
              {t.heroDesc}
            </p>
            <button className="px-10 py-4 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-xl group flex items-center gap-3">
               {t.cta} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
      </section>

      {/* 3. EXPERTISE GRID */}
      <section className="py-24 bg-[#25252d]/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <header className="flex items-center gap-4 mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">{t.expertise}</h2>
            <div className="h-px flex-1 bg-white/5" />
          </header>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
             {t.skills.map((skill, idx) => (
                 <div key={idx} className="bg-gradient-to-br from-cyan-500/[0.03] via-white/[0.01] to-blue-500/[0.03] p-8 rounded-2xl group border border-white/5 hover:border-cyan-500/20 transition-all">
                    <Sparkles size={14} className="text-cyan-500/30 mb-4 group-hover:text-cyan-400 transition-colors" />
                    <h3 className="text-[9px] font-black uppercase tracking-widest text-white/50 group-hover:text-white">{skill.label}</h3>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS */}
      <section className="py-24 bg-[#1a1a20]">
         <ProjectMap lang={lang} />
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 border-t border-white/5 bg-[#121218]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[9px] font-black tracking-widest text-white/40 uppercase">{t.title}</span>
            <span className="text-[8px] text-white/10 uppercase tracking-tighter mt-1">{t.footerCopyright}</span>
          </div>
          <div className="flex gap-8">
            <FooterLink label="GitHub" href="https://github.com/JuliShestakova" />
            <FooterLink label="Connect" href="#" />
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterLink({ label, href }: { label: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-1">
      <span className="text-[8px] font-black uppercase tracking-widest text-white/20 group-hover:text-cyan-400 transition-colors">{label}</span>
      <div className="w-0 h-px bg-cyan-500 group-hover:w-full transition-all" />
    </a>
  );
}
