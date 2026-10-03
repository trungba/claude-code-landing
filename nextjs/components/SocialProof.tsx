"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, Star } from "lucide-react";
import Image from "next/image";
import { CounterStat } from "@/components/CounterStat";
import { SectionHeading } from "@/components/SectionHeading";
import { cardBorder, cardHover, fadeInUp, stagger, viewport } from "@/lib/animations";

const tags = [
  { label: "Firebase", className: "border-amber-500/30 bg-amber-500/10 text-amber-300" },
  { label: "Next.js", className: "border-white/20 bg-white/5 text-white" },
  { label: "Vercel", className: "border-white/20 bg-white/5 text-white" },
  { label: "Tailwind", className: "border-sky-500/30 bg-sky-500/10 text-sky-300" },
];

const proofStats = [
  { value: 100, suffix: "%", label: "hoàn thành project" },
  { value: 8, suffix: " buổi", label: "từ zero đến production" },
];

// Nội dung mẫu — thay bằng phản hồi thật của học viên trước khi chạy chính thức.
const testimonials = [
  {
    name: "Nguyễn Thu Hà",
    role: "Sinh viên năm 4",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80",
    quote: "Lần đầu tiên mình tự deploy được một ứng dụng hoàn chỉnh. Giờ portfolio đã có sản phẩm thật để đi phỏng vấn.",
  },
  {
    name: "Trần Minh Quân",
    role: "Tester → Fullstack",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=60&q=80",
    quote: "Phần Debug & Refactor cùng AI giúp mình hết sợ sửa code. Quy trình làm việc thay đổi hoàn toàn.",
  },
  {
    name: "Lê Phương Anh",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80",
    quote: "Không có nền tảng code nhưng mình vẫn tự xây được MVP. Đáng từng đồng học phí.",
  },
];

export function SocialProof() {
  return (
    <section id="proof" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute top-20 -right-32 h-80 w-80 rounded-full bg-brand/10 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Minh chứng" title="Sản Phẩm Học Viên" />

        <motion.article
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-card"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-[280px] overflow-hidden rounded-t-xl">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
              alt="Dashboard ProjectOS"
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-bold text-white sm:text-2xl">ProjectOS — Enterprise Project Management</h3>
              <a
                href="https://project-management.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-brand transition-colors duration-300 hover:text-brand-light"
              >
                project-management.vercel.app <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-slate-400">
              Hệ thống quản lý dự án doanh nghiệp, xây dựng hoàn toàn với Claude Code trong 8 buổi học
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t.label} className={`rounded-full border px-3 py-1 text-xs font-semibold ${t.className}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        <motion.blockquote
          className="mx-auto mt-16 max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8 }}
        >
          <Quote className="mx-auto h-10 w-10 text-brand" />
          <p className="mt-4 text-2xl leading-snug font-bold text-white sm:text-3xl">
            Lập trình viên tương lai không phải người viết code nhanh nhất.
            <br className="hidden sm:block" /> Họ là người biết{" "}
            <span className="text-gradient">hướng dẫn AI tốt nhất.</span>
          </p>
        </motion.blockquote>

        <motion.div
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {proofStats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              whileHover={cardHover}
              style={{ borderColor: cardBorder }}
              className="rounded-2xl border bg-card p-6 text-center"
            >
              <p className="text-5xl font-extrabold text-brand">
                <CounterStat value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeInUp}
              whileHover={cardHover}
              style={{ borderColor: cardBorder }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <Image src={t.avatar} alt={t.name} width={60} height={60} className="h-[60px] w-[60px] rounded-full object-cover" />
                <figcaption>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </figcaption>
              </div>
              <div className="mt-4 flex gap-0.5 text-amber-400" aria-label="5 sao">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-400">“{t.quote}”</blockquote>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
