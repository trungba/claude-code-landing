"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/CtaLink";
import { SectionHeading } from "@/components/SectionHeading";
import { cardBorder, cardHover, viewport } from "@/lib/animations";

const sessions = [
  { title: "Làm quen Claude Code", desc: "Cài đặt, cấu hình & luồng làm việc cơ bản" },
  { title: "Prompt Engineering thực chiến", desc: "Viết yêu cầu rõ ràng, cung cấp ngữ cảnh và kiểm soát kết quả của AI." },
  { title: "Thiết kế kiến trúc ứng dụng cùng AI", desc: "Phân tích yêu cầu, chọn stack, thiết kế dữ liệu và cấu trúc thư mục." },
  { title: "Xây dựng Backend với Firebase", desc: "Authentication, Firestore, security rules." },
  { title: "Xây dựng Frontend", desc: "UI, kết nối Firebase, xử lý nghiệp vụ" },
  { title: "Debug & Refactor cùng AI", desc: "Tìm nguyên nhân lỗi, cải tiến code an toàn, giữ codebase sạch." },
  { title: "Tích hợp tính năng nâng cao", desc: "Mở rộng sản phẩm với các tính năng thực tế doanh nghiệp cần." },
  { title: "Deploy & Hoàn thiện sản phẩm trên Vercel", desc: "Đưa sản phẩm lên production và trình bày demo." },
];

export function CourseContent() {
  return (
    <section id="curriculum" className="bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lộ trình · 4 tuần"
          title="Chương Trình 8 Buổi"
          description="Mỗi buổi 2 tiết · 2 buổi/tuần · Kết thúc với sản phẩm chạy trên production"
        />

        <ol className="relative mt-14 ml-5 space-y-8 border-l-2 border-dashed border-brand sm:ml-6">
          {sessions.map((s, i) => (
            <motion.li
              key={s.title}
              className="relative pl-10"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="absolute top-0 -left-[21px] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-bold text-white ring-8 ring-ink">
                {i + 1}
              </span>
              <motion.div
                whileHover={cardHover}
                style={{ borderColor: cardBorder }}
                className="rounded-xl border bg-card p-5"
              >
                <p className="text-xs font-semibold text-brand uppercase">
                  Tuần {Math.floor(i / 2) + 1} · Buổi {i + 1}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-slate-400">{s.desc}</p>
              </motion.div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <CtaLink href="#register" pulse>
            Tham gia khóa học <ArrowRight className="h-5 w-5" />
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
