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
      "Vite",
      "Tailwind CSS",
      "ShadCN UI",
      "Streamlit",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Java",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "WebSockets",
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Python",
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Model (LLM) Integration",
      "Data Processing & Feature Engineering",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Docker",
      "AWS",
      "Google Cloud Platform (GCP)",
      "GitHub Actions",
    ],
  },
  {
    category: "Tools & Design",
    items: [
      "Figma",
      "Git",
      "Postman",
      "BitBucket"
    ],
  },
];