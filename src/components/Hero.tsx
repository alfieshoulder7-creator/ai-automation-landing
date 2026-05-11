'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap, Bot, Database, Sparkles } from 'lucide-react';

const FloatingCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -15, 0],
      }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }
      }}
      className={`absolute hidden lg:block glass-morphism p-4 rounded-2xl z-10 hover-glow transition-all ${className}`}
    >
      {children}
    </motion.div>
);

const OrbitDot = ({ delay = 0, size = 4, className = "" }: { delay?: number, size?: number, className?: string }) => (
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 10 + delay * 5,
      repeat: Infinity,
      ease: "linear",
    }}
    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    style={{ width: `${150 + delay * 100}px`, height: `${150 + delay * 100}px` }}
  >
    <motion.div 
      className="bg-accent rounded-full opacity-40 blur-[1px]"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  </motion.div>
);

export default function Hero() {
  const words = "Stop losing 20+ hours a week to manual operations".split(" ");

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      {/* Background Decor (Layered behind content) */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/15 blur-[120px] rounded-full opacity-50" />
        
        {/* Orbit Dots */}
        <OrbitDot delay={1} className="opacity-20" />
        <OrbitDot delay={2} className="opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Floating UI Elements */}
        <FloatingCard delay={0.5} className="top-10 left-[5%]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
              <Bot size={18} />
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Status</p>
              <p className="text-sm font-semibold text-white">AI Agent Active</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard delay={1.2} className="bottom-20 left-[8%]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Database size={18} />
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Output</p>
              <p className="text-sm font-semibold text-white">Data Sync Complete</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard delay={0.8} className="top-20 right-[5%]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider font-bold">Optimization</p>
              <p className="text-sm font-semibold text-white">Efficiency +42%</p>
            </div>
          </div>
        </FloatingCard>

        <div className="max-w-4xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-accent text-xs font-semibold mb-8 tracking-wide uppercase">
              <Zap size={14} className="fill-accent" /> Custom AI Systems for B2B
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] font-heading">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + i * 0.05,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="inline-block mr-[0.3em] last:mr-0"
              >
                {word === "manual" || word === "operations" ? (
                  <span className="text-accent-gradient">{word}</span>
                ) : word}

              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-muted mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Most founders are buried in repetitive tasks. We build autonomous workflows that reclaim your time and scale your operations without increasing headcount.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#audit"
              className="group relative flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-accent hover:text-white transition-all duration-500 shadow-xl overflow-hidden interactive-scale"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                Request an AI Automation Audit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
            <div className="flex items-center gap-2 text-sm font-medium text-muted glass px-4 py-2 rounded-lg">
              <Clock size={16} className="text-accent" />
              <span>Saves average 15h/week</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}