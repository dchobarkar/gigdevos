"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FOOTER_CONTENT } from "../constants/footer";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] py-8 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-[var(--muted)]"
          >
            {FOOTER_CONTENT.copyright}
          </motion.p>

          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {FOOTER_CONTENT.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent-cyan)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        </div>
      </div>
    </footer>
  );
}
