export interface Demo {
  title: string;
  description: string;
  stack: string[];
  image?: string;
  liveUrl: string;
  repoUrl: string;
}

export const DEMOS: Demo[] = [
  {
    title: "Dashboard UI kit",
    description: "Reusable data tables, charts, and layout components.",
    stack: ["React", "Tailwind", "Recharts"],
    image: "/api/placeholder/400/240",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "AI chat interface",
    description: "Streaming chat UI with markdown and code blocks.",
    stack: ["Next.js", "OpenAI", "Vercel"],
    image: "/api/placeholder/400/240",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Landing page system",
    description: "Modular sections and CTA blocks for marketing sites.",
    stack: ["Next.js", "MDX", "Tailwind"],
    image: "/api/placeholder/400/240",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Component library",
    description: "Design system with tokens and dark mode.",
    stack: ["React", "Tailwind", "Storybook"],
    image: "/api/placeholder/400/240",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Analytics panel",
    description: "Real-time metrics and event tracking dashboard.",
    stack: ["Next.js", "PostgreSQL", "Charts"],
    image: "/api/placeholder/400/240",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const DEMOS_SECTION = {
  title: "Demo builds",
  description:
    "Self-initiated projects that show what I can build. Live links and repos when available.",
};
