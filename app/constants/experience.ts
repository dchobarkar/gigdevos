import { BarChart3, Rocket, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Experience {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

export const EXPERIENCE_SECTION = {
  title: "Selected experience",
  description:
    "Anonymized product and platform work delivered across startups and enterprise teams.",
};

export const EXPERIENCES: Experience[] = [
  {
    icon: BarChart3,
    title: "Enterprise Analytics Platforms",
    description:
      "Designed and shipped operational dashboards with real-time reporting and intelligence systems.",
    tags: [
      "Data visualization",
      "KPI monitoring",
      "Operational reporting",
      "Enterprise workflows",
    ],
  },
  {
    icon: Rocket,
    title: "Global Marketing Platforms",
    description:
      "Engineered multi-region marketing websites with localization and performance optimization.",
    tags: [
      "Localization systems",
      "Campaign architecture",
      "SEO engineering",
      "Multi-region deployments",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing Intelligence Tools",
    description:
      "Built visualization systems covering throughput, inventory, and forecasting operations.",
    tags: [
      "Industrial analytics",
      "Forecast dashboards",
      "Supply-chain insights",
      "Process monitoring",
    ],
  },
];
