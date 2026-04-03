import React from 'react'
import { CiSearch, CiFilter } from "react-icons/ci";
import Internship from "./internship";
import { IoLocation } from "react-icons/io5";
import { MdCall } from "react-icons/md";

function Internships() {
    return (
        <div className='max-w-7xl mx-auto px-4'>

            {/* HERO SECTION */}
            <div className='relative flex justify-center pt-10 md:pt-20'>
                <div className='bg-black rounded-xl w-full'>
                    <img
                        src="/internship-hero.webp"
                        alt=""
                        className='opacity-50 rounded-xl w-full h-[300px] md:h-[500px] object-cover'
                    />
                </div>

                <div className='absolute flex flex-col gap-3 md:gap-5 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4'>
                    <h1 className='text-lg lg:text-2xl md:text-4xl font-bold'>
                        Want to kick start your Journey
                    </h1>
                    <p className='text-sm lg:text-lg md:text-2xl font-bold text-blue-300'>
                        You are on right track
                    </p>
                    <p className='text-sm lg:text-md md:text-lg max-w-2xl'>
                        At Novanectar Services Pvt. Ltd. our internship programs are designed to provide hands-on experience...
                    </p>
                </div>
            </div>

            {/* STATS */}
            <div className="mt-10 flex justify-center">
                <div className="bg-blue-100 rounded-3xl shadow-xl px-6 py-6 md:px-10 md:py-10 flex flex-col md:flex-row gap-6 w-full">

                    {[
                        { icon: "👥", value: "10,000+", label: "Enrolled Candidates" },
                        { icon: "🎓", value: "6,000+", label: "Certified Candidates" },
                        { icon: "🚀", value: "40+", label: "Internship Domains" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-blue-300 rounded-2xl px-6 py-6 text-center w-full">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">{item.value}</h1>
                            <p className="text-gray-600 mt-2">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* OFFLINE SECTION */}
            <div className="mt-10 flex justify-center">
                <div className='bg-blue-100 rounded-3xl shadow-xl px-6 md:px-10 py-8 text-center w-full space-y-6'>
                    <h1 className='text-xl md:text-3xl font-semibold'>
                        Internship also Available in Offline Mode
                    </h1>

                    <div className='flex flex-col md:flex-row gap-4 md:gap-10 justify-center'>
                        <h1 className='text-md md:text-xl flex gap-2 items-center justify-center'>
                            <IoLocation /> GMS Road Dehradun
                        </h1>
                        <h1 className='text-md md:text-xl flex gap-2 items-center justify-center'>
                            <MdCall /> 8979891705
                        </h1>
                    </div>

                    <button className='bg-blue-600 text-white px-6 py-2 md:px-10 md:py-3 rounded-xl'>
                        Contact Us
                    </button>
                </div>
            </div>

            {/* SEARCH */}
            <div className="text-center mt-12 flex flex-col items-center gap-4">
                <h1 className='text-2xl md:text-3xl font-bold'>Internship Online</h1>
                <p className='text-md md:text-xl'>
                    Explore our comprehensive online internship programs
                </p>

                <div className='w-full max-w-2xl'>
                    <div className="flex items-center bg-white border border-gray-400 rounded-lg mt-4 overflow-hidden shadow-lg">
                        <CiSearch className="text-2xl text-gray-400 ml-3" />
                        <input
                            type="text"
                            placeholder="Search internships..."
                            className="flex-1 px-3 py-3 outline-none"
                        />
                    </div>

                    <div className='flex flex-wrap justify-center mt-6 gap-3'>
                        <button className='bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2'>
                            <CiFilter /> All
                        </button>
                        <button className='bg-gray-300 px-4 py-2 rounded-full flex items-center gap-2'>
                            <CiFilter /> Technology
                        </button>
                        <button className='bg-gray-300 px-4 py-2 rounded-full flex items-center gap-2'>
                            <CiFilter /> Non-Tech
                        </button>
                    </div>
                </div>
            </div>

            {/* INTERNSHIP CARDS */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    Internship.map((item) => (
                        <div
                            key={item.id}
                            className='group bg-white border rounded-3xl overflow-hidden hover:shadow-xl transition'
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-full h-48 object-cover group-hover:scale-110 transition'
                            />

                            <div className='p-4 space-y-3'>
                                <h1 className='text-lg font-semibold group-hover:text-blue-600'>
                                    {item.title}
                                </h1>

                                <p className='text-sm text-gray-600 line-clamp-2'>
                                    {item.dis}
                                </p>

                                <div className='flex justify-between items-center'>
                                    <button className='bg-blue-600 text-white px-4 py-2 rounded-full text-sm'>
                                        Register Now
                                    </button>

                                    <div className="flex gap-2">
                                        <img src={item.icon1} className="h-8 w-8 rounded-full" />
                                        <img src={item.icon2} className="h-8 w-8 rounded-full" />
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