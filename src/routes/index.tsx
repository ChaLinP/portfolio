import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} - AI & ML Engineer` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} - AI & ML Engineer` },
      { property: "og:description", content: profile.tagline },
    ],
  }),
  component: HomePage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function HomePage() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* 🌊 Flow ribbons (always visible behind everything) */}
      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbon-light" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />  {/* sky blue */}
            <stop offset="50%" stopColor="#3b82f6" /> {/* primary blue */}
            <stop offset="100%" stopColor="#1d4ed8" /> {/* deep blue */}
          </linearGradient>

          <linearGradient id="ribbon-dark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" />  {/* soft blue */}
            <stop offset="50%" stopColor="#3b82f6" /> {/* balanced blue */}
            <stop offset="100%" stopColor="#1e40af" /> {/* navy blue */}
          </linearGradient>

          <filter id="blur">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Light mode ribbons */}
        <g className="dark:opacity-0 transition-opacity duration-300">
          {Array.from({ length: 18 }).map((_, i) => {
            const offset = i * 18;
            return (
              <path
                key={`light-${i}`}
                d={`
                  M0 ${300 + offset}
                  C 200 ${100 + offset}
                    400 ${500 + offset}
                    600 ${300 + offset}
                  S 1000 ${100 + offset}
                    1440 ${300 + offset}
                `}
                fill="none"
                stroke="url(#ribbon-light)"
                strokeWidth="1.2"
                opacity={0.04 + i * 0.006}
                filter="url(#blur)"
              />
            );
          })}
        </g>

        {/* Dark mode ribbons */}
        <g className="opacity-0 dark:opacity-100 transition-opacity duration-300">
          {Array.from({ length: 18 }).map((_, i) => {
            const offset = i * 18;
            return (
              <path
                key={`dark-${i}`}
                d={`
                  M0 ${300 + offset}
                  C 200 ${100 + offset}
                    400 ${500 + offset}
                    600 ${300 + offset}
                  S 1000 ${100 + offset}
                    1440 ${300 + offset}
                `}
                fill="none"
                stroke="url(#ribbon-dark)"
                strokeWidth="1.2"
                opacity={0.08 + i * 0.01}
                filter="url(#blur)"
              />
            );
          })}
        </g>
      </svg>


      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-accent"
        >
          {profile.location} &middot; Available for select work
        </motion.p>

        <motion.h1
          className="text-display mt-6 text-[clamp(2.75rem,9vw,7rem)] text-foreground"
          aria-label={`${profile.name}.`}
        >
          {`${profile.name}.`.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.08,
                delay: 0.2 + index * 0.06,
                ease: "linear"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-display mt-4 max-w-3xl text-[clamp(1.25rem,3vw,2rem)] text-muted-foreground"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface "
          >
            Get in touch
          </Link>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface "
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid max-w-3xl grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-3"
        >
          <Stat value="6 Months" label="AI Internship Experience" />
          <Stat value="4+" label="Production-Grade Projects" />
          <Stat value="∞" label="Details obsessed over" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-display text-3xl text-foreground sm:text-4xl">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}