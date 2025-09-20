import React from 'react';
import ProfilePhoto from '../assets/profile.jpg'; // Your photo in src/assets/
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Homepage = () => {
  return (
    // ADDED `flex items-center` HERE to vertically center the entire container
    <section id="home" className="w-full min-h-screen bg-[#0a192f] flex items-center">
      {/* Container */}
      {/* REMOVED `h-full` as it's no longer needed */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row items-center justify-center">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
          <img src={ProfilePhoto} alt="Aman Solanki" className="rounded-full border-4 border-[#64ffda] object-cover w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className='text-[#64ffda] text-lg'>Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Aman Solanki
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0] mt-1">
            I'm a MERN Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            Based in Indore, I specialize in building and designing exceptional digital experiences. Currently, I'm focused on creating responsive, full-stack web applications and bringing ideas to life through code.
          </p>
          
          {/* CTA Buttons */}
          <div className='flex flex-wrap justify-center md:justify-start gap-4 my-2'>
            <a href="#projects" className="text-white group border-2 px-6 py-3 flex items-center bg-[#64ffda] border-[#64ffda] text-[#0a192f] font-semibold hover:bg-transparent hover:text-[#64ffda] duration-300">
              View My Work 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </a>
            <a 
              href="/Aman_Solanki_Resume.pdf" // Ensure your resume is in the /public folder
              download="Aman_Solanki_Resume.pdf"
              className="text-white group border-2 px-6 py-3 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className='flex justify-center md:justify-start gap-6 mt-4'>
            <a href="https://www.linkedin.com/in/amansolanki8" target="_blank" rel="noopener noreferrer" className='text-3xl text-gray-400 hover:text-[#64ffda] duration-300'>
              <FaLinkedin />
            </a>
            <a href="https://github.com/solankiamn8" target="_blank" rel="noopener noreferrer" className='text-3xl text-gray-400 hover:text-[#64ffda] duration-300'>
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Homepage;