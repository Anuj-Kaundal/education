import React from 'react'
import course from './course';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
function Opencourse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const courseDetails = course.find(item => item.id === parseInt(id));
  console.log(courseDetails);
  console.log(id);
  return (
    <div className='max-w-380 mx-auto'>
      <div className='flex lg:flex-row flex-col justify-around gap-10 font-bold px-10 lg:px-20 py-3'>
        {/* left side */}
        <div className='space-y-5'>
          <ul className='flex items-center gap-2 text-[#000000CC] text-sm'>
            <li className='cursor-pointer hover:text-[#009136]' onClick={() => navigate('/')}>Home</li>
            <FaChevronRight />
            <li className='cursor-pointer hover:text-[#009136]' onClick={() => navigate('/course')}>Courses</li>
            <FaChevronRight />
            <li>{courseDetails.title}</li>
          </ul>
          <button className='flex gap-2 items-center bg-[#00FF5F33] rounded-sm px-3 py-1'> <img src="/cap.svg" alt="" />MOST POPULOR</button>
          <h1 className='text-2xl font-semibold'>The Ultimate Job-Ready <br className='hidden md:block lg:block' /> {courseDetails.title} Course</h1>
          <p>{courseDetails.description}</p>
          <ul className='text-sm flex flex-col lg:flex-row items-center gap-3'>
            <ul className='flex gap-2 text-[#FF9318] text-xl'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </ul>
            <li>4.6 <span className='text-[#00000080]'>(12,430 ratings)</span></li>
            <li className='flex items-center gap-2'><FiClock className='text-xl' /><span>8  weeks</span></li>
            <li className='flex items-center gap-2'><HiUsers className='text-xl' /> 13,378 <span className='text-[#00000080]'>(12,430 Users)</span></li>
          </ul>
          <div>
          </div>
          <div>
            <h1 className='text-lg font-semibold mb-5'>This course includes:</h1>
            <ul className='flex flex-col gap-3'>
              <li className='flex items-center gap-5'><FaCheck className='text-[#009136]' />203 lectures</li>
              <li className='flex items-center gap-5'><FaCheck className='text-[#009136]' />33hr 35min of content</li>
              <li className='flex items-center gap-5'><FaCheck className='text-[#009136]' />Certificate of completion</li>
              <li className='flex items-center gap-5'><FaCheck className='text-[#009136]' />Access on mobile and desktop (2 Years)</li>
              <li className='flex items-center gap-5'><FaCheck className='text-[#009136]' />Free developer tools included</li>
            </ul>
          </div>
        </div>
        {/* right side div */}
        <div className='space-y-5'>
          <img src="/detailsimg.svg" alt="" />
          <h1 className="text-3xl font-bold">
            ₹19,999{" "}
            <span className="text-red-500 text-lg line-through text-sm ml-2">
              ₹39,999
            </span>
            <button className='text-sm font-medium text-[#007C2E] bg-[#00FF5F33] px-2 py-1 rounded-sm ml-2'>50% (approx)</button>
          </h1>
          <div className='flex flex-col gap-3 text-lg justify-center'>
            <button className='text-white bg-black rounded-md py-3 cursor-pointer'>Click here to Enroll</button>
            <button className='text-[#00000080] rounded-md py-3 border border-[#00000080] cursor-pointer'>Login to Purchase this course</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opencourse