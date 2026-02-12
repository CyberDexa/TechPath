# Project Tracker: Tech Learning Platform (26 Roadmap.sh Tracks)

## Status Legend
- ⬜ Not Started
- 🟡 In Progress
- ✅ Completed
- 🔴 Blocked

---

## Phase 0: Existing Foundation (Already Built)
| Task | Status | Notes |
|------|--------|-------|
| Next.js 16 project setup | ✅ | TypeScript, TailwindCSS, ESLint |
| shadcn/ui components | ✅ | 16 components installed |
| Prisma ORM + schema | ✅ | User, Progress, Badges, Streaks |
| NextAuth v5 (GitHub + Google) | ✅ | Auth flow working |
| Sign-in page | ✅ | OAuth buttons |
| Profile page | ✅ | Basic implementation |
| Navbar with auth | ✅ | Desktop + mobile |
| Dark mode | ✅ | Default dark theme |
| Simulated terminal | ✅ | ~600 lines, xterm.js |
| Video player | ✅ | YouTube embed |
| Progress API routes | ✅ | GET/POST + stats |
| DevOps curriculum (10 modules, 42 lessons) | ✅ | Videos + exercises curated |
| MLOps curriculum (5 modules, 25 lessons) | ✅ | Videos + exercises curated |
| Dashboard page | ✅ | Stats, progress, badges |
| Learn page | ✅ | Curriculum overview |
| Lesson page with tabs | ✅ | Read/Watch/Practice |

---

## Phase 1: Multi-Track Architecture Expansion
| Task | Status | Notes |
|------|--------|-------|
| Extract curriculum types to types.ts | ✅ | Track, Module, Lesson, TrackCategory, ModuleProject |
| Split curriculum into modular files | ✅ | 26 files, one per track |
| Create curriculum index aggregator | ✅ | Imports all tracks, helper fns (getTrack, getTracksByCategory, etc.) |
| Update curriculum.ts to re-export | ✅ | Backwards compatible + updated badges array |
| Add track metadata (category, color, icon) | ✅ | 8 categories, 18 color variants |

---

## Phase 2: New Track Curricula — Phase 1 Pilots (Web Dev)
| Task | Status | Notes |
|------|--------|-------|
| Frontend track (18 modules) | ✅ | category: web, color: cyan |
| Backend track (16 modules) | ✅ | category: web, color: blue |
| Full Stack track (13 modules) | ✅ | category: web, color: purple |

---

## Phase 3: New Track Curricula — Phase 2 (Data/AI + Security)
| Task | Status | Notes |
|------|--------|-------|
| DevSecOps track (14 modules) | ✅ | category: security-quality |
| Data Analyst track (11 modules) | ✅ | category: data-ai, color: emerald |
| AI Engineer track (8 modules) | ✅ | category: data-ai, color: violet |
| Data Engineer track (12 modules) | ✅ | category: data-ai, color: amber |
| Machine Learning track (10 modules) | ✅ | category: data-ai, color: pink |
| QA track (10 modules) | ✅ | category: security-quality |

---

## Phase 4: New Track Curricula — Phase 3 (Mobile + Infra)
| Task | Status | Notes |
|------|--------|-------|
| AI & Data Scientist track (5 modules) | ✅ | category: data-ai, color: fuchsia |
| Android track (9 modules) | ✅ | category: mobile, color: green |
| iOS track (9 modules) | ✅ | category: mobile, color: slate |
| PostgreSQL track (6 modules) | ✅ | category: infrastructure, color: sky |
| Blockchain track (7 modules) | ✅ | category: infrastructure, color: indigo |
| Cyber Security track (15 modules) | ✅ | category: security-quality |
| Software Architect track (9 modules) | ✅ | category: infrastructure, color: slate |

---

## Phase 5: New Track Curricula — Phase 4-5 (Design, Gaming, Mgmt)
| Task | Status | Notes |
|------|--------|-------|
| UX Design track (8 modules) | ✅ | category: design-writing, color: rose |
| Technical Writer track (7 modules) | ✅ | category: design-writing, color: orange |
| Game Developer track (8 modules) | ✅ | category: gaming, color: red |
| Server Side Game Dev track (7 modules) | ✅ | category: gaming, color: orange |
| Product Manager track (8 modules) | ✅ | category: management, color: violet |
| Engineering Manager track (8 modules) | ✅ | category: management, color: teal |
| Developer Relations track (7 modules) | ✅ | category: management, color: pink |
| BI Analyst track (10 modules) | ✅ | category: data-ai, color: lime |

