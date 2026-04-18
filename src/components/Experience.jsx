import React, { useState } from 'react';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Honor's Ground Bagiuo",
      role: "Temporary Employee",
      period: "Every Bagiuo in Bloom",
      description: "I do whatever they need me to do",
      details: ["Cleaned the Store", "Ran the session stall", "Helped with restocks"]
    },
  ];

  return (
    <section id="experience" className="my-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-purple-500 inline-block pb-2">Experience</h2>
      <div className="relative border-l-2 border-gray-300 ml-3 space-y-8">
        {experiences.map((job) => (
          <div key={job.id} className="ml-8 relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-purple-500 rounded-full border-4 border-white shadow"></div>
            <div 
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{job.company}</h3>
                  <p className="text-purple-600 font-medium">{job.role}</p>
                </div>
                <span className="text-gray-500 text-sm">{job.period}</span>
              </div>
              <p className="text-gray-600 mt-2">{job.description}</p>
              
              {selectedJob === job.id && (
                <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-3 text-sm text-purple-500 font-medium">
                {selectedJob === job.id ? 'Click to collapse ↑' : 'Click to expand ↓'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;