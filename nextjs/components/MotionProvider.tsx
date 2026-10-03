"use client";

import { MotionConfig } from "framer-motion";

/** Tôn trọng cài đặt "giảm chuyển động" của hệ điều hành. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
