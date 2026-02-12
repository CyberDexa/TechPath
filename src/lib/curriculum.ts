// Re-export everything from the modular curriculum system
export {
  curriculum,
  trackCategories,
  getTrack,
  getModule,
  getLesson,
  getTotalLessons,
  getTotalModules,
  getTracksByCategory,
  getTrackLessonCount,
} from "./curriculum/index";

export type { Track, TrackCategory } from "./curriculum/types";
export type { Lesson, Module, ModuleProject } from "./curriculum/types";

// Badge definitions
export const badges = [
  { id: "first-lesson", title: "First Steps", description: "Complete your first lesson", icon: "🎯" },
  { id: "terminal-explorer", title: "Terminal Explorer", description: "Complete 5 terminal exercises", icon: "💻" },
  { id: "module-master", title: "Module Master", description: "Complete your first module", icon: "🏆" },
  { id: "git-guru", title: "Git Guru", description: "Complete the Git module", icon: "🌿" },
  { id: "docker-captain", title: "Docker Captain", description: "Complete the Docker module", icon: "🐳" },
  { id: "cloud-pioneer", title: "Cloud Pioneer", description: "Complete the Cloud module", icon: "☁️" },
  { id: "devops-graduate", title: "DevOps Graduate", description: "Complete all DevOps modules", icon: "🎓" },
  { id: "ml-beginner", title: "ML Beginner", description: "Complete ML Fundamentals", icon: "🤖" },
  { id: "mlops-hero", title: "MLOps Hero", description: "Complete all MLOps modules", icon: "🚀" },
  { id: "streak-7", title: "Week Warrior", description: "7-day learning streak", icon: "🔥" },
  { id: "streak-30", title: "Monthly Maven", description: "30-day learning streak", icon: "⚡" },
  { id: "project-builder", title: "Project Builder", description: "Complete 3 projects", icon: "🔨" },
  { id: "track-complete", title: "Track Champion", description: "Complete an entire track", icon: "🏅" },
  { id: "multi-track", title: "Multi-Track Master", description: "Complete 3 tracks", icon: "👑" },
];
