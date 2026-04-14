import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, Terminal, Cpu, Zap, ShieldCheck, Database } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";

/**
 * ProjectMap Component (Sleek Minimalist with Blueprint View)
 */

interface ProjectMapProps {
    lang: 'en' | 'ru';
}

const PROJECTS_DATA = {
    en: [
        { title: "Multi-Model AI Engine", desc: "Advanced orchestration of GPT-4o, Claude 3.5, GigaChat Pro, and YandexGPT 3. Custom prompt engineering for hybrid RU & Global markets.", type: "AI Orchestration", hasBlueprint: true },
        { title: "Real-time Messaging", desc: "Proprietary messaging engine for low-latency P2P communication, group sync, and active presence tracking.", type: "Communication", hasBlueprint: false },
        { title: "Generative Media & Video", desc: "Production-grade AI video workflows using Runway (Gen-3), Sora, and Kling AI. Creative visualization with Nano Banana.", type: "GenAI", hasBlueprint: false },
        { title: "Neural HUD Architecture", desc: "Modern UI/UX framework designed for high-density data dashboards, utilizing Tailwind 4 and Framer Motion.", type: "UI/UX", hasBlueprint: false },
        { title: "High-Load & Mobile", desc: "Scalable backend infrastructure on Supabase & Python. Seamless mobile cross-platform export via Capacitor.", type: "Engineering", hasBlueprint: false },
        { title: "Autonomous Agentic Sys", desc: "Engineering self-learning agent environments for task automation and intelligent user experience orchestration.", type: "Agents", hasBlueprint: false }
    ],
    ru: [
        { title: "Multi-Model AI Engine", desc: "Оркестрация GPT-4o, Claude 3.5, GigaChat Pro и YandexGPT 3. Тюнинг промптов для RU и глобальных рынков.", type: "AI Оркестрация", hasBlueprint: true },
        { title: "Real-time Мессенджер", desc: "Собственный движок для P2P-общения с низким пингом, синхронизацией групп и отслеживанием статусов присутствия.", type: "Связь", hasBlueprint: false },
        { title: "Generative Media & Video", desc: "Профессиональные конвейеры генерации видео (Runway Gen-3, Sora, Kling AI). Креативный AI (Nano Banana).", type: "GenAI", hasBlueprint: false },
        { title: "Neural HUD Архитектура", desc: "Дизайн-система для информационно-насыщенных дашбордов на базе Tailwind 4 и Framer Motion.", type: "UI/UX", hasBlueprint: false },
        { title: "High-Load & Mobile", desc: "Масштабируемая инфраструктура на Supabase и Python. Нативный экспорт в мобильные приложения через Capacitor.", type: "Engineering", hasBlueprint: false },
        { title: "Автономные AI-Агенты", desc: "Разработка самообучающихся сред для автоматизации задач и интеллектуальной оркестрации опыта.", type: "Агенты", hasBlueprint: false }
    ]
};

export default function ProjectMap({ lang }: ProjectMapProps) {
    const projects = PROJECTS_DATA[lang];
    const [selectedProject, setSelectedProject] = useState<any | null>(null);

    const sectionTitle = lang === 'en' ? 'PROJECT_MAP' : 'КАРТА_ПРОЕКТОВ';

    return (
        <div className="w-full max-w-6xl mx-auto mt-20 px-6">
            <header className="flex items-center gap-4 mb-12">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/90">{sectionTitle}</h2>
                <div className="h-[1px] flex-1 bg-white/5" />
                <span className="text-[10px] font-mono text-white/30 italic">1.0.0</span>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -12, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative flex flex-col h-full rounded-2xl overflow-hidden border border-white/[0.08] hover:border-cyan-500/40 bg-gradient-to-b from-[#1c1c24]/80 to-[#121218]/95 backdrop-blur-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group transition-all duration-500"
                    >
                        {/* Hover Accent Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

                        {/* Visual Header */}
                        <div className="h-48 bg-[#0c0c0e]/40 relative flex items-center justify-center border-b border-white/[0.05] overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent)] group-hover:scale-150 transition-transform duration-1000" />
                            <div className="relative z-10 w-20 h-20 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:border-cyan-500/30 transition-colors duration-500">
                                <Cpu size={32} className="text-white/10 group-hover:text-cyan-500/60 transition-colors duration-500" />
                            </div>
                            
                            {project.hasBlueprint && (
                                <button 
                                    onClick={() => setSelectedProject(project)}
                                    className="absolute inset-0 flex items-center justify-center bg-[#08080a]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 backdrop-blur-md"
                                >
                                    <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-cyan-400 transition-colors">
                                        <Eye size={14} /> View Blueprint
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-1 relative z-10">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(34,211,238,1)]" />
                                    <span className="text-[10px] font-black text-cyan-500/80 uppercase tracking-[0.2em]">{project.type}</span>
                                </div>
                                {project.hasBlueprint && (
                                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-yellow-500/10 border border-yellow-500/20">
                                        <Zap size={10} className="text-yellow-500" />
                                        <span className="text-[8px] font-bold text-yellow-500/80 uppercase tracking-tighter">Blueprint</span>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-none group-hover:text-cyan-400 transition-colors duration-500">
                                {project.title}
                            </h3>
                            <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                                {project.desc}
                            </p>
                        </div>
                    </motion.div>

                ))}
            </div>

            {/* BLUEPRINT MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-auto"
                    >
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setSelectedProject(null)} />
                        
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-6xl max-h-full bg-[#0a0a0c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                <div className="flex flex-col pr-4">
                                    <h2 className="text-lg md:text-xl font-black uppercase tracking-tighter text-white truncate max-w-[200px] md:max-w-none">{selectedProject.title}</h2>
                                    <span className="text-[8px] md:text-[9px] font-mono text-cyan-400 uppercase tracking-widest">Technical Blueprint // Rev 1.0</span>
                                </div>
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                                
                                {/* 1. The Diagram */}
                                <div className="lg:col-span-8">
                                    <ArchitectureDiagram lang={lang} />
                                </div>

                                {/* 2. Tech Specs */}
                                <div className="lg:col-span-4 flex flex-col gap-8">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">System Infrastructure</h4>
                                        <div className="space-y-3">
                                            <SpecItem icon={<Terminal size={12}/>} label="Orchestration" val="Next.js Edge / Vercel AI SDK" />
                                            <SpecItem icon={<Cpu size={12}/>} label="Response Latency" val="< 280ms (p95)" />
                                            <SpecItem icon={<ShieldCheck size={12}/>} label="Security" val="JWT / RBAC / Encrypted P2P" />
                                            <SpecItem icon={<Database size={12}/>} label="Persistence" val="PostgreSQL / Redis High-Availability" />
                                        </div>
                                    </div>

                                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4">Architect's Note</h4>
                                        <p className="text-[11px] text-white/60 leading-relaxed italic">
                                            {lang === 'en' 
                                                ? "Optimizing the path between global models and local RU APIs required a custom caching layer to ensure zero-latency switching for multi-modal user contexts."
                                                : "Оптимизация пути между глобальными моделями и локальными RU-API потребовала создания кастомного слоя кэширования для обеспечения мгновенного переключения контекстов."}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function SpecItem({ icon, label, val }: any) {
    return (
        <div className="flex items-center justify-between py-1 border-b border-white/[0.03]">
            <div className="flex items-center gap-2">
                <span className="text-cyan-500/50">{icon}</span>
                <span className="text-[9px] font-bold uppercase text-white/30">{label}</span>
            </div>
            <span className="text-[9px] font-mono text-white/60">{val}</span>
        </div>
    );
}
