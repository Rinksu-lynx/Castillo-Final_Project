import React, { useState } from 'react';

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const skills = [
    { name: "Networking", level: 15, category: "Education" },
    { name: "Gaming", level: 70, category: "Hobby" },
    { name: "Cooking", level: 20, category: "Hobby" },
    { name: "Archery", level: 10, category: "Hobby" },

  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.category === filter);

  return (
    <section id="skills" className="my-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 inline-block pb-2">Skills</h2>
      
      <div className="flex gap-2 mb-6 flex-wrap">
        {['all', 'Education', 'Hobby'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-800">{skill.name}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;