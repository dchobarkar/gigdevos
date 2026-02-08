"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Database,
  Code2,
  Palette,
  Zap,
  Server,
  Plug,
  Cloud,
  Github,
  Bot,
} from "lucide-react";

const STACK_GROUPS = [
  {
    title: "Frontend",
    icon: Layers,
    items: [
      { label: "Next.js", icon: Code2 },
      { label: "React", icon: Zap },
      { label: "Tailwind", icon: Palette },
      { label: "Framer Motion", icon: Zap },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { label: "Node.js", icon: Cpu },
      { label: "APIs", icon: Plug },
      { label: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Other",
    icon: Cloud,
    items: [
      { label: "Vercel", icon: Cloud },
      { label: "GitHub", icon: Github },
      { label: "AI APIs", icon: Bot },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          Tech stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          Tools and platforms I use to ship fast and maintain quality.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {STACK_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-center gap-2 mb-6">
                <group.icon
                  className="text-accent-cyan"
                  size={24}
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <item.icon size={18} className="text-border shrink-0" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
