import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pb-4">
      <div className=" w-screen text-center">
        {/* Links Section */}
        <div className="bg-gray-700 p-4 mb-4">
          <div className="grid grid-cols-3 gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Prime
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Link
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
            >
              Link
            </a>
            {/* Add more links */}
          </div>
        </div>

        {/* Footer Content */}
        <p>&copy; 2023 RentNest. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
