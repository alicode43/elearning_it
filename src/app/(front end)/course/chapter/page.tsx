"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Sidebar from "@/components/course/sidebar" 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlarmClock,
  Clock,
  Globe,
  GraduationCap,
  LayoutGrid,
  Star,
  Users,
  Video,
} from "lucide-react"
 
export default function CourseOverview() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
      <video className="w-full" autoPlay muted controls>
  <source src="/learn.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        <div className="border-b border-slate-800 bg-slate-900/50">
          <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold text-white">Modern Web Development: Complete Guide</h1>
            <p className="mb-6 text-lg text-slate-300">
              Master full-stack development with HTML, CSS, JavaScript, React, Node.js, and more. Build real-world
              projects and advance your career.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-bold">4.8</span>
                <span className="text-sm">(15,420 ratings)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>25,430 students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Last updated January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList>

              <TabsTrigger value="courseContent" className="md:hidden flex">Course Content </TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="learning">Learning Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="courseContent" className="space-y-8">
              {/* Schedule Learning Time */}
            <Sidebar/>

            </TabsContent>

            <TabsContent value="overview" className="space-y-8">
              {/* Schedule Learning Time */}
              <Card className="border-slate-800 bg-slate-900/50 p-6">
                <div className="flex items-start gap-4">
                  <AlarmClock className="mt-1 h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="mb-2 font-semibold text-white">Schedule learning time</h3>
                    <p className="mb-4 text-slate-300">
                      Learning a little each day adds up. Research shows that students who make learning a habit are
                      more likely to reach their goals.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="secondary">Get started</Button>
                      <Button variant="ghost" className="text-slate-400">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Course Stats */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 font-semibold text-white">By the numbers</h3>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-purple-400" />
                      Skill level: All Levels
                    </li>
                    <li className="flex items-center gap-3">
                      <Video className="h-5 w-5 text-purple-400" />
                      61.5 hours of video content
                    </li>
                    <li className="flex items-center gap-3">
                      <LayoutGrid className="h-5 w-5 text-purple-400" />
                      373 total lectures
                    </li>
                  </ul>
                </Card>

                <Card className="border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 font-semibold text-white">Prerequisites</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• No programming experience needed</li>
                    <li>• A computer with internet access</li>
                    <li>• Enthusiasm to learn</li>
                  </ul>
                </Card>

                <Card className="border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 font-semibold text-white">Certificate</h3>
                  <p className="mb-4 text-slate-300">Get a certificate by completing the entire course</p>
                  <Button className="w-full" variant="secondary">
                    Learn more
                  </Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Course Content Sidebar */}
      <div className="md:block hidden">

      <Sidebar  />
      </div>
  
    </div>
  )
}

// const sections = [
//   {
//     title: "Getting Started",
//     completed: 9,
//     total: 9,
//     duration: "37min",
//     lessons: [
//       {
//         title: "Course Introduction",
//         type: "video",
//         duration: "3min",
//         completed: true,
//         hasResources: false,
//       },
//       {
//         title: "Course Syllabus",
//         type: "document",
//         duration: "1min",
//         completed: true,
//         hasResources: true,
//       },
//       {
//         title: "Setting Up Your Development Environment",
//         type: "video",
//         duration: "8min",
//         completed: true,
//         hasResources: true,
//       },
//     ],
//   },
//   {
//     title: "HTML Fundamentals",
//     completed: 7,
//     total: 7,
//     duration: "1hr 10min",
//     lessons: [
//       {
//         title: "Introduction to HTML",
//         type: "video",
//         duration: "15min",
//         completed: true,
//         hasResources: true,
//       },
//       {
//         title: "HTML Structure",
//         type: "video",
//         duration: "12min",
//         completed: true,
//         hasResources: true,
//       },
//     ],
//   },
//   {
//     title: "CSS Basics",
//     completed: 5,
//     total: 8,
//     duration: "59min",
//     lessons: [
//       {
//         title: "Introduction to CSS",
//         type: "video",
//         duration: "10min",
//         completed: true,
//         hasResources: true,
//       },
//       {
//         title: "Styling Your First Webpage",
//         type: "video",
//         duration: "15min",
//         completed: false,
//         hasResources: true,
//       },
//     ],
//   },
// ]

