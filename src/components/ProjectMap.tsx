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
        { title: "Nexus AI", desc: "Abstract teams of new geometric AI platforms.", type: "Platform" },
        { title: "Sentient Systems", desc: "Architectural patterns for complete sentient systems.", type: "Architecture" },
        { title: "Kora Chatbot", desc: "Learning imagination about context and neural paths.", type: "AI Agent" },
        { title: "Neural Sync", desc: "High-performance synchronization for mesh networks.", type: "Infrastructure" },
        { title: "Cora Design", desc: "Visual language for neural HUD environments.", type: "Design" },
        { title: "Cloud Compute", desc: "Scalable compute pipelines for LLM orchestration.", type: "Cloud" }
    ],
    ru: [
        { title: "Nexus AI", desc: "Абстрактные команды новых геометрических AI-платформ.", type: "Платформа" },
        { title: "Sentient Systems", desc: "Архитектурные паттерны для разумных систем.", type: "Архитектура" },
        { title: "Kora Chatbot", desc: "Изучение воображения в контексте нейронных путей.", type: "AI Агент" },
        { title: "Neural Sync", desc: "Высокопроизводительная синхронизация для сетей.", type: "Инфраструктура" },
        { title: "Cora Design", desc: "Визуальный язык для нейронных HUD-сред.", type: "Дизайн" },
        { title: "Cloud Compute", desc: "Масштабируемые конвейеры для оркестрации LLM.", type: "Облако" }
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