---

## Phase 6: UI Redesign for Multi-Track
| Task | Status | Notes |
|------|--------|-------|
| Landing page: category-grouped track grid | ✅ | Dynamic stats, 26 track cards by category |
| Track card component | ✅ | Color-coded icon, title, module/lesson counts |
| Category filter tabs | ✅ | Learn page: 8 category buttons + All |
| Search/filter functionality | ✅ | Dashboard + Learn page search |
| Dashboard: multi-track progress | ✅ | 3-col grid, search, per-track cards with color |
| Learn page: all tracks with filters | ✅ | Category tabs, search, ?track= deep linking |
| Navbar: rebranded to TechPath | ✅ | Logo "TP", nav label "Tracks" |
| Track-specific color theming | ✅ | 18 color variants in trackColorMap |
| Footer: roadmap.sh + GitHub links | ✅ | "TechPath Learning Platform" branding |

---

## Phase 7: Content Curation & Progress Wiring
| Task | Status | Notes |
|------|--------|-------|
| Wire useProgress to lesson page | ✅ | Mark Complete, Video Watched, Terminal Done |
| Wire useProgress to dashboard | ✅ | Real stats, smart Continue Learning |
| Track completion % on cards | ✅ | Real progress bars & percentages |
| Progress indicators on learn page | ✅ | Checkmarks, module progress bars |
| Streak wired to navbar | ✅ | Live count, conditional orange styling |
| Badge rules scaled to 26 tracks | ✅ | 12 rules: 8 lesson + 4 track milestones |
| Curate videos for Frontend track | ✅ | 72/72 lessons (100%) — all curated |
| Curate videos for Backend track | ✅ | 68/68 lessons (100%) — already complete |
| Curate videos for Full Stack track | ✅ | 53/53 lessons (100%) — already complete |
| Create terminal exercises | ✅ | 399/399 lessons with hasTerminal have exercises |
| Curate remaining track videos | ✅ | 515 videos added → 993/993 = 100% |

---

## Phase 8: Polish & Launch
| Task | Status | Notes |
|------|--------|-------|
| Profile page with real stats | ✅ | Stats, badges, milestone tracker, module activity |
| Error handling & loading states | ✅ | error.tsx, not-found.tsx, loading skeletons |
| SEO: meta tags per track | ✅ | generateMetadata for track/module/lesson routes |
| Performance optimization | ✅ | Server/client split, dynamic imports, tree-shaking, 148 deps removed |
| Lighthouse audit | ✅ | Perf 90, A11y 93, Best Practices 96, SEO 100 |
| Deploy to Vercel | ✅ | https://techpath-seven.vercel.app — project name "techpath" |
| OAuth (GitHub + Google) on prod | ✅ | Env vars set, callback URLs configured |
| Fix useProgress 401s | ✅ | Auth guard with useSession, unauthenticated users no longer error |
| UI branding update | ✅ | "Get Started" button, sign-in page updated to TechPath |
| Custom domain setup | ⬜ | Requires domain purchase |

---

## Phase 9: Final Polish & Launch Readiness
| Task | Status | Notes |
|------|--------|-------|
| Responsive design audit | ✅ | All pages verified at mobile/tablet breakpoints |
| 404 / error pages styling | ✅ | Branded with emoji icons, error digest display, responsive buttons |
| Lesson navigation (prev/next) | ✅ | Cross-module: last lesson → next module's first, vice versa |
| Module completion summary | ✅ | Progress bar + per-lesson check marks (client component) |
| Keyboard shortcuts | ✅ | ← prev, → next, Enter mark complete (input-aware) |
| Profile metadata fix | ✅ | Updated from "DevOps & MLOps" to "TechPath" |
| Module badge color fix | ✅ | Removed hardcoded devops/purple, now uses default variant |
| README.md update | ✅ | Architecture, setup guide, tech stack, curriculum, Lighthouse |
| Final Lighthouse re-audit | ✅ | Perf 93, A11y 93, Best Practices 100, SEO 100 |

---

