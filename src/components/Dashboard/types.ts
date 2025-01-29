export interface Course {
    id: string;
    title: string;
    progress: number;
    category: string;
    duration: string;
    image: string;
  }
  
  export interface Stats {
    completed: number;
    inProgress: number;
    totalHours: number;
  }