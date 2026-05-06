export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  year: string;
  role: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "TalentScan-AI",
    title: "TalentScan AI - AI - Powered CV Analysis Platform",
    summary: "AI-powered talent intelligence platform that turns resumes into visual insights.",
    description:
      "An AI-powered talent intelligence platform that transforms resumes into visual analytics and skill insights. Built to help recruiters and hiring teams quickly identify top candidates through intelligent parsing, skill extraction, and visual reporting.",
    tech: ["Python", "TypeScript", "FastAPI", "React", "Terraform","Vite"],
    year: "2026",
    role: "Contributor / Developer",
    link: "https://github.com/pramudithamendis/25-26J-087",
    repo: "https://github.com/pramudithamendis/25-26J-087",
  },
  {
    slug: "Devora",
    title: "Devora API",
    summary: "Developer code time estimation system using machine learning",
    description:
      "A  system enabling  developers to estimate their code time project developed during my internship. ",
    tech: ["Python", "FastAPI", "Ollama", "BitBucket", "Gemini API"],
    year: "2026",
    role: "AI Intern (Contributor)"
  },
   {
    slug: "iShamp",
    title: "iShamp - Droop Wire Hight Prediction System",
    summary: "Get the wire sag from a image using computer vision",
    description:"A computer vision project developed during my internship, focused on estimating wire sag from images using classical image processing and geometric modeling techniques.",
    tech: ["Python", "Streamlit", "DBSCAN", "Harris Corner Detection", "Curve Fitting","Background subtraction"],
    year: "2025",
    role: "AI Intern (Lead Contributor)",
  },
    {
    slug: "Resource-Management-System",
    title: "Resource Management System",
    summary: "Full-stack system for managing institutional resources",
    description:"Full Stack development project developed during my internship,A Resource Management System for manage resources like classroom, lab, etc.",
    tech: ["TypeScript", "React", "Vite","Flask", "MySQL"],
    year: "2025",
    role: "AI Intern (Lead Contributor)",
  },
   {
    slug: "Chatbot-assistant",
    title: "AI Chatbot Assistant",
    summary: "LLM-powered chatbot for answering user queries",
    description:"A chatbot using ChatGPT API to answer questions ",
    tech: ["Python", "JavaScript", "ChatGPT API","Qdrant","Docker"],
    year: "2025",
    role: "SE Intern (Contributor)"
  }
];