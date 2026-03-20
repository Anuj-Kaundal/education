import React from 'react'
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import { GiStarShuriken } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
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
        <div className=''>

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
            {/* Top Mentors */}
            <div className='space-y-5'>
                <div className='flex justify-center pt-5'>
                    <button className='flex items-center gap-2 text-sm font-medium justify-center text-white bg-[#3746F2] rounded-full py-1 px-4 '>
                        <GiStarShuriken />Top Mentors
                    </button>
                </div>
                <h1 className='text-2xl font-bold text-center'>Learn from Industry Experts</h1>
                <p className='text-lg text-center'>Choose from our most popular internship programs designed to give you real-<br className='hidden md:block lg:block' />world experience and industry exposure.</p>

                <div className='flex flex-wrap gap-5 justify-center '>
                    <div className='border border-[#00000033] space-y-3 rounded-2xl'>
                        <img src="/sarah.svg" alt="" />
                        <h1 className='text-2xl font-semibold pl-3'>Sarah Johnson</h1>
                        <p className='text-base text-[#00000080] pl-3'>Senior Full Stack Developer</p>
                        <span className='text-sm text-[#3746F2] flex items-center pl-3 pb-5'><GiAchievement />12 Years Experience</span>
                    </div>
                    <div className='border border-[#00000033] space-y-3 rounded-2xl'>
                        <img src="/michael.svg" alt="" />
                        <h1 className='text-2xl font-semibold pl-3'>Michael Chen</h1>
                        <p className='text-base text-[#00000080] pl-3'>Lead UX Designer</p>
                        <span className='text-sm text-[#3746F2] flex items-center pl-3 pb-5'><GiAchievement />10 Years Experience</span>
                    </div>
                    <div className='border border-[#00000033] space-y-3 rounded-2xl'>
                        <img src="/priya.svg" alt="" />
                        <h1 className='text-2xl font-semibold pl-3'>Priya Sharma</h1>
                        <p className='text-base text-[#00000080] pl-3'>Data Science Lead</p>
                        <span className='text-sm text-[#3746F2] flex items-center pl-3 pb-5'><GiAchievement />15 Years Experience</span>
                    </div>
                </div>
            </div>
            {/* Top Mentors section ends */}
            {/* Offline Training */}
            <div>
                <div className='flex justify-center pt-5'>
                    <button className='flex items-center gap-2 text-sm font-medium justify-center text-white bg-[#3746F2] rounded-full py-1 px-4 '>
                        <GiStarShuriken />Offline Training
                    </button>
                </div>
                <div className='flex justify-around gap-10'>
                    <div>
                        <img src="/offlinetraing.svg" alt="" />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-3xl font-bold'>Learn Offline at Our Training Center</h1>
                        <p>Experience hands-on learning in our state-of-the-art training facility<br className='hidden md:block lg:block' />with expert guidance and collaborative environment.</p>
                        <ul>
                            <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-[#00A63E]' />Live classroom sessions</li>
                            <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-[#00A63E]' />Doubt solving support</li>
                            <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-[#00A63E]' />Practical lab access</li>
                            <li className='flex items-center gap-3'><IoMdCheckmarkCircleOutline className='text-[#00A63E]' />Placement assistance</li>
                        </ul>
                        <button className='bg-[#3746F2] text-white text-lg font-semibold py-2 px-5 rounded-sm'>Book a Visit</button>
                    </div>
                </div>
            </div>
            {/* Offline Training section ends */}
            {/* why choose us section */}
            <div className='bg-[#4554FF] text-white text-center p-10 space-y-5'>
                <h1 className='text-3xl font-bold'>Why Choose Us</h1>
                <p>We provide everything you need to launch your tech career successfully</p>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                    <div className='bg-[#6C77FF80] p-5 flex flex-col items-center space-y-3 rounded-2xl'>
                        <img src="/mentors.svg" alt="" height={50} width={50} />
                        <h1 className='text-2xl font-bold'>Industry Mentors</h1>
                        <p>Learn from experts with 10+ years of experience in top  companies</p>
                    </div>
                    <div className='bg-[#6C77FF80] p-5 flex flex-col items-center space-y-3 rounded-2xl'>
                        <img src="/projects.svg" alt="" height={50} width={50} />
                        <h1 className='text-2xl font-bold'>Practical Projects</h1>
                        <p>Build real-world projects to enhance your portfolio and skills</p>
                    </div>
                    <div className='bg-[#6C77FF80] p-5 flex flex-col items-center space-y-3 rounded-2xl'    >
                        <img src="/certificate.svg" alt="" height={50} width={50} />
                        <h1 className='text-2xl font-bold'>Internship Certificate</h1>
                        <p>Get recognized certification after completing internship programs</p>
                    </div>
                    <div className='bg-[#6C77FF80] p-5 flex flex-col items-center space-y-3 rounded-2xl'>
                        <img src="/support.svg" alt="" height={50} width={50} />
                        <h1 className='text-2xl font-bold'>Placement Support</h1>
                        <p>Dedicated career counseling and interview preparation assistance</p>
                    </div>
                </div>
            </div>
            {/* why choose us section end */}
            {/* your career path */}
            <div className='text-center space-y-3'>
                <h1 className='text-3xl font-bold'>Your Career Path</h1>
                <p>A clear roadmap from learning to landing your dream job</p>
            </div>
            <div className='pl-40 pr-40'>
                {/* 1st */}
                <div className='flex gap-10'>
                    <div className='bg-[#5260FF] flex items-center text-4xl font-bold text-white rounded-full justify-center w-20 h-20 p-7'>1</div>
                    <div className='bg-[#EBF2FFCC] p-5 rounded-xl w-full'>
                        <h1 className='text-2xl font-semibold flex justify-between items-center'>Enroll in Course<IoMdCheckmarkCircleOutline className='text-[#00A63E] mr-10' /></h1>
                        <p className='text-lg text-[#000000CC]'>Choose your desired course and start your learning journey</p>
                    </div>
                </div>
                {/* 2nd */}
                <div className='flex gap-10 mt-10'>
                    <div className='bg-[#5260FF] flex items-center text-4xl font-bold text-white rounded-full justify-center w-20 h-20 p-7'>2</div>
                    <div className='bg-[#EBF2FFCC] p-5 rounded-xl w-full'>
                        <h1 className='text-2xl font-semibold flex justify-between items-center'>Complete Live + Recorded Classes<IoMdCheckmarkCircleOutline className='text-[#00A63E] mr-10' /></h1>
                        <p className='text-lg text-[#000000CC]'>Attend interactive live sessions and revisit recordings anytime</p>
                    </div>
                </div>
                {/* 3rd */}
                <div className='flex gap-10 mt-10'>
                    <div className='bg-[#5260FF] flex items-center text-4xl font-bold text-white rounded-full justify-center w-20 h-20 p-7'>3</div>
                    <div className='bg-[#EBF2FFCC] p-5 rounded-xl w-full'>
                        <h1 className='text-2xl font-semibold flex justify-between items-center'>Work on Real Projects<IoMdCheckmarkCircleOutline className='text-[#00A63E] mr-10' /></h1>
                        <p className='text-lg text-[#000000CC]'>Build practical projects that solve real-world problems</p>
                    </div>
                </div>
                {/* 4th */}
                <div className='flex gap-10 mt-10'>
                    <div className='bg-[#5260FF] flex items-center text-4xl font-bold text-white rounded-full justify-center w-20 h-20 p-7'>4</div>
                    <div className='bg-[#EBF2FFCC] p-5 rounded-xl w-full'>
                        <h1 className='text-2xl font-semibold flex justify-between items-center'>Internship Placement<IoMdCheckmarkCircleOutline className='text-[#00A63E] mr-10' /></h1>
                        <p className='text-lg text-[#000000CC]'>Get placed in companies for hands-on work experience</p>
                    </div>
                </div>
                {/* 5th */}
                <div className='flex gap-10 mt-10'>
                    <div className='bg-[#5260FF] flex items-center text-4xl font-bold text-white rounded-full justify-center w-20 h-20 p-7'>5</div>
                    <div className='bg-[#EBF2FFCC] p-5 rounded-xl w-full'>
                        <h1 className='text-2xl font-semibold flex justify-between items-center'>Job Assistance<IoMdCheckmarkCircleOutline className='text-[#00A63E] mr-10' /></h1>
                        <p className='text-lg text-[#000000CC]'>Receive support until you land your dream job</p>
                    </div>
                </div>
            </div>
            {/* your career path section end */}
            {/* Testimonials */}
            <div className='space-y-5'>
                <div className='flex justify-center pt-5'>
                    <button className='flex items-center gap-2 text-sm font-medium justify-center text-white bg-[#3746F2] rounded-full py-1 px-4 '>
                        <GiStarShuriken />Testimonials
                    </button>
                </div>
                <h1 className='text-3xl font-bold text-center'>What Our Students Say</h1>
                <p className='text-center'>Hear from our students about their learning experience, internships, and career growth.</p>
                <div className='flex justify-center gap-10'>
                    <div className='bg-[#EBF2FF] p-5 rounded-xl'>
                        <span></span>
                        <p className='text-lg text-[#000000CC]'>I don't have words to thank this man, I'm really grateful to have <br className='hidden md:block lg:block' /> this channel and website in my daily routine. If you're a mere <br className='hidden md:block lg:block' /> beginner, then you can trust this guy and can put your time into <br className='hidden md:block lg:block' /> his content. I can assure you that it'll be worth it.</p>
                        <h1 className='text-lg'>Nisha Negi</h1>
                        <h2 className='text-lg text-[#00000099]'>Python Developer</h2>
                    </div>
                    <div className='bg-[#EBF2FF] p-5 rounded-xl'>
                        <span></span>
                        <p className='text-lg text-[#000000CC]'>For everyone who wants to level up their #Coding and #Dev<br className='hidden md:block lg:block' /> skills - seriously, this channel is for you! Both basic and advanced <br className='hidden md:block lg:block' /> stacks are covered on this channel, and one can learn according <br className='hidden md:block lg:block' /> to their skill levels. And the icing on the cake is, most <br className='hidden md:block lg:block' /> of the content is available for free.</p>
                        <h1 className='text-lg'>Nisha Negi</h1>
                        <h2 className='text-lg text-[#00000099]'>Python Developer</h2>
                    </div>
                </div>
            </div>
            {/* Testimonials end */}
            {/* image part */}
            <div className="relative w-full h-screen">

                {/* Background Image */}
                <img
                    src="/startlearning.svg"
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Content */}
                <div className="relative z-10 text-white text-center top-1/3 space-y-5">
                    <h1 className="text-4xl font-bold">
                        Build Your Skills. Start Your Career Today.
                    </h1>
                    <p className="text-lg">
                        Join industry-focused courses and internships designed to help you gain real skills and practical experience.
                    </p>
                    <button className="text-lg bg-[#3746F2] text-white py-2 px-6 rounded-sm">
                        Start Learning
                    </button>
                </div>

            </div>
            {/* image part end */}
        </div>
    );
}

export default Home; 