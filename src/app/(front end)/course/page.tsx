"use client"

// import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code2, FileText, Infinity, LayoutGrid, PlayCircle, Star, Trophy } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"
import { useRouter } from 'next/navigation'


interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  callback_url?: string;
  redirect?: boolean;
}

// interface Window {
//   Razorpay: new (options: RazorpayOptions) => {
//     open: () => void;
//   };
// }


declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

export default function CourseDetail() {
  const router = useRouter();
//   const [activeTab, setActiveTab] = useState("overview")
   const handlePayment=async()=>{
      const AMOUNT=200;
        try{
            const resonse=await fetch("/api/create-order",{method:"POST"});
            const data=await resonse.json();

            const options={
                key:process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount:AMOUNT*100,
                currency:"INR",
                name:"E Learning It",
                description:"Test",
               
               
                order_id:data.orderId,
                handler:(response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string })=>{
                    console.log(response);
                    router.push('/course/chapter');
                },
                prefill:{
                    name:"ali",
                    email:"ali@elearningit.in",
                    Contact:"9955447788"
                
                }, 
                theme:{
                    color:"#3399cc"
                },
                // callback_url: 'http://localhost:3000/course/chapter',
                // redirect: true,
                };

                const rzp1=new window.Razorpay(options);
                rzp1.open();
        }
        catch(err){
            console.log(err);
        }finally{
            // setIsProcessing(false);
        }


    };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with blue gradient background */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Category Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm">Web Development</span>
                <span className="rounded-full bg-white/20 px-4 py-1 text-sm">Programming</span>
              </div>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold leading-tight">
                Master Modern Web Development: From Basics to Advanced
              </h1>

              {/* Description */}
              <p className="mb-6 text-xl font-light">
                Transform your career with comprehensive training in full-stack development. Learn modern tools and
                technologies used by professional developers.
              </p>

              {/* Course Stats */}
              <div className="mb-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 rounded-lg bg-white/20 px-3 py-1">
                  <Star className="h-5 w-5 text-yellow-300" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-sm">(12.5k reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>25,430 enrolled</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-background/20">
                  <img src="/placeholder.svg" alt="Instructor" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-medium">Lead Instructor</div>
                  <div className="text-sm opacity-90">Tech Academy</div>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:w-1/3">
              <Card className="mt-8 overflow-hidden border-none bg-white/10 backdrop-blur-sm lg:mt-0">
                <div className="aspect-video w-full bg-black/40">
                  <div className="flex h-full items-center justify-center">
                    <Button variant="secondary" size="lg" className="gap-2">
                      <PlayCircle className="h-5 w-5" />
                      Watch Preview
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6 text-center">
                    <div className="mb-2 text-3xl font-bold">100</div>
                    <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
                    <Button className="w-full" size="lg" variant="secondary"onClick={handlePayment} >
                      Enroll Now
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div className="rounded-lg bg-white/10 p-4 text-center">
                      <p className="text-sm">Not sure yet? Try our free preview lessons</p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Course Features</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3">
                          <PlayCircle className="h-5 w-5" />
                          <span>45+ hours of HD video content</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Code2 className="h-5 w-5" />
                          <span>12 hands-on projects</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FileText className="h-5 w-5" />
                          <span>Comprehensive documentation</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <LayoutGrid className="h-5 w-5" />
                          <span>Downloadable source code</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Infinity className="h-5 w-5" />
                          <span>Lifetime updates included</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Trophy className="h-5 w-5" />
                          <span>Completion certificate</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="curriculum" className="space-y-8">
          <TabsList className="inline-flex h-12 w-full justify-start space-x-4 rounded-none border-b bg-transparent p-0">
            {["Curriculum", "Resources", "Discussion", "Reviews"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="h-12 rounded-none border-b-2 border-transparent px-4 hover:bg-transparent data-[state=active]:border-blue-400 data-[state=active]:bg-transparent"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="curriculum" className="space-y-8">
            {/* Learning Objectives */}
            <section className="rounded-xl bg-muted/50 p-6">
              <h2 className="mb-6 text-2xl font-semibold">Learning Objectives</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {learningObjectives.map((objective, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg bg-background p-4">
                    <div className="rounded-full bg-blue-500/20 p-2 text-blue-100">{objective.icon}</div>
                    <p>{objective.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Modules */}
            <section>
              <h2 className="mb-6 text-2xl font-semibold">Course Modules</h2>
              <Accordion type="single" collapsible className="w-full">
                {modules.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`} className="rounded-lg border bg-card px-6 py-2">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-blue-500/20 p-2 text-blue-100">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{module.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {module.lessons} lessons • {module.duration}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="space-y-2">
                        {module.content.map((lesson, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <PlayCircle className="h-4 w-4 text-muted-foreground" />
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const learningObjectives = [
  {
    icon: <Code2 className="h-5 w-5" />,
    text: "Build professional web applications using modern frameworks and tools",
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    text: "Design responsive and accessible user interfaces",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    text: "Implement secure backend systems and APIs",
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    text: "Deploy and maintain full-stack applications",
  },
]

const modules = [
  {
    title: "Getting Started with Web Development",
    lessons: 8,
    duration: "2h 15m",
    content: [
      { title: "Course Introduction", duration: "5m" },
      { title: "Setting Up Your Development Environment", duration: "15m" },
      { title: "Web Development Fundamentals", duration: "25m" },
    ],
  },
  {
    title: "Modern Frontend Development",
    lessons: 12,
    duration: "4h 30m",
    content: [
      { title: "Introduction to React", duration: "20m" },
      { title: "Component-Based Architecture", duration: "30m" },
      { title: "State Management Patterns", duration: "45m" },
    ],
  },
  {
    title: "Backend Development Essentials",
    lessons: 10,
    duration: "3h 45m",
    content: [
      { title: "Server-Side Programming", duration: "30m" },
      { title: "Database Design", duration: "45m" },
      { title: "API Development", duration: "40m" },
    ],
  },
]

