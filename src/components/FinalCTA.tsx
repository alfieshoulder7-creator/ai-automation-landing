'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 -z-10" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Ready to scale without the <span className="text-accent">chaos</span>?
        </h2>
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Join the forward-thinking companies already using our AI systems to automate 50% of their operations.
        </p>
        <a
          href="#audit"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-accent transition-all duration-300 shadow-xl"
        >
          Request Your AI Audit
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
