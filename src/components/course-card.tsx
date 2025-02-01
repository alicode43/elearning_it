import Link from "next/link"

interface CourseCardProps {
    title: string
    batchStatus: string
    rating: number
    image?: string
  }
  
  export default function CourseCard({
    title,
    batchStatus,
    rating,
    image,
  }: CourseCardProps) {
    return (
      <div className="relative w-full max-w-md aspect-square bg-[#001324] rounded-2xl overflow-hidden">
        {/* Yellow corner accent */}
        <div className="absolute top-0 right-0">
          <div className="relative w-24 h-24">
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-bl-[100%]" />
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-dashed border-[#001324] rounded-bl-[100%]" />
            </div>
          </div>
        </div>
  
        {/* Content container */}
        <div className="p-6 h-full flex flex-col">
          {/* Title */}
          <h2 className="text-[#00B7FF] text-2xl font-bold leading-tight mb-4">
            {title.split(" ").map((word, i) => (
              <div key={i}>{word}</div>
            ))}
          </h2>
  
          {/* Tags */}
          <div className="flex gap-3 mb-6">
            <div className="px-3 py-1 bg-[#ffffff1a] rounded-full text-white text-sm flex items-center">
              <span className="w-4 h-4 mr-1">👤</span>
              {batchStatus}
            </div>
            <div className="px-3 py-1 bg-[#ffffff1a] rounded-full text-white text-sm flex items-center">
              <span className="w-4 h-4 mr-1">⭐</span>
              {rating} Rating
            </div>
          </div>
  
          {/* Button */}
          <Link href="/course" className="z-10">
            <button className="w-fit px-6 py-2 bg-yellow-400 rounded-lg text-black font-medium hover:bg-yellow-300 transition-colors">
              View Details
            </button>
          </Link>
          {/* <button className="w-fit px-6 py-2 bg-yellow-400 rounded-lg text-black font-medium hover:bg-yellow-300 transition-colors">
            View Details
          </button> */}
  
          {/* Decorative dots */}
          <div className="absolute bottom-6 left-6 grid grid-cols-6 gap-2">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gray-700" />
            ))}
          </div>
  
          {/* Image with blue background */}
          <div className="absolute bottom-0 right-0 w-3/4">
            <div className="relative w-full pt-[100%]">
              <div className="absolute inset-0">
                <div className="absolute inset-0 w-4/5 h-4/5 bottom-0 bg-[#00B7FF] opacity-20 rounded-tl-[100%]" />
                <img
                  src={image || "/placeholder.svg"}
                  alt=""
                  className="absolute -bottom-10 -right-5 w-4/5 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  