'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Cpu, Cloud, Globe } from 'lucide-react';
import NeuronOrb from '@/components/NeuronOrb';
import NeuralChatUI from '@/components/NeuralChatUI';
import ProjectMap from '@/components/ProjectMap';

/**
 * Portfolio Home Page (Sleek Minimalist Rebuild)
 * A premium professional interface showcasing AI architecture and product design.
 */

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white selection:bg-cyan-500/30">
      
      {/* 1. STICKY HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tighter uppercase text-white/90">JULI SHESTAKOVA</span>
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Senior AI Architect</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['About', 'Projects', 'Expertise', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="about" className="pt-32 pb-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left: Chat Console */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <NeuralChatUI />
            </motion.div>
          </div>

          {/* Center: Hero Core */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="mb-8"
            >
              <NeuronOrb size="lg" />
            </motion.div>
          </div>

          {/* Right: Visual Accent (Subtle Wireframe) */}
          <div className="hidden lg:flex lg:col-span-4 order-3 justify-end opacity-20 hover:opacity-40 transition-opacity">
             <NeuronOrb size="md" className="scale-75 blur-sm" />
          </div>
        </div>

        {/* Hero Text (Below the Orb) */}
        <div className="container mx-auto px-6 mt-16 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-glow-white">
              JULI SHESTAKOVA | SENIOR AI ARCHITECT
            </h2>
            <p className="text-sm md:text-base text-white/40 font-medium leading-relaxed uppercase tracking-wide">
              Pioneering intelligent systems through sophisticated neural network architectures and scalable AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Badges) */}
      <section id="expertise" className="py-10 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
          {[
            { icon: Shield, label: "Neural Networks" },
            { icon: Zap, label: "Scalable AI" },
            { icon: Database, label: "Deep Learning" },
            { icon: Cpu, label: "LLM Architect" },
            { icon: Cloud, label: "Cloud Compute" },
            { icon: Globe, label: "Global Infra" }
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="glass-pill px-6 py-3 rounded-full flex items-center gap-3 border border-white/5 hover:border-white/20 transition-all cursor-default"
            >
              <skill.icon size={14} className="text-white/60" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS MAP */}
      <section id="projects" className="py-20">
        <ProjectMap />
      </section>

      {/* 5. FOOTER */}
      <footer id="contact" className="py-12 border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">JULI SHESTAKOVA</span>
            <span className="text-[9px] text-white/20 uppercase tracking-widest">© 2026 AI ARCHITECT // SYSTEM_STABLE</span>
          </div>
          <div className="flex gap-12 items-center">
            {['GitHub', 'LinkedIn', 'Terminal'].map((link) => (
              <React.Fragment key={link}>
                {link === 'GitHub' ? (
                  <a href="https://github.com/JuliShestakova" target="_blank" rel="noreferrer" className="text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-cyan-400 transition-all">
                    {link}
                  </a>
                ) : (
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-cyan-400 cursor-pointer transition-all">
                    {link}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
