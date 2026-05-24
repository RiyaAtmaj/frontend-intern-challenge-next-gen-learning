"use client";

import { motion } from "framer-motion";
import { Flame, Radar, Zap } from "lucide-react";
import { hoverSpring, tileVariants } from "@/components/animated-bento-grid";

export function HeroTile({ name, streak }: { name: string; streak: number }) {
  return (
    <motion.article
      className="grain mesh group relative min-h-80 overflow-hidden rounded-[1.75rem] border border-white/10 p-6 shadow-2xl shadow-black/20 md:col-span-2 xl:col-span-2 xl:row-span-2"
      variants={tileVariants}
      whileHover={{ scale: 1.012, y: -3 }}
      transition={hoverSpring}
    >
      <span className="absolute inset-0 rounded-[1.75rem] opacity-0 ring-1 ring-inset ring-teal-200/30 transition-opacity duration-300 group-hover:opacity-100" />
      <section className="relative z-10 flex h-full flex-col justify-between">
        <header>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-teal-100">
            <Radar aria-hidden="true" size={14} />
            Adaptive path online
          </p>
          <h2 className="mt-7 max-w-xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Welcome back, {name}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
            Your next lesson is queued, progress is synced, and today&apos;s focus window is clear.
          </p>
        </header>

        <footer className="mt-10 grid gap-3 sm:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
            <p className="flex items-center gap-2 text-sm text-slate-300">
              <Flame aria-hidden="true" className="text-amber-200" size={18} />
              Daily streak
            </p>
            <p className="mt-3 text-4xl font-semibold text-white">{streak} days</p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
            <p className="flex items-center gap-2 text-sm text-slate-300">
              <Zap aria-hidden="true" className="text-teal-200" size={18} />
              Focus score
            </p>
            <p className="mt-3 text-4xl font-semibold text-white">94%</p>
          </section>
        </footer>
      </section>
    </motion.article>
  );
}
