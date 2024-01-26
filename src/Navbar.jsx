import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('Home');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" onClick={() => handleLinkClick("Home")}>
              <img className="h-10 w-auto" src="./logo.png" alt="EternalTek" />
            </NavLink>

          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:bg-gray-100 transition duration-300 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6 transition-transform duration-300 transform hover:scale-110"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <NavLink
              to="/"
              className="nav-link text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out font-semibold"
              activeClassName={selectedLink === 'Home' ? 'underline' : ''}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </NavLink>

            <div className="relative group">
              <span
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`nav-link text-gray-600 cursor-pointer transition duration-300 ease-in-out  font-semibold ${selectedLink === 'education' || selectedLink === 'it' || selectedLink === 'bpo' ? 'active' : ''}`}
              >
                Services
              </span>

              {isDropdownOpen && (
                <div className="absolute z-10 left-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg">
                  {/* Dropdown links */}
                  <NavLink
                    to="/educational-services"
                    className="block px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out font-semibold"
                    activeClassName="underline"
                    onClick={() => { handleLinkClick('education'); setIsDropdownOpen(false) }}
                  >
                    Education
                  </NavLink>
                  <NavLink
                    to="/itservices"
                    className="block px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out font-semibold"
                    activeClassName="underline"
                    onClick={() => { handleLinkClick('it'); setIsDropdownOpen(false) }}
                  >
                    IT Services
                  </NavLink>
                  <NavLink
                    to="/bposervices"
                    className="block px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out font-semibold"
                    activeClassName="underline"
                    onClick={() => { handleLinkClick('bpo'); setIsDropdownOpen(false) }}
                  >
                    BPO Services
                  </NavLink>
                </div>
              )}
            </div>



            <NavLink
              to="/about-us"
              className="nav-link text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out font-semibold"
              activeClassName="active"
              exact
              onClick={() => { handleLinkClick('aboutus'); setIsDropdownOpen(false) }}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact-us"
              className="nav-link text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out font-semibold"
              activeClassName="active"
              exact
              onClick={() => { handleLinkClick('contactus'); setIsDropdownOpen(false) }}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      <div className={`sm:hidden overflow-hidden transition-max-height duration-300 text-center text-2xl font-semibold ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="bg-white p-2 rounded-md">

            <NavLink
              to="/"
              className="block text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              activeClassName="underline"
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </NavLink>
          </div>
          <div className={`sm:hidden overflow-hidden transition-max-height duration-300 text-center ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>


            <div className="block text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
              <div className="bg-white p-2 rounded-md">
                {/* Services section */}
                <span
                  onClick={toggleDropdown}
                  className="block text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
                  >
                  Services
                </span>
              </div>
              {isDropdownOpen && (
               
               <div className="fade">
                 <div className="bg-blue-300 mt-2 p-2 rounded-md">

                  <NavLink
                    to="/educational-services"
                    className="block text-zinc-950 hover:text-gray-800 transition duration-300 ease-in-out"
                    activeClassName="underline"
                    onClick={() => {
                      handleLinkClick('education');
                      setIsDropdownOpen(false);
                    }}
                  >
                    Educational Services
                  </NavLink>
                  </div>

                  <div className="bg-blue-300 mt-2 p-2 rounded-md">

                  <NavLink
                    to="/itservices"
                    className="block text-zinc-950 hover:text-gray-800 transition duration-300 ease-in-out"
                    activeClassName="underline"
                    onClick={() => {
                      handleLinkClick('it');
                      setIsDropdownOpen(false);
                    }}
                  >
                    IT Services
                  </NavLink>
                  </div>

                  <div className="bg-blue-300 mt-2 p-2 rounded-md">

                  <NavLink
                    to="/bposervices"
                    className="block text-zinc-950 hover:text-gray-800 transition duration-300 ease-in-out"
                    activeClassName="underline"
                    onClick={() => {
                      handleLinkClick('bpo');
                      setIsDropdownOpen(false);
                    }}
                  >
                    BPO Services
                  </NavLink>
                  </div>
                </div>




              )}
            </div>
          </div>

          <div className="bg-white p-2 rounded-md">
            <NavLink
              to="/about-us"
              className="block text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              activeClassName="underline"
              onClick={() => handleLinkClick('aboutus')}
            >
              About Us
            </NavLink>
          </div>


          <div className="bg-white p-2 rounded-md">
            <NavLink
              to="/contact-us"
              className="block text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
              activeClassName="underline"
              onClick={() => handleLinkClick('contactus')}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
