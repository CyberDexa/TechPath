# TechPath — Master Any Tech Role, Zero to Hero

A free, open-source learning platform covering **26 career tracks** from [roadmap.sh](https://roadmap.sh). Interactive terminal exercises, curated YouTube video tutorials, structured curricula, and progress tracking — all in your browser.

**Live:** [techpath-seven.vercel.app](https://techpath-seven.vercel.app)

---

## Features

- **26 Learning Tracks** — DevOps, Frontend, Backend, Full Stack, AI/ML, Mobile, Security, and more
- **993 Lessons** with curated YouTube videos from top educators
- **399 Terminal Exercises** — practice commands right in the browser
- **Progress Tracking** — streaks, badges, per-track completion percentages
- **Keyboard Navigation** — arrow keys to move between lessons, Enter to mark complete
- **Dark/Light Mode** — system-aware theme switching
- **Responsive** — works on desktop, tablet, and mobile
- **OAuth Sign-in** — GitHub and Google

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router, React 19, Turbopack) |
| Language | TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Auth | [Auth.js v5](https://authjs.dev) (NextAuth) — GitHub, Google OAuth |
| Database | [Neon](https://neon.tech) (Serverless PostgreSQL) + [Prisma 6](https://prisma.io) |
| Hosting | [Vercel](https://vercel.com) |
| Terminal | Custom simulated terminal (~600 lines) |
| Video | YouTube iframe embed player |

## Architecture

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Landing page (26 track cards)
│   ├── dashboard/page.tsx        # User dashboard with stats
│   ├── learn/page.tsx            # Browse all tracks with filters
│   ├── learn/[trackId]/[moduleId]/page.tsx      # Module detail
│   ├── learn/[trackId]/[moduleId]/[lessonId]/   # Lesson (Read/Watch/Practice)
│   ├── auth/signin/page.tsx      # OAuth sign-in
│   ├── profile/page.tsx          # User profile & badges
│   └── api/                      # API routes (auth, progress)
├── components/                   # Reusable UI components
│   ├── navbar.tsx                # Sticky nav with auth, streak, theme toggle
│   ├── lesson-client.tsx         # Lesson page client component
│   ├── module-progress.tsx       # Module completion bar & lesson checks
│   ├── terminal.tsx              # Simulated terminal (~600 lines)
│   ├── video-player.tsx          # YouTube embed player
│   └── ui/                       # shadcn/ui primitives (16 components)
├── lib/
│   ├── curriculum/               # 28 files: types, index, + 26 track configs
│   ├── auth.ts                   # Auth.js config
│   ├── prisma.ts                 # Prisma client singleton
│   └── utils.ts                  # Utility functions
├── hooks/
│   ├── use-progress.ts           # Progress fetching & mutation hook
│   └── use-mobile.ts             # Mobile breakpoint detection
└── content/                      # (Reserved for MDX content)
```

### Database Schema

```
User ──┬── LessonProgress (lessonId, moduleId, trackId, completed, videoWatched, terminalDone)
       ├── UserBadge (name, earnedAt)
       └── LearningStreak (currentStreak, longestStreak, lastActivityDate)
```

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database (or [Neon](https://neon.tech) free tier)

### Setup

```bash
# Clone
git clone https://github.com/CyberDexa/TechPath.git
cd TechPath

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL and OAuth credentials

# Push database schema
npx prisma db push

# Run development server
npm run dev
```

### Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `AUTH_SECRET` | Random 32-byte secret (`openssl rand -base64 32`) |
| `AUTH_URL` | App URL (`http://localhost:3000` for dev) |
| `AUTH_GITHUB_ID` | GitHub OAuth App client ID |
| `AUTH_GITHUB_SECRET` | GitHub OAuth App client secret |
| `AUTH_GOOGLE_ID` | Google OAuth client ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth client secret |

### OAuth Setup

**GitHub:** [github.com/settings/developers](https://github.com/settings/developers) → New OAuth App → Callback: `{AUTH_URL}/api/auth/callback/github`

**Google:** [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials) → OAuth client → Redirect: `{AUTH_URL}/api/auth/callback/google`

## Curriculum

26 tracks organized into 8 categories:

| Category | Tracks |
|----------|--------|
| Web Development | Frontend, Backend, Full Stack |
| Data & AI | Data Analyst, AI Engineer, AI & Data Scientist, Data Engineer, Machine Learning, BI Analyst |
| Security & QA | DevSecOps, QA, Cyber Security |
| Mobile | Android, iOS |
| Infrastructure | DevOps, MLOps, PostgreSQL, Blockchain, Software Architect |
| Design & Writing | UX Design, Technical Writer |
| Gaming | Game Developer, Server Side Game Dev |
| Management | Product Manager, Engineering Manager, Developer Relations |

## Performance

Lighthouse scores (desktop):

| Metric | Score |
|--------|-------|
| Performance | 90 |
| Accessibility | 93 |
| Best Practices | 96 |
| SEO | 100 |

Optimizations applied:
- Server/client component split (lesson data resolved server-side)
- Dynamic imports for Terminal and Video Player
- Tree-shaking with `optimizePackageImports`
- Font display swap
- Compressed responses

## License

MIT
