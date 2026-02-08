"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ClipboardList,
  Code2,
  RefreshCw,
  Rocket,
  Headphones,
} from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    label: "Requirement sync",
    desc: "Align on goals and scope",
  },
  {
    icon: ClipboardList,
    label: "Scope & planning",
    desc: "Timeline and deliverables",
  },
  { icon: Code2, label: "Development", desc: "Build and ship" },
  { icon: RefreshCw, label: "Iterations", desc: "Feedback and refinements" },
  { icon: Rocket, label: "Deployment", desc: "Go live" },
  { icon: Headphones, label: "Support", desc: "Handoff and follow-up" },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 px-6 grid-overlay">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          How I work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          A simple pipeline so we stay aligned and ship on time.
        </motion.p>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border"
            style={{ left: "8.33%", right: "8.33%" }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="glass-card rounded-full p-4 border border-border mb-4 relative z-10 hover-glow w-fit">
                  <step.icon
                    className="text-accent-cyan"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>
                <span className="font-mono text-xs text-accent-cyan mb-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {step.label}
                </h3>
                <p className="text-xs text-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
