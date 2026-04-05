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
        setLogin((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const loginform = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                email: login.email,
                password: login.password
            });

            // ✅ Sirf success pe login
            if (res.data.success) {
                alert(res.data.message);
                setIsLoggedIn(true);
            } else {
                alert(res.data.message);
                setIsLoggedIn(false);
            }

        } catch (error) {
            alert(error.response?.data?.message || "Login failed");
            setIsLoggedIn(false);
        }
    };

    return (
        <div>
            {
                isLoggedIn && (
                    <div className='flex flex-col gap-5 items-center justify-center p-10'>
                        <h1 className='text-2xl font-bold'>Want To Logout</h1>
                        <button
                            className='bg-blue-700 text-white font-semibold cursor-pointer rounded-sm px-2 p-2 w-52'
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Logout
                        </button>
                    </div>
                )
            }

            {
                !isLoggedIn && (
                    <div className='flex lg:flex-row flex-col-reverse p-10 justify-center items-center gap-20'>
                        <div className='border border-blue-700 p-10 rounded-xl shadow shadow-blue-900'>
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

                            <form className='flex flex-col gap-5' onSubmit={loginform}>
                                <input
                                    type="email"
                                    name="email"
                                    value={login.email}
                                    onChange={handleclick}
                                    placeholder='E-mail'
                                    className='border border-gray-300 w-full rounded-sm px-2 p-2'
                                />

                                <input
                                    type="password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleclick}
                                    placeholder='Password'
                                    className='border border-gray-300 w-full rounded-sm px-2 p-2'
                                />

                                <button
                                    type="submit"
                                    className='rounded-sm px-2 p-2 bg-blue-700 text-white font-semibold cursor-pointer'
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