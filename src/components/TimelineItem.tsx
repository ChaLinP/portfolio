import { motion } from "framer-motion";
import type { Role } from "@/data/experience";

export function TimelineItem({ role, index }: { role: Role; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-3 border-l border-border pl-8 pb-12 sm:grid-cols-[160px_1fr] sm:gap-10 sm:pl-0 sm:border-l-0"
    >
      <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-foreground sm:hidden" />
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground sm:pt-1">
        {role.period}
      </p>
      <div className="sm:border-l sm:border-border sm:pl-10">
        <h3 className="text-display text-xl text-foreground">{role.role}</h3>
        <p className="mt-1 text-sm text-accent">{role.company}</p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {role.impact}
        </p>
      </div>
    </motion.li>
  );
}
