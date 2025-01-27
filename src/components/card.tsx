import { Star } from "lucide-react"

interface CourseCardProps {
  title: string
  rating: string
  limited?: boolean
}

export default function CourseCard({ title, rating, limited = true }: CourseCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Top Section with Icon */}
      <div className="relative bg-[#1E3A8A] p-8">
        <div className="relative mx-auto h-32 w-32">
          <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border-2 border-dashed border-white/40" />
          <div className="absolute inset-2 rounded-full bg-[#2C4AA0]">
            <div className="h-full w-full rounded-full p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DisatF8Lms5aZDC2KohoPmYAcgiWvQ.png"
                alt="Course icon"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative bg-[#FDB813] p-6">
        {/* Vertical Stripes */}
        {/* <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(180deg, transparent, transparent 2px, black 2px, black 3px)",
            backgroundSize: "100% 5px",
          }}
        /> */}

        {/* Content */}
        <div className="relative space-y-4">
          <div className="flex items-center justify-between">
            {limited && (
              <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800">
                Limited batch
              </span>
            )}
            <span className="inline-flex items-center text-sm font-medium text-gray-800">
              <Star className="mr-1 h-4 w-4 fill-current" />
              {rating} Rating
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900">{title}</h3>

          <button className="w-full rounded-lg bg-[#F59E0B] px-4 py-2 font-semibold text-gray-900 shadow-md transition-all hover:bg-[#D97706] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

