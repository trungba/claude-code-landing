"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, TerminalSquare } from "lucide-react";
import { useState } from "react";
import { isValidEmail } from "@/lib/validation";

// lucide-react 1.x đã bỏ icon thương hiệu nên vẽ inline SVG cho Facebook/LinkedIn/YouTube.
type IconProps = { className?: string };
const FacebookIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

// href "#" là chỗ giữ — thay bằng URL trang thật.
const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Zalo", icon: MessageCircle, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus({ ok: false, text: "Email không đúng định dạng." });
      return;
    }
    setStatus({ ok: true, text: "Đăng ký thành công! Hẹn gặp bạn trong hộp thư." });
    setEmail("");
  }

  return (
    <footer className="border-t border-white/5 bg-deep pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 text-xl font-extrabold text-brand">
              <TerminalSquare className="h-6 w-6" /> Claude Code
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Khóa học AI-native development tại Softech Aptech Đà Nẵng
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">Liên hệ</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand" /> 24 Lê Thánh Tôn, Đà Nẵng
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand" />
                <a href="tel:02363779779" className="transition-colors duration-300 hover:text-brand">0236.3.779.779</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand" />
                <a href="mailto:info@softech.vn" className="transition-colors duration-300 hover:text-brand">info@softech.vn</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Mạng xã hội</h4>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-400"
                  whileHover={{ scale: 1.2, color: "#DF6B33" }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Bản tin</h4>
            <p className="mt-4 text-sm text-slate-400">Nhận tips Claude Code miễn phí</p>
            <form onSubmit={subscribe} noValidate className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <label htmlFor="nl-email" className="sr-only">Email</label>
              <input
                id="nl-email"
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-card px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-brand focus:outline-none"
              />
              <button type="submit" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-dark">
                Đăng ký
              </button>
            </form>
            {status && (
              <p role="status" className={`mt-2 text-sm ${status.ok ? "text-emerald-400" : "text-red-400"}`}>
                {status.text}
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center text-sm text-slate-500">
          © 2026 Softech Aptech Đà Nẵng. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
