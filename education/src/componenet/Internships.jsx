import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import Internship from "./internship";
function Internships() {
    return (
        <div className='max-w-380 mx-auto'>
            <div className="text-center p-20 flex flex-col justify-center items-center gap-5">
                <h1 className='text-3xl font-bold'>Internship Online</h1>
                <p className='text-xl'>Explore our comprehensive online internship programs designed to boost your career</p>
                {/* Search Box */}
                <div className='px-70 py-15 border border-gray-300 rounded-xl'>
                    <div className="flex items-center bg-white border border-gray-400 rounded-lg mt-6 overflow-hidden shadow-lg w-full max-w-xl">
                        <CiSearch className="text-2xl text-gray-400 ml-3" />

                        <input
                            type="text"
                            placeholder="Search internships like Web Development, UI/UX, Python"
                            className="flex-1 px-3 py-3 outline-none text-black"
                        />

                        {/* <button className="bg-[#3746F2] text-white px-6 py-3 hover:bg-blue-700 transition">
                        Search
                    </button> */}
                    </div>
                    <div className='flex mt-10 gap-5 text-2xl font-bold'>
                        <button className='flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'><CiFilter />All</button>
                        <button className='flex items-center gap-2 bg-gray-300 text-gray-600 px-5 py-2 rounded-full cursor-pointer'><CiFilter />Technology</button>
                        <button className='flex items-center gap-2 bg-gray-300 text-gray-600 px-5 py-2 rounded-full cursor-pointer'><CiFilter />Non-Tech</button>
                    </div>
                    <div className='text-2xl font-bold mt-10 text-gray-600'>
                        <h1>Showing <span className='text-blue-600'>All</span> internships</h1>
                    </div>
                </div>
            </div>
            {/* internships */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-20'>
                {
                    Internship.map((item) => (
                        <div
                            key={item.id}
                            className='group relative min-h-[450px] bg-white border border-gray-200 rounded-3xl overflow-hidden cursor-pointer transition duration-500 hover:scale-[1.03] hover:shadow-2xl hover:bg-gray-200'
                        >

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className='w-full h-52 object-cover transition duration-500 group-hover:scale-110'
                                />
                            </div>

                            {/* Badge */}
                            <span className='absolute right-4 top-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm px-4 py-1 rounded-full shadow-md'>
                                Tech
                            </span>

                            {/* Content */}
                            <div className='p-5 flex flex-col gap-4 mt-5'>

                                <h1 className='text-xl font-semibold group-hover:text-blue-600 transition'>
                                    {item.title}
                                </h1>

                                <p className='text-gray-600 text-sm line-clamp-2'>
                                    {item.dis}
                                </p>

                                {/* Bottom Section */}
                                <div className='flex justify-between items-center mt-2'>

                                    {/* Button */}
                                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition shadow-md hover:shadow-lg'>
                                        Register Now
                                    </button>

                                    {/* Icons */}
                                    <div className="flex gap-3">
                                        <img
                                            src={item.icon1}
                                            alt=""
                                            className="bg-white border border-gray-200 rounded-full h-10 w-10 object-contain p-1 transition hover:scale-110 hover:shadow-md"
                                        />
                                        <img
                                            src={item.icon2}
                                            alt=""
                                            className="bg-white border border-gray-200 rounded-full h-10 w-10 object-contain p-1 transition hover:scale-110 hover:shadow-md"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Internships