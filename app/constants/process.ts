import {
  MessageSquare,
  ClipboardList,
  Code2,
  RefreshCw,
  Rocket,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
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

export const PROCESS_SECTION = {
  title: "How I work",
  description: "A simple pipeline so we stay aligned and ship on time.",
};
