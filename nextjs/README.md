# Claude Code landing — bản Next.js

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide React.

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

## Cấu trúc

- `app/page.tsx` — lắp ghép các section theo thứ tự.
- `components/` — mỗi section một file (`Navbar`, `HeroSection`, `ProblemSection`, `SolutionSection`, `AudienceSection`, `CourseContent`, `SocialProof`, `CtaSection`, `FaqSection`, `Footer`) và các phần dùng chung (`CounterStat`, `CtaLink`, `SectionHeading`, `MotionProvider`).
- `lib/animations.ts` — variants/hover dùng chung; `lib/validation.ts` — kiểm tra email.
- Màu theme khai báo trong `app/globals.css` (`ink`, `card`, `deep`, `brand`).
- Ảnh Unsplash được cho phép qua `images.remotePatterns` trong `next.config.ts`.
