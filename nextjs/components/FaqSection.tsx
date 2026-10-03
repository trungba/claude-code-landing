"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeInUp, stagger, viewport } from "@/lib/animations";

const faqs = [
  {
    q: "Tôi là người mới bắt đầu, có học được không?",
    a: "Hoàn toàn được! Buổi 1-2 trang bị nền tảng từ đầu. Chỉ cần biết dùng máy tính cơ bản.",
  },
  {
    q: "Khóa này dành cho những ai?",
    a: "Sinh viên IT, Fresher, PM/Designer/Entrepreneur muốn tự xây sản phẩm, Developer muốn làm AI-native.",
  },
  {
    q: "Tôi mất bao lâu để hoàn thành?",
    a: "4 tuần, 8 buổi, mỗi buổi 2 tiết. Sau khóa có sản phẩm hoàn chỉnh deploy lên Vercel.",
  },
  { q: "Có hỗ trợ sau khi học không?", a: "Group Zalo hỗ trợ 3 tháng + video bài giảng truy cập vĩnh viễn." },
  { q: "Nếu không hài lòng thì sao?", a: "Hoàn 100% học phí nếu không hài lòng sau buổi đầu tiên, báo trong 24h." },
  { q: "Tôi có truy cập vĩnh viễn không?", a: "Có. Video + tài liệu + source code đều tải về được, không hết hạn." },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Câu Hỏi Thường Gặp" />
        <motion.div
          className="mt-12 space-y-4"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {faqs.map((item, i) => {
            const open = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <motion.div
                key={item.q}
                variants={fadeInUp}
                className={`rounded-2xl border bg-card transition-colors duration-300 ${
                  open ? "border-brand/60" : "border-white/10"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white transition-colors duration-300 hover:text-brand"
                >
                  {item.q}
                  <motion.span
                    className="shrink-0 text-brand"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-5 text-slate-400">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
