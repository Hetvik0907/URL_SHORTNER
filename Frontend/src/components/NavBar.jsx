import React from 'react';
import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav className="bg-white border border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
  {/* Left Side - Logo */}
  <div>
    <Link to="/" className="text-2xl font-bold text-gray-800 mr-[1100px]">
      URL Shortener
    </Link>
  </div>

  {/* Right Side - Login Button */}
  <div>
    <Link
      to="/auth"
      className="inline-block px-6 py-2 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
    >
      Login
    </Link>
  </div>
</nav>


          
          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {/* {(true) ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {userName || 'User'}</span>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;