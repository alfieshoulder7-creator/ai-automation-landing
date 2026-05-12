'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  "STRIPE", "SALESFORCE", "HUBSPOT", "ZAPIER", "AIRTABLE", "MAKE", "STRIPE", "SALESFORCE", "HUBSPOT", "ZAPIER", "AIRTABLE", "MAKE"
];

export default function CredibilitySignals() {
  return (
    <section id="credibility" className="py-16 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-12">
          WORKS WITH YOUR EXISTING TECH STACK
        </p>
        <div className="relative">
          {/* Gradients for fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
          
          <motion.div 
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, idx) => (
              <span 
                key={`${partner}-${idx}`} 
                className="text-2xl md:text-3xl font-black tracking-tighter text-white/20 hover:text-white/40 transition-colors cursor-default"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

