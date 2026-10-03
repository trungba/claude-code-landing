"use client";

import { useInView, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = { value: number; suffix?: string; className?: string };

/** Đếm từ 0 lên `value` trong ~1.5s khi phần tử cuộn vào màn hình. */
export function CounterStat({ value, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const spring = useSpring(count, { visualDuration: 1.5, bounce: 0 });

  useEffect(() => {
    if (inView) count.set(value);
  }, [inView, count, value]);

  useMotionValueEvent(spring, "change", (latest) => {
    if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
  });

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
