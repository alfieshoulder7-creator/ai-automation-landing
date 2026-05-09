'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

const isFor = [
  "B2B service businesses generating $50k+/mo",
  "Teams spending 20+ hours/week on manual admin",
  "Founders stuck in operations instead of growth",
  "Companies looking to scale without hiring linearly",
  "Agencies with repeatable client onboarding/delivery workflows"
];

const isNotFor = [
  "Early stage startups without validated workflows",
  "Businesses looking for 'magic' AI sales hacks",
  "Teams unwilling to document current processes",
  "Low volume businesses where human touch is the product",
  "Anyone looking for a quick, low-budget Fiverr bot"
];

export default function ForNotFor() {
  return (
    <section id="for-who" className="py-24 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Is this for you?</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Automation isn't a silver bullet. It works best when applied to proven, repeatable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For column */}
          <div className="p-8 rounded-2xl border border-accent/20 bg-accent/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Check className="text-accent" /> You're a perfect fit if:
            </h3>
            <ul className="space-y-4">
              {isFor.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check size={12} className="text-accent" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For column */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <X className="text-muted" /> We're not for you if:
            </h3>
            <ul className="space-y-4">
              {isNotFor.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <X size={12} className="text-white/40" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
