'use client';

import React from 'react';
import LiquidGlass from '@/components/LiquidGlass';
import NeuronOrb from '@/components/NeuronOrb';
import HexagonMissionMap from '@/components/HexagonMissionMap';
import NeuralChatUI from '@/components/NeuralChatUI';
import ScanlineOverlay from '@/components/ScanlineOverlay';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Cpu } from 'lucide-react';

/**
 * Portfolio Home Page (Showcase)
 * The main interactive dashboard demonstrating the 'Neural HUD' architecture.
 */

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white relative overflow-hidden font-sans selection:bg-purple-500/30">
      {/* HUD Effects */}
      <ScanlineOverlay />
      
      {/* Layout Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col items-center justify-between min-h-screen">
        
        {/* TOP Header Section */}
        <header className="w-full flex justify-between items-start mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic text-white/90">
              SHESTAKOVA <span className="text-purple_neural-500 font-normal not-italic">AI/PORTFOLIO</span>
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[10px] uppercase tracking-widest text-cyan-400/80 font-bold">System Status: Active</span>
            </div>
          </motion.div>
          
          <div className="hidden md:flex gap-6 mt-2">
             <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase text-white/30 tracking-widest">Logic Engine</span>
                <span className="text-xs font-mono text-purple-400">v4.0.0-PRO-MAX</span>
             </div>
             <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase text-white/30 tracking-widest">Kernel Sync</span>
                <span className="text-xs font-mono text-cyan-400">0.042ms</span>
             </div>
          </div>
        </header>

        {/* MIDDLE Main Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">
          
          {/* Left Side: Neural Chat */}
          <section className="lg:col-span-4 order-2 lg:order-1 flex justify-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }} 
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 }}
             >
                <NeuralChatUI />
             </motion.div>
          </section>

          {/* Center: Neuron Orb */}
          <section className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center min-h-[400px] gap-12">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }} 
               animate={{ opacity: 1, scale: 1 }}
               transition={{ type: "spring", damping: 15 }}
               className="relative"
             >
                <LiquidGlass id="main-orb" intensity={6}>
                   <NeuronOrb size="lg" />
                </LiquidGlass>
             </motion.div>
          </section>

          {/* Right Side: Map & Stats */}
          <section className="lg:col-span-4 order-3 flex flex-col gap-8">
             <motion.div 
               initial={{ opacity: 0, x: 40 }} 
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.7 }}
               className="flex justify-center"
             >
                <HexagonMissionMap />
             </motion.div>

             {/* Tech Badges */}
             <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Secure AI", color: "purple" },
                  { icon: Zap, label: "Edge Sync", color: "cyan" },
                  { icon: Database, label: "Vector DB", color: "orange" },
                  { icon: Cpu, label: "Neural Net", color: "pink" }
                ].map((item, idx) => (
                  <div key={idx} className="glass-card p-4 rounded-xl flex items-center gap-3 group hover:border-white/20 transition-all">
                     <item.icon size={18} className={`text-${item.color}-400 group-hover:scale-110 transition-transform`} />
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                        {item.label}
                     </span>
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* BOTTOM Footer */}
        <footer className="w-full mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
             &copy; 2026 JULI SHESTAKOVA / NEURAL ARCHITECT
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-white/50 uppercase tracking-widest hover:text-purple-400 cursor-pointer transition-colors">Documentation</span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest hover:text-cyan-400 cursor-pointer transition-colors">Engineering Logs</span>
          </div>
        </footer>

      </div>
    </main>
  );
}
