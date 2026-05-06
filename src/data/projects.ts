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
    slug: "nexar",
    title: "Nexar — Quantum/Classical Workload Orchestration",
    summary: "Routes workloads between classical compute, quantum simulators, and quantum hardware.",
    description:
      "A quantum–classical code routing platform composed of multiple services. It analyzes submitted code, predicts the best execution target (quantum vs classical / simulator vs hardware), and can convert code into quantum circuits before submitting jobs via a provider-agnostic hardware layer.",
    tech: ["Python", "TypeScript", "FastAPI", "React", "Node.js", "OpenQASM", "Terraform"],
    year: "2026",
    role: "Contributor / Developer",
    link: "https://github.com/Silverviles/nexar",
    repo: "https://github.com/Silverviles/nexar",
  },
  {
    slug: "laundriq",
    title: "LaundrIQ — Cloud-Native Laundry Management (Microservices)",
    summary: "Microservices-based laundry platform with CI/CD, DevSecOps, and containerized deployment.",
    description:
      "Cloud-native laundry management system using independently deployable services (Auth, Order, Payment, Pricing). Built to demonstrate microservices patterns, secure service-to-service communication, and operational workflows with Docker-based orchestration and automation.",
    tech: ["TypeScript", "Java", "Docker", "Terraform", "Shell", "Spring Boot", "Microservices"],
    year: "2026",
    role: "Owner / Lead Developer",
    link: "https://github.com/devkyoshi/CTSE-Assignment-LaundrIQ",
    repo: "https://github.com/devkyoshi/CTSE-Assignment-LaundrIQ",
  },
  {
    slug: "digital-restaurant-posify",
    title: "POSiFy — Digital Restaurant (SaaS POS)",
    summary: "Cloud-based, multi-tenant SaaS POS platform for restaurants and cafes.",
    description:
      "A multi-tenant restaurant POS platform designed for food outlets. Combines a modern TypeScript frontend with a Java backend and container-friendly deployment, focused on scalable tenant separation and operational readiness.",
    tech: ["TypeScript", "Java", "Docker"],
    year: "2026",
    role: "Contributor / Developer",
    link: "https://github.com/Creavint/digital-restaurant",
    repo: "https://github.com/Creavint/digital-restaurant",
  },
  {
    slug: "easy-bites",
    title: "EasyBites — Food Delivery App",
    summary: "Food delivery app with Spring Boot backend and React (Vite) frontend.",
    description:
      "A full-stack food delivery application enabling users to browse restaurants and place orders. Built with a Spring Boot backend and a React + Vite TypeScript frontend, focusing on clean APIs and a smooth ordering experience.",
    tech: ["TypeScript", "React", "Vite", "Java", "Spring Boot"],
    year: "2026",
    role: "Owner / Full-Stack Developer",
    link: "https://github.com/devkyoshi/easy-bites",
    repo: "https://github.com/devkyoshi/easy-bites",
  },
  {
    slug: "zap-ev",
    title: "ZAP-EV — EV Charging Station Booking System",
    summary: "Booking platform for reserving EV charging stations.",
    description:
      "An EV charging reservation system that manages station discovery, availability, and bookings. Implemented across multiple stacks to explore service design and platform interoperability.",
    tech: ["Java", "TypeScript", "C#"],
    year: "2026",
    role: "Owner / Developer",
    link: "https://github.com/devkyoshi/zap-ev",
    repo: "https://github.com/devkyoshi/zap-ev",
  },
  {
    slug: "stock-management-system",
    title: "Hospital Stock Management System",
    summary: "Stock tracking system for maintaining inventory in local hospitals.",
    description:
      "A stock management system built to track and manage available inventory in local hospitals. Includes a web UI and database-backed workflows for stock updates and reporting.",
    tech: ["TypeScript", "JavaScript", "PostgreSQL", "PL/pgSQL", "CSS", "Handlebars"],
    year: "2024",
    role: "Contributor / Developer",
    link: "https://github.com/Ceynetics/stock_management_system",
    repo: "https://github.com/Ceynetics/stock_management_system",
  },
  {
    slug: "subash-bakery",
    title: "Subash Bakery — Full-Stack App",
    summary: "Bakery-focused app combining a TypeScript frontend with a Go backend.",
    description:
      "A full-stack bakery application pairing a TypeScript-based UI with a Go backend. Designed to explore lightweight services, containerization, and practical CRUD workflows for small businesses.",
    tech: ["TypeScript", "Go", "Docker", "JavaScript"],
    year: "2026",
    role: "Owner / Full-Stack Developer",
    link: "https://github.com/devkyoshi/subash_bakery",
    repo: "https://github.com/devkyoshi/subash_bakery",
  },
  {
    slug: "sargia",
    title: "Sargia",
    summary: "TypeScript-first UI template / starter for rapid front-end builds.",
    description:
      "A project focused on a TypeScript-heavy setup for quickly starting new front-end interfaces with a consistent structure and reusable components.",
    tech: ["TypeScript"],
    year: "2026",
    role: "Owner / Maintainer",
    link: "https://github.com/devkyoshi/sagarika-ui-temp",
    repo: "https://github.com/devkyoshi/sagarika-ui-temp",
  },
    {
    slug: "evostacks-food-delivery",
    title: "EvoStacks — Food Delivery",
    summary: "Full-stack food delivery platform (TypeScript + Java).",
    description:
      "A food delivery platform built with a TypeScript-heavy codebase and a Java backend component. Focuses on core delivery flows like browsing menus, ordering, and operational management.",
    tech: ["TypeScript", "Java", "React Native"],
    year: "2025",
    role: "Contributor / Engineer",
    link: "https://github.com/EvoStacks/food_delivery",
    repo: "https://github.com/EvoStacks/food_delivery",
  },
  {
    slug: "shopbox-mobile",
    title: "ShopBox — Mobile App",
    summary: "Mobile app built primarily in TypeScript.",
    description:
      "A TypeScript-first mobile application for the ShopBox ecosystem, focusing on a maintainable UI layer, reusable components, and rapid iteration.",
    tech: ["TypeScript", "React Native"],
    year: "2024",
    role: "Contributor / Mobile Developer",
    link: "https://github.com/EvoStacks-Apps/ShopBox-Mobile",
    repo: "https://github.com/EvoStacks-Apps/ShopBox-Mobile",
  },
  {
    slug: "digital-restaurant-posify",
    title: "POSiFy — Digital Restaurant (SaaS POS)",
    summary: "Cloud-based, multi-tenant SaaS POS platform for restaurants and cafes.",
    description:
      "A multi-tenant restaurant POS platform designed for food outlets. Combines a modern TypeScript frontend with a Java backend and container-friendly deployment, focused on scalable tenant separation and operational readiness.",
    tech: ["TypeScript", "Java", "Docker"],
    year: "2026",
    role: "Contributor / Engineer",
    link: "https://github.com/Creavint/digital-restaurant",
    repo: "https://github.com/Creavint/digital-restaurant",
  },
];