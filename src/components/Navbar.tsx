'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
            <div className="w-4 h-4 bg-background rounded-sm rotate-45" />
          </div>
          <span>NEURAL<span className="text-accent">OPS</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm text-muted hover:text-accent transition-colors">How It Works</Link>
          <Link href="#for-who" className="text-sm text-muted hover:text-accent transition-colors">Who It's For</Link>
          <Link href="#audit" className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-md text-sm font-medium hover:bg-accent/20 transition-all">
            Free Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}
