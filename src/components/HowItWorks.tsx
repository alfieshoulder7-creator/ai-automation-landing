'use client';

import React from 'react';

const steps = [
  {
    number: "01",
    title: "Process Audit",
    description: "We map out your current workflows to identify time sinks and manual bottlenecks."
  },
  {
    number: "02",
    title: "Strategy Design",
    description: "We design a custom AI automation roadmap specifically for your business logic."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our engineers build, test, and integrate the automation systems into your stack."
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous monitoring and refinement to ensure maximum efficiency and ROI."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How we reclaim your time</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A structured, no-nonsense approach to transforming your manual operations into autonomous systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-5xl font-black text-white/5 absolute -top-8 -left-2 transition-colors group-hover:text-accent/10">
                {step.number}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
