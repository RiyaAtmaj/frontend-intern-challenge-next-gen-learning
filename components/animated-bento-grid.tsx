"use client";

import { motion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedBentoGrid({ children }: { children: ReactNode }) {
  return (
    <motion.section
      aria-label="Learning overview"
      className="grid auto-rows-[minmax(13rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.09,
            delayChildren: 0.04,
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}

export const tileVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 24 },
  },
};

export const hoverSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};
