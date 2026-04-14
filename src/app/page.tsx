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
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import NeuronOrb from '@/components/NeuronOrb';
import NeuralChatUI from '@/components/NeuralChatUI';
import ProjectMap from '@/components/ProjectMap';

/**
 * Portfolio Home Page (Visual Polish & Layout Adjustment)
 * - Text placed under the Orb.
 * - Orb and Text shifted more to the right.
 * - Colors adjusted to avoid blending (deeper charcoal with more glows).
 */

const TRANSLATIONS = {
  en: {
    nav: ['About', 'Projects', 'Expertise', 'Contact'],
    title: "JULIA SHESTAKOVA",
    subtitle: "Senior AI Architect",
    heroBadge: "Architectural Evolution",
    heroTitle: "JULIA SHESTAKOVA | SENIOR AI ARCHITECT",
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
    title: "JULIA SHESTAKOVA",
    subtitle: "Senior AI Архитектор",
    heroBadge: "Architectural Evolution",
    heroTitle: "JULIA SHESTAKOVA | SENIOR AI АРХИТЕКТОР",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ru' : 'en');

  if (!mounted) return <div className="min-h-screen bg-[#020203]" />;

  return (
    <main className="min-h-screen bg-[#08080a] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* 1. STICKY HEADER */}
      <nav className="fixed top-0 w-full z-[100] bg-black/40 backdrop-blur-xl">
        {/* Neon Top Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_1px_10px_rgba(34,211,238,0.5)]" />
        
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
            <div className="flex flex-col">
                <span className="text-[14px] font-black uppercase tracking-[0.4em] text-white/90">{t.title}</span>
                <span className="text-[10px] uppercase tracking-widest text-cyan-500/50 font-black">{t.subtitle}</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {t.nav.map((item) => (
              <button key={item} className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors cursor-pointer">
                // {item}
              </button>
            ))}
            <div className="h-4 w-[1px] bg-white/10" />
            <button 
              onClick={toggleLang}
              className="px-5 py-2 rounded-full border border-white/10 text-[11px] font-black uppercase tracking-widest text-cyan-400 hover:bg-white/5 transition-colors"
            >
              {lang.toUpperCase()}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-white/80 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#020203]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-12"
          >
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />
             <div className="flex flex-col items-center gap-8">
                {t.nav.map((item) => (
                  <button 
                    key={item} 
                    onClick={() => {
                        setIsMenuOpen(false);
                        // Trigger scroll to specific section if connected
                    }}
                    className="text-2xl font-black uppercase tracking-[0.3em] text-white/40 hover:text-cyan-400 transition-all hover:scale-110"
                  >
                    {item}
                  </button>
                ))}
             </div>
             <div className="h-[1px] w-24 bg-white/10" />
             <button 
                onClick={() => {
                   toggleLang();
                   setIsMenuOpen(false);
                }}
                className="px-8 py-3 rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-black uppercase tracking-widest bg-cyan-500/5 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                {lang.toUpperCase()}
              </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO AREA (The 2-Line Layout - Reorganized) */}
      <section className="relative pt-40 pb-20 px-6 min-h-[95vh] flex flex-col justify-center overflow-hidden">
        {/* Background Visuals - Adjusted for higher contrast and specific glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Deep charcoal grain/noise would be nice but using radial gradients for now */}
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/[0.02] blur-[150px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
             
             {/* LEFT: Chat Component (Top-Left Position) */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="w-full max-w-lg lg:self-start lg:mt-[-40px]"
             >
                <NeuralChatUI lang={lang} />
             </motion.div>

             {/* RIGHT: The Orb (Larger & Shunted to the Right) */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, x: 50 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ duration: 1.5, type: "spring", bounce: 0 }}
               className="flex justify-center lg:justify-end flex-1"
             >
                <div className="relative">
                    <NeuronOrb size="xl" className="opacity-90" />
                    {/* Minimal Core Glow per user request */}
                    <div className="absolute inset-[-10%] bg-cyan-400/5 blur-[100px] rounded-full opacity-40 pointer-events-none" />
                </div>
             </motion.div>

          </div>

          {/* BELOW: THE INSCRIPTION & SKILLS ROW (Centered) */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-6 text-glow-white">
                {t.heroTitle}
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-6 text-glow-white">
                {t.heroTitle}
              </h1>
              <p className="text-sm md:text-lg text-white/60 leading-relaxed font-medium mb-10 max-w-3xl">
                {t.heroDesc}
              </p>

              {/* SKILLS AS A SINGLE ROW OF BADGES */}
              <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
                 {t.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center gap-2 group hover:border-cyan-500/30 transition-all cursor-default"
                    >
                       <Zap size={10} className="text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                          {skill.label}
                       </span>
                    </div>
                 ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-14 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-4 group"
                  >
                     {t.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
          </motion.div>

        </div>

      </section>


      <section id="projects" className="py-24 bg-[#08080a] relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/[0.02] blur-[150px] pointer-events-none" />
         <ProjectMap lang={lang} />
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 bg-black relative">
        {/* Neon Bottom Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_-1px_10px_rgba(34,211,238,0.5)]" />
        
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
