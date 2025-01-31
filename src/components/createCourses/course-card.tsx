import Image from "next/image"
import { Clock, Users, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CourseCardProps {
  title: string
  instructor: string
  thumbnail: string
  students: number
  duration: number
  level: "Beginner" | "Intermediate" | "Advanced"
  rating: number
  status: "Published" | "Draft"
}

export function CourseCard({
  title,
  instructor,
  thumbnail,
  students,
  duration,
  level,
  rating,
  status,
}: CourseCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="relative h-48">
        <Image src={thumbnail || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <Badge className={cn("absolute top-4 right-4", status === "Published" ? "bg-green-500" : "bg-orange-500")}>
          {status}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">by {instructor}</p>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration} weeks</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <Badge variant="secondary">{level}</Badge>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

