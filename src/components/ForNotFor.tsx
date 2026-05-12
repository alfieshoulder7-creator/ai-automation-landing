'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowUpRight } from 'lucide-react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function ForNotFor() {
  return (
    <section id="for-not-for" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading"
          >
            Is this <span className="text-accent">for you?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Automation isn't a silver bullet. It works best when applied to proven, repeatable systems that are currently manual.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* For column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group p-10 rounded-3xl glass-morphism border-accent/20 bg-accent/5 hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <ArrowUpRight className="text-accent" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Check className="text-accent" />
              </div>
              Perfect Match
            </h3>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {isFor.map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex gap-4 text-zinc-300">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Check size={14} className="text-accent" />
                  </div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-10 pt-10 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-accent font-bold flex items-center gap-2">
                We should talk. <span className="text-white/40">Request an audit below.</span>
              </p>
            </div>
          </motion.div>

          {/* Not For column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group p-10 rounded-3xl glass border-white/10 hover:border-white/20 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <X className="text-white/40" />
              </div>
              Not Ready Yet
            </h3>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {isNotFor.map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex gap-4 text-zinc-400">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                    <X size={14} className="text-white/20" />
                  </div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

