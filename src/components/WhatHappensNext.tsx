'use client';

import React from 'react';
import { PhoneCall, FileText, CheckCircle } from 'lucide-react';

export default function WhatHappensNext() {
  return (
    <section id="whats-next" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What happens next?</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Our process is designed to be high-value and low-pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <PhoneCall className="text-accent" />,
              title: "1. Discovery",
              desc: "A brief call to understand your business model, current tools, and operational pain points."
            },
            {
              icon: <FileText className="text-accent" />,
              title: "2. Custom Roadmap",
              desc: "Within 48 hours, we send you a detailed breakdown of automation opportunities we identified."
            },
            {
              icon: <CheckCircle className="text-accent" />,
              title: "3. Decisions",
              desc: "You decide if you want us to build it for you, or if you'd rather keep it in-house. Zero pressure."
            }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
