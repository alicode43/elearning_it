import React from 'react';
import { Course } from './types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <span className="text-sm text-blue-600 font-medium">{course.category}</span>
        <h3 className="text-lg font-semibold mt-1">{course.title}</h3>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{course.duration}</span>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}