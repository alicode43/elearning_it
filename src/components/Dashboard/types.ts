export interface Course {
  id: string;
  title: string;
  progress: number;
  category: string;
  duration: string;
  image: string;
  instructor?: string;
  description?: string;
  lastAccessed?: string;
  totalLessons?: number;
  completedLessons?: number;
}

export interface Stats {
  completed: number;
  inProgress: number;
  totalHours: number;
}

export type SortOption = 'progress' | 'recent' | 'title';