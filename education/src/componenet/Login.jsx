import React, { useState } from 'react';
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
        setLogin((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const loginform = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                login
            );

            console.log(res.data);

            if (res.data.success) {
                alert("Login Successful ✅");
                setIsLoggedIn(true);
            } else {
                alert(res.data.message);
                setIsLoggedIn(false);
            }

        } catch (error) {
            alert(error.response?.data?.message || "Login failed ❌");
        }
    };

    return (
        <div>
            {
                isLoggedIn ? (
                    <div className='flex flex-col gap-5 items-center justify-center p-10'>
                        <h1 className='text-2xl font-bold'>Want To Logout</h1>
                        <button
                            className='bg-blue-700 text-white px-2 p-2 w-52'
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className='flex lg:flex-row flex-col-reverse p-10 justify-center items-center gap-20'>
                        
                        <div className='border border-blue-700 p-10 rounded-xl shadow'>
                            <h1 className="text-2xl font-bold mb-2 text-center">Login</h1>

                            <p className="text-gray-600 mb-6 text-center">
                                New to EDU?
                                <span
                                    className='text-indigo-600 cursor-pointer'
                                    onClick={() => navigate('/register')}
                                >
                                    Create an account
                                </span>
                            </p>

                            <div className='flex gap-5'>
                                <div className='flex items-center gap-3 border px-5 py-2 rounded-xl cursor-pointer'>
                                    <FcGoogle /> Google
                                </div>
                                <div className='flex items-center gap-3 border px-5 py-2 rounded-xl cursor-pointer'>
                                    <SiFacebook /> Facebook
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-5 pb-5">
                                <div className="flex-1 h-px bg-gray-300"></div>
                                <span className="text-gray-500 text-sm">or</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>

                            <form className='flex flex-col gap-5' onSubmit={loginform}>
                                <input
                                    type="email"
                                    name="email"
                                    value={login.email}
                                    onChange={handleclick}
                                    placeholder='E-mail'
                                    className='border px-2 p-2'
                                />

                                <input
                                    type="password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleclick}
                                    placeholder='Password'
                                    className='border px-2 p-2'
                                />

                                <button
                                    type="submit"
                                    className='bg-blue-700 text-white p-2'
                                >
                                    Login
                                </button>
                            </form>
                        </div>

                        <div>
                            <img src="/login.png" alt="" className='w-[500px]' />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Login;