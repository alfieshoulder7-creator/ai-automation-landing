"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TASKS = [
  { id: 1, type: "Lead Research", status: "completed", result: "Identified 12 decision makers at Acme Corp" },
  { id: 2, type: "Data Enrichment", status: "completed", result: "Verified 8 direct email addresses" },
  { id: 3, type: "Outreach", status: "processing", result: "Generating personalized message..." },
  { id: 4, type: "CRM Sync", status: "pending", result: "Waiting for outreach completion" },
  { id: 5, type: "Document Parsing", status: "completed", result: "Extracted deal terms from Master Agreement" },
];

export const LiveAgentPreview = () => {
  const [activeTasks, setActiveTasks] = useState(TASKS);
  const [ticker, setTicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicker(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live-preview" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Inside the <span className="text-accent-gradient">NeuralOps Engine</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Don't just take our word for it. Watch our autonomous agents handle complex multi-step workflows in real-time. This is what true scale looks like.
            </p>
            
            <ul className="space-y-4">
              {[
                "24/7 Autonomous Operation",
                "Self-Healing Workflows",
                "Zero Human Intervention Required",
                "Audit Logs for Every Decision"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* Terminal Window */}
            <div className="glass-morphism rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs font-mono text-zinc-500">neural-agent-01.local</div>
                <div className="w-10" />
              </div>
              
              <div className="p-6 font-mono text-sm space-y-4 min-h-[350px]">
                <AnimatePresence mode="popLayout">
                  {activeTasks.map((task, i) => (
                    <motion.div
                      key={`${task.id}-${ticker}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className={
                        task.status === "completed" ? "text-green-400" :
                        task.status === "processing" ? "text-blue-400 animate-pulse" :
                        "text-zinc-500"
                      }>
                        {task.status === "completed" ? "✓" : task.status === "processing" ? "▶" : "○"}
                      </span>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-zinc-300">{task.type}</span>
                          <span className="text-[10px] text-zinc-600 uppercase">{task.status}</span>
                        </div>
                        <div className="text-zinc-500 text-xs italic">{task.result}</div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                <motion.div 
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-accent ml-8 mt-4"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass-morphism p-4 rounded-2xl border border-accent/30 shadow-[0_0_30px_rgba(124,58,237,0.2)]"
            >
              <div className="text-[10px] uppercase text-zinc-500 font-bold mb-1">Processing Power</div>
              <div className="text-xl font-bold text-white">12.4 Tasks/sec</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
