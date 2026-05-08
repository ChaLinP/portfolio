import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { profile } from "@/data/profile";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      {
        name: "description",
        content: `Get to know ${profile.name}: AI-focused software engineer working on machine learning and LLM-based systems.`,
      },
      { property: "og:title", content: `About — ${profile.name}` },
      {
        property: "og:description",
        content: `Get to know ${profile.name}: AI-focused software engineer working on machine learning and LLM-based systems.`,
      },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Section first>
      <SectionHeader
        eyebrow="About"
        title="I build things with Data and AI"
        description={profile.shortBio}
      />

      <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-soft)]">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <div className="space-y-6 text-[17px] leading-relaxed text-foreground/85 text-justify">
          {profile.longBio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Based in
              </dt>
              <dd className="mt-1.5 text-foreground">{profile.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Email
              </dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-foreground transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
