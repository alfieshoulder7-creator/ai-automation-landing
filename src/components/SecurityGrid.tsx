"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "End-to-End Encryption",
    description: "Your data is encrypted at rest and in transit with industry-standard AES-256.",
    icon: "🔒"
  },
  {
    title: "Privacy-First AI",
    description: "We use private LLM instances. Your data is never used to train public models.",
    icon: "🛡️"
  },
  {
    title: "SOC2 Compliant Workflows",
    description: "Architected to meet the strictest enterprise security and compliance standards.",
    icon: "📜"
  },
  {
    title: "Role-Based Access",
    description: "Granular permissions ensure the right people (and agents) have the right access.",
    icon: "🔑"
  }
];

export const SecurityGrid = () => {
  return (
    <section id="security" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Enterprise-Grade <span className="text-accent-gradient">Security</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Your intellectual property is your competitive advantage. We protect it with a multi-layered security architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-morphism p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all hover-glow"
            >
              <div className="text-3xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
