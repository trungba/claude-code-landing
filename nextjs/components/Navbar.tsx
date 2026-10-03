"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, TerminalSquare } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#solution", label: "Khóa học" },
  { href: "#curriculum", label: "Lộ trình" },
  { href: "#proof", label: "Học viên" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 50));

  return (
    <motion.nav
      aria-label="Điều hướng chính"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/5 bg-[rgba(9,10,20,0.95)] backdrop-blur-[12px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-2 text-xl font-extrabold text-brand">
          <TerminalSquare className="h-6 w-6" /> Claude Code
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors duration-300 hover:text-brand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#register"
          className="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-dark md:inline-block"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(223,107,51,0.45)" }}
          whileTap={{ scale: 0.97 }}
        >
          Đăng Ký Ngay
        </motion.a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <motion.span className="inline-flex" animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.3 }}>
            <Menu className="h-6 w-6" />
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-white/5 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="space-y-1 px-4 py-4 font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 transition-colors duration-300 hover:bg-white/5 hover:text-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#register"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-brand px-3 py-3 text-center font-semibold text-white hover:bg-brand-dark"
                >
                  Đăng Ký Ngay
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
