import React from 'react';
import Sidebar from '@/components/Dashboard/sidebar';
import CourseCard from '@/components/Dashboard/courseCard';
import StatsCard from '@/components/Dashboard/statusCard';
import { courses, stats } from './data';
import { Search, Bell } from 'lucide-react';


function App() {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        <Sidebar />
        
        <main className="flex-1 p-4 sm:p-8 lg:pl-8 pt-20 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
              <p className="text-gray-600">Continue your learning journey</p>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full sm:w-auto pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              
              <button className="relative shrink-0">
                <Bell className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32"
                alt="Profile"
                className="w-8 h-8 rounded-full shrink-0"
              />
            </div>
          </div>
  
          <StatsCard stats={stats} />
          
          <h2 className="text-xl font-semibold mt-8 sm:mt-10 mb-4 sm:mb-6">Your Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </main>
      </div>
    );
  }
  
  export default App;