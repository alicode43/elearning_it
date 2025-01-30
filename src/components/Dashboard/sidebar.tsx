'use client'
import React, { useState } from 'react';
import { BookOpen,  LogOut, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  sections: { id: string; label: string; icon: React.ElementType }[];
}


export default function Sidebar({ activeSection , onNavigate  ,sections}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <div className='sticky '  >
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
        fixed lg:sticky  md:sticky inset-y-0 left-0 z-40
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-200 ease-in-out
        h-screen w-64 bg-gray-900 text-white p-6
      `}>
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">LearnHub</span>
        </div>
        
        <nav className="space-y-4">
        {sections.map((section) => {
        const Icon = section.icon;
        return (
          <button
            key={section.id}
            onClick={() => handleNavigation(section.id)}
            className={`flex items-center gap-3 p-3 w-full rounded-lg ${
              activeSection === section.id ? 'bg-gray-800' : 'hover:bg-gray-800'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{section.label}</span>
          </button>
        );
      })}
        </nav>

        <div className="absolute bottom-6">
          <button className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg text-gray-400">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}