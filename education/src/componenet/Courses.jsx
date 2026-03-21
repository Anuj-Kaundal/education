import React from "react";
import { CiSearch } from "react-icons/ci";
import course from "./course";

function Courses() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="bg-black relative">
                <img
                    src="/explorecourses.svg"
                    alt="courses"
                    className="w-full object-cover opacity-70"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Explore Our Courses
                    </h1>
                    <p className="mt-3 text-lg">
                        Learn in-demand skills with expert mentors and practical training.
                    </p>

                    {/* Search Box */}
                    <div className="flex items-center bg-white rounded-lg mt-6 overflow-hidden shadow-lg w-full max-w-xl">
                        <CiSearch className="text-2xl text-gray-400 ml-3" />

                        <input
                            type="text"
                            placeholder="Search courses like Web Development, UI/UX, Python"
                            className="flex-1 px-3 py-3 outline-none text-black"
                        />

                        <button className="bg-[#3746F2] text-white px-6 py-3 hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 bg-[#F9FAFF]">
                {
                    course.map((item) => (
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
    );
}

export default Courses;