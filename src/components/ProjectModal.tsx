import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProjectModal({ project, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl gap-0 rounded-3xl border-border bg-card p-0">
        {project && (
          <div className="p-8 sm:p-10">
            <DialogHeader className="space-y-3 text-left">
              <p className="text-xs uppercase tracking-[0.16em] text-accent">
                {project.year} &middot; {project.role}
              </p>
              <DialogTitle className="text-display text-3xl text-foreground sm:text-4xl">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {project.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 space-y-6">
              <p className="text-[15px] leading-relaxed text-foreground/80">
                {project.description}
              </p>

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {(project.link || project.repo) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      Visit <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                    >
                      Source <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
