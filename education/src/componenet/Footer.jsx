import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 ">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left px-10 lg:px-20 py-3">
          
          {/* Pages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Course</li>
              <li className="hover:text-black cursor-pointer">Internship</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
              <li className="hover:text-black cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-black cursor-pointer">Refund</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">X / Twitter</li>
              <li className="hover:text-black cursor-pointer">Instagram</li>
              <li className="hover:text-black cursor-pointer">Facebook</li>
              <li className="hover:text-black cursor-pointer">LinkedIn</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">Help Center</li>
              <li className="hover:text-black cursor-pointer">FAQs</li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-500 mt-5 pt-6">
          ©2026 All Rights Reserved Edu.novanectar
        </div>

      </div>
    </footer>
  );
}

export default Footer;