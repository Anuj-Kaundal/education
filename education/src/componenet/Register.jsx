import React from "react";

function Register() {
    return (
        <div className="min-h-screen bg-gray-700 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg w-[90%] max-w-5xl p-8 flex gap-10">

                {/* LEFT SIDE */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
                    <p className="text-gray-600 mb-6">
                        Already have an account?{" "}
                        <span className="text-indigo-600 cursor-pointer font-medium">
                            Log in
                        </span>
                    </p>

                    <form className="space-y-4">
                        {/* First + Last Name */}
                        <div className="flex gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
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
                                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label className="text-sm text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </div>
                        </div>

                        {/* Hint */}
                        <p className="text-xs text-gray-500">
                            Include at least one special character (e.g., ! @ # $ % ^ & *)
                        </p>

                        {/* Button */}
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-sm hover:bg-indigo-700 transition">
                            Create an account
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <img
                        src="/register.svg"
                        alt="register"
                        className="w-[300px] mb-6"
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