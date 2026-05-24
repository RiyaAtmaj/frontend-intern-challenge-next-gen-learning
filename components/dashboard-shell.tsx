"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  ChevronsLeft,
  Flame,
  GraduationCap,
  Home,
  Settings,
  Sparkles,
} from "lucide-react";
import { useState, type ReactNode } from "react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Progress", icon: BarChart3 },
  { label: "Streak", icon: Flame },
  { label: "Settings", icon: Settings },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("Home");
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="min-h-screen px-4 py-4 text-slate-100 sm:px-5 lg:p-6">
      <aside
        className={`fixed left-4 top-4 z-30 hidden h-[calc(100vh-2rem)] flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-[width] duration-300 ease-out md:flex lg:left-6 lg:top-6 lg:h-[calc(100vh-3rem)] ${
          expanded ? "lg:w-64" : "lg:w-24"
        } w-24`}
      >
        <header className="flex h-14 items-center justify-center gap-3 lg:justify-start lg:px-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-teal-300 text-slate-950 shadow-lg shadow-teal-300/20">
            <GraduationCap aria-hidden="true" size={23} />
          </span>
          <span
            className={`hidden min-w-0 text-sm font-semibold tracking-wide text-white transition-opacity lg:block ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          >
            NeuroLearn
          </span>
        </header>

        <nav aria-label="Primary" className="mt-8 flex flex-1 flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <button
                aria-label={item.label}
                className="relative flex h-12 items-center justify-center gap-3 rounded-2xl px-3 text-sm font-medium text-slate-400 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-teal-300/70 lg:justify-start"
                key={item.label}
                onClick={() => setActive(item.label)}
                type="button"
              >
                {isActive ? (
                  <motion.span
                    className="absolute inset-0 rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-teal-300/10"
                    layoutId="active-nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                ) : null}
                <Icon aria-hidden="true" className="relative z-10 shrink-0" size={20} />
                <span
                  className={`relative z-10 hidden min-w-0 truncate transition-opacity lg:block ${
                    expanded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <footer className="hidden lg:block">
          <button
            aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
            className="flex h-11 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-teal-300/70"
            onClick={() => setExpanded((value) => !value)}
            type="button"
          >
            <ChevronsLeft
              aria-hidden="true"
              className={`transition-transform duration-300 ${expanded ? "" : "rotate-180"}`}
              size={19}
            />
          </button>
        </footer>
      </aside>

      <nav
        aria-label="Mobile primary"
        className="fixed bottom-3 left-3 right-3 z-40 grid grid-cols-5 rounded-[1.4rem] border border-white/10 bg-slate-950/85 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <button
              aria-label={item.label}
              className="relative grid h-12 place-items-center rounded-2xl text-slate-400 outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70"
              key={item.label}
              onClick={() => setActive(item.label)}
              type="button"
            >
              {isActive ? (
                <motion.span
                  className="absolute inset-0 rounded-2xl bg-white/10"
                  layoutId="active-mobile-nav-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              ) : null}
              <Icon
                aria-hidden="true"
                className={`relative z-10 ${isActive ? "text-teal-200" : ""}`}
                size={20}
              />
            </button>
          );
        })}
      </nav>

      <main className="w-full pb-24 md:pb-4 md:pl-28 lg:pl-72">
        <section className="mx-auto w-full max-w-7xl">
          <header className="mb-5 flex items-center justify-between gap-4">
            <section aria-label="Dashboard status">
              <p className="flex items-center gap-2 text-sm font-medium text-teal-200">
                <Sparkles aria-hidden="true" size={16} />
                Live learning cockpit
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-normal text-white sm:text-3xl">
                Student Dashboard
              </h1>
            </section>
            <section
              aria-label="Account summary"
              className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 sm:flex"
            >
              <span className="size-9 rounded-2xl bg-gradient-to-br from-teal-200 to-indigo-300" />
              <span className="text-sm font-medium text-slate-200">Maya Chen</span>
            </section>
          </header>
          {children}
        </section>
      </main>
    </section>
  );
}
