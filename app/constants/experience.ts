import {
  BarChart3,
  Rocket,
  Factory,
  type LucideIcon,
} from "lucide-react";

/**
 * One anonymized experience card — system type, not employer.
 * Per experience-instructions.md: title, description, capability tags.
 */
export interface Experience {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
}

/** Section header per experience-instructions.md */
export const EXPERIENCE_SECTION = {
  title: "Selected experience",
  description:
    "Anonymized product and platform work delivered across startups and enterprise teams.",
};

/** 3 experience categories — final content from experience-instructions.md */
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
