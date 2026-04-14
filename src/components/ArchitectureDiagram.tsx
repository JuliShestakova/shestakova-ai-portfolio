'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Smartphone, Monitor, Database, Cpu, Zap, Star, Globe, ShieldCheck } from 'lucide-react';

interface DiagramProps {
  lang: 'en' | 'ru';
}

const NODES = {
  en: {
    client: "User Interface",
    orchestrator: "AI Orchestrator (Next.js)",
    ruModels: "RU LLMs (GigaChat/Yandex)",
    globalModels: "Global LLMs (GPT/Claude)",
    db: "Supabase (PostgreSQL)",
    auth: "Auth & Security"
  },
  ru: {
    client: "Интерфейс",
    orchestrator: "AI Оркестратор (Next.js)",
    ruModels: "Отечественный AI (GigaChat)",
    globalModels: "Global AI (GPT/Claude)",
    db: "Supabase (PostgreSQL)",
    auth: "Безопасность и Auth"
  }
};

export default function ArchitectureDiagram({ lang }: DiagramProps) {
  const t = NODES[lang];

  // Animation variants for path glow
  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  const pulseVariants: Variants = {
    animate: {
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.05, 1],
      transition: { duration: 3, repeat: Infinity }
    }
  };

  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center p-8 relative bg-black/40 rounded-3xl border border-white/5 overflow-hidden">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* SVG Container for paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        
        {/* Main Orchestration Paths */}
        <motion.path 
          d="M 200,250 L 400,250" 
          stroke="rgba(34,211,238,0.3)" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="5,5"
          variants={lineVariants} initial="hidden" animate="visible"
        />
        <motion.path 
          d="M 400,250 L 600,150" 
          stroke="rgba(34,211,238,0.3)" 
          strokeWidth="2" 
          fill="none" 
          variants={lineVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}
        />
        <motion.path 
          d="M 400,250 L 600,350" 
          stroke="rgba(34,211,238,0.3)" 
          strokeWidth="2" 
          fill="none" 
          variants={lineVariants} initial="hidden" animate="visible" transition={{ delay: 0.5 }}
        />
        <motion.path 
          d="M 400,250 L 400,100" 
          stroke="rgba(34,211,238,0.3)" 
          strokeWidth="1" 
          fill="none" 
          variants={lineVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}
        />
        <motion.path 
          d="M 400,250 L 400,400" 
          stroke="rgba(34,211,238,0.3)" 
          strokeWidth="1" 
          fill="none" 
          variants={lineVariants} initial="hidden" animate="visible" transition={{ delay: 0.8 }}
        />
      </svg>

      {/* NODES LAYER */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-12 gap-8 items-center">
        
        {/* CLIENT NODE */}
        <Node 
          col="col-span-3"
          icon={<Smartphone className="text-white/60" />}
          label={t.client}
          sub="Next.js / Tailwind"
        />

        {/* ORCHESTRATOR NODE (CENTER) */}
        <div className="col-span-4 flex flex-col items-center gap-4">
             <div className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <div className="p-8 rounded-full bg-black border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)] flex flex-col items-center justify-center">
                    <Zap className="text-cyan-400 mb-2" size={32} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">{t.orchestrator}</span>
                </div>
             </div>
        </div>

        {/* RIGHT SIDE NODES (MODELS) */}
        <div className="col-span-5 flex flex-col gap-12">
            <Node 
              icon={<Star className="text-yellow-400" />}
              label={t.ruModels}
              sub="YandexGPT / GigaChat"
              border="border-yellow-500/20"
            />
            <Node 
              icon={<Globe className="text-cyan-400" />}
              label={t.globalModels}
              sub="GPT-4o / Claude 3.5"
              border="border-cyan-500/20"
            />
        </div>

        {/* BOTTOM / TOP UTILS */}
        <div className="absolute top-10 left-[41.5%]">
            <NodeSmall icon={<ShieldCheck size={14} />} label={t.auth} />
        </div>
        <div className="absolute bottom-10 left-[41.5%]">
            <NodeSmall icon={<Database size={14} />} label={t.db} />
        </div>

      </div>
    </div>
  );
}

function Node({ icon, label, sub, col = "", border = "border-white/10" }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`${col} p-4 glass-card rounded-xl border ${border} flex items-center gap-4 backdrop-blur-xl group hover:border-white/30 transition-all`}
    >
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-tight text-white/90">{label}</span>
        <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">{sub}</span>
      </div>
    </motion.div>
  );
}

function NodeSmall({ icon, label }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-3 py-2 glass-pill flex items-center gap-2 border border-white/5 bg-black/60 rounded-full"
        >
            <span className="text-cyan-400">{icon}</span>
            <span className="text-[7px] font-black uppercase tracking-widest text-white/40">{label}</span>
        </motion.div>
    );
}
