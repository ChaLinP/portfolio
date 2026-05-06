import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">{profile.name}</p>
          <p className="text-xs text-muted-foreground">
            {profile.tagline}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Twitter
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-5 text-[11px] text-muted-foreground sm:px-8">
          &copy; {new Date().getFullYear()} {profile.name}. Designed and built with care.
        </div>
      </div>
    </footer>
  );
}
