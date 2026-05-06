import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = HTMLMotionProps<"section"> & {
  children: React.ReactNode;
  className?: string;
  /** First section on a page sits below the fixed navbar */
  first?: boolean;
};

export function Section({ children, className, first, ...rest }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-8",
        first ? "pt-32 pb-24 sm:pt-40 sm:pb-32" : "py-24 sm:py-32",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h1 className="text-display text-4xl text-foreground sm:text-5xl">{title}</h1>
      {description && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </header>
  );
}
