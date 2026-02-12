# Tech Learning Platform — All Roadmap.sh Roles

## Project Overview
A unified web-based learning platform covering 26 career tracks from roadmap.sh. Features interactive in-browser terminal, curated YouTube videos, structured curriculum, and progress tracking — all accessible from a single domain with a unified dashboard.

## Tech Stack
- **Frontend:** Next.js 16+ (App Router), React, TypeScript, TailwindCSS, shadcn/ui
- **Auth:** Auth.js (NextAuth v5) - GitHub/Google
- **Database:** Neon (PostgreSQL serverless) + Prisma ORM
- **Terminal:** Simulated terminal (xterm.js) + WebContainers (planned)
- **Video:** YouTube iFrame embeds
- **Hosting:** Vercel

---

## Tracks (26 Roles)

### Category: Web Development
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| Frontend | 18 | ~120 | Phase 1 |
| Backend | 16 | ~155 | Phase 1 |
| Full Stack | 3 | ~37 | Phase 1 |

### Category: Data & AI
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| Data Analyst | 11 | ~101 | Phase 2 |
| AI Engineer | 8 | ~129 | Phase 2 |
| AI & Data Scientist | 5 | ~25 | Phase 3 |
| Data Engineer | 12 | ~186 | Phase 2 |
| Machine Learning | 10 | ~150 | Phase 2 |

### Category: Security & Quality
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| DevSecOps | 14 | ~93 | Phase 2 |
| QA | 10 | ~146 | Phase 2 |
| Cyber Security | 15 | ~301 | Phase 3 |

### Category: Mobile
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| Android | 12 | ~106 | Phase 3 |
| iOS | 14 | ~169 | Phase 3 |

### Category: Infrastructure & Databases
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| DevOps | 10 | 42 | ✅ Done |
| MLOps | 5 | 25 | ✅ Done |
| PostgreSQL | 12 | ~170 | Phase 3 |
| Blockchain | 11 | ~127 | Phase 3 |

### Category: Design & Writing
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| UX Design | 9 | ~94 | Phase 4 |
| Technical Writer | 8 | ~84 | Phase 4 |

### Category: Gaming
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| Game Developer | 7 | ~144 | Phase 4 |
| Server Side Game Developer | 6 | ~156 | Phase 4 |

### Category: Management & Relations
| Track | Modules | Est. Lessons | Priority |
|-------|---------|--------------|----------|
| Product Manager | 10 | ~172 | Phase 5 |
| Engineering Manager | 8 | ~133 | Phase 5 |
| Developer Relations | 8 | ~142 | Phase 5 |
| BI Analyst | 10 | ~203 | Phase 5 |

**Total: 26 tracks, ~250+ modules, ~3,200+ lessons**

---

## Architecture

### Routing (Single App, Unified Domain)
```
/                               → Landing page with 26 role cards
/dashboard                      → Unified dashboard, all track progress
/learn                          → Full curriculum overview, category filters
/learn/[trackId]/[moduleId]     → Module detail (lessons + project)
/learn/[trackId]/[moduleId]/[lessonId] → Lesson page (Read/Watch/Practice)
```

### Curriculum File Structure
```
src/lib/curriculum/
├── types.ts                    → Track, Module, Lesson interfaces
├── index.ts                    → Aggregates all tracks, helper functions
├── devops.ts                   → DevOps (existing)
├── mlops.ts                    → MLOps (existing)
├── frontend.ts                 → Frontend Developer
├── backend.ts                  → Backend Developer
├── full-stack.ts               → Full Stack Developer
├── devsecops.ts                → DevSecOps
├── data-analyst.ts             → Data Analyst
├── ai-engineer.ts              → AI Engineer
├── ai-data-scientist.ts        → AI & Data Scientist
├── data-engineer.ts            → Data Engineer
├── android.ts                  → Android Developer
├── machine-learning.ts         → Machine Learning
├── postgresql.ts               → PostgreSQL DBA
├── ios.ts                      → iOS Developer
├── blockchain.ts               → Blockchain Developer
├── qa.ts                       → QA Engineer
├── software-architect.ts       → Software Architect
├── cyber-security.ts           → Cyber Security
├── ux-design.ts                → UX Design
├── technical-writer.ts         → Technical Writer
├── game-developer.ts           → Game Developer
├── server-side-game-dev.ts     → Server Side Game Dev
├── product-manager.ts          → Product Manager
├── engineering-manager.ts      → Engineering Manager
├── devrel.ts                   → Developer Relations
└── bi-analyst.ts               → BI Analyst
```

---

## Implementation Tasks

See PROJECT_TRACKER.md for detailed implementation status.
