"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, GraduationCap, Layout, Menu, Moon, Search, Sun } from "lucide-react"
import { useState } from "react"

export default function LearningPortal() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <GraduationCap className="h-6 w-6" />
              <span className="ml-2 font-bold">ELearning IT</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="grid gap-4 py-4">
                  <Button variant="ghost" className="justify-start">
                    <Layout className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    My Courses
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex items-center justify-between flex-1 gap-4 md:gap-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search courses..."
                  className="w-full pl-8 pr-2 py-2 text-sm bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button size="icon" variant="ghost" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button size="sm" className="hidden md:flex">
                Upgrade Pro
              </Button>
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
                className="rounded-full"
                height={32}
                width={32}
              />
            </div>
          </div>
        </header>

        <div className="flex-1 container grid md:grid-cols-[220px_1fr] gap-6 py-8">
          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden md:flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <div className="grid gap-1">
                <Button variant="ghost" className="justify-start">
                  <Layout className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Courses
                </Button>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Categories</h2>
              <div className="grid gap-1">
                <Button variant="ghost" className="justify-start">
                  Web Development
                </Button>
                <Button variant="ghost" className="justify-start">
                  Mobile Development
                </Button>
                <Button variant="ghost" className="justify-start">
                  Data Science
                </Button>
                <Button variant="ghost" className="justify-start">
                  Design
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 grid gap-6">
            <section>
              <h1 className="text-2xl font-bold mb-4">Continue Learning</h1>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>React Fundamentals</CardTitle>
                    <CardDescription>Master the basics of React</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Progress value={65} />
                      <p className="text-sm text-muted-foreground">12/20 lessons completed</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Continue</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>TypeScript Basics</CardTitle>
                    <CardDescription>Learn TypeScript from scratch</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Progress value={30} />
                      <p className="text-sm text-muted-foreground">6/20 lessons completed</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Continue</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Next.js Advanced</CardTitle>
                    <CardDescription>Build full-stack applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Progress value={10} />
                      <p className="text-sm text-muted-foreground">2/20 lessons completed</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Continue</Button>
                  </CardFooter>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>UI/UX Design</CardTitle>
                    <CardDescription>Learn modern design principles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">4.8</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">20 lessons • 8 hours</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Node.js Backend</CardTitle>
                    <CardDescription>Build scalable backend services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">4.9</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">25 lessons • 12 hours</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Python Data Science</CardTitle>
                    <CardDescription>Learn data analysis with Python</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">4.7</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">30 lessons • 15 hours</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Enroll Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

