import React from 'react';
import Section from './common/Section';

const certificates = [
  {
    title: "ReactJS Certificate",
    description: [
      "Acquired in-depth knowledge of ReactJS, including core concepts and advanced techniques.",
      "Gained expertise in building user interfaces using ReactJS, focusing on components, state management, and lifecycle methods.",
      "Implemented navigation and routing using React Router, enabling the development of single-page applications with multiple views.",
      "Learned and applied Redux for managing application state, enhancing the ability to handle complex state interactions and side effects."
    ],
    link: "https://namastedev.com/shreemahak03work/certificates/namaste-react"
  },
  {
    title: "DSA in C++",
    description: [
      "Implementation and application of various data structures in C++.",
      "Development and analysis of algorithms for efficiency.",
      "Problem-solving and optimization techniques.",
      "Ability to handle complex computational problems."
    ],
    link: "https://ninjasfiles.s3.amazonaws.com/certificate169543781ee36451872f3925877e3f02eaa4c56.pdf"
  }
];

const Certificates = () => {
  return (
    <Section title="Certificates 🎓" subtitle="Here are the certificates I have earned.">
      <br />
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="max-w-lg p-5 shadow-lg shadow-gray-300 rounded-2xl bg-white dark:bg-gray-800 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">{cert.title}</h2>
            <ul className="list-disc pl-5">
              {cert.description.map((desc, i) => (
                <li key={i} className="mb-2 text-black dark:text-gray-200">{desc}</li>
              ))}
            </ul>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-500 hover:underline"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;
