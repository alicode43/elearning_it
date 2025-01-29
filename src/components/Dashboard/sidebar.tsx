'use client'
import React, { useState } from 'react';
import { Home, BookOpen, Activity, Settings, LogOut, Menu, X } from 'lucide-react';
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
  
        {/* Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
  
        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-200 ease-in-out
          h-screen w-64 bg-gray-900 text-white p-6
        `}>
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">LearnHub</span>
          </div>
          
          <nav className="space-y-4">
            <a href="#" className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <BookOpen className="h-5 w-5" />
              <span>My Courses</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <Activity className="h-5 w-5" />
              <span>Progress</span>
            </a>
            <a href="#" className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
  
          <div className="absolute bottom-6">
            <button className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg text-gray-400">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </>
    );
  }