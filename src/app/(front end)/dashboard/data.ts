import { Course, Stats } from '@/components/Dashboard/types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to TypeScript',
    progress: 75,
    category: 'Programming',
    duration: '2h 30m',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=400&h=300'
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    progress: 45,
    category: 'Web Development',
    duration: '3h 15m',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=400&h=300'
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    progress: 20,
    category: 'Design',
    duration: '1h 45m',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=400&h=300'
  }
];

export const stats: Stats = {
  completed: 12,
  inProgress: 4,
  totalHours: 26
};