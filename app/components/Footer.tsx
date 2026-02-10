"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

import { FOOTER_CONTENT, type FooterLinkKey } from "../constants/footer";

const XIcon = ({ size = 20 }: { size?: number }) => {
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

const ICON_SIZE = 20;

const FooterIcon = ({ linkKey }: { linkKey: FooterLinkKey }) => {
  switch (linkKey) {
    case "email":
      return <Mail size={ICON_SIZE} className="shrink-0" />;
    case "linkedin":
      return <Linkedin size={ICON_SIZE} className="shrink-0" />;
    case "x":
      return <XIcon size={ICON_SIZE} />;
    case "github":
      return <Github size={ICON_SIZE} className="shrink-0" />;
  }
};

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-muted"
          >
            {FOOTER_CONTENT.copyright}
          </motion.p>

          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
            aria-label="Contact and profiles"
          >
            {FOOTER_CONTENT.links.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="p-2.5 rounded-lg text-muted hover:text-accent-cyan hover:bg-border/30 transition-colors"
                >
                  <FooterIcon linkKey={link.key} />
                </a>
              );
            })}
          </motion.nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
