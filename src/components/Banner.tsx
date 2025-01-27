import React from 'react';

interface BannerSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

export function BannerSection({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}: BannerSectionProps) {
  return (
    <section className="bg-[#020B17] min-h-[600px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-[#00A3FF] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {title}
                <br />
                {subtitle}
              </h1>
              <h2 className="text-gray-200 text-xl md:text-2xl font-medium">
                {subtitle}
              </h2>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              {description}
            </p>

            <div>
              <a href={buttonLink}>
                <button className="bg-[#FFB800] hover:bg-[#FFA500] text-[#020B17] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  {buttonText}
                </button>
              </a>
            </div>

            {/* Decorative Line */}
            <div className="relative">
              <div className="h-1 w-3/4 bg-gradient-to-r from-[#00A3FF] to-transparent"></div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[500px]">
            <div className="relative h-full">
              {/* Main Hexagon with Image */}
              <div className="relative w-full h-full">
                <div className="aspect-square relative">
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <clipPath id="hexagonMask">
                          <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#hexagonMask)">
                        <image
                          href={imageUrl}
                          width="100"
                          height="100"
                          preserveAspectRatio="xMidYMid slice"
                        />
                      </g>
                      <path
                        d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z"
                        fill="none"
                        stroke="#00A3FF"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-[#00A3FF] transform"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}