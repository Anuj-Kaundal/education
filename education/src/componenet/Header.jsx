import React, { useState } from 'react';
import { MdOutlineMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
function Header() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    const handleNav = (path) => {
        navigate(path);
        setMenu(false);
    };

    return (
        <div className='bg-[#DDE9FF]'>

            {/* Top Contact Bar */}
            <div className='hidden lg:flex justify-between items-center px-10 py-3 bg-[#DDE9FF] text-sm max-w-380 mx-auto'>
                <div className='flex gap-5 items-center'>
                    <p className='flex items-center gap-2'>
                        <MdOutlineMail /> internship@novanectar.co.in
                    </p>
                    <p className='flex items-center gap-2'>
                        <MdOutlinePhoneInTalk /> (334) 202-4792
                    </p>
                </div>
                <p className='flex items-center gap-2'>
                    <FaRegClock /> 8:00 AM - 6:00 PM
                </p>
            </div>

            {/* Main Header */}
            <div className='bg-[#F0F0F0]'>
                <div className='flex justify-between items-center px-10 py-3 bg-[#F0F0F0]'>

                {/* Logo (hidden on mobile) */}
                <img src="/logo.svg" alt="logo" className='' />

                {/* Desktop Menu */}
                <ul className='hidden lg:flex gap-10 text-base font-medium'>
                    <li onClick={() => navigate('/')} className='cursor-pointer'>Home</li>
                    <li onClick={() => navigate('/course')} className='cursor-pointer'>Courses</li>
                    <li onClick={() => navigate('/internship')} className='cursor-pointer'>Internships</li>
                    <li className='cursor-pointer' onClick={() => navigate('/blog')}>Blog</li>
                    <li onClick={() => navigate('/about')} className='cursor-pointer'>About</li>
                    <li onClick={() => navigate('/contact')} className='cursor-pointer'>Contact</li>
                </ul>

                {/* Desktop Buttons */}
                <div className='hidden lg:flex gap-4'>
                    <button className='text-[#3746F2] font-medium cursor-pointer' onClick={() => navigate('/login')}>Login</button>
                    <button className='bg-[#3746F2] text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => navigate('/register')}>Register</button>
                </div>

                {/* ✅ Mobile Menu Icon (RIGHT SIDE FIX) */}
                <div className='lg:hidden text-2xl cursor-pointer ml-auto'
                    onClick={() => setMenu(!menu)}
                >
                    {menu ? <IoClose /> : <IoMenu />}
                </div>

            </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden bg-[#F0F0F0] overflow-hidden transition-all duration-500 ${
                    menu ? 'max-h-[700px] opacity-100 pt-10 pb-10' : 'max-h-0 opacity-0'
                }`}
            >

                {/* Contact Info */}
                <div className='flex flex-col bg-[#DDE9FF] items-center gap-3 text-sm pt-5 pb-5'>
                    <p className='flex items-center gap-2'>
                        <MdOutlineMail /> internship@novanectar.co.in
                    </p>
                    <p className='flex items-center gap-2'>
                        <MdOutlinePhoneInTalk /> (334) 202-4792
                    </p>
                    <p className='flex items-center gap-2'>
                        <FaRegClock /> 8:00 AM - 6:00 PM
                    </p>
                </div>

                {/* Logo */}
                <div className='flex justify-center mt-4'>
                    <img src="/logo.svg" alt="logo" className='h-10' />
                </div>

                {/* Menu Items */}
                <ul className='flex flex-col items-center gap-6 mt-6 text-base font-medium'>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/course')}>Courses</li>
                    <li onClick={() => navigate('/internship')}>Internships</li>
                    <li>Success Stories</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>

                {/* Buttons */}
                <div className='flex flex-col items-center gap-4 mt-6'>
                    <button className='text-[#3746F2] font-medium' onClick={() => navigate('/login')}>Login</button>
                    <button className='bg-[#3746F2] text-white px-4 py-2 rounded-md' onClick={() => navigate('/register')}>
                        Register
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Header;