## Phase 10: Future Enhancements (Post-MVP)
| Task | Status | Notes |
|------|--------|-------|
| Quiz/assessment system | ⬜ | |
| Certificate generation | ⬜ | Per-track completion |
| Admin dashboard for content | ⬜ | Manage curricula |
| Community forums | ⬜ | |
| AI tutor integration | ⬜ | |
| WebContainers real terminal | ⬜ | Replace simulated |
| MDX lesson content | ⬜ | Rich text lessons |
| Offline mode | ⬜ | |

---

## Sprint Log

### Sprint 1 (Completed — Feb 2026)
**Goal:** Multi-track architecture + all 26 tracks + UI redesign
- [x] Modular curriculum file structure (types.ts, 26 track files, index.ts)
- [x] All 24 new track curriculum configs created (+ existing DevOps & MLOps)
- [x] Redesigned landing page with category-grouped track cards
- [x] Updated dashboard with 3-column track grid + search
- [x] Updated learn page with category filter tabs + search + deep linking
- [x] Navbar rebranded to "TechPath"
- [x] Build passing cleanly (Next.js 16.1.6)

### Sprint 2 (Completed — Feb 2026)
**Goal:** Content curation + progress wiring
- [x] Wire useProgress to lesson page (Mark Complete, Video Watched, Terminal Done)
- [x] Wire useProgress to dashboard (real stats, smart Continue Learning)
- [x] Real completion percentages on dashboard track cards
- [x] Progress indicators on learn page (checkmarks, module progress bars)
- [x] Badge system scaled: 12 rules (8 lesson milestones + 4 track milestones)
- [x] Live streak wired to navbar with conditional orange styling
- [x] Frontend track: 24 new YouTube videos curated (46/72 = 64%)
- [x] Backend track: confirmed 100% video coverage
- [x] Build passing (Next.js 16.1.6 Turbopack)

### Sprint 3 (Completed — Feb 2026)
**Goal:** Remaining video curation + profile page + UX polish
- [x] Frontend track: filled all 26 remaining video gaps (72/72 = 100%)
- [x] Full Stack track: confirmed 100% coverage (53/53)
- [x] Profile page: real stats, badges earned/locked, milestone tracker, module activity
- [x] Error handling: global error.tsx, not-found.tsx
- [x] Loading skeletons: dashboard + learn page
- [x] SEO: generateMetadata for track, module, lesson routes + static layouts
- [x] Build passing (Next.js 16.1.6 Turbopack, 13 files, 697 insertions)

### Sprint 4 (Completed — Feb 2026)
**Goal:** 100% video coverage across all 26 tracks
- [x] Surveyed all 26 tracks — found 515 missing videos across 18 tracks (48% coverage)
- [x] Created bulk video injection script (scripts/add-videos.ts)
- [x] Batch 1: software-architect (40), engineering-manager (30), product-manager (29),
      server-side-game-dev (25), devrel (25), postgresql (23) — 172 videos
- [x] Batch 2: data-engineer (42), bi-analyst (32), ios (32), machine-learning (31),
      data-analyst (30), android (29) — 196 videos  
- [x] Batch 3: blockchain (27), ai-engineer (27), ux-design (26), game-developer (26),
      technical-writer (25), ai-data-scientist (16) — 147 videos
- [x] Total: 993/993 lessons with curated YouTube videos (100% coverage)
- [x] Build verified — zero TypeScript errors

### Sprint 5 (Completed — Feb 2026)
**Goal:** Terminal exercises + performance optimization + Lighthouse audit
- [x] Surveyed all 26 tracks — 399/399 terminal exercises already populated (100%)
- [x] Lesson page: Server/client split — curriculum data resolved server-side, only 1 lesson sent to client
- [x] Module page: Converted to server component — zero client JS for data
- [x] Dynamic imports: TerminalComponent + VideoPlayer lazy-loaded (only on tab activation)
- [x] Removed 148 unused packages (@xterm/xterm, @next/mdx, shiki, next-mdx-remote, rehype-pretty-code)
- [x] next.config: optimizePackageImports (lucide-react, radix-ui), compress, poweredByHeader off
- [x] Font optimization: display swap for Geist + Geist Mono
- [x] Fixed color contrast: green-700 for light mode WCAG 4.5:1 compliance
- [x] Added viewport meta, theme-color, OpenGraph metadata
- [x] Lighthouse scores: Performance 90, Accessibility 93, Best Practices 96, SEO 100
- [x] Build script: prisma generate + postinstall hook for Vercel deployment
- [x] Build passing — zero TypeScript errors

