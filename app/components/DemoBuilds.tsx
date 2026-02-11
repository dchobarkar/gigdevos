"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { DEMOS, DEMOS_SECTION } from "../constants/demos";

const DemoBuilds = () => {
  return (
    <section
      id="demos"
      className="relative py-24 px-6 grid-overlay"
      aria-labelledby="demos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="demos-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          {DEMOS_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          {DEMOS_SECTION.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEMOS.map((demo, i) => (
            <motion.article
              key={demo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card rounded-xl overflow-hidden border border-border hover-glow group"
            >
              <div className="aspect-[5/3] bg-card border-b border-border overflow-hidden relative">
                {demo.image ? (
                  <Image
                    src={demo.image}
                    alt={`${demo.title} dashboard screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-border/30 to-card flex items-center justify-center">
                    <span className="font-mono text-xs text-muted">
                      Demo preview
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {demo.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {demo.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {demo.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2 py-1 rounded bg-border/50 text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={demo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:underline focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background rounded"
                    aria-label={`${demo.title} — view live demo`}
                  >
                    <ExternalLink size={14} aria-hidden />
                    Live demo
                  </a>
                  <a
                    href={demo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-background rounded"
                    aria-label={`${demo.title} — view GitHub repository`}
                  >
                    <Github size={14} aria-hidden />
                    Repo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoBuilds;
