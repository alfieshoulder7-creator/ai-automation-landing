'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal border border-white/10 text-accent text-xs font-medium mb-6">
              <Zap size={14} /> AI Automation Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Stop losing 20+ hours a week to <span className="text-accent">manual operations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted mb-10 leading-relaxed"
          >
            Most founders are buried in repetitive tasks that could be automated.
            We build custom AI systems that reclaim your time, reduce overhead, and scale your operations without increasing headcount.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#audit"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-accent transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Request an AI Automation Audit
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock size={16} className="text-accent" />
              <span>Saves average 15h/week</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}