"use client";

import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/lib/animations";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Nhịp scale nhẹ lặp mỗi 3 giây để thu hút chú ý. */
  pulse?: boolean;
  variant?: "primary" | "outline";
};

const styles = {
  primary:
    "bg-brand text-white hover:bg-brand-dark hover:shadow-[0_10px_30px_rgba(223,107,51,0.45)]",
  outline: "border border-slate-600 text-white hover:border-white hover:bg-white/5",
};

export function CtaLink({ href, children, className = "", pulse = false, variant = "primary" }: Props) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold transition-colors duration-300 ${styles[variant]} ${className}`}
      animate={pulse ? { scale: [1, 1.03, 1] } : undefined}
      transition={pulse ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
      whileHover={buttonHover}
      whileTap={buttonTap}
    >
      {children}
    </motion.a>
  );
}
