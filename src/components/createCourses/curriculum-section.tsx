import { useState } from "react"
import { Grip, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Lecture {
  id: string
  title: string
  description: string
  duration: string
}

interface Section {
  id: string
  title: string
  lectures: Lecture[]
}

export function CurriculumSection() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: "1",
      title: "Introduction",
      lectures: [
        {
          id: "1-1",
          title: "Welcome to the Course",
          description: "A brief overview of what you'll learn",
          duration: "5:00",
        },
      ],
    },
  ])

  const addSection = () => {
    setSections([
      ...sections,
      {
        id: Date.now().toString(),
        title: "New Section",
        lectures: [],
      },
    ])
  }

  const addLecture = (sectionId: string) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lectures: [
                ...section.lectures,
                {
                  id: Date.now().toString(),
                  title: "New Lecture",
                  description: "",
                  duration: "0:00",
                },
              ],
            }
          : section,
      ),
    )
  }

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <Card key={section.id}>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Grip className="h-5 w-5 text-gray-400" />
              <div className="flex-1">
                <Input
                  placeholder="Section Title"
                  value={section.title}
                  onChange={(e) =>
                    setSections(sections.map((s) => (s.id === section.id ? { ...s, title: e.target.value } : s)))
                  }
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSections(sections.filter((s) => s.id !== section.id))}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {section.lectures.map((lecture) => (
              <div key={lecture.id} className="pl-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Grip className="h-5 w-5 text-gray-400" />
                  <div className="flex-1 space-y-2">
                    <Input
                      placeholder="Lecture Title"
                      value={lecture.title}
                      onChange={(e) =>
                        setSections(
                          sections.map((s) =>
                            s.id === section.id
                              ? {
                                  ...s,
                                  lectures: s.lectures.map((l) =>
                                    l.id === lecture.id ? { ...l, title: e.target.value } : l,
                                  ),
                                }
                              : s,
                          ),
                        )
                      }
                    />
                    <Textarea
                      placeholder="Lecture Description"
                      value={lecture.description}
                      onChange={(e) =>
                        setSections(
                          sections.map((s) =>
                            s.id === section.id
                              ? {
                                  ...s,
                                  lectures: s.lectures.map((l) =>
                                    l.id === lecture.id ? { ...l, description: e.target.value } : l,
                                  ),
                                }
                              : s,
                          ),
                        )
                      }
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Duration"
                    value={lecture.duration}
                    className="w-24"
                    onChange={(e) =>
                      setSections(
                        sections.map((s) =>
                          s.id === section.id
                            ? {
                                ...s,
                                lectures: s.lectures.map((l) =>
                                  l.id === lecture.id ? { ...l, duration: e.target.value } : l,
                                ),
                              }
                            : s,
                        ),
                      )
                    }
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setSections(
                        sections.map((s) =>
                          s.id === section.id
                            ? {
                                ...s,
                                lectures: s.lectures.filter((l) => l.id !== lecture.id),
                              }
                            : s,
                        ),
                      )
                    }
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
            <Button variant="outline" className="ml-8" onClick={() => addLecture(section.id)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Lecture
            </Button>
          </CardContent>
        </Card>
      ))}
      <Button onClick={addSection}>
        <Plus className="h-4 w-4 mr-2" />
        Add Section
      </Button>
    </div>
  )
}

