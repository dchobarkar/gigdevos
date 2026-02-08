"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Globe,
  Bot,
  Settings,
  FileCode,
  Wrench,
} from "lucide-react";

const SERVICES = [
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboards",
    description:
      "Data-heavy UIs, charts, and real-time metrics for product teams.",
    tags: ["React", "Charts", "APIs"],
  },
  {
    icon: Globe,
    title: "Marketing Websites",
    description: "Fast, SEO-friendly landing pages and campaign sites.",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    icon: Bot,
    title: "AI Tool Interfaces",
    description: "Chat UIs, prompt builders, and AI-powered workflows.",
    tags: ["LLMs", "Streaming", "APIs"],
  },
  {
    icon: Settings,
    title: "Admin Panels",
    description: "Internal tools and CRUD interfaces for operations.",
    tags: ["Tables", "Auth", "DB"],
  },
  {
    icon: FileCode,
    title: "Portfolio Sites",
    description: "Developer and creative portfolios that convert.",
    tags: ["Static", "MDX", "CMS"],
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    description: "Custom tooling to automate and streamline workflows.",
    tags: ["Node", "Scripts", "Integrations"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Capability() {
  return (
    <section id="capability" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          What I build
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          Capability over case studies. Here’s the kind of work I ship.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="glass-card rounded-xl p-6 hover-glow border border-border"
            >
              <service.icon
                className="mb-4 text-accent-cyan"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-1 rounded bg-(--border)/50 text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
