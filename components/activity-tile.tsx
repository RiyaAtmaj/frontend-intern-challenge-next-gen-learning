"use client";

import { motion } from "framer-motion";
import { Activity, CalendarDays } from "lucide-react";
import { hoverSpring, tileVariants } from "@/components/animated-bento-grid";

const activity = Array.from({ length: 56 }, (_, index) => {
  const wave = Math.sin(index * 0.8) + Math.cos(index * 0.31);
  return Math.max(0.12, Math.min(1, (wave + 2) / 3));
});

export function ActivityTile() {
  return (
    <motion.article
      className="group relative min-h-64 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 xl:col-span-2"
      variants={tileVariants}
      whileHover={{ scale: 1.012, y: -3 }}
      transition={hoverSpring}
    >
      <span className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.16),transparent_34%),radial-gradient(circle_at_5%_90%,rgba(244,114,182,0.12),transparent_32%)] opacity-80" />
      <span className="absolute inset-0 rounded-[1.5rem] opacity-0 ring-1 ring-inset ring-teal-200/25 transition-opacity duration-300 group-hover:opacity-100" />
      <section className="relative z-10">
        <header className="flex items-center justify-between gap-4">
          <section>
            <p className="flex items-center gap-2 text-sm font-medium text-teal-100">
              <Activity aria-hidden="true" size={17} />
              Activity
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">
              Learning rhythm
            </h2>
          </section>
          <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-slate-950/35 text-slate-200">
            <CalendarDays aria-hidden="true" size={20} />
          </span>
        </header>

        <section aria-label="Eight week activity graph" className="mt-7 grid grid-cols-8 gap-2">
          {activity.map((value, index) => (
            <motion.span
              aria-hidden="true"
              className="aspect-square rounded-lg border border-white/5 bg-teal-200/20"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 0.35 + value * 0.65,
                scale: 1,
                backgroundColor: `rgba(45, 212, 191, ${0.14 + value * 0.5})`,
              }}
              transition={{ duration: 0.35, delay: 0.18 + index * 0.009 }}
              key={index}
            />
          ))}
        </section>

        <footer className="mt-6 flex items-end justify-between gap-4">
          <section>
            <p className="text-sm text-slate-400">This week</p>
            <p className="mt-1 text-3xl font-semibold text-white">12.5h</p>
          </section>
          <p className="max-w-40 text-right text-sm leading-6 text-slate-300">
            Peak focus landed on advanced patterns and systems thinking.
          </p>
        </footer>
      </section>
    </motion.article>
  );
}
