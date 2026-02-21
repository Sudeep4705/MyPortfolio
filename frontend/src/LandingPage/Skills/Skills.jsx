import React from 'react';
import { motion } from 'framer-motion';

// Categorizing data helps recruiters find what they need faster
const skillsData = [
  { name: 'MongoDB', category: 'Backend', color: '#47A248' },
  { name: 'Express.js', category: 'Backend', color: '#000000' },
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'JavaScript', category: 'Frontend', color: '#F7DF1E' },
  { name: 'Tailwind', category: 'Frontend', color: '#06B6D4' },
  { name: 'Framer Motion', category: 'Frontend', color: '#0055FF' },
  { name: 'GitHub', category: 'Tools', color: '#181717' },
  { name: 'MySQL', category: 'Database', color: '#4479A1' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

function Skills() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-emerald-500 font-mono tracking-widest uppercase text-sm mb-2">Technical Arsenal</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h1>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                {skill.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-500 rotate-45"></div>
              </div>

              {/* Icon Container */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl transition-all duration-300 group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10">
                  {/* I recommend using a library like 'react-icons' or simple <img> tags for SVGs to keep the JSX clean */}
                  <div className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-300">
                    {/* Placeholder for your SVGs from the previous code */}
                    <svg className="w-full h-full" viewBox="0 0 128 128">
                       {/* Insert specific paths here or use an <img> tag pointing to your public folder */}
                    </svg>
                  </div>
                </div>
                <span className="text-slate-400 text-xs font-medium group-hover:text-emerald-400 transition-colors">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;