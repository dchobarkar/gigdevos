"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Analytics dashboards",
    description:
      "Built analytics dashboards for energy sector operations—real-time metrics, reporting, and data pipelines.",
  },
  {
    title: "Multi-region marketing",
    description:
      "Developed multi-region marketing platforms with localized content and conversion tracking.",
  },
  {
    title: "Data visualization",
    description:
      "Created data visualization systems for manufacturing—inventory, throughput, and forecasting UIs.",
  },
];

export default function NDAExperience() {
  return (
    <section id="experience" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          NDA-safe experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          Anonymized project experience. No logos, no client names—just the kind
          of work I’ve shipped.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 border border-border hover-glow"
            >
              <Briefcase
                className="mb-4 text-accent-purple"
                size={24}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-muted">{exp.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
