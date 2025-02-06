'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  duration: string;
  lessons: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Introduction to AMPscript',
    description: 'Learn the fundamentals of AMPscript including variables, functions, and basic operations.',
    difficulty: 'Beginner',
    topics: ['Variables', 'Functions', 'Operators', 'Output'],
    duration: '2 hours',
    lessons: 8
  },
  {
    id: 2,
    title: 'Data Extensions & Lookups',
    description: 'Master working with Data Extensions and lookup functions in AMPscript.',
    difficulty: 'Intermediate',
    topics: ['Data Extensions', 'Lookup Functions', 'Data Retrieval'],
    duration: '3 hours',
    lessons: 12
  },
  {
    id: 3,
    title: 'Advanced AMPscript Techniques',
    description: 'Advanced concepts including complex logic, error handling, and optimization.',
    difficulty: 'Advanced',
    topics: ['Error Handling', 'Complex Logic', 'Optimization'],
    duration: '4 hours',
    lessons: 15
  }
];

const CourseCard = ({ course }: { course: Course }) => {
  const difficultyColors = {
    Beginner: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Intermediate: 'bg-amber-100 text-amber-800 border-amber-200',
    Advanced: 'bg-rose-100 text-rose-800 border-rose-200'
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[course.difficulty]}`}>
            {course.difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {course.topics.map((topic, index) => (
            <span 
              key={index}
              className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full border border-blue-100"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {course.lessons} lessons
          </div>
        </div>

        <Link 
          href={`/compiler`}
          className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
};

function Page() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleConvert = async () => {
    try {
      const response = await fetch('/api/convert-ampscript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      console.error('Error converting AMPscript:', error);
      setOutput('Error converting AMPscript');
    }
  };

  return (
    <div>
      <h1>AMPscript to HTML/CSS Converter</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        // rows="10"
        // cols="50"
        placeholder="Enter AMPscript code here"
      ></textarea>
      <br />
      <button onClick={handleConvert}>Convert</button>
      <h2>Output</h2>
      <pre>{output}</pre>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              AMPscript Courses
            </h1>
            <p className="text-lg text-gray-600">
              Master AMPscript with our comprehensive courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
