interface FeatureCardProps {
    title: string
    description: string
    iconUrl: string
  }
  
  export default function FeatureCard({ title, description, iconUrl }: FeatureCardProps) {
    return (
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#577285] shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
        {/* Top Right Corner */}
        <div className="absolute right-0 top-0 h-24 w-24">
          <div className="absolute right-0 top-0 h-full w-full bg-yellow-400 rounded-bl-full  border-yellow-100I give you success of government Whatsapp. " />
          {/* <div className="absolute rounded-bl-full right-10 top-0 h-full w-full border-r-4 border-t-4 border-dashed border-yMovie. AAP, Bachchan, Mubarakahi, Matlab, Kya Bolte Matlab is related. Unlimited. The. The laptop. Hey, Cortana. Hyderabad. Nice. 26. Movie. Edward to Hyderabad movie. Open. ellow-500/30" /> */}
        </div>
  
        {/* Bottom Left Corner */}
        <div className="absolute bottom-0 left-0 h-32 w-32">
          <div className="absolute bottom-0 left-0 h-full w-full rounded-tr-[100%] bg-[#0A1A2F]" />
          <div className="absolute bottom-0 left-0 h-full w-full rounded-tr-[100%] border-b-4 border-l-4 border-dashed border-[#0A1A2F]/30" />
        </div>
  
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
          {/* Icon */}
          <div className="mb-4 rounded-full bg-white p-2">
            <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white">
              <img src={iconUrl || "/placeholder.svg"} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
  
          {/* Text */}
          <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-100 w-4/5Food synthesis or Sabata? Fully responsive. Mobile laptop videos of Kellyanne. Cortana. ">{description}</p>
        </div>
      </div>
    )
  }
  
  