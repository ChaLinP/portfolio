export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "ShadCN",
      "Framer Motion",
      "Zod",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Java",
      "Laravel",
      "Go",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "gRPC",
      "InfluxDB",
    ],
  },
  {
    category: "Tools & Platform",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GitHub Actions",
      "Figma",
      "Linux",
    ],
  },
];