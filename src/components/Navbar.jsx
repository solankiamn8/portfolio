import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleResumeClick = (e) => {
    e.preventDefault();
    // Open in a new tab
    window.open(resumeViewUrl, "_blank", "noopener,noreferrer");
    // Trigger download
    const link = document.createElement("a");
    link.href = resumeDownloadUrl;
    link.download = "Aman_Solanki_Resume.pdf"; // customize filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Resume link for viewing in a new tab
  const resumeViewUrl =
    "https://drive.google.com/file/d/1DIGSsu3FZZU3shwwUBdQMrqIhQW5HuIr/view?usp=sharing";
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1DIGSsu3FZZU3shwwUBdQMrqIhQW5HuIr";

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
        <button
          onClick={handleResumeClick}
          className="border-2 border-[#64ffda] px-4 py-2 text-[#64ffda] rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 font-semibold"
        >
          Resume
        </button>
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
          <button
            onClick={handleResumeClick}
            className="text-4xl hover:text-[#64ffda]"
          >
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
