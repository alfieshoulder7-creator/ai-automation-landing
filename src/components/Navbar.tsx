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
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white flex items-center gap-2 font-heading"
        >
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
          </div>
          <span>
            NEURAL<span className="text-accent">OPS</span>
          </span>
        </Link>

        <Link
          href="#audit"
          className="px-6 py-2.5 bg-white text-black rounded-xl text-sm font-black hover:bg-accent hover:text-white transition-all duration-300 shadow-lg active:scale-95 whitespace-nowrap"
        >
          Free audit
        </Link>
      </div>
    </motion.nav>
  );
}
