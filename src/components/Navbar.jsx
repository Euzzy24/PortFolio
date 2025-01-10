import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-t nav_bg border-gray-700 font-poppins">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between rounded-full py-2 px-12">
          {/* Logo */}
          <NavLink to="/" className="flex items-center text-2xl">
            Mere.
          </NavLink>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:block absolute md:static top-16 left-0 w-full md:w-auto z-10 md:z-auto`}
          >
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-gradient bg-gray-700 hover:bg-gray-800 rounded-full shadow-dual px-6 py-2' // For active state
                    : 'text-white hover:text-gradient hover:bg-gray-800 rounded-full shadow-blackie px-6 py-2' // For inactive state
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-gradient bg-gray-700 hover:bg-gray-800 rounded-full shadow-dual px-6 py-2' // For active state
                    : 'text-white hover:text-gradient hover:bg-gray-800 rounded-full shadow-blackie px-6 py-2' // For inactive state
                }
              >
                About
              </NavLink>
              {/* <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-gradient bg-gray-700 hover:bg-gray-800 rounded-full shadow-dual px-6 py-2' // For active state
                    : 'text-white hover:text-gradient hover:bg-gray-800 rounded-full shadow-blackie px-6 py-2' // For inactive state
                }
              >
                Contact
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
