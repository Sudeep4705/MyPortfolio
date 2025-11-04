
import React from "react";
import { motion } from "framer-motion";


const educationData = [
  {
    degree: "Master of Computer Application",
    university: "CMR University",
    cgpa: "CGPA: 8.23",
    isOpen: true, 
  },
  {
    degree: "Bachelor of Computer Application",
    university: "Mangalore University",
    cgpa: "CGPA: 7.33",
    isOpen: false,
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

function Education() {
  return (
   
    <div className="bg-gray-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h1>

        <motion.section
          className="w-full max-w-3xl mx-auto divide-y divide-gray-700 rounded-lg border border-gray-700 bg-gray-800/50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationData.map((edu, index) => (
            <motion.details
              className="group p-6"
              key={index}
              open={edu.isOpen}
              variants={itemVariants}
            >
              <summary className="relative flex cursor-pointer list-none items-center gap-4 pr-8 font-medium text-gray-200 transition-colors duration-300 focus-visible:outline-none group-hover:text-white [&::-webkit-details-marker]:hidden">
               
                <svg
                  className="h-6 w-6 text-emerald-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.786 9.5 12.786 14l9-4.5-9-4.5-9 4.5zm0 0V17m3-6v6.222c0 .348 2 1.778 6 1.778s6-1.374 6-1.778V11"
                  />
                </svg>

                {edu.degree}

                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-1 h-5 w-5 shrink-0 stroke-gray-400 transition duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <div className="mt-4 pl-10 text-gray-400">
                <p>{edu.university}</p>
                <p className="mt-2">{edu.cgpa}</p>
              </div>
            </motion.details>
          ))}
        </motion.section>
      </div>
    </div>
  );
}

export default Education;