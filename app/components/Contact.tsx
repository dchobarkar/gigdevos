"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import {
  CONTACT_SECTION,
  EMAIL_CTA,
  RESPONSE_MICROCOPY,
  PLATFORM_ROUTING,
} from "../constants/contact";

function XIcon({ size = 20 }: { size?: number }) {
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
}

const PLATFORM_ICONS = {
  linkedin: Linkedin,
  github: Github,
  x: XIcon,
} as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 grid-overlay"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column: title, description, email CTA, microcopy */}
          <div className="flex flex-col">
            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4"
            >
              {CONTACT_SECTION.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--muted)] mb-8 max-w-lg"
            >
              {CONTACT_SECTION.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <a
                href={EMAIL_CTA.href}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] px-6 py-4 text-base font-medium text-[var(--cta-text)] shadow-[0_0_24px_rgba(34,211,238,0.2)] hover:shadow-[0_0_32px_rgba(34,211,238,0.3)] hover:opacity-95 transition-all duration-200"
                aria-label="Send project inquiry by email"
              >
                <Mail size={20} aria-hidden />
                {EMAIL_CTA.label}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-[var(--muted)]"
            >
              {RESPONSE_MICROCOPY}
            </motion.p>
          </div>

          {/* Right column: platform routing grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {PLATFORM_ROUTING.map((platform) => {
              const Icon = PLATFORM_ICONS[platform.key];
              return (
                <a
                  key={platform.key}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-[var(--border)] glass-card p-5 hover-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
                  aria-label={`${platform.ctaLabel} — opens in new tab`}
                >
                  <div className="flex shrink-0 rounded-lg p-2.5 text-[var(--muted)] group-hover:text-[var(--accent-cyan)] transition-colors border border-[var(--border)]/60">
                    {platform.key === "x" ? (
                      <XIcon size={22} />
                    ) : (
                      <Icon size={22} aria-hidden />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-semibold text-[var(--foreground)]">
                      {platform.name}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-[var(--muted)] group-hover:text-[var(--accent-cyan)] transition-colors">
                      {platform.ctaLabel}
                      <ArrowUpRight
                        size={14}
                        className="shrink-0"
                        aria-hidden
                      />
                    </span>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
