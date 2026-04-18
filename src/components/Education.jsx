import React from 'react';

const Education = () => {
  const education = [
    {
      school: "University of The Cordilleras",
      degree: "Bachelor of Science in Information Technology",
      year: "2024 - Ongoing",
    },
    {
      school: "San Jose School of La Trinidad Benguet",
      degree: "STEM Strand",
      year: "2022 - 2024",
    }
  ];

  return (
    <section id="education" className="my-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block pb-2">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{edu.school}</h3>
                <p className="text-blue-600 font-medium">{edu.degree}</p>
              </div>
              <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">{edu.year}</span>
            </div>
            <p className="text-gray-600 mt-2">GPA: {edu.gpa}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {edu.highlights.map((highlight, i) => (
                <span key={i} className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{highlight}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;