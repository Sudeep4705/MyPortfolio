import { motion } from 'framer-motion';



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 },
  },
};

function Skills() {
  return (
    <section className="py-24 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-emerald-500 font-mono tracking-tighter text-sm mb-3 uppercase">
            // Technical Stack
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            My Tech Stack
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-10 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center"
              variants={itemVariants}
            >
              {/* Modern Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 transform group-hover:-translate-y-2">
                {skill.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-600 rotate-45" />
              </div>

              {/* Icon Card */}
              <motion.div 
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative h-24 w-24 md:h-28 md:w-28 flex items-center justify-center rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl transition-all duration-500 group-hover:border-emerald-500/50"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500" />
                
                {/* The SVG Container */}
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110">
                  {skill.svg}
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-emerald-500 group-hover:w-1/2 transition-all duration-500" />
              </motion.div>
              
              {/* Optional: Subtle name label for mobile clarity */}
              <span className="mt-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;