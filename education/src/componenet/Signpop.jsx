import React, { useEffect, useState } from "react";

function Signpop() {
    const [isOpen, setIsOpen] = useState(false);

    // Page load hote hi open
    useEffect(() => {
        setIsOpen(true);
    }, []);

    // ESC key se close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)} // outside click
        >
            <div
                className="bg-white w-[400px] rounded-xl shadow-lg p-6 relative"
                onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 cursor-pointer  hover:text-black"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold text-center">
                    Create an Account
                </h2>
                <p className="text-sm text-gray-500 text-center mt-1">
                    Already have an account?{" "}
                    <span className="text-blue-600 cursor-pointer">Log in</span>
                </p>

                {/* Google Button */}
                <button className="mt-5 w-full border rounded-full py-2 flex items-center cursor-pointer  justify-center gap-2 hover:bg-gray-100">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                        alt="google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                {/* Facebook Button */}
                <button className="mt-3 w-full border cursor-pointer  rounded-full py-2 flex items-center justify-center gap-2 hover:bg-gray-100">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                        alt="facebook"
                        className="w-5 h-5"
                    />
                    Continue with Facebook
                </button>

                {/* Divider */}
                <div className="flex items-center my-5">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-400 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Email Input */}
                <p className="text-sm text-gray-500 mb-2 text-center">
                    Enter your email address to create an account.
                </p>

                <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Submit Button */}
                <button className="mt-5 cursor-pointer  w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md hover:opacity-90">
                    Create an account
                </button>
            </div>
        </div>
    );
}

export default Signpop;