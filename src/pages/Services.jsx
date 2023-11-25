import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaNodeJs, FaDatabase, FaFileCode } from 'react-icons/fa';

const Services = () => {
  const frontendTechnologies = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "AngularJs", icon: <FaAngular /> },
    { name: "TypeScript", icon: <FaFileCode /> },
    { name: "REST API", icon: <FaDatabase /> },
  ];
  const backendTechnologies = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "ExpressJs", icon: <FaDatabase /> },
    { name: "MySQL", icon: <FaDatabase/> },
  ];

  return (
    <div id='services'  className="p-4 text-center container mx-auto">
      <h2 className="text-3xl font-semibold mb-5">Services and Languages:</h2>
      <div className="mb-4 bg-gray-600">
        <h3 className="text-3xl font-semibold m-4">Frontend:</h3>
        <ul className="list-disc pl-6 grid grid-cols-3 gap-4">
          {frontendTechnologies.map((tech, index) => (
            <li key={index} className="flex flex-col items-center p-3">
              {tech.icon} {/* Display the icon */}
              <span className="text-xl mt-2">{tech.name}</span> {/* Display the technology name */}
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-gray-600'>
        <h3 className="text-3xl font-semibold mb-4">Backend:</h3>
        <ul className="list-disc pl-6 grid grid-cols-3 gap-4">
          {backendTechnologies.map((tech, index) => (
            <li key={index} className="flex flex-col items-center p-3">
              {tech.icon} {/* Display the icon */}
              <span className="text-xl mt-2">{tech.name}</span> {/* Display the technology name */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
