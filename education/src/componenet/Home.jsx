import React from 'react'
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import { GiStarShuriken } from "react-icons/gi";
function Home() {

    const settings = {
        // dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        // arrows: false
    };

    return (
        <div className='lg:px-10 lg:py-4 p-10'>

            {/* hero section start */}
            <div className='flex flex-wrap justify-between items-center gap-10 max-w-[1280px] mx-auto'>

                {/* left content */}
                <div className='space-y-5 pt-10'>
                    <h1 className='text-5xl font-bold'>
                        Build Real Skills with Live <br className='hidden md:block lg:block' />
                        Learning and Industry <br className='hidden md:block lg:block' />
                        Internships
                    </h1>

                    <p className='text-lg'>
                        Master in-demand skills through live classes, recorded lectures, and industry mentorship.
                        <br className='hidden md:block lg:block' />
                        Build real projects, gain internship experience, and accelerate your career growth.
                    </p>

                    {/* search box */}
                    <div className='flex items-center gap-5 border border-[#1F1F1F80] rounded-md w-fit px-5 py-2 mt-5'>
                        <CiSearch className='text-2xl' />
                        <span className='text-base text-[#1F1F1F80]'>
                            What skill do you want to learn today?
                        </span>
                        <button className='bg-[#3746F2] text-white py-2 px-6 rounded-md'>
                            Search
                        </button>
                    </div>

                    {/* stats */}
                    <div className='flex gap-10 pt-5'>
                        <div>
                            <h1 className='text-2xl font-medium'>10,000+</h1>
                            <span className='text-gray-500'>Courses Available</span>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>50,000+</h1>
                            <span className='text-gray-500'>Active Students</span>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>200+</h1>
                            <span className='text-gray-500'>Industry Mentors</span>
                        </div>
                    </div>
                </div>

                {/* right content */}
                <div>
                    <img src="/hero.svg" alt="hero" />
                </div>

            </div>
            {/* hero section end */}

            {/* slider section */}
            <div className='mt-10'>
                <h1 className='text-2xl font-bold text-center mb-10'>
                    Our Learners Work at Top Companies
                </h1>

                <Slider {...settings} className='p-0'>
                    <div><img src="/companies1.svg" alt="company1" /></div>
                    <div><img src="/companies2.svg" alt="company2" /></div>
                    <div><img src="/companies3.svg" alt="company3" /></div>
                    <div><img src="/companies4.svg" alt="company4" /></div>
                    <div><img src="/companies5.svg" alt="company5" /></div>
                    <div><img src="/companies6.svg" alt="company6" /></div>
                    <div><img src="/companies1.svg" alt="company1" /></div>
                    <div><img src="/companies2.svg" alt="company2" /></div>
                    <div><img src="/companies3.svg" alt="company3" /></div>
                </Slider>
            </div>
            {/* slider section end */}
            {/* internship section */}
            <div className='space-y-5'>
                <div className='flex justify-center pt-5'>
                    <button className='flex items-center gap-2 text-sm font-medium justify-center text-[#3746F2] border border-[#3746F2] rounded-full py-1 px-4 '>
                        <GiStarShuriken />Popular Internships
                    </button>
                </div>
                <h1 className='text-2xl font-bold text-center'>Start Your Internship Journey</h1>
                <p className='text-lg text-center'>Choose from our most popular internship programs designed to give you real-<br className='hidden md:block lg:block' />world experience and industry exposure.</p>
            </div>
            {/* internship section end */}
            {/* Our Programs */}
            <div className='pt-5'>
                <h1 className='text-2xl font-bold text-center'>Our Programs</h1>
                <p className='text-lg text-center'>Choose from our comprehensive learning paths designed to accelerate your career.</p>
            </div>
            <div className='lg:grid-cols-3 grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-10'>
                <div className='border border-[#34343433] p-10 rounded-xl'>
                    <img src="/job.svg" alt="" />
                    <h1 className='text-2xl font-semibold'>Job-Oriented Courses</h1>
                    <p className='text-base'>Learn industry-relevant skills from expert mentors through live and recorded classes.</p>
                </div>
                <div className='border border-[#34343433] p-10 rounded-xl'>
                    <img src="/real.svg" alt="" />
                    <h1 className='text-2xl font-semibold'>Real-World Internships</h1>
                    <p className='text-base'>Gain practical experience with our partner companies and build your professional portfolio.</p>
                </div>
                <div className='border border-[#34343433] p-10 rounded-xl'>
                    <img src="/offline.svg" alt="" />
                    <h1 className='text-2xl font-semibold'>Offline Practical Training</h1>
                    <p className='text-base'>Access our physical training center with hands-on labs and in-person doubt resolution.</p>
                </div>
            </div>
            {/* Our Programs section end */}
        </div>
    );
}

export default Home; 