"use client";

import { motion } from "framer-motion";

import { STACK_GROUPS, STACK_SECTION } from "../constants/stack";

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4"
        >
          {STACK_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--muted)] max-w-xl mb-16"
        >
          {STACK_SECTION.description}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {STACK_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass-card rounded-xl p-6 border border-[var(--border)]"
            >
              <div className="flex items-center gap-2 mb-6">
                <group.icon
                  className="text-[var(--accent-cyan)]"
                  size={24}
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-[var(--muted)]"
                  >
                    <item.icon
                      size={18}
                      className="text-[var(--border)] shrink-0"
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
