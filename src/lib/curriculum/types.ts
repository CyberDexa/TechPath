export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoId?: string;
  videoTitle?: string;
  videoChannel?: string;
  hasTerminal: boolean;
  terminalExercise?: {
    instructions: string;
    validation?: string;
  };
}

export interface ModuleProject {
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedHours: number;
  skills: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  trackId: string;
  order: number;
  lessons: Lesson[];
  project: ModuleProject;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: TrackCategory;
  modules: Module[];
}

export type TrackCategory =
  | "web"
  | "data-ai"
  | "security-quality"
  | "mobile"
  | "infrastructure"
  | "design-writing"
  | "gaming"
  | "management";

export interface TrackCategoryInfo {
  id: TrackCategory;
  label: string;
  icon: string;
}

export const trackCategories: TrackCategoryInfo[] = [
  { id: "web", label: "Web Development", icon: "Globe" },
  { id: "data-ai", label: "Data & AI", icon: "Brain" },
  { id: "security-quality", label: "Security & QA", icon: "Shield" },
  { id: "mobile", label: "Mobile", icon: "Smartphone" },
  { id: "infrastructure", label: "Infrastructure", icon: "Server" },
  { id: "design-writing", label: "Design & Writing", icon: "Palette" },
  { id: "gaming", label: "Gaming", icon: "Gamepad2" },
  { id: "management", label: "Management", icon: "Users" },
];
