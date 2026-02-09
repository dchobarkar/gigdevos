"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HERO_CONTENT } from "../constants/hero";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 grid-overlay"
    >
      <div className="mx-auto max-w-3xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-[var(--accent-cyan)] mb-4"
        >
          {HERO_CONTENT.terminalPrompt}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-tight"
        >
          {HERO_CONTENT.headline.main}{" "}
          <span className="gradient-text">
            {HERO_CONTENT.headline.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-[var(--muted)] max-w-xl"
        >
          {HERO_CONTENT.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            href={HERO_CONTENT.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] px-5 py-3 text-sm font-medium text-[var(--cta-text)] hover:opacity-90 transition-opacity"
          >
            {HERO_CONTENT.cta.label}
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 glass-card"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-sm text-[var(--foreground)]">
            {HERO_CONTENT.availability.badge}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 font-mono text-sm text-[var(--muted)]"
        >
          <span className="cursor-blink">
            {HERO_CONTENT.availability.status}
          </span>
        </motion.p>
      </div>
    </section>
  );
}
