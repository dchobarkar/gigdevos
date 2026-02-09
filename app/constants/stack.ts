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
  type LucideIcon,
} from "lucide-react";

export interface StackItem {
  label: string;
  icon: LucideIcon;
}

export interface StackGroup {
  title: string;
  icon: LucideIcon;
  items: StackItem[];
}

export const STACK_GROUPS: StackGroup[] = [
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

export const STACK_SECTION = {
  title: "Tech stack",
  description: "Tools and platforms I use to ship fast and maintain quality.",
};
