import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
function page() {
  return (
    <div>
        <Navbar/>
        {/* Headers */}

        <section className="w-[1440px] h-[491px] relative bg-[#021c37]  overflow-hidden">
    <div className="left-[122px] top-[126px] absolute text-[#07a6f2] text-[58px] font-extrabold font-['Roboto']">Our Blog</div>
    <div className="w-[121px] h-[17px] left-[122px] top-[205px] absolute">
        <div className="left-0 top-0 absolute text-[#07a6f2] text-sm font-normal font-['Inter']">Home</div>
        <div className="left-[63px] top-0 absolute text-white text-sm font-normal font-['Inter']">Our Blog</div>
    </div>
    <div className="h-[168px] left-[122px] top-[257px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-white text-[15px] font-semibold font-['Roboto'] leading-tight">AI, Programming, Tech</div>
        <div className="self-stretch text-[#07a6f2] text-5xl font-black font-['Roboto'] leading-[52px]">The Rise of AI in Programming</div>
        <div className="self-stretch text-white text-xl font-normal font-['Roboto'] leading-normal">Exploring the impact of artificial intelligence on modern programming languages and tools.</div>
    </div>
</section>

{/* Blog Content */}

<section className="w-[1440px] h-[2237px] relative bg-gradient-to-b from-[#07a6f2] via-[#011b36] to-[#012c42]  overflow-hidden">
    <div className="w-[766px] h-[845px] left-[106px] top-[76px] absolute bg-white rounded-2xl border border-black  overflow-hidden">
        <div className="w-[766px] h-[567px] left-0 top-0 absolute bg-[#d9d9d9]" />
        <img className="w-[766px] h-[625px] left-0 top-0 absolute rounded-[22px] border border-[#90a6b5]/0" src="https://via.placeholder.com/766x625" />
        <div className="w-[679px] h-[77px] left-[32px] top-[675px] absolute text-black text-2xl font-medium font-['Roboto'] leading-10">The Top 10 Highest-Paying IT Jobs in India in 2024 for Fresher Graduates (and How to Land Them)</div>
    </div>
    <div className="w-[766px] h-[845px] left-[106px] top-[936px] absolute bg-white rounded-2xl border border-black  overflow-hidden">
        <div className="w-[766px] h-[567px] left-0 top-0 absolute bg-[#d9d9d9]" />
        <img className="w-[766px] h-[625px] left-0 top-0 absolute rounded-[22px] border border-[#90a6b5]/0" src="https://via.placeholder.com/766x625" />
        <div className="w-[679px] h-[77px] left-[32px] top-[675px] absolute text-black text-2xl font-medium font-['Roboto'] leading-10">The Top 10 Highest-Paying IT Jobs in India in 2024 for Fresher Graduates (and How to Land Them)</div>
    </div>
    <div className="w-[766px] h-[845px] left-[106px] top-[936px] absolute bg-white rounded-2xl border border-black  overflow-hidden">
        <div className="w-[766px] h-[567px] left-0 top-0 absolute bg-[#d9d9d9]" />
        <img className="w-[766px] h-[625px] left-0 top-0 absolute rounded-[22px] border border-[#90a6b5]/0" src="https://via.placeholder.com/766x625" />
        <div className="w-[679px] h-[77px] left-[32px] top-[675px] absolute text-black text-2xl font-medium font-['Roboto'] leading-10">The Top 10 Highest-Paying IT Jobs in India in 2024 for Fresher Graduates (and How to Land Them)</div>
    </div>
    <div className="h-[374px] left-[84px] top-[1814px] absolute bg-white flex-col justify-start items-start gap-5 inline-flex">
        <img className="h-[300px] relative rounded-2xl border border-black/0" src="https://via.placeholder.com/385x300" />
        <div className="self-stretch h-[54px] flex-col justify-start items-start gap-1.5 flex">
            <div className="self-stretch text-[#1a271b] text-xl font-semibold font-['Inter'] leading-normal">Data Science</div>
            <div className="self-stretch text-[#1a271b] text-[17px] font-normal font-['Inter'] leading-normal">Updated Daily</div>
        </div>
    </div>
    <div className="h-[374px] left-[501.33px] top-[1814px] absolute bg-white flex-col justify-start items-start gap-5 inline-flex">
        <img className="h-[300px] relative rounded-2xl border border-black/0" src="https://via.placeholder.com/385x300" />
        <div className="self-stretch h-[54px] flex-col justify-start items-start gap-1.5 flex">
            <div className="self-stretch text-[#1a271b] text-xl font-semibold font-['Inter'] leading-normal">Cloud Computing</div>
            <div className="self-stretch text-[#1a271b] text-[17px] font-normal font-['Inter'] leading-normal">Updated Daily</div>
        </div>
    </div>
</section>
        <Footer/>
      
    </div>
  )
}

export default page
