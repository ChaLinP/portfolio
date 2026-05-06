import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/Section";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: `Reflective Journal — ${profile.name}` },
      {
        name: "description",
        content: "Personal & Professional Development (PPW) reflective journal.",
      },
      { property: "og:title", content: `Reflective Journal — ${profile.name}` },
      {
        property: "og:description",
        content: "Personal & Professional Development (PPW) reflective journal.",
      },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <Section first>
      <SectionHeader
        eyebrow="PPW Module"
        title="Reflective Journal"
        description="Personal & Professional Development reflection and key learnings."
      />

      <div className="mx-auto max-w-3xl space-y-12 text-[17px] leading-relaxed text-foreground/85">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          <p>
            The Personal & Professional Development (PPW) module helped me understand the importance of structured career planning, self-reflection, and professional growth.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Key Learnings</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>How to present myself professionally through a portfolio and CV</li>
            <li>Importance of continuous learning in the tech industry</li>
            <li>Understanding career paths in software engineering</li>
            <li>Building confidence in communication and teamwork</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Skills Developed</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Time management</li>
            <li>Communication and presentation skills</li>
            <li>Team collaboration</li>
            <li>Self-evaluation and reflection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Challenges Faced</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Balancing academic work with personal skill development</li>
            <li>Structuring a clear and realistic career plan</li>
            <li>Improving consistency in learning new technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Reflection</h2>
          <p className="mb-4">
            Through this module, I realized that technical skills alone are not enough. Professional growth requires planning, communication, and adaptability.
          </p>
          <p>
            This experience helped me become more aware of my strengths and areas for improvement, preparing me better for the software industry.
          </p>
        </section>
      </div>
    </Section>
  );
}
