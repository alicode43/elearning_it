import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  )
}

