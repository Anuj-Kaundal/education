import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    return (
        <div className='max-w-380 mx-auto'>
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
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Courses</li>
                        <li className='cursor-pointer'>Internships</li>
                        <li className='cursor-pointer'>Success Stories</li>
                        <li className='cursor-pointer' onClick={() => navigate('/about')}>About</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <button className='text-[#3746F2] text-lg font-medium'>Login</button>
                    <button className='bg-[#3746F2] text-white py-2 px-4 rounded-md'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Header