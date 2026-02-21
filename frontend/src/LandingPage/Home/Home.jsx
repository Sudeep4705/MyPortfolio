import { motion } from "framer-motion";
import "./Home.css";
import About from "../About/About";
import Education from "../Education/Education";
import ProjectDemo from "../ProjectDemo/ProjectDemo";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const techStack = [
  { name: "MongoDB", color: "text-emerald-500", delay: 1 },
  { name: "NodeJs", color: "text-slate-900", delay: 1.5 },
  { name: "ExpressJs", color: "text-slate-900", delay: 2 },
  { name: "ReactJs", color: "text-blue-500", delay: 2.5 },
];

const floatingVariants = {
  initial: { opacity: 0, y: 50, rotateY: 90 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      delay: custom,
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9], 
    },
  }),
};

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Images/Hero1.png")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center h-full pt-20">
          
          {/* Left Side Stack */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            {techStack.slice(0, 2).map((tech) => (
              <motion.h2
                key={tech.name}
                custom={tech.delay}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${tech.color}`}
              >
                {tech.name}
              </motion.h2>
            ))}
          </div>

          {/* Right Side Stack */}
          <div className="flex flex-col gap-6 text-center md:text-right mt-12 md:mt-0">
            {techStack.slice(2).map((tech) => (
              <motion.h2
                key={tech.name}
                custom={tech.delay}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className={`text-5xl md:text-7xl font-black uppercase tracking-tighter ${tech.color}`}
              >
                {tech.name}
              </motion.h2>
            ))}
          </div>
        </div>
      </div>

      {/* Page Sections */}
      <About />
      <Education />
      <Skills />
      <ProjectDemo />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;