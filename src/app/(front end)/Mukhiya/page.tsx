"use client"
import React, { useState } from 'react';
import Sidebar from '@/components/Dashboard/sidebar';
import StatsCard from '@/components/Dashboard/statusCard';
import Setting from '@/components/Dashboard/setting';
import CoursesPage from '@/components/Dashboard/adminCourses';
import AdminDashBoard from '@/components/Dashboard/AdminDashboard';

import { stats } from './data';
import { Bell } from 'lucide-react';
import {  BookOpen, LayoutDashboard, Settings,  User} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sections = [
    { id: 'Admin', label: 'Admin', icon: User },
    { id: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },

    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    if (activeSection === 'courses') {
      return (
        <>
          <h2 className="text-xl font-semibold mb-6">My Courses</h2>
          {/* <CoursesPage courses={courses} /> */}
          <CoursesPage  />
        </>
      );
    } 
    // else if (activeSection === 'progress') {
    //   return <h2 className="text-xl font-semibold">Progress (Coming Soon)</h2>;
    // } 
    else if (activeSection === 'settings') {
      return <h2 className="text-xl font-semibold"><Setting/></h2>;
    } else {
      return (
        <>
          <StatsCard stats={stats} />
          <h2 className="text-xl font-semibold mt-8 sm:mt-10 mb-6">Admin Dashboard</h2>
          {/* <MyCourses courses={courses} /> */}
          < AdminDashBoard  />
        </>
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
     <div className='sticky '  >
        <Sidebar activeSection={activeSection}  onNavigate={setActiveSection} sections={sections}   />
        </div> 
      
      <main className="flex-1 p-4 sm:p-8 lg:pl-8 pt-20 lg:pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
            <p className="text-gray-600">Continue your learning journey</p>
          </div>
          
          <div className="flex items-center gap-4">
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

        {renderContent()}
      </main>
    </div>
  );
}


  
  export default App;