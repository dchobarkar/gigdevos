"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

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
          className="font-mono text-sm text-accent-cyan mb-4"
        >
          $ whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
        >
          Building modern web apps{" "}
          <span className="gradient-text">at startup speed.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-muted max-w-xl"
        >
          Frontend & full-stack development for fast-moving teams. I ship
          production-ready apps and interfaces—no endless discovery, no bloat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-accent-cyan to-accent-purple px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            <Calendar size={16} />
            Book a Call
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 glass-card"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-sm text-foreground">
            Available for gigs
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 font-mono text-sm text-muted"
        >
          <span className="cursor-blink">Ready to ship.</span>
        </motion.p>
      </div>
    </section>
  );
}
