import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for Hamburger and Close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-6 py-4 md:px-12'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>Huzaifa</div>

        {/* Hamburger Icon */}
        <div className='md:hidden text-2xl cursor-pointer' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links for larger screens */}
        <div className='hidden md:flex md:items-center md:space-x-8'>
          <a href="#home" className='hover:text-gray-400 transition-colors duration-200'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition-colors duration-200'>About Me</a>
          <a href="#service" className='hover:text-gray-400 transition-colors duration-200'>Services</a>
          <a href="#project" className='hover:text-gray-400 transition-colors duration-200'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 transition-colors duration-200'>Contact</a>

          {/* Connect Me Button */}
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full 
            hover:scale-105 transform transition-transform duration-300'>
            Connect Me
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col space-y-4 items-center py-4'>
          <a href="#home" className='hover:text-gray-400 transition-colors duration-200'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition-colors duration-200'>About Me</a>
          <a href="#service" className='hover:text-gray-400 transition-colors duration-200'>Services</a>
          <a href="#project" className='hover:text-gray-400 transition-colors duration-200'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 transition-colors duration-200'>Contact</a>

          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full 
            hover:scale-105 transform transition-transform duration-300'>
            Connect Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
