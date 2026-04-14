"use client";

import { motion } from "framer-motion";

/**
 * ProjectMap Component (Sleek Minimalist)
 * A grid of project showcases with glassmorphism and premium hover effects.
 */

interface ProjectMapProps {
    lang: 'en' | 'ru';
}

const PROJECTS_DATA = {
    en: [
        { title: "Multi-Model AI Engine", desc: "Advanced orchestration of GPT-4o, Claude 3.5, GigaChat Pro, and YandexGPT 3. Custom prompt engineering for hybrid RU & Global markets.", type: "AI Orchestration" },
        { title: "Real-time Messaging", desc: "Proprietary messaging engine for low-latency P2P communication, group sync, and active presence tracking.", type: "Communication" },
        { title: "Generative Media & Video", desc: "Production-grade AI video workflows using Runway (Gen-3), Sora, and Kling AI. Creative visualization with Nano Banana.", type: "GenAI" },
        { title: "Neural HUD Architecture", desc: "Modern UI/UX framework designed for high-density data dashboards, utilizing Tailwind 4 and Framer Motion.", type: "UI/UX" },
        { title: "High-Load & Mobile", desc: "Scalable backend infrastructure on Supabase & Python. Seamless mobile cross-platform export via Capacitor.", type: "Engineering" },
        { title: "Autonomous Agentic Sys", desc: "Engineering self-learning agent environments for task automation and intelligent user experience orchestration.", type: "Agents" }
    ],
    ru: [
        { title: "Multi-Model AI Engine", desc: "Оркестрация GPT-4o, Claude 3.5, GigaChat Pro и YandexGPT 3. Тюнинг промптов для RU и глобальных рынков.", type: "AI Оркестрация" },
        { title: "Real-time Мессенджер", desc: "Собственный движок для P2P-общения с низким пингом, синхронизацией групп и отслеживанием статусов присутствия.", type: "Связь" },
        { title: "Generative Media & Video", desc: "Профессиональные конвейеры генерации видео (Runway Gen-3, Sora, Kling AI). Креативный AI (Nano Banana).", type: "GenAI" },
        { title: "Neural HUD Архитектура", desc: "Дизайн-система для информационно-насыщенных дашбордов на базе Tailwind 4 и Framer Motion.", type: "UI/UX" },
        { title: "High-Load & Mobile", desc: "Масштабируемая инфраструктура на Supabase и Python. Нативный экспорт в мобильные приложения через Capacitor.", type: "Engineering" },
        { title: "Автономные AI-Агенты", desc: "Разработка самообучающихся сред для автоматизации задач и интеллектуальной оркестрации опыта.", type: "Агенты" }
    ]
};

export default function ProjectMap({ lang }: ProjectMapProps) {
    const projects = PROJECTS_DATA[lang];
    const sectionTitle = lang === 'en' ? 'PROJECT_MAP' : 'КАРТА_ПРОЕКТОВ';

    return (
        <div className="w-full max-w-6xl mx-auto mt-20 px-6">
            <header className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/90">{sectionTitle}</h2>
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-[10px] font-mono text-white/30 italic">16px</span>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.15)' }}
                        className="glass-card rounded-xl overflow-hidden group cursor-pointer border border-white/5 flex flex-col"
                    >
                        {/* Project Visual Placeholder */}
                        <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rotate-45" />
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">{project.type}</span>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-xs text-white/40 leading-relaxed font-medium">
                                {project.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
