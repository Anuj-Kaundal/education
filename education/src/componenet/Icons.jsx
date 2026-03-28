import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
function Icons() {
    return (
        <div>
            <div className='fixed right-5 bottom-5 flex flex-col gap-3'>
                <div className='w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white' onClick={() => window.open('tel:+9189798 91708')}>
                    <FaPhone />
                </div>
                <div className='w-14 h-14 bg-green-500 rounded-full flex items-center justify-center cursor-pointer text-3xl text-white'
                    onClick={() => window.open('https://wa.me/918979891708')}>
                    <FaWhatsapp />
                </div>
            </div>
        </div>
    )
}

export default Icons