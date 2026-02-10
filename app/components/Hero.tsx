"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github } from "lucide-react";
import Link from "next/link";

import { HERO_CONTENT } from "../constants/hero";
import { CONTACT_LINKS } from "../constants/contact";

const XIcon = ({ size = 18 }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

const PLATFORM_ICONS = {
  linkedin: Linkedin,
  github: Github,
  x: XIcon,
} as const;

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 grid-overlay"
      aria-label="Hero"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-sm mb-6"
            >
              <p className="text-accent-cyan">
                {HERO_CONTENT.terminal.command}
              </p>
              <p className="text-muted mt-1">
                {HERO_CONTENT.terminal.output}
                <span className="cursor-blink" aria-hidden />
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            >
              {HERO_CONTENT.headline.line1}
              <br />
              <span className="gradient-text">
                {HERO_CONTENT.headline.line2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="mt-6 text-lg text-muted max-w-xl"
            >
              {HERO_CONTENT.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {HERO_CONTENT.capabilityHighlights.map((label) => (
                <span
                  key={label}
                  className="inline-flex rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="mt-8 inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border border-border px-4 py-3 glass-card w-fit"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-sm font-medium text-foreground">
                  {HERO_CONTENT.availability.badge}
                </span>
              </div>
              <span className="text-sm text-muted">
                {HERO_CONTENT.availability.note}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.34 }}
              className="mt-8"
            >
              <Link
                href={HERO_CONTENT.cta.primary.href}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-purple px-6 py-3 text-sm font-medium text-cta-text shadow-[0_0_24px_rgba(34,211,238,0.25)] hover:shadow-[0_0_32px_rgba(34,211,238,0.35)] hover:opacity-95 transition-all duration-200"
                aria-label="Start a build — go to contact"
              >
                {HERO_CONTENT.cta.primary.label}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {HERO_CONTENT.cta.secondaryPlatforms.map((key) => {
                const link = CONTACT_LINKS[key];
                const Icon = PLATFORM_ICONS[key];
                return (
                  <a
                    key={key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-muted hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                    aria-label={`${link.label} — open in new tab`}
                  >
                    {key === "x" ? (
                      <XIcon size={18} />
                    ) : (
                      <Icon size={18} aria-hidden />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-md aspect-[4/3] rounded-2xl border border-border glass-card overflow-hidden"
              aria-hidden
            >
              <div className="absolute inset-0 p-4 flex flex-col gap-3">
                <div className="h-8 rounded-lg bg-border/40 w-3/4" />
                <div className="flex gap-2 flex-1">
                  <div className="w-1/3 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-border/50" />
                  <div className="flex-1 rounded-lg bg-border/30 border border-border/50 flex flex-col gap-2 p-2">
                    <div className="h-3 rounded bg-border/50 w-full" />
                    <div className="h-3 rounded bg-border/50 w-5/6" />
                    <div className="h-3 rounded bg-border/50 w-4/6" />
                  </div>
                </div>
                <div className="h-12 rounded-lg bg-border/30 w-full" />
              </div>
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
