'use client';

import React from 'react';
import { Search, Lightbulb, TrendingUp } from 'lucide-react';

export default function AuditSection() {
  return (
    <section id="audit" className="py-24 bg-gradient-to-b from-transparent to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get your free <span className="text-accent">AI Automation Audit</span>
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              We'll spend 30 minutes diving into your current operations to uncover exactly where you're losing time and money. No generic advice—just a clear roadmap for your specific business.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Search className="text-accent" />, title: "Workflow Analysis", desc: "We identify the repetitive tasks draining your team's energy." },
                { icon: <Lightbulb className="text-accent" />, title: "Automation Mapping", desc: "We show you exactly which AI tools and agents will solve your bottlenecks." },
                { icon: <TrendingUp className="text-accent" />, title: "ROI Estimation", desc: "A realistic look at the hours saved and cost reduction potential." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-charcoal border border-white/10 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Reserve your audit</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Work Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted mb-2">Monthly Revenue (Approx)</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors">
                  <option className="bg-charcoal">Under $50k</option>
                  <option className="bg-charcoal">$50k - $200k</option>
                  <option className="bg-charcoal">$200k - $1M</option>
                  <option className="bg-charcoal">$1M+</option>
                </select>
              </div>
              <button className="w-full py-4 bg-accent text-black font-bold rounded-lg hover:bg-accent-dark transition-all duration-300 mt-2">
                Request Audit
              </button>
              <p className="text-[10px] text-center text-white/30 mt-4 uppercase tracking-widest">
                No commitment required. 100% Confidential.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
