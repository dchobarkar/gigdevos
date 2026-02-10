"use client";

import { motion } from "framer-motion";

import { PROCESS_STEPS, PROCESS_SECTION } from "../constants/process";

const Process = () => {
  return (
    <section
      id="process"
      className="relative py-24 px-6 grid-overlay"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="process-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          {PROCESS_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          {PROCESS_SECTION.description}
        </motion.p>

        <div className="relative">
          {/* Horizontal connector — desktop only */}
          <div
            className="hidden lg:block absolute top-14 left-[8.33%] right-[8.33%] h-0.5 bg-border"
            aria-hidden
          />

          {/* Vertical connector — mobile only */}
          <div
            className="absolute left-6 top-14 bottom-14 w-0.5 bg-border md:hidden"
            aria-hidden
          />

          {/* Mobile: vertical timeline (single column, node left / content right) */}
          <div className="md:hidden space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.article
                key={step.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex gap-4 pl-4"
                aria-label={`Step ${i + 1}: ${step.label}. ${step.description}`}
              >
                <div className="flex shrink-0 flex-col items-center w-8">
                  <span className="font-mono text-xs font-medium text-accent-cyan tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="glass-card rounded-full p-2.5 border border-border hover-glow relative z-10 mt-1">
                    <step.icon
                      className="text-accent-cyan"
                      size={22}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="min-w-0 flex-1 pb-2">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {step.label}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Tablet: 2-col grid. Desktop: 6-col horizontal stepper */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.article
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex flex-col items-center text-center"
                aria-label={`Step ${i + 1}: ${step.label}. ${step.description}`}
              >
                <span
                  className="font-mono text-xs font-medium text-accent-cyan tabular-nums mb-2"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="glass-card rounded-full p-4 border border-border hover-glow mb-4 relative z-10">
                  <step.icon
                    className="text-accent-cyan"
                    size={24}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {step.label}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
