"use client";

import { motion } from "framer-motion";

import { SERVICES, CAPABILITY_SECTION } from "../constants/services";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Capability() {
  return (
    <section id="capability" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4"
        >
          {CAPABILITY_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--muted)] max-w-xl mb-16"
        >
          {CAPABILITY_SECTION.description}
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="glass-card rounded-xl p-6 hover-glow border border-[var(--border)]"
            >
              <service.icon
                className="mb-4 text-[var(--accent-cyan)]"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded bg-[var(--border)]/50 text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
