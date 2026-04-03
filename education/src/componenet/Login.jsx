import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Login() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const handleclick = (e) => {
        const { name, value } = e.target;
        setLogin((e) => ({
            ...e, [name]: value
        }));
    }
    const loginform = async (e) => {
        e.preventDefault();
        if (login.password !== "") {
            const loginuser = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                email: login.email,
                password: login.password
            });
            alert('User Login');
            setIsLoggedIn(true); // ✅ login
            // window.open('http://localhost:5173/');
        }
        else {
            alert('user not found');
        }
    }
    return (
        <div>
            {
                isLoggedIn && (
                    <div className='flex flex-col gap-5 items-center justify-center p-10'>
                        <h1 className='text-2xl font-bold'>Want To Logout</h1>
                        <button className='bg-blue-700 text-white font-semibold cursor-pointer rounded-sm px-2 p-2 w-52' onClick={() => setIsLoggedIn(false)}>Logout</button>
                    </div>
                )
            }
            {
                !isLoggedIn && (
                    <div className='flex lg:flex-row flex-col-reverse p-10 justify-center items-center gap-20'>
                        <div className='border border-blue-700 p-10 rounded-xl shadow shadow-blue-900'>
                            <h1 className="text-2xl font-bold mb-2 text-center">Login</h1>
                            <p className="text-gray-600 mb-6 text-center">New to EDU? <span className='text-indigo-600 cursor-pointer' onClick={() => navigate('/register')}>Create an account</span></p>
                            <div className='flex gap-5'>
                                <div className='flex items-center text-xl cursor-pointer gap-3 font-semibold border border-gray-400 px-10 py-2 rounded-xl' onClick={() => window.open('https://www.google.com/')}>
                                    <FcGoogle />
                                    <h1>Google</h1>
                                </div>
                                <div className='flex items-center text-xl cursor-pointer gap-3 font-semibold border border-gray-400 px-10 py-2 rounded-xl' onClick={() => window.open('https://www.facebook.com/')}>
                                    <SiFacebook className='text-[#3746F2]' />
                                    <h1>facebook</h1>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 pt-5 pb-5">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <span className="text-gray-500 text-sm">or</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            <form action="" className='flex flex-col gap-5'>
                                <input type="email" name="email" value={login.email} onChange={handleclick} id="email" placeholder='E-mail' className='border border-gray-300 w-full rounded-sm px-2 p-2' />
                                <input type="password" name="password" value={login.password} onChange={handleclick} id="password" placeholder='Password' className='border border-gray-300 w-full rounded-sm px-2 p-2' />
                                <button className='rounded-sm px-2 p-2 bg-blue-700 text-white font-semibold cursor-pointer' onClick={loginform}>Login</button>
                            </form>
                        </div>
                        <div>
                            <img src="/login.png" alt="" className='w-[500px]' />
                            {/* for animation add this => animate-bounce [animation-duration:8s] */}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Login