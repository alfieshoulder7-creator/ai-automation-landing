'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
            <div className="w-3 h-3 bg-accent rounded-sm rotate-45" />
          </div>
          <span>NEURAL<span className="text-accent">OPS</span></span>
        </div>
        <div className="text-muted text-sm">
          © 2024 NeuralOps AI Automation Agency. All rights reserved.
        </div>
        <div className="flex gap-8 text-sm text-white/40">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
