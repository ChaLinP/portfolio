import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/Section";
import { skills } from "@/data/skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Chanmi Peiris" },
      {
        name: "description",
        content: "Tools, languages, and platforms I work with across frontend, backend, and infrastructure.",
      },
      { property: "og:title", content: "Skills — Chanmi Peiris" },
      {
        property: "og:description",
        content: "Tools, languages, and platforms I work with across frontend, backend, and infrastructure.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <Section first>
      <SectionHeader
        eyebrow="Skills"
        title="The toolkit."
        description="A working set of tools I reach for. I care more about the right answer than the trendy one."
      />

      <div className="space-y-16">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: gi * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 border-t border-border pt-8 md:grid-cols-[200px_1fr]"
          >
            <h2 className="text-display text-xl text-foreground">{group.category}</h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
