import {
  LayoutDashboard,
  Globe,
  Bot,
  Settings,
  FileCode,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: Service[] = [
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

export const CAPABILITY_SECTION = {
  title: "What I build",
  description: "Capability over case studies. Here's the kind of work I ship.",
};
