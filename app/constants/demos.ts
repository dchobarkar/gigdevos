export interface Demo {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  image?: string;
}

export const DEMOS_SECTION = {
  title: "Demo builds",
  description:
    "Production-grade capability showcases. Deployable demos that mirror real product work, not tutorials.",
};

export const DEMOS: Demo[] = [
  {
    title: "PulseBoard",
    description:
      "SaaS dashboard system with sidebar nav, analytics, data tables, charts, and settings — dark/light theme.",
    stack: ["Next.js", "Tailwind", "Recharts", "Framer Motion"],
    liveUrl: "https://pulseboard-beta.vercel.app",
    repoUrl: "https://github.com/dchobarkar/pulseboard",
    image: "/demos/pulseboard.png",
  },
  {
    title: "CopilotUI",
    description:
      "AI conversational interface with streaming responses, markdown and code blocks, prompt history.",
    stack: ["Next.js", "Tailwind", "Markdown", "Syntax highlighter"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "LaunchFrame",
    description:
      "Landing page framework with hero variants, features, pricing, testimonials, FAQ. conversion-focused.",
    stack: ["Next.js", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "InsightGrid",
    description:
      "Analytics and data visualization panel with KPIs, revenue charts, funnels, heatmaps, export.",
    stack: ["Next.js", "Tailwind", "Recharts"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
