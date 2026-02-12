/**
 * Script to bulk-add videoId/videoTitle/videoChannel to curriculum files.
 * Run: npx tsx scripts/add-videos.ts
 * 
 * This reads each curriculum .ts file, finds lesson objects by their `id`,
 * and injects the video fields right before the `hasTerminal` or `duration` line.
 */

import * as fs from "fs";
import * as path from "path";

interface VideoEntry {
  lessonId: string;
  videoId: string;
  videoTitle: string;
  videoChannel: string;
}

// Group videos by file (track prefix → filename mapping is handled below)
const videos: VideoEntry[] = [
  // === SOFTWARE ARCHITECT ===
  { lessonId: "sa-found-1", videoId: "8UlLgOf20Ho", videoTitle: "Getting the Basics — Software Architecture Introduction", videoChannel: "A Dev' Story" },
  { lessonId: "sa-found-2", videoId: "1nENigGr-a0", videoTitle: "System Design Trade-Offs You Must Know", videoChannel: "ByteByteGo" },
  { lessonId: "sa-found-3", videoId: "LMBqGPLvonU", videoTitle: "Architecture Decision Records", videoChannel: "Software Architecture Monday" },
  { lessonId: "sa-found-4", videoId: "pTB30aXS77U", videoTitle: "Uncle Bob's SOLID Principles Made Easy", videoChannel: "ArjanCodes" },
  { lessonId: "sa-pat-1", videoId: "3fwRmW8pgWU", videoTitle: "Monoliths vs Microservices Explained", videoChannel: "TechPrep" },
  { lessonId: "sa-pat-2", videoId: "rv4LlmLmVWk", videoTitle: "Microservices Explained — the What, Why and How?", videoChannel: "TechWorld with Nana" },
  { lessonId: "sa-pat-3", videoId: "STKCRSUsyP0", videoTitle: "The Many Meanings of Event-Driven Architecture", videoChannel: "GOTO Conferences" },
  { lessonId: "sa-pat-4", videoId: "vxJobGtqKVM", videoTitle: "What is Serverless?", videoChannel: "IBM Technology" },
  { lessonId: "sa-pat-5", videoId: "JubdZIdLQ4M", videoTitle: "Hexagonal, Onion & Clean Architecture", videoChannel: "Drawing Boxes" },
  { lessonId: "sa-dist-1", videoId: "BHqjEjzAicA", videoTitle: "CAP Theorem Simplified", videoChannel: "ByteByteGo" },
  { lessonId: "sa-dist-2", videoId: "IujMVjKvWP4", videoTitle: "Understand RAFT Without Breaking Your Brain", videoChannel: "ankush" },
  { lessonId: "sa-dist-3", videoId: "nH4qjmP2KEE", videoTitle: "Top 7 Most-Used Distributed System Patterns", videoChannel: "ByteByteGo" },
  { lessonId: "sa-dist-4", videoId: "16fgzklcF7Y", videoTitle: "Istio & Service Mesh — Simply Explained", videoChannel: "TechWorld with Nana" },
  { lessonId: "sa-dist-5", videoId: "xDuwrtwYHu8", videoTitle: "Applying the Saga Pattern", videoChannel: "GOTO Conferences" },
  { lessonId: "sa-cloud-1", videoId: "cxYHugyNTP0", videoTitle: "30 Cloud Design Patterns in Depth", videoChannel: "Hussein Awad" },
  { lessonId: "sa-cloud-2", videoId: "xJC7ItRoEbw", videoTitle: "N-Tier Architecture Tutorial", videoChannel: "Amigoscode" },
  { lessonId: "sa-cloud-3", videoId: "TlHvYWVUZyc", videoTitle: "Kubernetes Explained in 6 Minutes", videoChannel: "ByteByteGo" },
  { lessonId: "sa-cloud-4", videoId: "POPP2WTJ8es", videoTitle: "What is Infrastructure as Code?", videoChannel: "TechWorld with Nana" },
  { lessonId: "sa-scale-1", videoId: "xpDnVSmNFX0", videoTitle: "Horizontal vs. Vertical Scaling", videoChannel: "Gaurav Sen" },
  { lessonId: "sa-scale-2", videoId: "dGAgxozNWFE", videoTitle: "Cache Systems Every Developer Should Know", videoChannel: "ByteByteGo" },
  { lessonId: "sa-scale-3", videoId: "RI9np1LWzqw", videoTitle: "What Is A CDN? How Does It Work?", videoChannel: "ByteByteGo" },
  { lessonId: "sa-scale-4", videoId: "_1IKwnbscQU", videoTitle: "7 Must-know Strategies to Scale Your Database", videoChannel: "ByteByteGo" },
  { lessonId: "sa-scale-5", videoId: "FU4WlwfS3G0", videoTitle: "Rate Limiting (Local and Distributed)", videoChannel: "System Design Interview" },
  { lessonId: "sa-sec-1", videoId: "rEnJYNkUde0", videoTitle: "STRIDE Threat Modeling for Beginners", videoChannel: "Netsec Explained" },
  { lessonId: "sa-sec-2", videoId: "ZV5yTm4pT8g", videoTitle: "OAuth 2 Explained In Simple Terms", videoChannel: "ByteByteGo" },
  { lessonId: "sa-sec-3", videoId: "o_g-M7UBqI8", videoTitle: "Symmetric vs Asymmetric Encryption", videoChannel: "Practical Networking" },
  { lessonId: "sa-sec-4", videoId: "6WZ6S-qmtqY", videoTitle: "Top 12 Tips For API Security", videoChannel: "ByteByteGo" },
  { lessonId: "sa-rel-1", videoId: "pouVbehfnqQ", videoTitle: "SLAs, SLOs, and SLIs Explained", videoChannel: "Better Stack" },
  { lessonId: "sa-rel-2", videoId: "ADHcBxEXvFA", videoTitle: "Circuit Breaker Pattern — Fault Tolerant Microservices", videoChannel: "Defog Tech" },
  { lessonId: "sa-rel-3", videoId: "mfEMXKSFtaQ", videoTitle: "Understanding Chaos Engineering", videoChannel: "Microsoft Developer" },
  { lessonId: "sa-rel-4", videoId: "o0xj1JKjjOE", videoTitle: "Business Continuity and Disaster Recovery Planning", videoChannel: "CBT Nuggets" },
  { lessonId: "sa-sd-1", videoId: "i7twT3x5yv8", videoTitle: "System Design Interview: A Step-By-Step Guide", videoChannel: "ByteByteGo" },
  { lessonId: "sa-sd-2", videoId: "iUU4O1sWtJA", videoTitle: "Design a URL Shortener", videoChannel: "Hello Interview" },
  { lessonId: "sa-sd-3", videoId: "okrR1KXNLtA", videoTitle: "Design A Chat System (WhatsApp, Messenger, Discord)", videoChannel: "ByteByteGo" },
  { lessonId: "sa-sd-4", videoId: "jPKTo1iGQiE", videoTitle: "Design YouTube — System Design Interview", videoChannel: "NeetCode" },
  { lessonId: "sa-sd-5", videoId: "iuqZvajTOyA", videoTitle: "System Design Interview — Distributed Cache", videoChannel: "System Design Interview" },
  { lessonId: "sa-evo-1", videoId: "gwu3lVUvIqQ", videoTitle: "Strangler Fig Pattern — Monolith to Microservices", videoChannel: "Java Guides" },
  { lessonId: "sa-evo-2", videoId: "vsb4ZkUytrU", videoTitle: "What is API Versioning?", videoChannel: "Erik Wilde" },
  { lessonId: "sa-evo-3", videoId: "Bq8w2fkyDnk", videoTitle: "Manage Technical Debt Like This", videoChannel: "Modern Software Engineering" },
  { lessonId: "sa-evo-4", videoId: "nFZePnD0AFQ", videoTitle: "Automating Architecture Governance", videoChannel: "Software Architecture Monday" },

  // === ENGINEERING MANAGER ===
  { lessonId: "em-found-1", videoId: "MqdMr_aIrOs", videoTitle: "Why You Need to Transition from IC to Manager", videoChannel: "Dev Interrupted" },
  { lessonId: "em-found-2", videoId: "5Qf5sOqRuLk", videoTitle: "The Most Important Engineering Manager Skills", videoChannel: "Exponent" },
  { lessonId: "em-found-3", videoId: "aov1fIxydyU", videoTitle: "Time Management Masterclass for Engineering Managers", videoChannel: "Level-Up Engineering" },
  { lessonId: "em-found-4", videoId: "IV8wCxgj5p4", videoTitle: "Guide to Cultivating Psychological Safety at Work", videoChannel: "Simon Sinek" },
  { lessonId: "em-people-1", videoId: "LWz57CpcSnE", videoTitle: "6 Tips for Productive 1:1 Meetings with Your Manager", videoChannel: "Jeff Su" },
  { lessonId: "em-people-2", videoId: "wtl5UrrgU8c", videoTitle: "The Secret to Giving Great Feedback", videoChannel: "TED" },
  { lessonId: "em-people-3", videoId: "NX6qIbflNyY", videoTitle: "The Truth About Career Progression", videoChannel: "TEDx Talks" },
  { lessonId: "em-people-4", videoId: "XfurSDKlbmw", videoTitle: "Performance Review Biases and How to Counter Them", videoChannel: "The Pragmatic Engineer" },
  { lessonId: "em-people-5", videoId: "TChiE1FDXdY", videoTitle: "What I Got Wrong About Mentorship", videoChannel: "Simon Sinek" },
  { lessonId: "em-hire-1", videoId: "4MAqVxrkkiU", videoTitle: "What is a Job Evaluation? Process & Strategy", videoChannel: "AIHR" },
  { lessonId: "em-hire-2", videoId: "vFOw_m5zNCs", videoTitle: "Confessions from a Big Tech Hiring Manager", videoChannel: "The Pragmatic Engineer" },
  { lessonId: "em-hire-3", videoId: "sxjgL64czRY", videoTitle: "How to Master Recruiting", videoChannel: "TEDx Talks" },
  { lessonId: "em-hire-4", videoId: "Kgl79ajbv_c", videoTitle: "Best Practices for Developer Onboarding", videoChannel: "Tech Lead Journal" },
  { lessonId: "em-del-1", videoId: "Atfxtk2Q90k", videoTitle: "Using Agile Techniques to Build Inclusive Teams", videoChannel: "LeadDev" },
  { lessonId: "em-del-2", videoId: "v21jg8wb1eU", videoTitle: "How To Estimate Software Development Time", videoChannel: "Modern Software Engineering" },
  { lessonId: "em-del-3", videoId: "Bq8w2fkyDnk", videoTitle: "Manage Technical Debt Like This", videoChannel: "Modern Software Engineering" },
  { lessonId: "em-del-4", videoId: "9JYVOUKNQ3A", videoTitle: "How to Run a Post-Mortem Meeting", videoChannel: "Bran van der Meer" },
  { lessonId: "em-tech-1", videoId: "LMBqGPLvonU", videoTitle: "Architecture Decision Records", videoChannel: "Software Architecture Monday" },
  { lessonId: "em-tech-2", videoId: "xT3oFHBDEZY", videoTitle: "Code Reviews, for the Culture", videoChannel: "LeadDev" },
  { lessonId: "em-tech-3", videoId: "H0EK0B1QvVA", videoTitle: "Mastering Tech Leadership in 50 Minutes", videoChannel: "GOTO Conferences" },
  { lessonId: "em-tech-4", videoId: "_zH7TIXcjEs", videoTitle: "Tips For Building Successful Platform Teams", videoChannel: "Modern Software Engineering" },
  { lessonId: "em-org-1", videoId: "amfhYDbzjLU", videoTitle: "How To Make Development Teams Self-Serving", videoChannel: "Modern Software Engineering" },
  { lessonId: "em-org-2", videoId: "dbig1bYpRmE", videoTitle: "Scaling Engineering Hiring", videoChannel: "ELC" },
  { lessonId: "em-org-3", videoId: "a6J0uIG33WE", videoTitle: "Cross Team Collaboration and Communication", videoChannel: "Codementor" },
  { lessonId: "em-cult-1", videoId: "AsnJUVQD4BY", videoTitle: "How to Build an Engineering Culture", videoChannel: "O'Reilly" },
  { lessonId: "em-cult-2", videoId: "emnqyGhBg6U", videoTitle: "Building Inclusive Engineering Teams", videoChannel: "REFACTR" },
  { lessonId: "em-cult-3", videoId: "aRaF-waAFj0", videoTitle: "Remote Inclusion in Distributed Engineering Teams", videoChannel: "LeadDev" },
  { lessonId: "em-exec-1", videoId: "C0W4H6jMLKg", videoTitle: "Why Middle Management is the Hardest Job", videoChannel: "Simon Sinek" },
  { lessonId: "em-exec-2", videoId: "ecs9oUe2dZk", videoTitle: "How to Create a Project Budget", videoChannel: "Adriana Girdler" },
  { lessonId: "em-exec-3", videoId: "1HVPYqCnJlo", videoTitle: "Choosing Your Engineering Path: IC or Manager", videoChannel: "Google for Developers" },

  // === PRODUCT MANAGER ===
  { lessonId: "pm-found-1", videoId: "4yQtEx7-NQs", videoTitle: "Intro to Product Management", videoChannel: "Product School" },
  { lessonId: "pm-found-2", videoId: "bI48pbtMgKE", videoTitle: "Product Management 101: The Product Lifecycle", videoChannel: "Stanford Online" },
  { lessonId: "pm-found-3", videoId: "0LNQxT9LvM0", videoTitle: "How To Find Product Market Fit", videoChannel: "Y Combinator" },
  { lessonId: "pm-found-4", videoId: "vibwBA-29F4", videoTitle: "How to Use Mental Models in Your Product Role", videoChannel: "Product School" },
  { lessonId: "pm-disc-1", videoId: "BtKHHIBJnL8", videoTitle: "15 User Research Methods to Know", videoChannel: "NNgroup" },
  { lessonId: "pm-disc-2", videoId: "z1iF1c8w5Lg", videoTitle: "How To Talk To Users", videoChannel: "Y Combinator" },
  { lessonId: "pm-disc-3", videoId: "UnBL8h8TVX8", videoTitle: "How to Do Competitive Analysis", videoChannel: "Product School" },
  { lessonId: "pm-disc-4", videoId: "4KG84YFR8Sc", videoTitle: "Problem Framing — The PM's Superpower", videoChannel: "Design Sprint Academy" },
  { lessonId: "pm-road-1", videoId: "KPwRprJNt8E", videoTitle: "What is a Product Roadmap?", videoChannel: "ProductPlan" },
  { lessonId: "pm-road-2", videoId: "pzyRafZJ-0M", videoTitle: "What is the RICE Scoring Model?", videoChannel: "ProductPlan" },
  { lessonId: "pm-road-3", videoId: "yfjRht9bXkE", videoTitle: "Managing Stakeholders as a PM", videoChannel: "Product School" },
  { lessonId: "pm-road-4", videoId: "MV4UViKjJ34", videoTitle: "OKRs Explained", videoChannel: "What Matters" },
  { lessonId: "pm-spec-1", videoId: "JJzODsXsCt0", videoTitle: "How to Write a Product Requirements Document", videoChannel: "HelloPM" },
  { lessonId: "pm-spec-2", videoId: "q26147zlcMU", videoTitle: "User Stories and Acceptance Criteria Example", videoChannel: "The Business Analysis Doctor" },
  { lessonId: "pm-spec-3", videoId: "urVHC-ReSV0", videoTitle: "Figma Wireframe Masterclass for Product Managers", videoChannel: "HelloPM" },
  { lessonId: "pm-anal-1", videoId: "iN_jeOAzoso", videoTitle: "Product Manager KPIs and Metrics", videoChannel: "Simplilearn" },
  { lessonId: "pm-anal-2", videoId: "QgSbWIrz__s", videoTitle: "How to Track and Analyze User Data", videoChannel: "Anthony Saltarelli" },
  { lessonId: "pm-anal-3", videoId: "jEpwNaHjD68", videoTitle: "How To A/B Test a Product", videoChannel: "Exponent" },
  { lessonId: "pm-anal-4", videoId: "n7sLeyicekA", videoTitle: "Funnel and Cohort Analysis", videoChannel: "Knownsense Labs" },
  { lessonId: "pm-agile-1", videoId: "ihhNWV9vHX0", videoTitle: "Agile Project Management Explained in 10 Minutes", videoChannel: "Max Mao" },
  { lessonId: "pm-agile-2", videoId: "jBUqRo0LgZ0", videoTitle: "The Power of Backlog Refinement", videoChannel: "Mountain Goat Software" },
  { lessonId: "pm-agile-3", videoId: "-EIty2Um9A0", videoTitle: "Tips for PMs Working With Engineers", videoChannel: "Dianna Yau" },
  { lessonId: "pm-agile-4", videoId: "KMVjS5HRHIk", videoTitle: "How To Create a Go-To-Market Strategy", videoChannel: "Dreamit" },
  { lessonId: "pm-grow-1", videoId: "UTmFuSZfJ9U", videoTitle: "Why Product-Led Growth is the Future", videoChannel: "Lenny's Podcast" },
  { lessonId: "pm-grow-2", videoId: "A6veeCbKIzw", videoTitle: "The Art and Science of Pricing", videoChannel: "Lenny's Podcast" },
  { lessonId: "pm-grow-3", videoId: "L4MUMc3usoQ", videoTitle: "5 Proven Customer Retention Strategies", videoChannel: "Customer Success Collective" },
  { lessonId: "pm-lead-1", videoId: "uhJA2s7wkFM", videoTitle: "Influence Without Authority", videoChannel: "Shreyas Doshi" },
  { lessonId: "pm-lead-2", videoId: "Fzi4T94QCjw", videoTitle: "5 Rules for Communicating with Executives", videoChannel: "Dr. Grace Lee" },
  { lessonId: "pm-lead-3", videoId: "cnuF3su9-N4", videoTitle: "Product Manager Career Path: Climbing the PM Ladder", videoChannel: "Exponent" },

  // === SERVER-SIDE GAME DEV ===
  { lessonId: "ssg-fund-1", videoId: "KBBJqPL5-eU", videoTitle: "How Multiplayer Games Work", videoChannel: "Nick Maltbie" },
  { lessonId: "ssg-fund-2", videoId: "uwoD5YsGACg", videoTitle: "TCP vs UDP Comparison", videoChannel: "PowerCert Animated Videos" },
  { lessonId: "ssg-fund-3", videoId: "2kIgbvl7FRs", videoTitle: "Lag Compensation Techniques for Online Games", videoChannel: "Fullstack Academy" },
  { lessonId: "ssg-fund-4", videoId: "iQTxMkSJ1dQ", videoTitle: "Game On! — Flatbuffers", videoChannel: "Google for Developers" },
  { lessonId: "ssg-serv-1", videoId: "Nl_FIGFtYdc", videoTitle: "Dedicated Game Servers, Drawn Badly", videoChannel: "Mark Mandel" },
  { lessonId: "ssg-serv-2", videoId: "zto7ZP2-ooM", videoTitle: "Scaling to 10 Concurrent Users: Online Infrastructure", videoChannel: "GDC" },
  { lessonId: "ssg-serv-3", videoId: "50Vp2y1ArJY", videoTitle: "Game Loops Explained in 5 Minutes", videoChannel: "Dylan Falconer" },
  { lessonId: "ssg-serv-4", videoId: "kTiP0zKF9bc", videoTitle: "Using Deep Learning to Combat Cheating in CS:GO", videoChannel: "GDC" },
  { lessonId: "ssg-rt-1", videoId: "9OjIDko1uzc", videoTitle: "Networking Physics — Lockstep vs State Sync", videoChannel: "NextGenNetGames" },
  { lessonId: "ssg-rt-2", videoId: "TFLD9HWOc2k", videoTitle: "How To Do Client Prediction", videoChannel: "Ajackster" },
  { lessonId: "ssg-rt-3", videoId: "fVotjwJQ5zM", videoTitle: "Smoothing Movement with Interpolation", videoChannel: "Tom Weiland" },
  { lessonId: "ssg-rt-4", videoId: "1BfCnjr_Vjg", videoTitle: "WebSockets in 100 Seconds & Beyond with Socket.io", videoChannel: "Fireship" },
  { lessonId: "ssg-mm-1", videoId: "-pglxege-gU", videoTitle: "Skill, Matchmaking, and Ranking Systems Design", videoChannel: "GDC" },
  { lessonId: "ssg-mm-2", videoId: "-KDlEBfCBiU", videoTitle: "Join Your Players with LOBBY!", videoChannel: "Code Monkey" },
  { lessonId: "ssg-mm-3", videoId: "VnOVLBbYlU0", videoTitle: "Ranking Systems: Elo, TrueSkill and Your Own", videoChannel: "GDC" },
  { lessonId: "ssg-db-1", videoId: "LzXHLOnWBNU", videoTitle: "Creating Data for a Multiplayer Game", videoChannel: "Chelsea Valentine" },
  { lessonId: "ssg-db-2", videoId: "_yhE_bhmF-g", videoTitle: "Real-time Multiplayer Strategy Game using Redis", videoChannel: "Redis" },
  { lessonId: "ssg-db-3", videoId: "WRKsmnmNpb4", videoTitle: "Cloud Save Should Be in Every Game", videoChannel: "Tarodev" },
  { lessonId: "ssg-scale-1", videoId: "sCR3SAVdyCc", videoTitle: "What is a Load Balancer?", videoChannel: "IBM Technology" },
  { lessonId: "ssg-scale-2", videoId: "RHOHkIYdrqw", videoTitle: "Agones + Quilkin: Kubernetes Game Server Orchestration", videoChannel: "CNCF" },
  { lessonId: "ssg-scale-3", videoId: "ACJvwZBwWew", videoTitle: "Delivering Multiplayer Experiences Globally", videoChannel: "Google Cloud" },
  { lessonId: "ssg-scale-4", videoId: "CAQ_a2-9UOI", videoTitle: "Observability vs APM vs Monitoring", videoChannel: "IBM Technology" },
  { lessonId: "ssg-live-1", videoId: "I7755b0nY0I", videoTitle: "Beyond Games as a Service with Live Ops", videoChannel: "GDC" },
  { lessonId: "ssg-live-2", videoId: "7rqfbvnO_H0", videoTitle: "Slay the Spire: Metrics Driven Design and Balance", videoChannel: "GDC" },
  { lessonId: "ssg-live-3", videoId: "Zrf1cou_yVo", videoTitle: "How Video Game Economies are Designed", videoChannel: "Game Maker's Toolkit" },

  // === DEVREL ===
  { lessonId: "dr-found-1", videoId: "CN4Zzdg49VI", videoTitle: "Developer Relations: A Complete Guide", videoChannel: "Jono Bacon" },
  { lessonId: "dr-found-2", videoId: "iA2SQ4OL4GU", videoTitle: "Developer Relations: New Career Path for Developers", videoChannel: "Tadas Petra" },
  { lessonId: "dr-found-3", videoId: "yYMRnwnim3s", videoTitle: "DevRel Deep Dive: What It Is, How to Measure It", videoChannel: "Tejas Kumar" },
  { lessonId: "dr-found-4", videoId: "ZsCFGiQKb5Q", videoTitle: "Developer Relations Jobs: The Complete Guide", videoChannel: "Jono Bacon" },
  { lessonId: "dr-cont-1", videoId: "YODPgBadj80", videoTitle: "How to Write Technical Blog Posts", videoChannel: "freeCodeCamp Talks" },
  { lessonId: "dr-cont-2", videoId: "vT5pcc30Ffw", videoTitle: "Technical Writing Course for Beginners", videoChannel: "freeCodeCamp.org" },
  { lessonId: "dr-cont-3", videoId: "0CSyIBHQy9g", videoTitle: "API Documentation Best Practices — Full Course", videoChannel: "freeCodeCamp.org" },
  { lessonId: "dr-cont-4", videoId: "N6-Q2dgodLs", videoTitle: "How I Make Videos for Programmers", videoChannel: "Jeff Delaney" },
  { lessonId: "dr-speak-1", videoId: "ncPeY_FR9Uw", videoTitle: "How to Create a Conference Talk Submission", videoChannel: "Jono Bacon" },
  { lessonId: "dr-speak-2", videoId: "wRwKWKD38g0", videoTitle: "8-Step Guide to Conference Tech Talk Preparation", videoChannel: "Beachcasts" },
  { lessonId: "dr-speak-3", videoId: "Hfq2WsppUhI", videoTitle: "How to Create Technical Tutorials with Screencasting", videoChannel: "Donn Felker" },
  { lessonId: "dr-speak-4", videoId: "7AMRfNKwuYo", videoTitle: "How Does Live Streaming Platform Work?", videoChannel: "ByteByteGo" },
  { lessonId: "dr-comm-1", videoId: "Llse_S9pgIc", videoTitle: "Community Building Masterclass", videoChannel: "Jono Bacon" },
  { lessonId: "dr-comm-2", videoId: "SJi469BuU6g", videoTitle: "30 Proven Discord Hacks for Building Communities", videoChannel: "Jono Bacon" },
  { lessonId: "dr-comm-3", videoId: "Rfbm2ASpyTA", videoTitle: "How to Launch a Successful Champion Program", videoChannel: "CMX" },
  { lessonId: "dr-comm-4", videoId: "SkwKOVCDGM8", videoTitle: "How to Meetup: Hosting and Finding Community Events", videoChannel: "Microsoft Developer" },
  { lessonId: "dr-dx-1", videoId: "lQdeWHPgoMs", videoTitle: "The Elements of Developer Experience Design", videoChannel: "DevOpsDays" },
  { lessonId: "dr-dx-2", videoId: "pgcB1sA9LrY", videoTitle: "SDKs & Code Samples — Cornerstones of API DX", videoChannel: "Nordic APIs" },
  { lessonId: "dr-dx-3", videoId: "5Vn4vEPQjU0", videoTitle: "Deliver Great Onboarding with Sample Apps", videoChannel: "Salesforce Developers" },
  { lessonId: "dr-soc-1", videoId: "BUmoPpXuw5g", videoTitle: "Developing Your Brand Using Twitter", videoChannel: "Deeper Than Tech" },
  { lessonId: "dr-soc-2", videoId: "S4vOufImYpI", videoTitle: "Everything to Know About Building in Public", videoChannel: "Vensy Krishna" },
  { lessonId: "dr-soc-3", videoId: "CML6vfKjQss", videoTitle: "Contributing to Open Source Can Change Your Life", videoChannel: "Learn Fast Make Things" },
  { lessonId: "dr-tool-1", videoId: "dInKN8IfxOg", videoTitle: "What is Developer Relations — The DevRel Data Problem", videoChannel: "Trevor Spires" },
  { lessonId: "dr-tool-2", videoId: "bS9R6aCVEzw", videoTitle: "n8n Will Change Your Life as a Developer", videoChannel: "Fireship" },
  { lessonId: "dr-tool-3", videoId: "ubgnSdOczXY", videoTitle: "Shorten the Feedback Loop: Developer Experience", videoChannel: "Platform Engineering" },

  // === POSTGRESQL ===
  { lessonId: "pg-fund-2", videoId: "qw--VYLpxG4", videoTitle: "Learn PostgreSQL Tutorial — Full Course for Beginners", videoChannel: "freeCodeCamp.org" },
  { lessonId: "pg-fund-3", videoId: "p3qvj9hO_Bo", videoTitle: "Learn SQL In 60 Minutes", videoChannel: "Web Dev Simplified" },
  { lessonId: "pg-fund-4", videoId: "lF1T-PjX2gQ", videoTitle: "Fantastic Data Types & Domain Types", videoChannel: "Scaling Postgres" },
  { lessonId: "pg-adv-1", videoId: "rIcB4zMYMas", videoTitle: "SQL Window Functions Clearly Explained", videoChannel: "Maven Analytics" },
  { lessonId: "pg-adv-2", videoId: "LJC8277LONg", videoTitle: "SQL WITH Clause — CTEs vs Subqueries vs Temp Tables", videoChannel: "Maven Analytics" },
  { lessonId: "pg-adv-3", videoId: "nxeUiRz4G-M", videoTitle: "How to Store and Query JSON Data in Postgres", videoChannel: "Supabase" },
  { lessonId: "pg-adv-4", videoId: "NiiN63lEzvI", videoTitle: "LATERAL Joins in SQL — Write Smarter Queries", videoChannel: "techTFQ" },
  { lessonId: "pg-idx-1", videoId: "_HG2eB27j00", videoTitle: "PostgreSQL Indexes — B-Tree, GIN, BRIN Explained", videoChannel: "JaneExplainsIT" },
  { lessonId: "pg-idx-2", videoId: "P7EUFtjeAmI", videoTitle: "Postgres Explain Explained", videoChannel: "Hussein Nasser" },
  { lessonId: "pg-idx-3", videoId: "YON9PliOYFk", videoTitle: "5 Secrets for Making PostgreSQL Run Blazing Fast", videoChannel: "Dreams of Code" },
  { lessonId: "pg-idx-4", videoId: "_waM0GsH4HY", videoTitle: "Identifying Slow Queries and Fixing Them!", videoChannel: "US PostgreSQL Association" },
  { lessonId: "pg-admin-1", videoId: "mtPM3iZFE04", videoTitle: "Roles, Privileges, and Security in PostgreSQL", videoChannel: "Microsoft Developer" },
  { lessonId: "pg-admin-2", videoId: "WB6WzuFHcP8", videoTitle: "Backing Up a Postgres Database with pg_dump", videoChannel: "WittCode" },
  { lessonId: "pg-admin-3", videoId: "D832gi8Qrv4", videoTitle: "Optimizing Autovacuum: PostgreSQL's Vacuum Cleaner", videoChannel: "Microsoft Developer" },
  { lessonId: "pg-admin-4", videoId: "rMTgfgmZzNo", videoTitle: "What are Tablespaces in Postgres", videoChannel: "Redincs Technology" },
  { lessonId: "pg-rep-1", videoId: "Yy0GJjRQcRQ", videoTitle: "PostgreSQL Streaming Replication Tutorial", videoChannel: "High-Performance Programming" },
  { lessonId: "pg-rep-2", videoId: "OvSzLjkMmQo", videoTitle: "PostgreSQL Logical Replication Guide", videoChannel: "High-Performance Programming" },
  { lessonId: "pg-rep-3", videoId: "RHwglGf_z40", videoTitle: "High Availability PostgreSQL with Patroni", videoChannel: "Techno Tim" },
  { lessonId: "pg-rep-4", videoId: "ddKm7a7xOpk", videoTitle: "PgBouncer Tutorial", videoChannel: "High-Performance Programming" },
  { lessonId: "pg-ext-1", videoId: "oJj-pltxBUM", videoTitle: "PostgreSQL Partitioning Tutorial", videoChannel: "High-Performance Programming" },
  { lessonId: "pg-ext-2", videoId: "GRwIa-ce7RA", videoTitle: "Master Postgres Full-text Search in 5 Minutes", videoChannel: "Supabase" },
  { lessonId: "pg-ext-3", videoId: "FKzw9HJ6XYA", videoTitle: "PostGIS Explained: The Spatial Database", videoChannel: "Matt Forrest" },
  { lessonId: "pg-ext-4", videoId: "7AsbMoJLA8I", videoTitle: "PostgreSQL Stored Procedures Explained", videoChannel: "Ruslan Brilenkov" },
];

