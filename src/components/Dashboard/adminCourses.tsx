"use client";

import { Star, Clock, Users2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      enrolled: 234,
      rating: 4.8,
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
      level: "Advanced",
      status: "Published"
    },
    {
      id: 2,
      title: "Node.js Backend Mastery",
      instructor: "Michael Chen",
      enrolled: 189,
      rating: 4.7,
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
      level: "Intermediate",
      status: "Published"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Davis",
      enrolled: 312,
      rating: 4.9,
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=60",
      level: "Beginner",
      status: "Draft"
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      instructor: "David Wilson",
      enrolled: 423,
      rating: 4.6,
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop&q=60",
      level: "Intermediate",
      status: "Published"
    }
  ];

  return (
    <div className="h-screen">
   
     
        {/* <Header /> */}
        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">My Courses</h1>
              <p className="text-muted-foreground">Manage and monitor your courses</p>
            </div>
            <Button>Create New Course</Button>
          </div>
          
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                  <Badge 
                    className={cn(
                      "absolute top-2 right-2",
                      course.status === "Published" ? "bg-green-500" : "bg-orange-500"
                    )}
                  >
                    {course.status}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users2 className="h-4 w-4 text-muted-foreground" />
                      <span>{course.enrolled} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    
    </div>
  );
}