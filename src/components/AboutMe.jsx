import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="my-12 scroll-mt-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl shadow-lg">
          
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a 2nd year BSIT networking and security major, I am still learning to be proficient with my networking skills and the such. 
            I love to play online and offline games such ranging from competitive multiplayer games to physical trading card games, I also enjoy sisig and a anime with a great soundtrack.
          </p>
          <div className="mt-4 flex gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">JavaScript</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;