"use client";

import { motion } from "framer-motion";

/**
 * NeuronOrb Component (Showcase)
 * Nested orbits and complex pulse effects representing a neural core.
 */

interface NeuronOrbProps {
    size?: "xs" | "sm" | "md" | "lg";
    className?: string;
}

export default function NeuronOrb({ size = "md", className = "" }: NeuronOrbProps) {
    const dimensions = {
        xs: "w-8 h-8 text-[10px]",
        sm: "w-32 h-32 text-2xl",
        md: "w-56 h-56 text-5xl",
        lg: "w-80 h-80 text-7xl"
    };

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute border border-purple-500/20 rounded-full" style={{ width: "130%", height: "130%" }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </motion.div>

            <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute border border-cyan-500/10 rounded-full" style={{ width: "160%", height: "160%" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(244,114,182,0.8)]" />
            </motion.div>

            <motion.div animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 40px rgba(168,85,247,0.4)", "0 0 80px rgba(168,85,247,0.6)", "0 0 40px rgba(168,85,247,0.4)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className={`${dimensions[size]} rounded-full bg-gradient-to-br from-purple-600 via-indigo-700 to-purple-900 border border-white/20 flex items-center justify-center relative z-10 shadow-2xl overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
                <div className="absolute inset-0 bg-purple-500/20 blur-xl mix-blend-overlay animate-pulse" />
            </motion.div>
            <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full -z-10 animate-pulse" />
        </div>
    );
}
