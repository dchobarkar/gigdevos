import {
  Layers,
  Cpu,
  Database,
  Code2,
  Palette,
  Sparkles,
  Server,
  Plug,
  Cloud,
  Github,
  PenTool,
  Send,
  Bot,
  Package,
  GitBranch,
  Zap,
  Component,
  type LucideIcon,
} from "lucide-react";

/**
 * One technology in a stack category.
 * Optional tooltip for authority signal (minimal copy per stack-instructions.md).
 */
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

/** Section header per stack-instructions.md */
export const STACK_SECTION = {
  title: "Tech stack",
  description:
    "Modern frameworks and infrastructure I use to design, build, and deploy production systems.",
};

/**
 * 4 capability layers in product build order.
 * Per stack-instructions.md: Frontend → Backend → Infrastructure → Tooling.
 */
export const STACK_GROUPS: StackGroup[] = [
  {
    title: "Frontend Engineering",
    icon: Layers,
    items: [
      { label: "Next.js", icon: Code2 },
      { label: "React", icon: Component },
      { label: "TypeScript", icon: Code2 },
      { label: "Tailwind CSS", icon: Palette },
      { label: "Framer Motion", icon: Sparkles },
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    items: [
      { label: "Node.js", icon: Cpu },
      { label: "REST APIs", icon: Plug },
      { label: "PostgreSQL", icon: Database },
      { label: "Prisma / ORM layer", icon: Database },
    ],
  },
  {
    title: "Infrastructure & Deployment",
    icon: Cloud,
    items: [
      { label: "Vercel", icon: Cloud },
      { label: "Docker", icon: Package },
      { label: "CI/CD pipelines", icon: GitBranch },
      { label: "Edge deployments", icon: Zap },
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
