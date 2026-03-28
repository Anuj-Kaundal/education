import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const handleclick = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((e) => ({
            ...e, [name]: value
        }));
    }
    const register = async (e) => {
        // e.preventDefault();

        if (formData.password === formData.confirmpassword) {
            try {
                const res = await axios.post('http://localhost:2000/register', {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email,
                    password: formData.password,
                    confirmpassword: formData.confirmpassword
                });
                console.log(res); // check response
                alert('User registered successfully');

            } catch (error) {
                console.error(error);
                alert('Something went wrong!');
            }
        } else {
            alert('Password and confirm password are not same');
        }
    };
    return (
        <div className="min-h-screen bg-gray-700 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-5xl p-8 flex lg:flex-row flex-col-reverse gap-10">

                {/* LEFT SIDE */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
                    <p className="text-gray-600 mb-6">
                        Already have an account?{" "}
                        <span className="text-indigo-600 cursor-pointer font-medium" onClick={() => navigate('/login')}>
                            Log in
                        </span>
                    </p>

                    <form className="space-y-4">
                        {/* First + Last Name */}
                        <div className="flex  lg:flex-row flex-col gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleclick}
                                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleclick}
                                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleclick}
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex  lg:flex-row flex-col gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleclick}
                                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    value={formData.confirmpassword}
                                    onChange={handleclick}
                                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                        </div>

                        {/* Hint */}
                        <p className="text-xs text-gray-500">
                            Include at least one special character (e.g., ! @ # $ % ^ & *)
                        </p>

                        {/* Button */}
                        <button className="bg-indigo-600 w-full lg:w-60 text-white px-6 py-2 rounded-sm hover:bg-indigo-700 transition cursor-pointer" onClick={register}>
                            Create an account
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold">Welcom To EDU</h1>
                    <img
                        src="/register.svg"
                        alt="register"
                        className="w-[300px] mb-6 w-full"
                    />

                    <div className="flex gap-4 text-sm text-gray-500">
                        <span className="cursor-pointer hover:text-indigo-600">
                            Help
                        </span>
                        <span className="cursor-pointer hover:text-indigo-600">
                            Privacy
                        </span>
                        <span className="cursor-pointer hover:text-indigo-600">
                            Terms
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;