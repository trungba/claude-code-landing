"use client";

import { motion } from "framer-motion";
import { BookOpen, Monitor, Rocket, Users, Video } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { cardBorder, cardHover, stagger, viewport, zoomIn } from "@/lib/animations";

const features = [
  { icon: BookOpen, title: "Hướng dẫn từng bước chi tiết", desc: "8 buổi thực chiến, đi từ cài đặt đến sản phẩm hoàn chỉnh." },
  { icon: Monitor, title: "16 tiết học thực hành", desc: "Mỗi tiết đều có bài tập thực tế, làm ngay trên máy của bạn." },
  { icon: Rocket, title: "Học từ dự án thực tế", desc: "Xây dựng ProjectOS — hệ thống quản lý dự án doanh nghiệp." },
  { icon: Video, title: "Video ghi lại toàn bộ buổi học", desc: "Xem lại bất cứ lúc nào, không lo bỏ lỡ kiến thức." },
  { icon: Users, title: "Cộng đồng học viên", desc: "Group Zalo hỗ trợ sau khóa, trao đổi cùng giảng viên và học viên." },
];

export function SolutionSection() {
  return (
    <section id="solution" className="relative overflow-hidden bg-card/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/10 blur-[100px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Giải pháp"
          title="Giải Pháp Toàn Diện Cho Bạn"
          description={
            <>
              Khóa học <strong className="text-white">“Claude Code – Xây dựng ứng dụng hoàn chỉnh”</strong> giúp bạn
              làm chủ quy trình phát triển AI-native: thiết kế, viết, debug và deploy một sản phẩm thật.
            </>
          }
        />
        {/* flex-wrap + justify-center: 3 thẻ hàng đầu, 2 thẻ hàng sau căn giữa */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={zoomIn}
              whileHover={cardHover}
              style={{ borderColor: cardBorder }}
              className="w-full rounded-2xl border bg-card p-6 md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-slate-400">{desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
