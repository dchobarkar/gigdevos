import {
  MessageSquare,
  LayoutGrid,
  Code2,
  RefreshCw,
  Rocket,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * One stage in the execution process pipeline.
 * Descriptions kept under 12 words per process-instructions.md.
 */
export interface ProcessStep {
  icon: LucideIcon;
  label: string;
  description: string;
}

/** Section header per process-instructions.md */
export const PROCESS_SECTION = {
  title: "Execution process",
  description:
    "A structured build pipeline designed to reduce friction and ship reliably.",
};

/** 6 delivery stages — final content from process-instructions.md */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: MessageSquare,
    label: "Requirement Sync",
    description:
      "Align on product goals, timelines, scope, and success metrics.",
  },
  {
    icon: LayoutGrid,
    label: "Planning & Scope",
    description: "Define milestones, architecture, and delivery roadmap.",
  },
  {
    icon: Code2,
    label: "Development",
    description: "Production-grade engineering with scalable architecture.",
  },
  {
    icon: RefreshCw,
    label: "Iterations",
    description:
      "Feedback-driven refinements to UX, features, and performance.",
  },
  {
    icon: Rocket,
    label: "Deployment",
    description: "Launch, deploy, and production hardening.",
  },
  {
    icon: Wrench,
    label: "Support",
    description: "Post-launch fixes, enhancements, and technical support.",
  },
];
