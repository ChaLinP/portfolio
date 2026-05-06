import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClick: () => void;
  index: number;
};

export function ProjectCard({ project, onClick, index }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex w-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 text-left shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {project.year}
          </p>
          <h3 className="text-display mt-2 text-2xl text-foreground">{project.title}</h3>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-foreground/70 transition-all group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            +{project.tech.length - 4}
          </span>
        )}
      </div>
    </motion.button>
  );
}
