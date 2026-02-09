"use client";

import { motion } from "framer-motion";

import { PROCESS_STEPS, PROCESS_SECTION } from "../constants/process";

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4"
        >
          {PROCESS_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--muted)] max-w-xl mb-16"
        >
          {PROCESS_SECTION.description}
        </motion.p>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[var(--border)]"
            style={{ left: "8.33%", right: "8.33%" }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="glass-card rounded-full p-4 border border-[var(--border)] mb-4 relative z-10 hover-glow w-fit">
                  <step.icon
                    className="text-[var(--accent-cyan)]"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-mono text-xs text-[var(--accent-cyan)] mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">
                  {step.label}
                </h3>
                <p className="text-xs text-[var(--muted)]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
