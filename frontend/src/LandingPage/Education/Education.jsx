import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Application",
    university: "CMR University",
    details: "Specialized in Full Stack Development and Cloud Computing.",
    cgpa: "8.23",
    year: "2023 - 2025",
  },
  {
    degree: "Bachelor of Computer Application",
    university: "Mangalore University",
    details: "Foundation in Computer Science, Mathematics, and Programming.",
    cgpa: "7.33",
    year: "2020 - 2023",
  },
];

function Education() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default open first item

  return (
    <div className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-500 font-mono tracking-widest uppercase text-sm mb-2">My Journey</h2>
          <h1 className="text-4xl md:text-5xl font-bold">Academic Background</h1>
        </motion.div>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl border transition-all duration-300 ${
                expandedIndex === index 
                  ? "border-emerald-500/50 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]" 
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
              }`}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-3 rounded-xl transition-colors ${
                    expandedIndex === index ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${expandedIndex === index ? "text-emerald-400" : "text-white"}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium">{edu.university} • {edu.year}</p>
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  className="text-slate-500"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 ml-16 border-t border-slate-800/50">
                      <p className="text-slate-400 leading-relaxed mb-4">{edu.details}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm font-bold">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        CGPA: {edu.cgpa}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;