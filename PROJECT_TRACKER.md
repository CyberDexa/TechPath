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

## Phase 7: Content Curation (Ongoing)
| Task | Status | Notes |
|------|--------|-------|
| Curate videos for Frontend track | ⬜ | YouTube quality channels |
| Curate videos for Backend track | ⬜ | |
| Curate videos for Full Stack track | ⬜ | |
| Create terminal exercises | ⬜ | For applicable tracks |
| Curate remaining track videos | ⬜ | Phase 2-5 tracks |

---

## Phase 8: Polish & Launch
| Task | Status | Notes |
|------|--------|-------|
| Error handling & loading states | ⬜ | |
| SEO: meta tags per track | ⬜ | OG images for each role |
| Performance optimization | ⬜ | Code splitting per track |
| Lighthouse audit | ⬜ | Score > 90 |
| Deploy to Vercel | ⬜ | |
| Custom domain setup | ⬜ | Single domain for all |

---

## Phase 9: Future Enhancements (Post-MVP)
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

### Sprint 2 (Next)
**Goal:** Content curation + progress wiring
- [ ] Curate YouTube videos for top 5 tracks
- [ ] Wire useProgress hook to dashboard stats
- [ ] Add real completion percentages to track cards
- [ ] Terminal exercises for web dev tracks

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
