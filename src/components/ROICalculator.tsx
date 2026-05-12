"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

export const ROICalculator = () => {
  const [teamSize, setTeamSize] = useState(10);
  const [manualHours, setManualHours] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);

  const stats = useMemo(() => {
    const weeklyHoursSaved = teamSize * manualHours * 0.7; // Assuming 70% automation efficiency
    const yearlySavings = weeklyHoursSaved * 52 * hourlyRate;
    const monthlySavings = yearlySavings / 12;
    const costOfInaction = yearlySavings * 1.5; // Opportunity cost + direct cost

    return {
      weeklyHoursSaved: Math.round(weeklyHoursSaved),
      yearlySavings: Math.round(yearlySavings).toLocaleString(),
      monthlySavings: Math.round(monthlySavings).toLocaleString(),
      costOfInaction: Math.round(costOfInaction).toLocaleString(),
    };
  }, [teamSize, manualHours, hourlyRate]);

  return (
    <section id="roi" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your <span className="text-accent-gradient">Automation ROI</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Stop guessing. See exactly how much time and capital you're leaving on the table by delaying AI implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Controls */}
          <div className="glass-morphism p-8 rounded-3xl space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-zinc-300">Team Size</label>
                <span className="text-accent font-bold text-lg">{teamSize} Members</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                className="w-full accent-accent h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-zinc-300">Manual Hours / Person / Week</label>
                <span className="text-accent font-bold text-lg">{manualHours} Hours</span>
              </div>
              <input
                type="range"
                min="1"
                max="40"
                value={manualHours}
                onChange={(e) => setManualHours(parseInt(e.target.value))}
                className="w-full accent-accent h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-zinc-300">Avg. Hourly Rate ($)</label>
                <span className="text-accent font-bold text-lg">${hourlyRate}/hr</span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full accent-accent h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                key={stats.weeklyHoursSaved}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-morphism p-6 rounded-2xl border-l-4 border-l-blue-500"
              >
                <div className="text-zinc-400 text-sm mb-1">Hours Reclaimed / Week</div>
                <div className="text-3xl font-bold text-white">{stats.weeklyHoursSaved}h</div>
              </motion.div>
              
              <motion.div 
                key={stats.monthlySavings}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-morphism p-6 rounded-2xl border-l-4 border-l-accent"
              >
                <div className="text-zinc-400 text-sm mb-1">Monthly Savings</div>
                <div className="text-3xl font-bold text-white">${stats.monthlySavings}</div>
              </motion.div>
            </div>

            <motion.div 
              key={stats.yearlySavings}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-morphism p-10 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
              </div>
              <div className="relative z-10">
                <div className="text-zinc-400 text-lg mb-2 font-medium">Total Yearly Efficiency Gain</div>
                <div className="text-6xl font-black text-accent-gradient mb-4">${stats.yearlySavings}</div>
                <div className="flex items-center gap-2 text-red-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  Estimated Cost of Inaction: ${stats.costOfInaction}/yr
                </div>
              </div>
            </motion.div>

            <button className="w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-all active:scale-[0.98]">
              Get Your Custom Automation Roadmap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
