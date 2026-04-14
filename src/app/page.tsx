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
 * Portfolio Home Page (User-Requested Final Layout)
 * LINE 1: Chat UI | Neuron Orb (horizontal)
 * LINE 2: Title & Details (centered below)
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
    footerCopyright: "© 2026 AI ARCHITECT // SYSTEM_STABLE // FINAL",
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
    footerCopyright: "© 2026 AI АРХИТЕКТ // SYSTEM_STABLE // FINAL",
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

  if (!mounted) return <div className="min-h-screen bg-[#111116]" />;

  return (
    <main className="min-h-screen bg-[#111116] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* 1. STICKY HEADER */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.05] bg-[#111116]/80 backdrop-blur-xl">
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

      {/* 2. HERO AREA (The 2-Line Layout) */}
      <section className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center">
        {/* Background Visuals */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-1/2 h-full bg-blue-500/[0.06] blur-[150px] rounded-full" />
          <div className="absolute top-[10%] right-[5%] w-1/2 h-full bg-cyan-500/[0.06] blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto relative z-10">
          
          {/* LINE 1: CHAT & BALL (Horizontal) */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32 mb-24">
             
             {/* LEFT: Chat Component */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               className="w-full max-w-lg"
             >
                <div className="relative border border-white/15 rounded-3xl bg-[#1c1c24]/60 backdrop-blur-xl shadow-2xl p-0.5 overflow-hidden">
                   <NeuralChatUI lang={lang} />
                </div>
             </motion.div>

             {/* RIGHT: The Orb */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8, x: 50 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ duration: 1.2, type: "spring" }}
               className="flex justify-center"
             >
                <div className="relative">
                    <NeuronOrb size="lg" />
                    <div className="absolute inset-[-20%] bg-cyan-400/20 blur-[120px] rounded-full opacity-60" />
                </div>
             </motion.div>

          </div>

          {/* LINE 2: THE INSCRIPTION (Centered Below) */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
             <span className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[11px] font-black text-cyan-400 uppercase tracking-[0.5em] mb-10 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                 {t.heroBadge}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-glow-white">
                {t.heroTitle}
              </h1>
              <p className="text-sm md:text-xl lg:text-2xl text-white/70 leading-relaxed font-medium mb-16 max-w-3xl">
                {t.heroDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button className="px-16 py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-4 group">
                     {t.cta} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
          </motion.div>

        </div>

      </section>

      {/* 3. EXPERTISE GRID (Lighter Background Cards) */}
      <section className="py-24 bg-[#16161c] border-y border-white/[0.05] relative">
        <div className="container mx-auto px-6">
          <header className="flex items-center gap-4 mb-20">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/90">{t.expertise}</h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
             {t.skills.map((skill, idx) => (
                 <div key={idx} className="bg-[#1c1c24] p-8 rounded-2xl group hover:bg-[#22222a] transition-all border border-white/[0.08] hover:border-cyan-500/40 shadow-lg">
                    <div className="flex flex-col gap-4">
                        <Sparkles size={16} className="text-cyan-500/40 group-hover:text-cyan-400 transition-colors" />
                        <h3 className="text-[10px] font-black uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">{skill.label}</h3>
                    </div>
                 </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC PROJECTS */}
      <section className="py-24 bg-[#111116] relative">
         <ProjectMap lang={lang} />
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 border-t border-white/[0.05] bg-[#0c0c10]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 uppercase">
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
      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-cyan-400 transition-colors uppercase">{label}</span>
      <div className="w-0 h-[1px] bg-cyan-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}
