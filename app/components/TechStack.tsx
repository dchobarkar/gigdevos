"use client";

import { motion } from "framer-motion";
import { STACK_GROUPS, STACK_SECTION } from "../constants/stack";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative py-24 px-6 grid-overlay"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="stack-heading"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STACK_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="glass-card rounded-xl p-6 border border-[var(--border)] hover-glow transition-shadow duration-200"
            >
              <div className="flex items-center gap-2 mb-6">
                <group.icon
                  className="text-[var(--accent-cyan)] shrink-0"
                  size={24}
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-3" role="list">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="group/item flex items-center gap-3 text-sm text-[var(--muted)]"
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded p-0.5 text-[var(--border)] transition-colors group-hover/item:text-[var(--accent-cyan)]"
                      aria-hidden
                    >
                      <item.icon size={18} strokeWidth={1.5} />
                    </span>
                    <span
                      title={item.tooltip}
                      className="font-medium text-[var(--foreground)]"
                    >
                      {item.label}
                    </span>
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
