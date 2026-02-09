"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { CONTACT_LINKS, CONTACT_SECTION } from "../constants/contact";

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href={CONTACT_LINKS.email.href}
            className="inline-flex items-center gap-3 rounded-lg border border-[var(--border)] px-6 py-4 text-base font-medium text-[var(--foreground)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover-glow transition-all"
          >
            <Mail size={20} />
            {CONTACT_LINKS.email.label}
          </a>
          <a
            href={CONTACT_LINKS.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg border border-[var(--border)] px-6 py-4 text-base font-medium text-[var(--foreground)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] hover-glow transition-all"
          >
            <Linkedin size={20} />
            {CONTACT_LINKS.linkedin.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
