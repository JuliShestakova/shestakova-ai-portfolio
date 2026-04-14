"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * NeuronOrb Component (HUD Wireframe Rings Edition)
 * A premium, clean geometric core representing a neural network.
 * Features rotating thin rings and subtle glow.
 */

interface NeuronOrbProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
}

export default function NeuronOrb({ size = "md", className = "" }: NeuronOrbProps) {
    const dimensions = {
        xs: "w-8 h-8",
        sm: "w-32 h-32",
        md: "w-56 h-56",
        lg: "w-80 h-80",
        xl: "w-[500px] h-[500px]"
    };

    return (
        <div className={`relative flex items-center justify-center ${dimensions[size]} ${className}`}>
            {/* Soft Ambient Glow Pool - Reduced intensity */}
            <div className="absolute inset-0 bg-blue-500/[0.02] blur-[120px] rounded-full" />

            {/* Main Rotating Wireframe Container */}
            <motion.div
                animate={{ rotateY: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full flex items-center justify-center preserve-3d"
            >
                {/* Horizontal Rings */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute w-full h-full rounded-full border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.05)]"
                        style={{ transform: `rotateX(${i * 36}deg)` }}
                    />
                ))}

                {/* Vertical Rings */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute w-full h-full rounded-full border border-white/20 shadow-[0_0_15px_rgba(34,211,238,0.05)]"
                        style={{ transform: `rotateY(${i * 36}deg)` }}
                    />
                ))}

                {/* Internal Pulsing Core (Minimal) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1/4 h-1/4 bg-white/10 rounded-full blur-xl"
                />
            </motion.div>

            {/* Specular HUD Shine */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none z-20" />
        </div>
    );
}
