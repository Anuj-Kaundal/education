import React from 'react'
import { CiSearch } from "react-icons/ci";
import Internship from "./internship";
function Internships() {
    return (
        <div>
            <div>
                <div className='bg-black'>
                    <img src="/internship-bg.svg" alt="" className='opacity-50 w-full object-cover relative' />
                </div>
                <div className='absolute space-y-3 flex flex-col justify-center top-1/2 left-1/3 text-white text-center'>
                    <h1 className='text-4xl font-bold'>Start Your Internship Journey</h1>
                    <p>Gain real-world experience, build projects, and work with industry <br className='hidden lg:block md:block' /> mentors.</p>
                    {/* Search Box */}
                    <div className="flex items-center bg-white rounded-lg mt-6 overflow-hidden shadow-lg w-full max-w-xl">
                        <CiSearch className="text-2xl text-gray-400 ml-3" />

                        <input
                            type="text"
                            placeholder="Search internships like Web Development, UI/UX, Python"
                            className=" px-6 py-3 w-full outline-none text-black"
                        />

                        <button className="bg-[#3746F2] ml-5 text-white px-6 py-3 hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            {/* internships */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    Internship.map((item) => (
                        <>
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[200px] object-cover"
                                />

                                <div className="p-5">
                                    <span className="text-sm text-blue-600 font-semibold">
                                        4 Months
                                    </span>

                                    <h2 className="text-xl font-bold mt-2">{item.title}</h2>

                                    <p className="text-gray-500 mt-2 text-sm">
                                        {item.description}
                                    </p>

                                    <div className="flex justify-between items-center mt-4">
                                        <h1 className="text-lg font-semibold">
                                            ₹19,999{" "}
                                            <span className="text-red-500 line-through text-sm ml-2">
                                                ₹39,999
                                            </span>
                                        </h1>

                                        <button className="border border-[#4F5DFF] text-[#4F5DFF] font-semibold rounded-md px-4 py-2 hover:bg-[#4F5DFF] hover:text-white transition">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Internships