"use client"

import { useState } from "react"
import { Layout } from "@/components/createCourses/layout"
import { CourseStepper } from "@/components/createCourses/course-stepper"
import { CurriculumSection } from "@/components/createCourses/curriculum-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = ["Basic Info", "Curriculum", "Requirements", "Pricing"]

export default function CreateCoursePage() {
  const [currentStep, setCurrentStep] = useState(0)

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>Provide the basic information about your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Course Title</Label>
                <Input id="title" placeholder="Enter course title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Course Description</Label>
                <Textarea id="description" placeholder="Enter course description" className="min-h-[100px]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="level">Course Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Course Thumbnail</Label>
                <Input id="thumbnail" type="file" accept="image/*" />
              </div>
            </CardContent>
          </Card>
        )
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
              <CardDescription>Create your course content structure</CardDescription>
            </CardHeader>
            <CardContent>
              <CurriculumSection />
            </CardContent>
          </Card>
        )
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Course Requirements</CardTitle>
              <CardDescription>What do students need to know before starting?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prerequisites">Prerequisites</Label>
                  <Textarea id="prerequisites" placeholder="Enter course prerequisites" className="min-h-[100px]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tools">Required Tools</Label>
                  <Textarea id="tools" placeholder="Enter required tools and software" className="min-h-[100px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Course Pricing</CardTitle>
              <CardDescription>Set your course price</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (USD)</Label>
                  <Input id="price" type="number" min="0" step="0.01" placeholder="Enter course price" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discounted-price">Discounted Price (Optional)</Label>
                  <Input id="discounted-price" type="number" min="0" step="0.01" placeholder="Enter discounted price" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Create New Course</h1>
          <p className="text-gray-600">Fill in the details below to create your course</p>
        </div>

        <div className="mb-8">
          <CourseStepper steps={steps} currentStep={currentStep} />
        </div>

        {renderStep()}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              currentStep === steps.length - 1
                ? console.log("Submit form")
                : setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
            }
          >
            {currentStep === steps.length - 1 ? "Create Course" : "Next"}
          </Button>
        </div>
      </div>
    </Layout>
  )
}

