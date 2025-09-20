import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4">
      {/* Form Container */}
      <form 
        method="POST" 
        action="https://formspree.io/f/mandrpdz"
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">Get in touch or connect with me</p>
        </div>
        
        {/* Input Fields with new transparent styling */}
        <input 
          className='bg-transparent border-2 border-gray-700 p-2 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300' 
          type="text" 
          placeholder='Name' 
          name='name' 
          required 
        />
        <input 
          className='my-4 bg-transparent border-2 border-gray-700 p-2 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300' 
          type="email" 
          placeholder='Email' 
          name='email' 
          required 
        />
        <textarea 
          className='bg-transparent border-2 border-gray-700 p-2 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300' 
          name="message" 
          rows="10" 
          placeholder='Message' 
          required
        ></textarea>
        
        {/* Submit Button */}
        <button className='text-white font-semibold border-2 rounded-md hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center duration-300 w-full max-w-xs justify-center'>
          Let's Collaborate
        </button>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6">
            <a href="https://github.com/solankiamn8" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-[#64ffda] duration-300">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/amansolanki8" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-[#64ffda] duration-300">
                <FaLinkedin />
            </a>
            <a href="mailto:solankiamn8@gmail.com" className="text-3xl text-gray-300 hover:text-[#64ffda] duration-300">
                <HiOutlineMail />
            </a>
        </div>
        <div className='text-center text-gray-400 mt-6'>
            <p>solankiamn8@gmail.com</p>
            <p>+91-9926285650</p>
        </div>
      </form>
    </section>
  );
};

export default Contact;