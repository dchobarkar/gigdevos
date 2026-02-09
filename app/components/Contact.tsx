"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import {
  CONTACT_LINKS,
  CONTACT_SECTION,
  PRIMARY_CONTACT,
  PROFILE_LINKS,
} from "../constants/contact";

/** X (Twitter) icon — Lucide uses this name */
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

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4 text-center"
        >
          {CONTACT_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--muted)] text-center mb-12"
        >
          {CONTACT_SECTION.description}
        </motion.p>

        {/* Primary: Email + LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {PRIMARY_CONTACT.map((key) => {
            const link = CONTACT_LINKS[key];
            const isEmail = key === "email";
            return (
              <a
                key={key}
                href={link.href}
                {...(!isEmail && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="inline-flex items-center gap-3 rounded-lg border border-[var(--border)] px-6 py-4 text-base font-medium text-[var(--foreground)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover-glow transition-all"
              >
                {key === "linkedin" ? (
                  <Linkedin size={20} />
                ) : (
                  <Mail size={20} />
                )}
                {link.label}
              </a>
            );
          })}
        </motion.div>

        {/* Secondary: X + GitHub — profile links */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-[var(--muted)] mb-3"
        >
          {CONTACT_SECTION.profilesLabel}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {PROFILE_LINKS.map((key) => {
            const link = CONTACT_LINKS[key];
            return (
              <a
                key={key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)]/60 px-4 py-2.5 text-sm text-[var(--muted)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors"
              >
                {key === "x" ? <XIcon size={18} /> : <Github size={18} />}
                {link.label}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
