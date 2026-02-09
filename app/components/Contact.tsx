"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, MessageCircle, Send } from "lucide-react";

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

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href={CONTACT_LINKS.email.href}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-sm text-[var(--foreground)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <Mail size={18} />
            {CONTACT_LINKS.email.label}
          </a>
          <a
            href={CONTACT_LINKS.calendly.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-sm text-[var(--foreground)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <Calendar size={18} />
            {CONTACT_LINKS.calendly.label}
          </a>
          <a
            href={CONTACT_LINKS.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-3 text-sm text-[var(--foreground)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            <MessageCircle size={18} />
            {CONTACT_LINKS.whatsapp.label}
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-6 border border-[var(--border)] space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              {CONTACT_SECTION.form.name.label}
            </label>
            <input
              id="name"
              type="text"
              placeholder={CONTACT_SECTION.form.name.placeholder}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              {CONTACT_SECTION.form.email.label}
            </label>
            <input
              id="email"
              type="email"
              placeholder={CONTACT_SECTION.form.email.placeholder}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              {CONTACT_SECTION.form.message.label}
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={CONTACT_SECTION.form.message.placeholder}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)] resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] px-5 py-3 text-sm font-medium text-[var(--cta-text)] hover:opacity-90 transition-opacity w-full justify-center"
          >
            <Send size={16} />
            {CONTACT_SECTION.form.submit}
          </button>
        </motion.form>

        <p className="mt-8 text-center font-mono text-xs text-[var(--muted)]">
          {CONTACT_SECTION.form.disclaimer}
        </p>
      </div>
    </section>
  );
}
