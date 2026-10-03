import type { TargetAndTransition, Variants } from "framer-motion";

export const viewport = { once: true, amount: 0.15 } as const;

export const fadeInUp: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const zoomIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export function stagger(staggerChildren = 0.1): Variants {
  return { hidden: {}, visible: { transition: { staggerChildren } } };
}

/** Viền mặc định của card; cần khai báo để hover trả về đúng màu cũ. */
export const cardBorder = "rgba(255, 255, 255, 0.08)";

export const cardHover: TargetAndTransition = {
  y: -6,
  borderColor: "#DF6B33",
  transition: { duration: 0.3, ease: "easeInOut" },
};

export const buttonHover: TargetAndTransition = { scale: 1.04 };
export const buttonTap: TargetAndTransition = { scale: 0.97 };
