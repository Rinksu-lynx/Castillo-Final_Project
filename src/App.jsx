import React, { useState, useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm z-50 transition-colors">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                {['about', 'education', 'experience', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium transition-colors ${
                      activeSection === section 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-600'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
                title="Toggle Dark Mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 pt-24 pb-12">
          <AboutMe />
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <footer className="bg-gray-800 text-white py-8 text-center">
          <p>© 2026 Caedy Castillo. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;