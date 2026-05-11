'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Search, Lightbulb, TrendingUp } from 'lucide-react';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      onViewportEnter={() => {
        animate(0, value, {
          duration: 2,
          onUpdate: (latest) => setCount(Math.round(latest)),
        });
      }}
    >
      {count}{suffix}
    </motion.span>
  );
};

export default function AuditSection() {
  return (
    <section id="audit" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading"
            >
              Get your free <span className="text-accent-gradient">AI Automation Audit</span>

            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted text-lg mb-12 leading-relaxed"
            >
              We'll spend 30 minutes diving into your current operations to uncover exactly where you're losing time and money. No generic advice—just a clear roadmap for your specific business.
            </motion.p>
            
            <div className="grid gap-8">
              {[
                { icon: <Search className="text-accent" />, title: "Workflow Analysis", desc: "We identify the repetitive tasks draining your team's energy." },
                { icon: <Lightbulb className="text-accent" />, title: "Automation Mapping", desc: "We show you exactly which AI tools and agents will solve your bottlenecks." },
                { icon: <TrendingUp className="text-accent" />, title: "ROI Estimation", desc: "A realistic look at the hours saved and cost reduction potential." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl glass border-accent/20 flex items-center justify-around text-center">
              <div>
                <p className="text-accent text-3xl font-black mb-1"><Counter value={20} suffix="+" /></p>
                <p className="text-xs uppercase tracking-widest font-bold text-white/40">Hours Saved/Week</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-accent text-3xl font-black mb-1"><Counter value={40} suffix="%" /></p>
                <p className="text-xs uppercase tracking-widest font-bold text-white/40">Cost Reduction</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-morphism p-10 rounded-3xl border-white/10 shadow-2xl relative z-20"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 blur-2xl rounded-full -z-10" />

            <h3 className="text-2xl font-bold text-white mb-8 text-center">Reserve your audit</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-muted mb-2 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 focus:bg-white/10"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-muted mb-2 uppercase tracking-wide">Work Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 focus:bg-white/10"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-muted mb-2 uppercase tracking-wide">Monthly Revenue (Approx)</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 focus:bg-white/10 appearance-none">
                  <option className="bg-zinc-900">Under $50k</option>
                  <option className="bg-zinc-900">$50k - $200k</option>
                  <option className="bg-zinc-900">$200k - $1M</option>
                  <option className="bg-zinc-900">$1M+</option>
                </select>
              </div>
              <button className="w-full py-5 bg-white text-black font-black rounded-xl hover:bg-accent hover:text-white transition-all duration-500 mt-4 shadow-lg active:scale-[0.98]">
                Request Audit
              </button>
              <p className="text-[10px] text-center text-white/30 mt-6 uppercase tracking-[0.2em] font-bold">
                No commitment required. 100% Confidential.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

