"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Navbar from "@/components/Navbar"

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Getting Started with React Development",
    excerpt: "Learn the fundamentals of React and start building modern web applications...",
    content: `React is a popular JavaScript library for building user interfaces, particularly single-page applications. It's used by large companies like Facebook, Instagram, and Netflix.

    In this comprehensive guide, we'll cover:
    
    1. Setting up your development environment
    2. Understanding JSX
    3. Components and Props
    4. State Management
    5. Hooks and their usage
    
    React's component-based architecture makes it easy to build reusable UI components that manage their own state. This leads to more maintainable and scalable applications.`,
    author: "Sarah Johnson",
    date: "2024-01-25",
    readTime: "8 min read",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    excerpt: "Deep dive into CSS Grid Layout and learn how to create complex layouts with ease...",
    content: `CSS Grid Layout is a two-dimensional layout system that has revolutionized how we design web layouts. This powerful system allows for complex layouts that were previously difficult to achieve.

    Key topics covered:
    
    1. Grid Container and Grid Items
    2. Creating Rows and Columns
    3. Grid Areas and Template Areas
    4. Responsive Grid Layouts
    5. Advanced Grid Techniques
    
    With CSS Grid, you can create sophisticated layouts while maintaining clean, semantic HTML structure.`,
    author: "Mike Chen",
    date: "2024-01-24",
    readTime: "6 min read",
    category: "CSS",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Understanding TypeScript",
    excerpt: "Explore TypeScript and its benefits in modern web development...",
    content: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

    This guide covers:
    
    1. Basic Types and Interfaces
    2. Classes and Inheritance
    3. Generics
    4. Type Inference
    5. Advanced Types
    
    TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.`,
    author: "Alex Turner",
    date: "2024-01-23",
    readTime: "10 min read",
    category: "TypeScript",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<(typeof blogs)[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Get unique categories from blogs
  const categories = useMemo(() => {
    const uniqueCategories = new Set(blogs.map((blog) => blog.category))
    return ["all", ...Array.from(uniqueCategories)]
  }, [])

  // Filter blogs based on search query and selected category
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
  <div >
  <Navbar/>
  <div className="bg-radial-gradient items-center justify-center flex flex-col py-12">
      
  </div>
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Portal Blog</h1>
          <p className="text-lg text-gray-600 mb-8">Expand your knowledge with our latest articles</p>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-500 mb-8">
            Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? "result" : "results"}
          </p>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p className="text-lg mb-2">No blogs found</p>
            <p className="text-sm">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <Badge className="mb-4" variant="secondary">
                    {blog.category}
                  </Badge>
                  <CardTitle className="text-xl mb-4">{blog.title}</CardTitle>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full" onClick={() => setSelectedBlog(blog)}>
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
          {selectedBlog && (
            <DialogContent className="max-w-3xl h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">{selectedBlog.title}</DialogTitle>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{selectedBlog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedBlog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                </div>
                <Badge variant="secondary">{selectedBlog.category}</Badge>
              </DialogHeader>
              <Image
                src={selectedBlog.image || "/placeholder.svg"}
                alt={selectedBlog.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <DialogDescription className="text-base leading-relaxed whitespace-pre-line">
                {selectedBlog.content}
              </DialogDescription>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  </div >
  )
}

