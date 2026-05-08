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
        eyebrow="IT4070 Module"
        title="Reflective Journal"
        description="Reflection on key professional and communication skills gained through the Preparation for Professional World module."
      />

      <div className="mx-auto max-w-3xl space-y-10 text-[17px] leading-8 text-foreground/80 ">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground ">
            Overview
          </h2>

          <p>
            One of the most valuable modules I followed during my undergraduate
            studies was IT4070 – Preparation for Professional World. This module
            helped me understand the importance of professionalism,
            communication, presentation skills, and interview preparation in
            both academic and professional environments.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Presentation & Communication Skills
          </h2>

          <p className="mb-4">
            A major area I improved through this module was presentation skills.
            I learned practical techniques to improve confidence while speaking,
            such as maintaining eye contact, controlling body language,
            rehearsing presentations, and staying calm under pressure.
          </p>

          <p>
            The module also taught me how to professionally handle Question and
            Answer (Q&A) sessions. I learned that if I do not hear a question
            clearly, it is important to politely ask the audience member to
            repeat it. I also understood that being honest when I do not know an
            answer is more professional than giving incorrect information.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Professional Development
          </h2>

          <p className="mb-4">
            In addition, the module improved my understanding of professional
            behavior, non-verbal communication, and interview techniques. I
            learned the importance of posture, tone of voice, confidence, and
            structured communication during presentations and interviews.
          </p>

          <p>
            The lessons on email writing, memo writing, and formal communication
            also helped me understand how professionalism and clarity are
            important in workplace environments.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">
            Reflection
          </h2>

          <p>
            Overall, IT4070 Preparation for Professional World significantly
            contributed to my personal and professional development. The module
            improved my confidence, communication skills, and professional
            awareness, helping prepare me for transitioning from university to
            the professional industry.
          </p>
        </section>
      </div>
    </Section>
  );
}