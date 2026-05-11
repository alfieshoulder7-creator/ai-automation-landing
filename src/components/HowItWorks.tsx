'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading"
          >
            How we <span className="text-accent">reclaim your time</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            A structured, no-nonsense approach to transforming your manual operations into autonomous systems.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-8 rounded-3xl glass border-white/5 hover:border-accent/20 transition-all duration-500"
            >
              <div className="text-6xl font-black text-accent/5 absolute top-4 right-6 transition-colors group-hover:text-accent/10">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

