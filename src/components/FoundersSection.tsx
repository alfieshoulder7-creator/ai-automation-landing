"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const FoundersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-morphism rounded-[40px] overflow-hidden border border-white/10">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
               {/* Using a placeholder-style design since I don't have the actual photo yet, 
                   but I'll use a sophisticated gradient and icon to make it look premium */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-zinc-900 flex items-center justify-center">
                <div className="relative w-64 h-64">
                   {/* This represents where the professional headshot would go */}
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl animate-pulse" />
                  <div className="relative z-10 w-full h-full rounded-2xl border-2 border-accent/30 overflow-hidden bg-zinc-800 flex items-center justify-center">
                    <span className="text-6xl font-bold text-accent/50">JD</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                <div className="font-bold text-xl mb-1">Julian Draxler</div>
                <div className="text-accent text-sm font-medium tracking-wider uppercase">Founder & Head of AI Strategy</div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-10 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
                  A Note From the Founder
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  "Most AI agencies focus on the tech. We focus on your <span className="text-accent">bottom line</span>."
                </h2>
                <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                  <p>
                    I started NeuralOps after watching dozens of enterprises struggle to bridge the gap between "AI hype" and actual operational efficiency. 
                  </p>
                  <p>
                    We don't just build chatbots. We architect autonomous systems that reclaim your team's most valuable asset: **time**. Our goal is to make your operations so efficient they feel like magic.
                  </p>
                </div>
                
                <div className="pt-8 flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                   {/* Simulated Digital Signature */}
                   <div className="font-serif italic text-3xl text-zinc-300 select-none">
                     Julian Draxler
                   </div>
                   <div className="h-8 w-[1px] bg-zinc-800 hidden sm:block" />
                   <div className="flex gap-4">
                     {/* Placeholder Socials */}
                     <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-accent/10 transition-colors cursor-pointer">
                        <span className="sr-only">LinkedIn</span>
                        <div className="w-4 h-4 bg-zinc-400 rounded-sm" />
                     </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
