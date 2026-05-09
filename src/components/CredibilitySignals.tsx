'use client';

import React from 'react';

const partners = [
  "STRIPE", "SALESFORCE", "HUBSPOT", "ZAPIER", "AIRTABLE", "MAKE"
];

export default function CredibilitySignals() {
  return (
    <section className="py-12 border-y border-white/5 bg-charcoal/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/30 mb-8">
          WORKS WITH YOUR EXISTING TECH STACK
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">
          {partners.map((partner) => (
            <span key={partner} className="text-xl md:text-2xl font-bold tracking-tighter text-white">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
