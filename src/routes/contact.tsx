import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alex Chen" },
      {
        name: "description",
        content: "Get in touch about a project, a role, or an idea worth making real.",
      },
      { property: "og:title", content: "Contact — Alex Chen" },
      {
        property: "og:description",
        content: "Get in touch about a project, a role, or an idea worth making real.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Section first>
      <SectionHeader
        eyebrow="Contact"
        title="Let's make something."
        description="Tell me about your project, role, or idea. I read every message and reply within a few days."
      />

      <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        <div className="space-y-8 text-sm">
          <Detail label="Email">
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
          </Detail>
          <Detail label="Based in">{profile.location}</Detail>
          <Detail label="Elsewhere">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-colors hover:text-accent"
              >
                Twitter
              </a>
            </div>
          </Detail>
        </div>

        <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-10">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
      <div className="text-[15px] text-foreground">{children}</div>
    </div>
  );
}
