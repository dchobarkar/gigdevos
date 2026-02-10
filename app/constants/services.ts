import {
  LayoutDashboard,
  Bot,
  Settings,
  FileCode,
  Wrench,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CAPABILITY_SECTION = {
  title: "What I can build",
  description:
    "From idea to production, these are the products and interfaces I ship most often.",
};

export const SERVICES: Service[] = [
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboards",
    description:
      "Data-intensive product dashboards with analytics, charts, role systems, and operational insights.",
  },
  {
    icon: Bot,
    title: "AI Tool Interfaces",
    description:
      "AI chat apps, copilots, and workflow interfaces powered by modern LLM integrations.",
  },
  {
    icon: Globe,
    title: "Marketing Websites",
    description:
      "High-converting marketing websites built for product launches, campaigns, and SEO performance.",
  },
  {
    icon: Settings,
    title: "Admin Panels",
    description:
      "Secure back-office systems with CRUD operations, reporting, and access control.",
  },
  {
    icon: FileCode,
    title: "Portfolio Websites",
    description:
      "Conversion-focused personal and professional portfolios designed to generate inbound leads.",
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    description:
      "Custom internal platforms to streamline workflows, reporting, and team operations.",
  },
];
