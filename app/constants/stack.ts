import {
  Layers,
  Database,
  Code2,
  Palette,
  Server,
  Plug,
  Cloud,
  Github,
  PenTool,
  Send,
  Bot,
  Zap,
  Atom,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StackItem {
  label: string;
  icon: LucideIcon;
  tooltip?: string;
}

export interface StackGroup {
  title: string;
  icon: LucideIcon;
  items: StackItem[];
}

export const STACK_SECTION = {
  title: "Tech stack",
  description:
    "Modern frameworks and infrastructure I use to design, build, and deploy production systems.",
};

export const STACK_GROUPS: StackGroup[] = [
  {
    title: "Frontend Engineering",
    icon: Layers,
    items: [
      { label: "Next.js", icon: Globe },
      { label: "React", icon: Atom },
      { label: "TypeScript", icon: Code2 },
      { label: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    items: [
      { label: "Node.js", icon: Server },
      { label: "NestJS", icon: Layers },
      { label: "REST APIs", icon: Plug },
      { label: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Infrastructure & Deployment",
    icon: Cloud,
    items: [
      { label: "Vercel", icon: Cloud },
      { label: "Azure App Services", icon: Globe },
      { label: "Azure Static Web Apps", icon: Globe },
      { label: "Azure Functions", icon: Zap },
      { label: "Azure Storage", icon: Database },
      { label: "Production Hosting", icon: Cloud },
    ],
  },
  {
    title: "Tooling & Workflow",
    icon: Github,
    items: [
      { label: "GitHub", icon: Github },
      { label: "Figma", icon: PenTool },
      { label: "Postman", icon: Send },
      { label: "VS Code", icon: Code2 },
      { label: "AI APIs / SDKs", icon: Bot },
    ],
  },
];
