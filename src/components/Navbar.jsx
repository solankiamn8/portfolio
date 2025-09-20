import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Resume link for viewing in a new tab
  const resumeUrl =
    "https://drive.google.com/file/d/1DIGSsu3FZZU3shwwUBdQMrqIhQW5HuIr/view?usp=sharing";

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 md:px-8 bg-[#0a192f] text-gray-300 z-50">
      {/* Logo */}
      <div>
        {/* Wrapped logo in a link to scroll to top */}
        <a href="#home" className="text-3xl font-bold text-[#64ffda]">
          <img
            src="/logo.png"
            alt="Aman Solanki Logo"
            style={{ height: "40px" }}
          />
        </a>
      </div>

      {/* Desktop Menu */}
      {/* Added gap-x-8 for spacing between links */}
      <ul className="hidden md:flex gap-x-8">
        {/* Added transition for smooth hover and padding */}
        <li className="py-2 transition-colors duration-300 hover:text-[#64ffda] border-b-2 border-transparent hover:border-[#64ffda]">
          <a href="#home">Home</a>
        </li>
        <li className="py-2 transition-colors duration-300 hover:text-[#64ffda] border-b-2 border-transparent hover:border-[#64ffda]">
          <a href="#skills">Skills</a>
        </li>
        <li className="py-2 transition-colors duration-300 hover:text-[#64ffda] border-b-2 border-transparent hover:border-[#64ffda]">
          <a href="#projects">Projects</a>
        </li>
        <li className="py-2 transition-colors duration-300 hover:text-[#64ffda] border-b-2 border-transparent hover:border-[#64ffda]">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Resume Button for Desktop */}
      <div className="hidden md:block">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-[#64ffda] px-4 py-2 text-[#64ffda] rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 font-semibold"
        >
          Resume
        </a>
      </div>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-y-8"
        }
      >
        <li>
          <a
            onClick={handleClick}
            className="text-4xl hover:text-[#64ffda]"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            className="text-4xl hover:text-[#64ffda]"
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            className="text-4xl hover:text-[#64ffda]"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            onClick={handleClick}
            className="text-4xl hover:text-[#64ffda]"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-[#64ffda]"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
