"use client";

import { 
  BookOpen, 
  GraduationCap, 
  Activity,
  Scroll,
  Sparkles,
  Home
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * HexagonMissionMap Component (Showcase)
 * A premium hexagonal navigation grid with 3D depth, 
 * glassmorphism, and responsive layouts.
 */

const HexNode = ({ 
  icon: Icon, 
  active = false, 
  label="",
  delay = 0,
  theme = "cyan"
}: { 
  icon: any, 
  active?: boolean, 
  label?: string,
  delay?: number,
  theme?: "pink" | "orange" | "purple" | "cyan" | "green"
}) => {
  const themeStyles = {
    pink: "from-rose-500 via-rose-600 to-rose-700 shadow-[0_0_30px_rgba(244,63,94,0.3)] border-rose-400/30",
    orange: "from-orange-400 via-orange-500 to-red-600 shadow-[0_0_30px_rgba(249,115,22,0.3)] border-orange-300/30",
    purple: "from-violet-500 via-purple-600 to-indigo-800 shadow-[0_0_30px_rgba(139,92,246,0.3)] border-purple-400/30",
    cyan: "from-cyan-400 via-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.3)] border-cyan-300/30",
    green: "from-emerald-400 via-emerald-500 to-teal-700 shadow-[0_0_30px_rgba(16,185,129,0.3)] border-emerald-300/30"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -8 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex flex-col items-center group cursor-pointer"
    >
      <div className="relative w-24 h-28 md:w-28 md:h-32 flex items-center justify-center">
        <div className={`absolute inset-[-12px] rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${active ? 'from-cyan-400 to-blue-600' : themeStyles[theme]}`} />
        <div className={`absolute inset-0 clip-hexagon bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/10 ${active ? 'opacity-100' : 'opacity-50'}`} />
        <div className={`relative z-10 w-[90%] h-[90%] clip-hexagon p-[2px] transition-all duration-500 ${active ? 'bg-gradient-to-br from-cyan-300 via-white to-blue-400 shadow-cyan-500/50' : 'bg-gradient-to-br from-white/20 to-transparent group-hover:from-white/40'}`}>
            <div className={`w-full h-full clip-hexagon bg-gradient-to-br flex items-center justify-center relative overflow-hidden backdrop-blur-2xl ${active ? 'from-cyan-500 via-blue-600 to-indigo-700' : themeStyles[theme]}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-80" />
                <motion.div animate={active ? { y: [0, -4, 0] } : {}} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" strokeWidth={2} />
                </motion.div>
            </div>
        </div>
      </div>
      <div className="mt-4 relative z-20">
        <div className={`px-4 py-1.5 rounded-full glass-pill transition-all duration-300 ${active ? 'bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : ''}`}>
          <span className={`text-[10px] md:text-[12px] font-black uppercase tracking-[0.25em] text-center block ${active ? 'text-cyan-300' : 'text-white/70 group-hover:text-white'}`}>
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function HexagonMissionMap() {
  return (
    <div className="relative w-full min-w-[320px] md:min-w-[450px] h-[350px] md:h-[450px] flex items-center justify-center p-4 select-none">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
        transition={{ scale: { duration: 1 }, opacity: { duration: 1 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="relative z-10 flex flex-col items-center gap-2"
      >
        <div className="flex justify-center mb-6 md:mb-10">
           <HexNode icon={BookOpen} label="Learning" theme="cyan" delay={0.1} />
        </div>
        <div className="flex gap-12 md:gap-20 items-center mb-6 md:mb-10">
           <HexNode icon={GraduationCap} label="Academy" theme="orange" delay={0.2} />
           <HexNode icon={Home} active label="Central Hub" theme="cyan" delay={0} />
           <HexNode icon={Activity} label="System" theme="pink" delay={0.3} />
        </div>
        <div className="flex gap-12 md:gap-20 justify-center">
           <HexNode icon={Scroll} label="Archive" theme="green" delay={0.4} />
           <HexNode icon={Sparkles} label="Engine" theme="purple" delay={0.5} />
        </div>
      </motion.div>
    </div>
  );
}
