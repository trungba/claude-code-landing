"use client";

import { motion } from "framer-motion";
import { Phone, Send } from "lucide-react";
import { useState } from "react";
import { buttonHover, buttonTap, fadeInUp, viewport } from "@/lib/animations";
import { isValidEmail } from "@/lib/validation";

type Errors = { name?: string; email?: string };

const inputClass =
  "w-full rounded-xl border bg-ink px-4 py-3 text-white placeholder:text-slate-600 transition-colors duration-300 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none";

export function CtaSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string | null>(null);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (field in errors) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Vui lòng nhập họ và tên.";
    if (!isValidEmail(form.email)) next.email = "Email không đúng định dạng.";
    setErrors(next);
    if (next.name || next.email) {
      setSuccess(null);
      return;
    }
    // Chưa có backend: chỉ xác nhận phía client.
    setSuccess(`Cảm ơn ${form.name.trim()}! Chúng tôi sẽ liên hệ qua ${form.email.trim()} trong 24h.`);
    setForm({ name: "", email: "", phone: "" });
  }

  return (
    <section id="register" className="bg-gradient-to-b from-[#1A0E08] to-[#090A14] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Sẵn Sàng Bắt Đầu Chưa?</h2>
          <p className="mt-4 text-lg text-slate-400">Để lại thông tin, đội ngũ tư vấn sẽ liên hệ bạn trong 24h.</p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-[480px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-2xl border border-white/10 bg-card p-6 sm:p-8"
          >
            <div>
              <label htmlFor="reg-name" className="mb-1.5 block text-sm font-medium text-white">
                Họ và tên <span className="text-brand">*</span>
              </label>
              <input
                id="reg-name"
                type="text"
                autoComplete="name"
                placeholder="Nguyễn Văn A"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                className={`${inputClass} ${errors.name ? "border-red-500" : "border-white/10"}`}
              />
              {errors.name && <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="reg-email" className="mb-1.5 block text-sm font-medium text-white">
                Email <span className="text-brand">*</span>
              </label>
              <input
                id="reg-email"
                type="email"
                autoComplete="email"
                placeholder="ban@email.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                className={`${inputClass} ${errors.email ? "border-red-500" : "border-white/10"}`}
              />
              {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="reg-phone" className="mb-1.5 block text-sm font-medium text-white">
                Số điện thoại <span className="text-slate-500">(không bắt buộc)</span>
              </label>
              <input
                id="reg-phone"
                type="tel"
                autoComplete="tel"
                placeholder="09xx xxx xxx"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={`${inputClass} border-white/10`}
              />
            </div>
            <motion.button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 font-semibold text-white transition-colors duration-300 hover:bg-brand-dark"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              Đăng Ký Ngay <Send className="h-5 w-5" />
            </motion.button>
            {success && (
              <p role="status" className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center text-sm text-emerald-300">
                {success}
              </p>
            )}
          </form>

          <div className="mt-6 flex flex-col items-center gap-3 text-center">
            <motion.a
              href="tel:02363779779"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/5"
            >
              <Phone className="h-5 w-5" /> Liên Hệ Hỗ Trợ
            </motion.a>
            <p className="text-slate-400">
              📞 Hotline:{" "}
              <a href="tel:02363779779" className="font-semibold text-brand hover:text-brand-light">
                0236.3.779.779
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
