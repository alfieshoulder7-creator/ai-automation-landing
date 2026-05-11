'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 font-heading">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
          </div>
          <span>NEURAL<span className="text-accent">OPS</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="#how-it-works" className="text-sm font-bold text-muted hover:text-white transition-colors uppercase tracking-widest">How It Works</Link>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Systems Active</span>
          </div>
          <Link 
            href="#audit" 
            className="px-6 py-2.5 bg-white text-black rounded-xl text-sm font-black hover:bg-accent hover:text-white transition-all duration-300 shadow-lg active:scale-95"
          >
            FREE AUDIT
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

