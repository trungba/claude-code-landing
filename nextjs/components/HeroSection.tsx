"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { CounterStat } from "@/components/CounterStat";
import { CtaLink } from "@/components/CtaLink";
import { cardBorder, cardHover, fadeInUp, stagger, viewport } from "@/lib/animations";

const stats = [
  { value: 16, label: "tiết học" },
  { value: 8, label: "buổi thực chiến" },
  { value: 100, suffix: "%", label: "Deploy thực tế" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute top-10 -left-40 h-96 w-96 rounded-full bg-brand/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-brand-light/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/15 px-4 py-1.5 text-sm font-semibold text-brand-light">
              🔥 Khai giảng tháng 6/2026
            </span>
            <h1 className="mt-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Xây dựng ứng dụng với <span className="text-gradient">Claude Code</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Khóa học 8 buổi (16 tiết) trang bị kỹ năng thực chiến — từ cài đặt đến triển khai sản phẩm hoàn
              chỉnh lên Vercel
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CtaLink href="#register">
                Đăng Ký Khóa Học <ArrowRight className="h-5 w-5" />
              </CtaLink>
              <CtaLink href="#proof" variant="outline">
                <PlayCircle className="h-5 w-5" /> Xem Demo
              </CtaLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-lg text-slate-500 line-through">5.000.000đ</span>
              <span className="text-3xl font-extrabold text-white">3.500.000đ</span>
              <span className="rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold tracking-wide text-white uppercase">
                Giảm 30%
              </span>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="relative h-80 overflow-hidden rounded-2xl sm:h-96 lg:h-[460px]"
              style={{ boxShadow: "0 0 40px rgba(223,107,51,0.3)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                alt="Màn hình code trên laptop"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(9,10,20,0.75)_100%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/10 bg-ink/80 p-4 font-mono text-xs backdrop-blur sm:text-sm">
                <p className="text-slate-500">$ claude</p>
                <p className="text-brand-light">› Build a project dashboard with Firebase</p>
                <p className="text-emerald-400">✓ Deployed to Vercel</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              whileHover={cardHover}
              style={{ borderColor: cardBorder }}
              className="rounded-2xl border bg-card p-6 text-center"
            >
              <p className="text-4xl font-extrabold text-brand">
                <CounterStat value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
