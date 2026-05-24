"use client";

import { motion } from "framer-motion";
import {
  Atom,
  BrainCircuit,
  Code2,
  Database,
  DraftingCompass,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { hoverSpring, tileVariants } from "@/components/animated-bento-grid";
import type { Course } from "@/lib/types";

const icons: Record<string, LucideIcon> = {
  Atom,
  BrainCircuit,
  Code2,
  Database,
  DraftingCompass,
  LineChart,
};

export function CourseTile({ course }: { course: Course }) {
  const Icon = icons[course.icon_name] ?? BrainCircuit;
  const progress = Math.max(0, Math.min(course.progress, 100));

  return (
    <motion.article
      className="grain mesh group relative min-h-56 overflow-hidden rounded-[1.5rem] border border-white/10 p-5 shadow-xl shadow-black/20"
      variants={tileVariants}
      whileHover={{ scale: 1.018, y: -3 }}
      transition={hoverSpring}
    >
      <span className="absolute inset-0 rounded-[1.5rem] opacity-0 ring-1 ring-inset ring-teal-200/25 transition-opacity duration-300 group-hover:opacity-100" />
      <section className="relative z-10 flex h-full flex-col justify-between">
        <header className="flex items-start justify-between gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-slate-950/45 text-teal-100 shadow-lg shadow-teal-300/10">
            <Icon aria-hidden="true" size={23} />
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300">
            {progress}%
          </span>
        </header>

        <section>
          <h3 className="text-xl font-semibold tracking-normal text-white">{course.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">Active module</p>
          <section aria-label={`${course.title} progress`} className="mt-5">
            <span className="block h-2 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className="block h-full origin-left rounded-full bg-gradient-to-r from-teal-200 via-sky-300 to-indigo-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ type: "spring", stiffness: 170, damping: 24, delay: 0.25 }}
              />
            </span>
          </section>
        </section>
      </section>
    </motion.article>
  );
}
