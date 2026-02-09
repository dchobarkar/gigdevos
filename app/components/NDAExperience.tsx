"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import { EXPERIENCES, EXPERIENCE_SECTION } from "../constants/experience";

export default function NDAExperience() {
  return (
    <section id="experience" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4"
        >
          {EXPERIENCE_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--muted)] max-w-xl mb-16"
        >
          {EXPERIENCE_SECTION.description}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 border border-[var(--border)] hover-glow"
            >
              <Briefcase
                className="mb-4 text-[var(--accent-purple)]"
                size={24}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{exp.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
