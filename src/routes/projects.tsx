import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work — Alex Chen" },
      {
        name: "description",
        content:
          "Selected projects spanning writing tools, observability, sustainability, mobile, and developer infrastructure.",
      },
      { property: "og:title", content: "Selected Work — Alex Chen" },
      {
        property: "og:description",
        content:
          "Selected projects spanning writing tools, observability, sustainability, mobile, and developer infrastructure.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <Section first>
      <SectionHeader
        eyebrow="Selected work"
        title="A few things I've built."
        description="A small, opinionated selection of projects from the past few years, each one a chance to make something feel inevitable."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} onClick={() => handleOpen(p)} />
        ))}
      </div>

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </Section>
  );
}
