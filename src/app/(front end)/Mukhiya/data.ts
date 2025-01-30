import { Course, Stats } from '@/components/Dashboard/types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to TypeScript',
    progress: 75,
    category: 'Programming',
    duration: '2h 30m',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=400&h=300',
    instructor: 'Sarah Johnson',
    description: 'Master the fundamentals of TypeScript, including types, interfaces, and advanced features.',
    lastAccessed: '2024-03-15',
    totalLessons: 12,
    completedLessons: 9
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    progress: 45,
    category: 'Web Development',
    duration: '3h 15m',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=400&h=300',
    instructor: 'Michael Chen',
    description: 'Learn advanced React patterns and best practices for building scalable applications.',
    lastAccessed: '2024-03-14',
    totalLessons: 15,
    completedLessons: 7
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    progress: 20,
    category: 'Design',
    duration: '1h 45m',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=400&h=300',
    instructor: 'Emma Davis',
    description: 'Understand core UI/UX design principles and create better user experiences.',
    lastAccessed: '2024-03-13',
    totalLessons: 8,
    completedLessons: 2
  },
  {
    id: '4',
    title: 'Node.js Backend Development',
    progress: 60,
    category: 'Programming',
    duration: '4h 20m',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&h=300',
    instructor: 'David Wilson',
    description: 'Build scalable backend applications with Node.js and Express.',
    lastAccessed: '2024-03-12',
    totalLessons: 18,
    completedLessons: 11
  }
];

export const stats: Stats = {
  completed: 12,
  inProgress: 4,
  totalHours: 26
};