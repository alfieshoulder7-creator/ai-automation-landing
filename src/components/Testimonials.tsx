"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at FintechFlow",
    content: "NeuralOps transformed our client onboarding from a 3-day manual slog into a 15-minute automated workflow. The ROI was immediate.",
    image: "https://i.pravatar.cc/150?u=sarah",
    badge: "ROI 4.2x"
  },
  {
    name: "Mark Thompson",
    role: "Founder of ScaleLab",
    content: "I was skeptical about AI agents, but the custom systems they built for our data entry tasks saved us from hiring two full-time admins.",
    image: "https://i.pravatar.cc/150?u=mark",
    badge: "-40h/week"
  },
  {
    name: "Elena Rodriguez",
    role: "COO at Global Logistics",
    content: "The visibility we now have into our operations is incredible. The automated reporting alone has saved me 5 hours of prep every week.",
    image: "https://i.pravatar.cc/150?u=elena",
    badge: "Efficiency +45%"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Trusted by <span className="text-accent">Forward-Thinking</span> Founders
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-morphism p-12 md:p-20 rounded-[3rem] border-white/10 relative overflow-hidden"
            >
              <Quote className="absolute top-10 left-10 text-accent/20 w-20 h-20 -z-10" />
              
              {/* Floating Success Badge */}
              <motion.div
                initial={{ rotate: 12, scale: 0 }}
                animate={{ rotate: 12, scale: 1 }}
                key={`badge-${index}`}
                className="absolute top-10 right-10 bg-accent text-white px-4 py-2 rounded-full font-black text-sm shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                {testimonials[index].badge}
              </motion.div>

              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-8 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                
                <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-12 italic">
                  "{testimonials[index].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/30">
                    <img src={testimonials[index].image} alt={testimonials[index].name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-lg">{testimonials[index].name}</h4>
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider">{testimonials[index].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
