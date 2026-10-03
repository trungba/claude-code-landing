import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Claude Code — Xây dựng ứng dụng hoàn chỉnh | Softech Aptech Đà Nẵng",
  description:
    "Khóa học 8 buổi (16 tiết) Claude Code: từ cài đặt đến triển khai sản phẩm hoàn chỉnh lên Vercel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${jetbrains.variable} antialiased`}>
      <body className="overflow-x-hidden bg-ink font-sans text-slate-300">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
