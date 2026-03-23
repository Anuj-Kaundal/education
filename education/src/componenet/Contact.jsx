import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsSend } from "react-icons/bs";
function Contact() {
    return (
        <div className='max-w-380 mx-auto space-y-10'>

            {/* Heading Section */}
            <div className='flex flex-col md:flex-row justify-between lg:text-start text-center gap-5 px-10 lg:px-20 py-3'>
                <h1 className='text-4xl font-bold'>Contact Our Team</h1>

                <p className='text-lg text-[#6E6E6E] max-w-xl'>
                    Have questions about our nail shades or need help finding the perfect color?
                    Our team is always ready to guide you toward your next favorite look.
                </p>
            </div>

            {/* Main Section */}
            <div className='flex flex-col md:flex-row gap-8 px-10 lg:px-20 py-3'>

                {/* Left Side */}
                <div className='flex flex-col gap-5 w-full md:w-1/2'>

                    {/* Contact Info */}
                    <div className='bg-[#DFE2FF] p-5 rounded-lg space-y-4'>
                        <h1 className='text-lg font-semibold'>Contact Information</h1>

                        <div className='flex items-center gap-3'>
                            <div className='h-14 w-14 bg-[#3746F2CC] text-white text-3xl flex justify-center items-center rounded-md'>
                                <IoLocation />
                            </div>

                            <div>
                                <h2 className='text-base text-[#3746F2] font-medium'>Address</h2>
                                <p className='text-[#000000CC] text-base'>
                                    123 Business Street, Suite 100 <br />
                                    New York, NY 10001
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='h-14 w-14 bg-[#3746F2CC] text-white text-3xl flex justify-center items-center rounded-md'>
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h2 className='text-base text-[#3746F2] font-medium'>Phone</h2>
                                <p className='text-[#000000CC] text-base'>
                                    +91 7617800415 <br />
                                    Mon-Fri, 9am-6pm
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <div className='h-14 w-14 bg-[#3746F2CC] text-white text-3xl flex justify-center items-center rounded-md'>
                                <MdOutlineMailOutline />
                            </div>
                            <div>
                                <h2 className='text-base text-[#3746F2] font-medium'>Email</h2>
                                <p className='text-[#000000CC] text-base'>
                                    hello@company.com <br />
                                    We reply within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className='bg-[#DFE2FF] p-5 rounded-lg space-y-3'>
                        <h1 className='text-lg font-semibold'>Ready to Start Your Project?</h1>
                        <p className='text-[#000000CC] text-base'>
                            Have an idea or need expert guidance? Reach out to our team and let’s discuss how we can build something impactful together.
                        </p>
                        <button className='bg-[#3746F2] text-white px-4 py-2 rounded-full hover:bg-[#2f3ad6]'>
                            Get in Touch
                        </button>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className='bg-[#DFE2FF] p-5 rounded-lg w-full md:w-1/2'>
                    <form className='flex flex-col gap-3'>

                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder='Enter Your Name'
                            className='p-2 rounded-md border border-[#00000033] outline-none'
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='Enter Your Email'
                            className='p-2 rounded-md border border-[#00000033] outline-none'
                        />

                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            placeholder='How can we help you ?'
                            className='p-2 rounded-md border border-[#00000033] outline-none'
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder='Enter your message'
                            className='p-2 rounded-md border border-[#00000033] outline-none'
                            rows="4"
                        ></textarea>

                        <button className='bg-[#3746F2] text-white flex items-center justify-center text-xl font-semibold p-2  rounded-full gap-2 w-50 cursor-pointer'>
                            <BsSend />Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact