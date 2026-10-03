"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Wrench, Zap } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { cardBorder, cardHover, fadeInUp, stagger, viewport } from "@/lib/animations";

const audiences = [
  {
    icon: GraduationCap,
    tag: "Sinh viên",
    title: "Sinh viên năm 3-4 & mới ra trường",
    desc: "Lương khởi điểm 10-15 triệu/tháng",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=64&q=80",
  },
  {
    icon: Briefcase,
    tag: "Người đi làm",
    title: "Người đi làm muốn nâng cấp",
    desc: "Fresher, IT Support, Tester",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=80",
  },
  {
    icon: Wrench,
    tag: "Non-tech",
    title: "Non-tech muốn tự xây sản phẩm",
    desc: "PM, Designer, Entrepreneur",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&q=80",
  },
  {
    icon: Zap,
    tag: "Developer",
    title: "Developer muốn làm AI-native",
    desc: "Đã có nền tảng, muốn bứt phá",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&q=80",
  },
];

export function AudienceSection() {
  return (
    <section id="audience" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Đối tượng" title="Khóa Học Dành Cho Ai?" />
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {audiences.map(({ icon: Icon, tag, title, desc, img }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              whileHover={cardHover}
              style={{ borderColor: cardBorder }}
              className="flex items-start gap-5 rounded-2xl border bg-card p-6"
            >
              <Image
                src={img}
                alt={tag}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-brand/40"
              />
              <div>
                <div className="flex items-center gap-2 text-brand">
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-semibold tracking-wider uppercase">{tag}</span>
                </div>
                <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
                <p className="mt-1 text-slate-400">{desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
