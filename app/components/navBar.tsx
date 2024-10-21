import React from 'react'

const NavBar = () => {
  return (
    <nav className="container navbar mx-auto  flex justify-between items-center">
    <a href="#" className="text-xl font-bold">
      IGASHI MICHAEL
    </a>
    <div>
      <ul className="hidden md:flex md:space-x-4">
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </div>
 
    <div className="dropdown dropdown-left   lg:hidden">
      <label tabIndex={0} className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className=" text-white bg-[#E6B9A6] shadow-md menu menu-sm dropdown-content mt-20 z-[1] p-2 mr-10 rounded-box w-52"
      >
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </div>
   
    
  </nav>
  )
}

export default NavBar
