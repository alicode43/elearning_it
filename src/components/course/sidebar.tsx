import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from '@/components/ui/button'
import {
  ChevronDown,
  FileText,
  PlayCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

function Sidebar() {
  return (
    <div className="w-[400px] border-l border-slate-800 bg-slate-900">
    <div className="flex items-center justify-between border-b border-slate-800 p-4">
      <h2 className="font-semibold text-white">Course content</h2>
      <Badge variant="secondary" className="bg-purple-500/10 text-purple-400">
        9/9 completed
      </Badge>
    </div>
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="space-y-[2px]">
        {sections.map((section, index) => (
          <div key={index} className="bg-slate-900/50">
            <button className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-800">
              <div>
                <h3 className="font-medium text-white">{section.title}</h3>
                <p className="text-sm text-slate-400">
                  {section.completed}/{section.total} | {section.duration}
                </p>
              </div>
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </button>
            <div className="space-y-1 border-l-2 border-purple-500/30 pl-4">
              {section.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex items-center gap-4 px-4 py-3 hover:bg-slate-800">
                  <Checkbox
                    checked={lesson.completed}
                    className="border-slate-700 data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500"
                  />
                  <div className="flex flex-1 items-center gap-3">
                    {lesson.type === "video" ? (
                      <PlayCircle className="h-4 w-4 text-slate-400" />
                    ) : (
                      <FileText className="h-4 w-4 text-slate-400" />
                    )}
                    <span className="text-sm text-slate-300">{lesson.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400">{lesson.duration}</span>
                    {lesson.hasResources && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 border border-purple-500/20 text-xs text-purple-400 hover:bg-purple-500/10"
                      >
                        Resources
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
  )
}

export default Sidebar

const sections = [
    {
      title: "Getting Started",
      completed: 9,
      total: 9,
      duration: "37min",
      lessons: [
        {
          title: "Course Introduction",
          type: "video",
          duration: "3min",
          completed: true,
          hasResources: false,
        },
        {
          title: "Course Syllabus",
          type: "document",
          duration: "1min",
          completed: true,
          hasResources: true,
        },
        {
          title: "Setting Up Your Development Environment",
          type: "video",
          duration: "8min",
          completed: true,
          hasResources: true,
        },
      ],
    },
    {
      title: "HTML Fundamentals",
      completed: 7,
      total: 7,
      duration: "1hr 10min",
      lessons: [
        {
          title: "Introduction to HTML",
          type: "video",
          duration: "15min",
          completed: true,
          hasResources: true,
        },
        {
          title: "HTML Structure",
          type: "video",
          duration: "12min",
          completed: true,
          hasResources: true,
        },
      ],
    },
    {
      title: "CSS Basics",
      completed: 5,
      total: 8,
      duration: "59min",
      lessons: [
        {
          title: "Introduction to CSS",
          type: "video",
          duration: "10min",
          completed: true,
          hasResources: true,
        },
        {
          title: "Styling Your First Webpage",
          type: "video",
          duration: "15min",
          completed: false,
          hasResources: true,
        },
      ],
    },
  ]