import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { TimelineItem } from "@/components/TimelineItem";
import { experience } from "@/data/experience";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Chanmi Peiris" },
      {
        name: "description",
        content: "Roles, companies, and the impact behind eight years of building software.",
      },
      { property: "og:title", content: "Experience — Chanmi Peiris" },
      {
        property: "og:description",
        content: "Roles, companies, and the impact behind eight years of building software.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <Section first>
      <SectionHeader
        eyebrow="Experience"
        title="A short timeline."
        description="The roles, the teams, and the work that mattered most."
      />

      <ol className="mt-4">
        {experience.map((role, i) => (
          <TimelineItem key={role.company + role.period} role={role} index={i} />
        ))}
      </ol>
    </Section>
  );
}
