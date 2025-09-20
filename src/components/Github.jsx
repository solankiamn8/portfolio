import React from 'react';
import GitHubCalendar from 'react-github-calendar'; // npm install react-github-calendar

const Github = () => {
  const username = 'solankiamn8'; // IMPORTANT: Replace with your username

  return (
    <section className="w-full py-20 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
          GitHub Contributions
        </p>
        
        {/* GitHub Calendar */}
        <div className="w-full mt-10">
          <GitHubCalendar 
            username={username} 
            blockSize={15}
            blockMargin={5}
            color="#64ffda"
            fontSize={16}
          />
        </div>

        {/* GitHub Stats */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
            <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true`} 
                alt="GitHub Stats" 
                className='max-w-full'
            />
            <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight`}
                alt="Top Languages"
                className='max-w-full'
            />
        </div>
      </div>
    </section>
  );
};

export default Github;