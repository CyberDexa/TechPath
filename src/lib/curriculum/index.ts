// Curriculum Index — aggregates all 26 learning tracks
import { Track, TrackCategory, trackCategories } from "./types";

// Web Development
import { frontendTrack } from "./frontend";
import { backendTrack } from "./backend";
import { fullStackTrack } from "./full-stack";

// Data & AI
import { dataAnalystTrack } from "./data-analyst";
import { aiEngineerTrack } from "./ai-engineer";
import { aiDataScientistTrack } from "./ai-data-scientist";
import { dataEngineerTrack } from "./data-engineer";
import { machineLearningTrack } from "./machine-learning";
import { biAnalystTrack } from "./bi-analyst";

// Security & Quality
import { devsecopsTrack } from "./devsecops";
import { qaTrack } from "./qa";
import { cyberSecurityTrack } from "./cyber-security";

// Mobile
import { androidTrack } from "./android";
import { iosTrack } from "./ios";

// Infrastructure
import { devopsTrack } from "./devops";
import { mlopsTrack } from "./mlops";
import { postgresqlTrack } from "./postgresql";
import { blockchainTrack } from "./blockchain";
import { softwareArchitectTrack } from "./software-architect";

// Design & Writing
import { uxDesignTrack } from "./ux-design";
import { technicalWriterTrack } from "./technical-writer";

// Gaming
import { gameDeveloperTrack } from "./game-developer";
import { serverSideGameDevTrack } from "./server-side-game-dev";

// Management
import { productManagerTrack } from "./product-manager";
import { engineeringManagerTrack } from "./engineering-manager";
import { devrelTrack } from "./devrel";

// All tracks in display order
export const curriculum: Track[] = [
  // Infrastructure
  devopsTrack,
  mlopsTrack,
  softwareArchitectTrack,
  postgresqlTrack,
  blockchainTrack,
  // Web
  frontendTrack,
  backendTrack,
  fullStackTrack,
  // Data & AI
  dataAnalystTrack,
  dataEngineerTrack,
  aiEngineerTrack,
  aiDataScientistTrack,
  machineLearningTrack,
  biAnalystTrack,
  // Security & Quality
  devsecopsTrack,
  qaTrack,
  cyberSecurityTrack,
  // Mobile
  androidTrack,
  iosTrack,
  // Design & Writing
  uxDesignTrack,
  technicalWriterTrack,
  // Gaming
  gameDeveloperTrack,
  serverSideGameDevTrack,
  // Management
  productManagerTrack,
  engineeringManagerTrack,
  devrelTrack,
];

// Re-export types and categories
export { trackCategories } from "./types";
export type { Track, TrackCategory } from "./types";

// ── Helper functions ──

export function getTrack(trackId: string): Track | undefined {
  return curriculum.find((t) => t.id === trackId);
}

export function getModule(moduleId: string) {
  for (const track of curriculum) {
    const mod = track.modules.find((m) => m.id === moduleId);
    if (mod) return mod;
  }
  return undefined;
}

export function getLesson(lessonId: string) {
  for (const track of curriculum) {
    for (const mod of track.modules) {
      const lesson = mod.lessons.find((l) => l.id === lessonId);
      if (lesson) return { lesson, module: mod, track };
    }
  }
  return undefined;
}

export function getTotalLessons(): number {
  return curriculum.reduce(
    (total, track) =>
      total + track.modules.reduce((t, m) => t + m.lessons.length, 0),
    0
  );
}

export function getTotalModules(): number {
  return curriculum.reduce((total, track) => total + track.modules.length, 0);
}

export function getTracksByCategory(category: TrackCategory): Track[] {
  return curriculum.filter((t) => t.category === category);
}

export function getTrackLessonCount(track: Track): number {
  return track.modules.reduce((t, m) => t + m.lessons.length, 0);
}