// Map lesson ID prefix to curriculum file
function getFileForLesson(lessonId: string): string {
  const prefixMap: Record<string, string> = {
    "sa-": "software-architect.ts",
    "em-": "engineering-manager.ts",
    "pm-": "product-manager.ts",
    "ssg-": "server-side-game-dev.ts",
    "dr-": "devrel.ts",
    "pg-": "postgresql.ts",
  };
  for (const [prefix, file] of Object.entries(prefixMap)) {
    if (lessonId.startsWith(prefix)) return file;
  }
  throw new Error(`Unknown prefix for: ${lessonId}`);
}

// Group by file
const fileGroups = new Map<string, VideoEntry[]>();
for (const v of videos) {
  const file = getFileForLesson(v.lessonId);
  if (!fileGroups.has(file)) fileGroups.set(file, []);
  fileGroups.get(file)!.push(v);
}

const curriculumDir = path.join(__dirname, "..", "src", "lib", "curriculum");
let totalAdded = 0;

for (const [fileName, entries] of fileGroups) {
  const filePath = path.join(curriculumDir, fileName);
  let content = fs.readFileSync(filePath, "utf-8");

  for (const entry of entries) {
    // Find the lesson by its id and inject video fields
    // Pattern: id: "LESSON_ID", followed by lines, then hasTerminal or duration
    const idPattern = `id: "${entry.lessonId}"`;
    const idIndex = content.indexOf(idPattern);
    if (idIndex === -1) {
      console.error(`  NOT FOUND: ${entry.lessonId} in ${fileName}`);
      continue;
    }

    // Check if already has videoId
    const nextChunk = content.substring(idIndex, idIndex + 500);
    if (nextChunk.includes("videoId:")) {
      console.log(`  SKIP (already has video): ${entry.lessonId}`);
      continue;
    }

    // Find the "hasTerminal" or last field before closing brace for this lesson
    // We'll inject before `hasTerminal:`
    const hasTerminalMatch = nextChunk.match(/(\n\s+)(hasTerminal:)/);
    if (hasTerminalMatch) {
      const insertPoint = idIndex + nextChunk.indexOf(hasTerminalMatch[0]);
      const indent = hasTerminalMatch[1];
      const videoFields = `${indent}videoId: "${entry.videoId}",${indent}videoTitle: "${entry.videoTitle}",${indent}videoChannel: "${entry.videoChannel}",`;
      content = content.slice(0, insertPoint) + videoFields + content.slice(insertPoint);
      totalAdded++;
    } else {
      // Try inserting before `duration:`
      const durationMatch = nextChunk.match(/(\n\s+)(duration:)/);
      if (durationMatch) {
        const insertPoint = idIndex + nextChunk.indexOf(durationMatch[0]);
        const indent = durationMatch[1];
        const videoFields = `${indent}videoId: "${entry.videoId}",${indent}videoTitle: "${entry.videoTitle}",${indent}videoChannel: "${entry.videoChannel}",`;
        content = content.slice(0, insertPoint) + videoFields + content.slice(insertPoint);
        totalAdded++;
      } else {
        console.error(`  NO INSERT POINT for: ${entry.lessonId} in ${fileName}`);
      }
    }
  }

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`✅ ${fileName}: ${entries.length} videos processed`);
}

console.log(`\nTotal videos added: ${totalAdded}`);
