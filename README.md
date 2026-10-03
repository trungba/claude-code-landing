# Claude Code — Landing page khóa học

Landing page khóa học "Claude Code - Xây dựng ứng dụng hoàn chỉnh" (Softech Aptech Đà Nẵng), hai phiên bản độc lập trong cùng repo.

| Thư mục | Công nghệ | Production |
| --- | --- | --- |
| [`html/`](html/) | HTML tĩnh + Tailwind CDN + Animate.css + Lucide | https://claude-code-landing-neon.vercel.app · https://trungba.github.io/claude-code-landing/ |
| [`nextjs/`](nextjs/) | Next.js 16 + TypeScript + Tailwind v4 + Framer Motion + Lucide React | Vercel project `claude-code-landing-nextjs` |

Mỗi thư mục là một Vercel project riêng (Root Directory trỏ đúng thư mục); push lên `master` sẽ deploy lại cả hai. GitHub Pages publish `html/` qua `.github/workflows/pages.yml`.

## Chạy local

```bash
# Bản HTML
cd html && python3 -m http.server 8000

# Bản Next.js
cd nextjs && pnpm install && pnpm dev
```

## Còn thiếu trước khi chạy chính thức

- Form đăng ký và ô bản tin chỉ kiểm tra phía client, chưa gửi dữ liệu đi đâu.
- Testimonial là nội dung mẫu.
- Link mạng xã hội đang là `#`.
