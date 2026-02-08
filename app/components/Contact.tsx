"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center"
        >
          Let’s ship something fast
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted text-center mb-12"
        >
          Start a project, hire me for a build, or just say hi.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:hello@gigdevos.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            <Mail size={18} />
            hello@gigdevos.com
          </a>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            <Calendar size={18} />
            Book a call
          </a>
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm text-foreground hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp / Telegram
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-6 border border-border space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Project inquiry
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="What do you want to build?"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-accent-cyan to-accent-purple px-5 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity w-full justify-center"
          >
            <Send size={16} />
            Send message
          </button>
        </motion.form>

        <p className="mt-8 text-center font-mono text-xs text-muted">
          No spam. I’ll get back within 24–48 hours.
        </p>
      </div>
    </section>
  );
}
