import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Github from './components/Github';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0a192f] text-[#ccd6f6] font-sans">
      <Navbar />
      <Homepage />
      <Skills />
      <Projects />
      <Github />
      <Contact />
    </div>
  );
}

export default App;