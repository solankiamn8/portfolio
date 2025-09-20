import React from 'react';
// Make sure to import your project images - .png is generally better for screenshots
import ProjectImg1 from '../assets/projects/project1.jpg';
import ProjectImg2 from '../assets/projects/project2.jpg';
import ProjectImg3 from '../assets/projects/project3.jpg';

const projects = [
  {
    title: 'FleetManagerPro: Logistics and Transportation',
    image: ProjectImg1,
    description: 'Fleet Manager app streamlines logistics by tracking vehicles, scheduling maintenance, and monitoring drivers.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/solankiamn8/FleetManagerPro', // Replace with your actual GitHub link
    live: 'https://fleetmanagerpro22.netlify.app/', // Replace with your actual live link
  },
  {
    title: 'Fitness Buddy',
    image: ProjectImg2,
    description: 'A responsive task management application to help users organize their daily tasks efficiently.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/solankiamn8/',
    live: 'https://enchanting-kringle-d5a0cd.netlify.app/',
  },
  {
    title: 'Meme Hub',
    image: ProjectImg3,
    description: 'A web app that fetches and displays real-time weather data from a third-party API based on user location.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    github: 'https://github.com/solankiamn8/',
    live: 'https://memehub-nu.vercel.app/',
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Projects Grid Container */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            // Card Container
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg shadow-[#040c16] transform transition-transform duration-300 hover:scale-105">
              
              {/* Image with 16:9 aspect ratio */}
              <img src={project.image} alt={`${project.title} screenshot`} className="w-full aspect-[16/9] object-cover" />

              {/* Content Area */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-24">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className='bg-[#64ffda] text-black font-semibold px-2 py-1 text-sm rounded'>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links/Buttons */}
                <div className="flex gap-4 mt-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300 text-center w-full">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300 text-center w-full">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;