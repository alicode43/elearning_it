import React from 'react'
import {Footer} from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { BannerSection } from "@/components/Banner";
import CourseCard from '@/components/course-card';
function page() {

    const courseData = [
        {
          title: "Data Visualization using DASH",
          batchStatus: "Limited Batch",
          rating: 4.5,
          image: "https://cdn.prod.website-files.com/6443d6d96a788f6942166567/653fe0b978ef8ed0e950360a_data-analytics-1-p-800.png",
        },
        {
          title: "Machine Learning with Python",
          batchStatus: "Open Batch",
          rating: 4.8,
          image: "https://cdn.prod.website-files.com/6443d6d96a788f6942166567/653fe0b978ef8ed0e950360a_data-analytics-1-p-800.png",
        },
        {
          title: "Introduction to Data Science",
          batchStatus: "Limited Batch",
          rating: 4.7,
          image: "https://cdn.prod.website-files.com/6443d6d96a788f6942166567/653fe0b978ef8ed0e950360a_data-analytics-1-p-800.png",
        },
        {
          title: "Advanced SQL for Data Analysis",
          batchStatus: "Open Batch",
          rating: 4.6,
          image: "https://cdn.prod.website-files.com/6443d6d96a788f6942166567/653fe0b978ef8ed0e950360a_sql.png",
        },
        {
            title: "Data Visualization using DASH",
            batchStatus: "Limited Batch",
            rating: 4.5,
            image: "https://cdn.prod.website-files.com/6443d6d96a788f6942166567/653fe0b978ef8ed0e950360a_data-analytics-1-p-800.png",
          },
          {
            title: "Machine Learning with Python",
            batchStatus: "Open Batch",
            rating: 4.8,
            image: "https://cdn.prod.website-files.com/6443d6d96a788f6942166567/653fe0b978ef8ed0e950360a_machine-learning.png",
          }
      ];
  return (
    <div>
        <Navbar/>

        {/* hero section */}
        <BannerSection
        title="Courses"
        subtitle=""
        description="Placement of courses"
        buttonText="Register Now"
        buttonLink="#"
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
      />

    
        {/* course cards */}
        <section className="bg-radial-gradient items-center justify-center flex flex-col py-12">
        <div className="text-[#07a6f2] text-[58px] font-extrabold font-['Roboto']">Trending IT & Software Courses</div>
        <div className=" w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 "> 
            
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            batchStatus={course.batchStatus}
            rating={course.rating}
            image={course.image}
          />
        ))}
      </div>
        </section>




        <Footer/>
      
    </div>
  )
}

export default page