### Sprint 6 (Completed — Feb 2026)
**Goal:** Vercel deployment + OAuth + UI fixes
- [x] Deployed to Vercel as "techpath" → https://techpath-seven.vercel.app
- [x] Set all env vars (DATABASE_URL, AUTH_SECRET, AUTH_URL)
- [x] Fixed useProgress 401 errors for unauthenticated users (useSession guard)
- [x] Configured GitHub + Google OAuth on production (fixed env var newline issue)
- [x] Updated metadataBase to match Vercel URL
- [x] Navbar: "Sign In" → "Get Started" for unauthenticated users
- [x] Sign-in page: rebranded to "Welcome to TechPath", removed unconfigured email option
- [x] GitHub integration: auto-deploys on push to main
- [x] Build passing — zero TypeScript errors

### Sprint 7 (Completed — Feb 2026)
**Goal:** Final polish & launch readiness
- [x] Fixed profile metadata: "DevOps & MLOps Learning" → "TechPath"
- [x] Fixed module page badge: removed hardcoded devops/purple color
- [x] Cross-module lesson navigation: prev/next links span module boundaries
- [x] Module page completion summary: progress bar + per-lesson checkmarks
- [x] Keyboard shortcuts: ← prev lesson, → next lesson, Enter mark complete
- [x] Branded 404 page with emoji icon, better copy, responsive buttons
- [x] Branded error page with error digest display
- [x] README.md: full rewrite with architecture, setup, tech stack, curriculum
- [x] Lighthouse re-audit: Perf 93, A11y 93, Best Practices 100, SEO 100
- [x] Build passing — zero TypeScript errors

---

## Notes & Decisions
- **Single unified app** — all tracks on one domain, one dashboard
- **Modular curriculum files** — one TypeScript file per track for maintainability
- **Existing schema supports it** — trackId is already a flexible string field
- **Dynamic routing works** — /learn/[trackId] handles any track
- **MVP structure first** — scaffold module/lesson structure, curate content later
- **Curated YouTube videos** — from quality channels per domain
- **Category-based filtering** — helps users navigate 26 tracks

---

## YouTube Video Resources (To Curate)

### Recommended Channels
| Channel | Topics | Link |
|---------|--------|------|
| TechWorld with Nana | DevOps, Docker, K8s, CI/CD | https://youtube.com/@TechWorldwithNana |
| freeCodeCamp | Programming, DevOps, ML, All | https://youtube.com/@freecodecamp |
| NetworkChuck | Networking, Linux, Docker | https://youtube.com/@NetworkChuck |
| Fireship | Quick tech explainers | https://youtube.com/@Fireship |
| Sentdex | Python, ML, AI | https://youtube.com/@sentdex |
| Made With ML | MLOps, Production ML | https://youtube.com/@madewithml |
| Traversy Media | Web dev, DevOps basics | https://youtube.com/@TraversyMedia |
| The Net Ninja | Programming tutorials | https://youtube.com/@NetNinja |
| DataTalksClub | Data Engineering, MLOps | https://youtube.com/@DataTalksClub |
| StatQuest | ML, Statistics | https://youtube.com/@StatQuest |
| Theo - t3.gg | Frontend, TypeScript | https://youtube.com/@t3dotgg |
| Ben Awad | React, GraphQL | https://youtube.com/@bawad |
| Codevolution | React, Next.js, Angular | https://youtube.com/@Codevolution |
| Sean Allen | iOS, Swift, SwiftUI | https://youtube.com/@seanallen |
| Philipp Lackner | Android, Kotlin | https://youtube.com/@PhilippLackner |
| GameDev.tv | Game Development | https://youtube.com/@GameDevtv |

---

## External Sandbox Resources

| Tool | Use Case | Link |
|------|----------|------|
| Play with Docker | Docker hands-on | https://labs.play-with-docker.com |
| Killercoda | K8s, Docker, Linux | https://killercoda.com |
| Google Cloud Shell | Cloud practice | https://shell.cloud.google.com |
| GitHub Codespaces | Full dev environment | https://github.com/codespaces |
| CodeSandbox | Frontend practice | https://codesandbox.io |
| StackBlitz | Web dev practice | https://stackblitz.com |
