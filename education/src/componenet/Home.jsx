import React from 'react'
import { CiSearch } from "react-icons/ci";
function Home() {
  return (
    <div>
        {/* hero section start */}
        <div className='px-10 py-4 flex justify-center gap-60'>
            {/* left content */}
            <div className='space-y-5 pt-15'>
                <h1 className='text-5xl font-bold'>Build Real Skills with Live <br className='hidden md:block lg:block' /> Learning and Industry <br className='hidden md:block lg:block' /> Internships</h1>
                <p className='text-lg'>Master in-demand skills through live classes, recorded lectures, and industry mentorship.<br className='hidden md:block lg:block' />  Build real projects, gain internship experience, and accelerate your career growth.</p>
                {/* <input type="search" name="search" id="search" className='py-2 px-4' /><button className='bg-[#3746F2] text-white py-2 px-4 rounded-md'>Search</button> */}
                <div className='flex items-center gap-5 border border-[#1F1F1F80] rounded-md w-fit pl-5 pr-5 p-1 mt-5'>
                    <CiSearch className='text-3xl'/>
                    <span className='text-base text-[#1F1F1F80]'>What skill do you want to learn today?</span>
                    <button className='bg-[#3746F2] text-white text-xl py-2 px-8 rounded-md ml-15'>Search</button>
                </div>
                <div className='flex gap-10 pt-5'>
                    <div>
                        <h1 className='text-3xl font-medium'>10,000+</h1>
                        <span className='text-[#000000B2] text-xl'>Courses Available</span>
                    </div>
                    <div>
                        <h1 className='text-3xl font-medium'>50,000+</h1>
                        <span className='text-[#000000B2] text-xl'>Active Students</span>
                    </div>
                    <div>
                        <h1 className='text-3xl font-medium'>200+</h1>
                        <span className='text-[#000000B2] text-xl'>Industry Mentors</span>
                    </div>
                </div>
            </div>
            {/* right content */}
            <div>
                <img src="/hero.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home