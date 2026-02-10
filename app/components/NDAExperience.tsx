"use client";

import { motion } from "framer-motion";

import { EXPERIENCES, EXPERIENCE_SECTION } from "../constants/experience";

const NDAExperience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 grid-overlay"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          {EXPERIENCE_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          {EXPERIENCE_SECTION.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 border border-border hover-glow transition-shadow duration-200"
            >
              <div
                className="mb-4 inline-flex rounded-lg p-2 text-accent-purple"
                aria-hidden
              >
                <exp.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-md border border-border/60 bg-border/20 px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NDAExperience;
