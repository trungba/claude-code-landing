"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Puzzle, RefreshCw } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { cardBorder, cardHover, fadeInUp, stagger, viewport } from "@/lib/animations";

const problems = [
  {
    icon: Clock,
    title: "Viết code mất quá nhiều thời gian",
    desc: "Một tính năng nhỏ cũng tốn cả ngày: tra tài liệu, viết boilerplate, sửa lỗi vặt lặp đi lặp lại.",
  },
  {
    icon: Puzzle,
    title: "Khó ghi nhớ cú pháp và thư viện phức tạp",
    desc: "Framework thay đổi liên tục, API mới ra mỗi tháng — học không kịp, nhớ không hết.",
  },
  {
    icon: AlertTriangle,
    title: "Sợ làm hỏng code khi chỉnh sửa",
    desc: "Codebase lớn dần, sửa chỗ này hỏng chỗ kia, không dám refactor vì thiếu tự tin.",
  },
  {
    icon: RefreshCw,
    title: "Muốn tự động hóa nhưng không biết bắt đầu từ đâu",
    desc: "Nghe nhiều về AI coding nhưng thiếu một lộ trình rõ ràng để áp dụng vào dự án thật.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Vấn đề" title="Bạn đang gặp những vấn đề nào?" />
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {problems.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              variants={fadeInUp}
              whileHover={cardHover}
              style={{ borderColor: cardBorder }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
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
