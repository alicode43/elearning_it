import React from 'react'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'


function page() {
  return (
    <div>
        <Navbar/>
        {/* Form */}
        <section className="w-[1440px] h-[1103px] relative bg-[#011325] flex-col justify-start items-start inline-flex overflow-hidden">
    <div className="text-[#07a6f2] text-[58px] font-extrabold font-['Roboto']">Contact Us</div>
    <img className="w-[579px] h-[869.19px]" src="https://via.placeholder.com/579x869" />
    <div className="text-white/70 text-4xl font-medium font-['Roboto'] capitalize tracking-wide">Leave a Message For Us</div>
    <div className="text-white/70 text-2xl font-normal font-['Roboto'] capitalize tracking-wide">Have a question or need assistance? Fill out the form below</div>
    <div className="h-[71px] relative">
        <div className="w-[588px] h-10 left-0 top-[31px] absolute bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(249,186,0,0.25)]" />
        <div className="left-0 top-0 absolute text-white text-xl font-normal font-['Roboto'] capitalize tracking-tight">Name</div>
    </div>
    <div className="h-[71px] relative">
        <div className="w-[588px] h-10 left-0 top-[31px] absolute bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(249,186,0,0.25)]" />
        <div className="left-0 top-0 absolute text-white text-xl font-normal font-['Roboto'] capitalize tracking-tight">email</div>
    </div>
    <div className="w-[1173.45px] h-[1217.25px] origin-top-left rotate-[-147.43deg] bg-gradient-to-l from-[#07a6f2] to-[#d9d9d9] rounded-[55.45px]" />
    <div className="h-[71px] relative">
        <div className="w-[588px] h-10 left-0 top-[31px] absolute bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(249,186,0,0.25)]" />
        <div className="left-0 top-0 absolute text-white text-xl font-normal font-['Roboto'] capitalize tracking-tight">Phone Number</div>
    </div>
    <div className="h-[229px] relative">
        <div className="w-[588px] h-[198px] left-0 top-[31px] absolute bg-white rounded-lg shadow-[0px_4px_4px_0px_rgba(249,186,0,0.25)]" />
        <div className="left-0 top-0 absolute text-white text-xl font-normal font-['Roboto'] capitalize tracking-tight">Message</div>
    </div>
    <div className="w-[588px] px-[221px] py-[17px] bg-[#ffc00c] rounded-2xl justify-center items-center gap-2.5 inline-flex overflow-hidden">
        <div className="text-black text-2xl font-bold font-['Roboto']">Submit </div>
    </div>
</section>

{/* Location */}
<div className="w-[1440px] h-[620px] relative bg-[#011b36] flex-col justify-start items-start inline-flex overflow-hidden">
    <img className="w-[1460px] h-[807px] opacity-20" src="https://via.placeholder.com/1460x807" />
    <div className="text-[#07a6f2] text-4xl font-bold font-['Roboto'] capitalize tracking-wide">Connect with Our Expert Team</div>
    <div className="text-[#07a6f2] text-4xl font-bold font-['Roboto'] capitalize tracking-wide">Make a Call</div>
    <div className="w-[42px] h-[42px] relative  overflow-hidden" />
    <div className="w-[508px] h-[159px] text-white text-2xl font-normal font-['Roboto'] capitalize tracking-wide">We are here to assist you in reaching your career goals. Our team of experts is here to help you with any inquiries you may have regarding our programs and suggest the best course for your success.</div>
    <div className="w-[508px] h-7 text-white text-2xl font-normal font-['Roboto'] capitalize tracking-wide">+91-99666 33097</div>
    <div className="text-[#07a6f2] text-4xl font-bold font-['Roboto'] capitalize tracking-wide">Contact Us</div>
    <div className="w-[42px] h-[42px] relative  overflow-hidden" />
    <div className="w-[508px] h-7 text-white text-2xl font-normal font-['Roboto'] capitalize tracking-wide">enquiry@invictusengineers.com</div>
    <div className="text-[#07a6f2] text-4xl font-bold font-['Roboto'] capitalize tracking-wide">Address</div>
    <div className="w-[42px] h-[42px] relative  overflow-hidden" />
    <div className="w-[676px] h-[250px] relative bg-white  overflow-hidden">
        <div className="w-[1908px] h-[543px] left-[-616px] top-[-146px] absolute justify-center items-center inline-flex">
            <img className="w-[1908px] h-[543px]" src="https://via.placeholder.com/1908x543" />
        </div>
        <div className="w-9 h-[45px] left-[107px] top-[98px] absolute flex-col justify-center items-center inline-flex">
            <div className="w-9 h-[45px] relative flex-col justify-start items-start flex overflow-hidden" />
        </div>
    </div>
    <div className="w-[508px] h-[159px] text-white text-2xl font-normal font-['Roboto'] capitalize tracking-wide">Invictus Engineers   2rd Floor, Surviba Towers, Plot No.247/3RT, Near Umesh Chandra Statue, Sanjeeva Reddy Nagar, Hyderabad, Telangana – 500038.</div>
</div>
        <Footer/>
        
    </div>
  )
}

export default page
