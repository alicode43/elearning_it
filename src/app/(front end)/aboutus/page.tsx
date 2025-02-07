import { BannerSection } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from 'react';
import { Users, Target, Rocket, Heart, Award, Zap } from 'lucide-react';
import Image from 'next/image';

// import Image from "next/image";
export default function page() {

    const teamMembers = [
        {
          name: 'Sarah Johnson',
          role: 'CEO & Founder',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400',
          bio: 'Visionary leader with 15+ years of industry experience.'
        },
        {
          name: 'Michael Chen',
          role: 'CTO',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
          bio: 'Tech innovator passionate about cutting-edge solutions.'
        },
        {
          name: 'Emily Rodriguez',
          role: 'Design Director',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
          bio: 'Creative force behind our award-winning designs.'
        }
      ];
    
      const values = [
        {
          icon: <Heart className="h-6 w-6" />,
          title: 'Passion',
          description: 'We pour our hearts into every project we undertake.'
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: 'Excellence',
          description: 'We strive for perfection in everything we do.'
        },
        {
          icon: <Rocket className="h-6 w-6" />,
          title: 'Innovation',
          description: 'Pushing boundaries to create breakthrough solutions.'
        }
      ];

    return(
        <div>
            <Navbar />


            {/* hero section */}
            <BannerSection
        title="About Us"
        subtitle=""
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        buttonText=""
        buttonLink="#"
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
      />

{/* About Us */}




<div className="min-h-screen bg-white">
      {/* Hero Section */}
     

      {/* Story Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Founded in 2015, we began with a simple mission: to create digital solutions that empower businesses to thrive in the modern world. What started as a small team of dreamers has grown into a dynamic force in the industry.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we&apos;re proud to serve clients worldwide, bringing innovative solutions to complex challenges. Our journey is defined by continuous learning, adaptation, and an unwavering commitment to excellence.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <Award className="h-8 w-8 text-indigo-600" />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">200+</h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-indigo-600" />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">50+</h3>
                    <p className="text-gray-600">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
            <Image
            src="/aboutUS.avif"
            alt="Team meeting"
            className="rounded-lg shadow-xl"
            layout="responsive"
            width={1000}
            height={667}
              />
            </div>
          </div>
        </div>
      </div>





<section className=" px-[72px] py-[75px] w-full bg-gradient-to-r from-[#011b36] to-[#024e9c] justify-center items-start gap-8 inline-flex overflow-hidden md:flex-row flex-col">

<div >
<h2 className="text-3xl text-center font-bold tracking-tight text-gray-100 sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto text-center mt-4 max-w-2xl text-lg text-gray-100">
              The principles that guide everything we do
            </p>

<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-indigo-600">{value.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
</div>

</section>



   

      {/* Team Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The talented people behind our success
            </p>
          </div>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-indigo-600">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to work with us?
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Get Started
                  <Zap className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>






{/* Mission Vision */}


{/* <section className="w-[1440px] h-[759px] relative bg-gradient-to-b from-[#011224] to-[#03458a]  overflow-hidden">
    <div className="w-[385px] h-[400px] left-[102px] top-[240px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <div className="w-[238px] h-[238px] left-[-119px] top-[281px] absolute">
            <div className="w-[204px] h-[204px] left-[17px] top-[17px] absolute bg-[#011224] rounded-full" />
        </div>
        <div className="w-[238px] h-[238px] left-[266px] top-[-111px] absolute">
            <div className="w-[204px] h-[204px] left-[17px] top-[17px] absolute bg-[#f2b401] rounded-full" />
        </div>
        <div className="left-[36px] top-[113px] absolute text-[#011120] text-2xl font-medium font-['Roboto']">Our Mission</div>
        <div className="w-[313.05px] h-[77px] left-[36px] top-[156px] absolute text-justify text-white text-[18.93px] font-normal font-['Roboto']">To be the prominent source of learning for aspirants in Information Technology by providing compelling learning experience.</div>
        <img className="w-[74px] h-[91.54px] left-[166px] top-[67px] absolute" src="https://via.placeholder.com/74x92" />
    </div>
    <div className="w-[385px] h-[400px] left-[525px] top-[240px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <div className="w-[238px] h-[238px] left-[-119px] top-[281px] absolute">
            <div className="w-[204px] h-[204px] left-[17px] top-[17px] absolute bg-[#011224] rounded-full" />
        </div>
        <div className="w-[238px] h-[238px] left-[266px] top-[-111px] absolute">
            <div className="w-[204px] h-[204px] left-[17px] top-[17px] absolute bg-[#f2b401] rounded-full" />
        </div>
        <div className="left-[36px] top-[91px] absolute text-[#011120] text-2xl font-medium font-['Roboto']">Our Vision</div>
        <div className="w-[313px] h-[132px] left-[36px] top-[134px] absolute text-justify text-white text-[18.93px] font-normal font-['Roboto']">To provide excellent education contemporary to the corporate environment. Promote Learning by facilitating learners with best faculty members, course structure and support infrastructure.</div>
        <img className="w-[118px] h-[94.44px] left-[148px] top-[34.78px] absolute" src="https://via.placeholder.com/118x94" />
    </div>
    <div className="w-[385px] h-[400px] left-[948px] top-[240px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <div className="w-[238px] h-[238px] left-[-119px] top-[281px] absolute">
            <div className="w-[204px] h-[204px] left-[17px] top-[17px] absolute bg-[#011224] rounded-full" />
        </div>
        <div className="w-[238px] h-[238px] left-[266px] top-[-111px] absolute">
            <div className="w-[204px] h-[204px] left-[17px] top-[17px] absolute bg-[#f2b401] rounded-full" />
        </div>
        <div className="left-[36px] top-[91px] absolute text-[#011120] text-2xl font-medium font-['Roboto']">Core Values</div>
        <div className="w-[313px] h-[132px] left-[36px] top-[134px] absolute text-justify text-white text-[18.93px] font-normal font-['Roboto']">To create an interactive environment for trainers and learners. To generate in students the value for their work, to give them a proper learning environment and stimulate their thinking towards productive efforts.</div>
        <img className="w-[87px] h-[87px] left-[165px] top-[47px] absolute" src="https://via.placeholder.com/87x87" />
    </div>
    <div className="left-[162px] top-[112px] absolute text-[#07a6f2] text-[58px] font-extrabold font-['Roboto']">Invictus Engineers</div>
</section> */}


{/* leadership */}
{/* <section className="w-[1440px] h-[1279px] relative bg-[#012c42]  overflow-hidden">
    <img className="w-[1629px] h-[1357px] left-[-94px] top-[-38px] absolute opacity-30" src="https://via.placeholder.com/1629x1357" />
    <div className="w-[385px] h-[477px] left-[109px] top-[225px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <img className="w-[1035px] h-[580.33px] left-[-202px] top-[-72px] absolute opacity-10" src="https://via.placeholder.com/1035x580" />
        <img className="w-[303.13px] h-[389.41px] left-0 top-[542.13px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/303x389" />
        <div className="left-[68px] top-[162px] absolute text-white text-4xl font-extrabold font-['Roboto'] capitalize">Kamal Bhushan</div>
        <div className="w-[283px] h-[99px] left-[53px] top-[204px] absolute text-center text-white text-2xl font-normal font-['Roboto'] capitalize">Founder & Managing Director, Invictus Engineers | Founder – StudyAbroad7, IELTS7, and Traffic Sourcers</div>
        <div className="w-[113px] h-[113px] left-[136px] top-[35px] absolute">
            <img className="w-[96.86px] h-[96.86px] left-[8.07px] top-[8.07px] absolute rounded-full" src="https://via.placeholder.com/97x97" />
        </div>
    </div>
    <div className="w-[385px] h-[477px] left-[107px] top-[736px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <img className="w-[1035px] h-[580.33px] left-[-202px] top-[-72px] absolute opacity-10" src="https://via.placeholder.com/1035x580" />
        <img className="w-[303.13px] h-[389.41px] left-0 top-[542.13px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/303x389" />
        <div className="left-[92px] top-[162px] absolute text-white text-4xl font-extrabold font-['Roboto'] capitalize">Kiran Kumar</div>
        <div className="w-[310px] h-[69px] left-[38px] top-[218px] absolute text-center text-white text-2xl font-normal font-['Roboto'] capitalize">Business <br/>Development <br/>Manager</div>
        <div className="w-[113px] h-[113px] left-[136px] top-[35px] absolute">
            <img className="w-[96.86px] h-[96.86px] left-[8.07px] top-[8.07px] absolute rounded-full" src="https://via.placeholder.com/97x97" />
        </div>
    </div>
    <div className="w-[385px] h-[477px] left-[528px] top-[222px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <img className="w-[1035px] h-[580.33px] left-[-202px] top-[-72px] absolute opacity-10" src="https://via.placeholder.com/1035x580" />
        <img className="w-[303.13px] h-[389.41px] left-0 top-[542.13px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/303x389" />
        <div className="left-[78px] top-[162px] absolute text-white text-4xl font-extrabold font-['Roboto'] capitalize">RAVI SINGAM</div>
        <div className="w-[310px] h-[34px] left-[38px] top-[218px] absolute text-center text-white text-2xl font-normal font-['Roboto'] capitalize">Head of Data Science</div>
        <div className="w-[113px] h-[113px] left-[136px] top-[35px] absolute">
            <img className="w-[96.86px] h-[96.86px] left-[8.07px] top-[8.07px] absolute rounded-full" src="https://via.placeholder.com/97x97" />
        </div>
    </div>
    <div className="w-[385px] h-[477px] left-[527px] top-[733px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <img className="w-[1035px] h-[580.33px] left-[-202px] top-[-72px] absolute opacity-10" src="https://via.placeholder.com/1035x580" />
        <img className="w-[303.13px] h-[389.41px] left-0 top-[542.13px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/303x389" />
        <div className="left-[130px] top-[162px] absolute text-white text-4xl font-extrabold font-['Roboto'] capitalize">Krishna</div>
        <div className="w-[310px] h-[34px] left-[38px] top-[218px] absolute text-center text-white text-2xl font-normal font-['Roboto'] capitalize">Business Development Manager</div>
        <div className="w-[113px] h-[113px] left-[136px] top-[35px] absolute">
            <img className="w-[96.86px] h-[96.86px] left-[8.07px] top-[8.07px] absolute rounded-full" src="https://via.placeholder.com/97x97" />
        </div>
    </div>
    <div className="w-[385px] h-[477px] left-[949px] top-[225px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <img className="w-[1035px] h-[580.33px] left-[-202px] top-[-72px] absolute opacity-10" src="https://via.placeholder.com/1035x580" />
        <img className="w-[303.13px] h-[389.41px] left-0 top-[542.13px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/303x389" />
        <div className="left-[100px] top-[162px] absolute text-white text-4xl font-extrabold font-['Roboto'] capitalize">Ravi Kumar</div>
        <div className="w-[310px] h-[34px] left-[38px] top-[218px] absolute text-center text-white text-2xl font-normal font-['Roboto'] capitalize">Chief Technology Officer, Invictus Engineers</div>
        <div className="w-[113px] h-[113px] left-[136px] top-[35px] absolute">
            <img className="w-[96.86px] h-[96.86px] left-[8.07px] top-[8.07px] absolute rounded-full" src="https://via.placeholder.com/97x97" />
        </div>
    </div>
    <div className="w-[385px] h-[477px] left-[947px] top-[736px] absolute bg-gradient-to-b from-[#0570a8] to-[#012c42] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  overflow-hidden">
        <img className="w-[1035px] h-[580.33px] left-[-202px] top-[-72px] absolute opacity-10" src="https://via.placeholder.com/1035x580" />
        <img className="w-[303.13px] h-[389.41px] left-0 top-[542.13px] absolute origin-top-left -rotate-90" src="https://via.placeholder.com/303x389" />
        <div className="left-[128px] top-[162px] absolute text-white text-4xl font-extrabold font-['Roboto'] capitalize">Lazarus</div>
        <div className="w-[310px] h-[34px] left-[38px] top-[218px] absolute text-center text-white text-2xl font-normal font-['Roboto'] capitalize">Community Experiences Lead</div>
        <div className="w-[113px] h-[113px] left-[136px] top-[35px] absolute">
            <img className="w-[96.86px] h-[96.86px] left-[8.07px] top-[8.07px] absolute rounded-full" src="https://via.placeholder.com/97x97" />
        </div>
    </div>
    <div className="left-[163px] top-[99px] absolute text-[#07a6f2] text-[58px] font-extrabold font-['Roboto']">Leadership Team</div>
</section> */}


{/* teams */}

{/* <section className="w-[1437px] h-[620px] relative bg-[#e4f5f8]  overflow-hidden">
    <div className="w-[434.80px] h-[294.26px] left-[30px] top-[166px] absolute bg-white rounded-[2.96px]  overflow-hidden">
        <div className="w-[367.93px] h-[498.48px] left-[849.80px] top-[-612.28px] absolute">
            <div className="w-[194.47px] h-[2.79px] left-[367.93px] top-[497.09px] absolute origin-top-left rotate-[-119.87deg] justify-start items-start gap-[1.70px] inline-flex overflow-hidden" />
            <div className="w-[194.47px] h-[2.78px] left-[34.72px] top-[1.90px] absolute origin-top-left rotate-[59.63deg] justify-start items-start gap-[1.70px] inline-flex" />
            <div className="w-[67.39px] h-[67.39px] left-[283.05px] top-[65.32px] absolute">
                <div className="w-[57.76px] h-[57.76px] left-[4.81px] top-[4.81px] absolute bg-[#f2b401] rounded-full" />
            </div>
        </div>
        <div className="w-[252.70px] h-[347.70px] left-[434.80px] top-[-53.44px] absolute origin-top-left rotate-180 bg-gradient-to-bl from-[#011b36] to-[#00101f]" />
        <div className="h-[6.51px] left-[645.20px] top-[559.47px] absolute origin-top-left rotate-[-125.81deg] justify-start items-start gap-1 inline-flex overflow-hidden" />
        <div className="w-[175.95px] h-[175.95px] left-[-87.87px] top-[201.08px] absolute">
            <div className="w-[150.81px] h-[150.81px] left-[12.57px] top-[12.57px] absolute bg-[#011224] rounded-full" />
        </div>
        <div className="h-[6.47px] left-[-13.17px] top-[-257.19px] absolute origin-top-left rotate-[54.44deg] justify-start items-start gap-1 inline-flex" />
        <div className="w-[119.42px] h-[119.42px] left-[374.76px] top-[-60.04px] absolute">
            <div className="w-[102.36px] h-[102.36px] left-[8.53px] top-[8.53px] absolute bg-[#f2b401] rounded-full" />
        </div>
        <div className="w-[129.98px] h-[129.98px] left-[247.42px] top-[87.75px] absolute rounded-full border border-[#0c75ca]" />
        <div className="w-[120.08px] h-[120.08px] left-[252.70px] top-[92.37px] absolute">
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute rounded-full shadow-[0px_0.8367943167686462px_0.8367943167686462px_0px_rgba(0,0,0,0.25)] border border-white" />
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute bg-[#f3f3f3] rounded-full" />
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute bg-white rounded-full" />
            <img className="w-[104.18px] h-[135.16px] left-[7.80px] top-[-10.67px] absolute" src="https://via.placeholder.com/104x135" />
        </div>
        <div className="w-[181.12px] h-[40.66px] left-[30px] top-[68px] absolute text-[#ffc00c] text-[26.61px] font-extrabold font-['Roboto'] capitalize">Shriya Agrawal<br/></div>
        <div className="left-[45px] top-[115px] absolute text-center text-[#011120] text-lg font-medium font-['Roboto']">Data Scientist at V <br/>Soft Consulting</div>
    </div>
    <div className="w-[434.80px] h-[294.26px] left-[492.10px] top-[166px] absolute bg-white rounded-[2.96px]  overflow-hidden">
        <div className="w-[367.93px] h-[498.48px] left-[849.80px] top-[-612.28px] absolute">
            <div className="w-[194.47px] h-[2.79px] left-[367.93px] top-[497.09px] absolute origin-top-left rotate-[-119.87deg] justify-start items-start gap-[1.70px] inline-flex overflow-hidden" />
            <div className="w-[194.47px] h-[2.78px] left-[34.72px] top-[1.90px] absolute origin-top-left rotate-[59.63deg] justify-start items-start gap-[1.70px] inline-flex" />
            <div className="w-[67.39px] h-[67.39px] left-[283.05px] top-[65.32px] absolute">
                <div className="w-[57.76px] h-[57.76px] left-[4.81px] top-[4.81px] absolute bg-[#f2b401] rounded-full" />
            </div>
        </div>
        <div className="w-[252.70px] h-[347.70px] left-[434.80px] top-[-53.44px] absolute origin-top-left rotate-180 bg-gradient-to-bl from-[#011b36] to-[#00101f]" />
        <div className="h-[6.51px] left-[645.20px] top-[559.47px] absolute origin-top-left rotate-[-125.81deg] justify-start items-start gap-1 inline-flex overflow-hidden" />
        <div className="w-[175.95px] h-[175.95px] left-[-87.87px] top-[201.08px] absolute">
            <div className="w-[150.81px] h-[150.81px] left-[12.57px] top-[12.57px] absolute bg-[#011224] rounded-full" />
        </div>
        <div className="h-[6.47px] left-[-13.17px] top-[-257.19px] absolute origin-top-left rotate-[54.44deg] justify-start items-start gap-1 inline-flex" />
        <div className="w-[119.42px] h-[119.42px] left-[374.76px] top-[-60.04px] absolute">
            <div className="w-[102.36px] h-[102.36px] left-[8.53px] top-[8.53px] absolute bg-[#f2b401] rounded-full" />
        </div>
        <div className="w-[129.98px] h-[129.98px] left-[247.42px] top-[87.75px] absolute rounded-full border border-[#0c75ca]" />
        <div className="w-[120.08px] h-[120.08px] left-[252.70px] top-[92.37px] absolute">
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute rounded-full shadow-[0px_0.8367943167686462px_0.8367943167686462px_0px_rgba(0,0,0,0.25)] border border-white" />
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute bg-[#f3f3f3] rounded-full" />
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute bg-white rounded-full" />
            <img className="w-[104.18px] h-[135.16px] left-[7.80px] top-[-10.67px] absolute" src="https://via.placeholder.com/104x135" />
            <img className="w-[156.54px] h-[235px] left-[-28.25px] top-[-33.37px] absolute" src="https://via.placeholder.com/157x235" />
        </div>
        <div className="w-[216px] h-10 left-[14.90px] top-[79px] absolute text-[#ffc00c] text-[26.61px] font-extrabold font-['Roboto'] capitalize">Abhijeet Jagirdar<br/></div>
        <div className="left-[10.90px] top-[122px] absolute text-center text-[#011120] text-lg font-medium font-['Roboto']">General Manager at T.I.M.E. <br/>PMP, PRINCE2 <br/>Practitioner & CSM<br/></div>
    </div>
    <div className="w-[434.80px] h-[294.26px] left-[954.20px] top-[166px] absolute bg-white rounded-[2.96px]  overflow-hidden">
        <div className="w-[367.93px] h-[498.48px] left-[849.80px] top-[-612.28px] absolute">
            <div className="w-[194.47px] h-[2.79px] left-[367.93px] top-[497.09px] absolute origin-top-left rotate-[-119.87deg] justify-start items-start gap-[1.70px] inline-flex overflow-hidden" />
            <div className="w-[194.47px] h-[2.78px] left-[34.72px] top-[1.90px] absolute origin-top-left rotate-[59.63deg] justify-start items-start gap-[1.70px] inline-flex" />
            <div className="w-[67.39px] h-[67.39px] left-[283.05px] top-[65.32px] absolute">
                <div className="w-[57.76px] h-[57.76px] left-[4.81px] top-[4.81px] absolute bg-[#f2b401] rounded-full" />
            </div>
        </div>
        <div className="w-[252.70px] h-[347.70px] left-[434.80px] top-[-53.44px] absolute origin-top-left rotate-180 bg-gradient-to-bl from-[#011b36] to-[#00101f]" />
        <div className="h-[6.51px] left-[645.20px] top-[559.47px] absolute origin-top-left rotate-[-125.81deg] justify-start items-start gap-1 inline-flex overflow-hidden" />
        <div className="w-[175.95px] h-[175.95px] left-[-87.87px] top-[201.08px] absolute">
            <div className="w-[150.81px] h-[150.81px] left-[12.57px] top-[12.57px] absolute bg-[#011224] rounded-full" />
        </div>
        <div className="h-[6.47px] left-[-13.17px] top-[-257.19px] absolute origin-top-left rotate-[54.44deg] justify-start items-start gap-1 inline-flex" />
        <div className="w-[119.42px] h-[119.42px] left-[374.76px] top-[-60.04px] absolute">
            <div className="w-[102.36px] h-[102.36px] left-[8.53px] top-[8.53px] absolute bg-[#f2b401] rounded-full" />
        </div>
        <div className="w-[129.98px] h-[129.98px] left-[247.42px] top-[87.75px] absolute rounded-full border border-[#0c75ca]" />
        <div className="w-[120.08px] h-[120.08px] left-[252.70px] top-[92.37px] absolute">
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute rounded-full shadow-[0px_0.8367943167686462px_0.8367943167686462px_0px_rgba(0,0,0,0.25)] border border-white" />
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute bg-[#f3f3f3] rounded-full" />
            <div className="w-[120.08px] h-[120.08px] left-0 top-0 absolute bg-white rounded-full" />
            <img className="w-[104.18px] h-[135.16px] left-[7.80px] top-[-10.67px] absolute" src="https://via.placeholder.com/104x135" />
        </div>
        <div className="w-[153px] h-[41px] left-[44.80px] top-[74px] absolute text-[#ffc00c] text-[26.61px] font-extrabold font-['Roboto'] capitalize">Rahul Loha<br/><br/></div>
        <div className="left-[14.80px] top-[115px] absolute text-center text-[#011120] text-lg font-medium font-['Roboto']">Data Analyst at Accenture,<br/> Consultant at Sales Force<br/></div>
    </div>
    <div className="left-[160px] top-[52px] absolute text-[#07a6f2] text-[58px] font-extrabold font-['Roboto']">Our Team & Advisoryo</div>
    <div className="w-[148px] h-[30px] left-[636px] top-[531px] absolute">
        <div className="w-[30px] h-[30px] left-0 top-0 absolute bg-[#0570a8] rounded-full" />
        <div className="w-[30px] h-[30px] left-[59px] top-0 absolute bg-[#d9d9d9] rounded-full" />
        <div className="w-[30px] h-[30px] left-[118px] top-0 absolute bg-[#d9d9d9] rounded-full" />
    </div>
    <div className="w-10 h-10 left-[846px] top-[525px] absolute  overflow-hidden" />
    <div className="w-10 h-10 left-[574px] top-[525px] absolute origin-top-left rotate-180  overflow-hidden" />
</section> */}

<Footer/>
        </div>
    )

}