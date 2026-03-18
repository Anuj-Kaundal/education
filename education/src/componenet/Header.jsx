import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
function Header() {
    return (
        <div>
            {/* contact header */}
            <div className='flex justify-between items-center px-10 py-4 bg-[#DDE9FF]'>
                <div className='flex gap-5 items-center'>
                    <h1 className='flex items-center gap-4 text-base'><MdOutlineMail />internship@novanectar.co.in</h1>
                    <h1 className='flex items-center gap-4 text-base'><MdOutlinePhoneInTalk />(334) 202-4792</h1>
                </div>
                <div>
                    <h1 className='flex items-center gap-4 text-base'><FaRegClock />8:00 AM until 6:00 PM</h1>
                </div>
            </div>
            {/* menu header */}
            <div className='flex justify-between items-center px-10 py-4 bg-[#F0F0F0]'>
                <div>
                    <img src="/logo.svg" alt="" />
                </div>
                <div>
                    <ul className='flex justify-center items-center gap-10 text-base'>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Internships</li>
                        <li>Success Stories</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <button className='text-[#3746F2]'>Login</button>
                    <button className='bg-[#3746F2] text-white py-2 px-4 rounded-md'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header