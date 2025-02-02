"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CourseCard from "@/components/card"
import { type FormEvent, useState } from "react"
import FeatureCard from "@/components/featureCard"
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react"
// import TestimonialCard from "@/components/testimonialCard";
import { TestimonialCard } from "@/components/testimonialCard";
import { BannerSection } from "@/components/Banner";

export default function Home() {

    const courses = [
        {
          title: "DATA WRANGLING",
          rating: "4.5",
        },
        {
          title: "AWS DevOps",
          rating: "4.5",
        },
        {
          title: "Salesforce Developer",
          rating: "4.5",
        },
      ]
      
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
      })
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
      }
      const features = [
        {
          title: "Training",
          description:
            "Training with working professionals to align with industry requirements to make you ready for the industry.",
          iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DiqWtshqNi51RHpAEwGhXn9whfQMJD.png",
        },
        {
          title: "Learning by Doing",
          description:
            "Training with working professionals to align with industry requirements to make you ready for the industry.",
          iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DiqWtshqNi51RHpAEwGhXn9whfQMJD.png",
        },
        {
          title: "Daily Revisions",
          description:
            "Training with working professionals to align with industry requirements to make you ready for the industry.",
          iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kmDNut9tdkUqO8An8ewmrADs3oXHxC.png",
        },
        {
          title: "Performance Evaluation",
          description: "As exams develop them as an individual, give values, extraordinary thinking, self assessment.",
          iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DiqWtshqNi51RHpAEwGhXn9whfQMJD.png",
        },
        {
          title: "Projects",
          description:
            "Making every one do a minimum of three projects with tools used in the office like git, bitbucket, jira, confluence.",
          iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DiqWtshqNi51RHpAEwGhXn9whfQMJD.png",
        },
        {
          title: "Communication Skills",
          description:
            "Making a person ready to work with a team through daily scrum calls, group discussions, and professional email writing.",
          iconUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DiqWtshqNi51RHpAEwGhXn9whfQMJD.png",
        },
      ]

      const [activeIndex, setActiveIndex] = useState<number>(0)

      const faqs= [
        {
          question: "What are the qualification required to do the courses?",
          answer:
            "Our courses are designed for various skill levels. Basic computer knowledge and dedication to learn are the primary requirements.",
        },
        {
          question: "Dose your institute provide 100% placement Guarantee?",
          answer:
            "While we don't guarantee placement, we provide comprehensive placement assistance and have a strong track record of student placements.",
        },
        {
          question: "Do you provide placement Assistance?",
          answer:
            "Yes, we provide dedicated placement assistance including resume building, interview preparation, and job referrals.",
        },
        {
          question: "Will we get any support form you people in future if I start my career?",
          answer:
            "Yes, we offer continued support to our alumni through mentorship and career guidance even after course completion.",
        },
        {
          question: "Are the courses theoretical or practical?",
          answer:
            "Our courses combine both theoretical knowledge and practical hands-on experience, with emphasis on real-world applications.",
        },
        {
          question: "Who will be the trainers for the Live trainings?",
          answer: "Our trainers are industry professionals with extensive experience in their respective fields.",
        },
      ]
      const testimonials = [
        {
          name: "Cameron Lehner",
          role: "Digital Marketing Strategist",
          quote: "If you want real marketing that works and effective implementation - mobile app's got you covered.",
          imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
        },
        {
          name: "Sarah Johnson",
          role: "Product Designer",
          quote: "The team's attention to detail and user experience is outstanding. Highly recommended!",
          imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
        }
      ];
    

  return (
  <>
    <Navbar />
    {/* Hero Section */}
  {/* <BannerSection/> */}
  <BannerSection
        title="Java Full Stack"
        subtitle="Job Drive 2K25"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        buttonText="Register Now"
        buttonLink="#"
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
      />




{/* Our Training Section */}

<section className="relative bg-[#ccdcd9]/50  flex  justify-center py-16">
  <div className="container mx-auto px-4 w-11/12">
    <h2 className="text-[#07a6f2] text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Roboto'] text-center md:text-left mb-8">
      Our Training Highlights
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
      <div className="text-black text-xl md:text-2xl font-normal font-['Roboto'] flex flex-col gap-4">
        <p>  Job-Oriented Programs</p>
        <p>     Real-Time Experienced Trainers</p>
        <p>    Instructor-Led Live Classroom Sessions</p>
        <p>      Hands-On Learning</p>
        <p>        Real-World Case Studies/ Projects</p>
        <p>        Q & A Sessions and Latest Technology Updates</p>
        <p>           Mock-Up Interviews & Placement Assistance</p>
     
      </div>
      

      <div >
        <Image
          src="/Artwork.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

{/* Trending sectopm */}

<div className=" bg-sky-200 p-6 md:p-12">
      <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 md:text-5xl">
        Trending IT & Software Courses
      </h1>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} rating={course.rating} />
        ))}
      </div>
    </div>


{/* Achivement section */}

<section className=" px-[72px] py-[75px] w-full bg-gradient-to-r from-[#011b36] to-[#024e9c] justify-center items-start gap-8 inline-flex overflow-hidden md:flex-row flex-col">

    <div >

<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
    </div>
    <div>

<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
    </div>
    <div>

<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
    </div>

</section>

{/* About Us */}
   <section className="relative  bg-[#001324] text-white overflow-hidden">
      {/* Content Container */}
      <div className="container flex justify-center mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid  w-11/12 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-12">
            <span className="text-gray-400 text-sm uppercase tracking-wider">who we are</span>
            <h1 className="text-[#00A3FF] text-4xl lg:text-5xl font-bold mb-8">About Us</h1>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                We provide online accelerator programs that effectively enhance the coding skills of students to help
                launch their career as successful software professionals. Our accelerator programs are designed to help
                students learn the necessary coding skills and life skills to be successful in the software industry.
              </p>
              <p className="text-lg leading-relaxed">
                We offer a variety of courses that cover the different aspects of coding, including programming
                languages, software development tools, and software development methodologies. We also provide a
                mentorship program that pairs students with experienced software professionals to help them transition
                into the industry.
              </p>
              <button className="bg-[#FDB813] hover:bg-[#e6a711] text-black font-semibold px-8 py-3 rounded-full transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#001324] via-transparent to-transparent z-10" />
   <Image
  src="/aboutUs.png" // Ensure this path is correct and the image exists in the public directory
  alt="A mentor smiling"
  className="w-full h-auto object-cover"
  layout="responsive"
  width={500}
  height={500}
/>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-8 left-8 opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-500 rounded-full" />
          ))}
        </div>
      </div>
    </section>




{/* Enrollment form */}

    <section className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Image Section */}
          <div className="relative lg:w-1/2">
            <div className="relative h-[400px] lg:h-screen">
          
<Image
  src="/enrollment.png" // Ensure this path is correct and the image exists in the public directory
  alt="Student with notebook"
  className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
  layout="fill"
/>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full space-y-8 p-8 lg:w-1/2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Our Courses</h2>
              <h1 className="text-4xl font-bold text-blue-400 md:text-5xl">Enroll Now For Free Demo</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border-b-2 border-white/20 bg-transparent px-0 py-4 text-white placeholder-white/60 focus:border-blue-400 focus:outline-none focus:ring-0"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border-b-2 border-white/20 bg-transparent px-0 py-4 text-white placeholder-white/60 focus:border-blue-400 focus:outline-none focus:ring-0"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border-b-2 border-white/20 bg-transparent px-0 py-4 text-white placeholder-white/60 focus:border-blue-400 focus:outline-none focus:ring-0"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-yellow-400 px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

{/* why choose us */}
<div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-blue-500 md:text-5xl">Why Choose Us</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconUrl={feature.iconUrl}
            />
          ))}
        </div>
      </div>
    </div>


{/* FAQ */}

<section className="min-h-screen bg-[#001B3D] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Image and Title */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-4xl font-bold text-blue-400 md:text-5xl">Frequently Asked Questions</h2>
            <div className="relative h-[300px] w-full md:h-[400px]">
              <img
                src="faq.png"
                alt="FAQ Illustration"
                className="h-full w-full object-contain"
              />
              <Image
  src="/faq.png" // Ensure this path is correct and the image exists in the public directory
  alt="Student with notebook"
  className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
  layout="fill"
/>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <button
                  onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                  className={`flex w-full items-center justify-between p-4 text-left transition-colors ${
                    index === activeIndex
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-blue-900/50 text-white hover:bg-blue-900/70"
                  }`}
                  aria-expanded={index === activeIndex}
                >
                  <span className="flex items-center gap-2">
                    <ChevronRight
                      className={`h-5 w-5 transition-transform ${index === activeIndex ? "rotate-90" : ""}`}
                    />
                    {faq.question}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ease-in-out ${
                    index === activeIndex ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="bg-blue-900/30 p-4 text-white">{faq.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

{/* Testimonial */}

<div className=" bg-gray-100 p-4">
<h1 className="mb-12 text-center text-4xl font-bold text-blue-500 md:text-5xl">Testimonial</h1>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>

<Footer/>


  </>
  );
}
