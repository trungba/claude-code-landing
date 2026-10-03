"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/lib/animations";

type Props = { eyebrow: string; title: string; description?: React.ReactNode };

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <p className="text-sm font-semibold tracking-widest text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-400">{description}</p>}
    </motion.div>
  );
}
