import { motion } from "motion/react";
import "./Home.css";
import About from "../About/About";
import Education from "../Education/Education";
import ProjectDemo from "../ProjectDemo/ProjectDemo";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Achievements from "../Achivements/Achivement";

function Home() {
  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "WakaTime",
      url: "https://wakatime.com/@yourusername",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <text x="12" y="18" textAnchor="middle" fontSize="20" fontWeight="bold">
            W
          </text>
        </svg>
      ),
    },
    {
      id: 3,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.23-1.66-2.23-1.004 0-1.601.678-1.864 1.333-.096.23-.12.551-.12.873v5.593h-3.553v-9.005h3.553v1.232h.05c.497-.746 1.704-2.557 4.15-2.557 3.041 0 5.324 1.988 5.324 6.259v4.071zM5.337 9.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 10.019H3.555V9.428h3.564v10.024zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Social Navbar */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-100 flex flex-col items-center gap-8 md:right-4 md:bottom-8 md:top-auto md:translate-y-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col gap-6 items-center md:flex-row md:gap-4"
          variants={containerVariants}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white cursor-pointer transition-all duration-300 hover:bg-yellow-400/15 hover:border-yellow-400/50 hover:text-yellow-400 hover:shadow-[0_0_20px_rgba(255,255,0,0.4),inset_0_0_20px_rgba(255,255,0,0.1)] group md:w-11 md:h-11 sm:w-10 sm:h-10"
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              title={link.name}
            >
              <div className="flex items-center justify-center w-full h-full group-hover:scale-120 transition-transform duration-300">
                {link.icon}
              </div>
              {/* Tooltip */}
              <div className="absolute right-20 hidden group-hover:block bg-black/80 text-yellow-400 px-3 py-2 rounded text-xs whitespace-nowrap pointer-events-none z-10 md:right-16">
                {link.name}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black/80 clip-path-triangle"></div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="w-0.5 h-32 bg-gradient-to-b from-yellow-400/50 via-white/20 to-yellow-400/50 rounded-full md:w-32 md:h-0.5 md:mt-4"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </motion.div>

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          backgroundImage: 'url("/Images/Hero1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "80vh",
            width: "100%",
            zIndex: 1,
          }}
        ></div>
        {/* Main Box */}
        <div className="flex flex-col md:flex-row justify-evenly items-center text-center box">
          {/* Box1 */}
          <div className="md:mt-90">
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "red",
                top: "50%",
              }}
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              MongoDB
            </motion.p>
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "black",
                top: "50%",
              }}
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 2,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              NodeJs
            </motion.p>
          </div>

          {/* Box2 */}
          <div className="md:mt-90">
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "black",
                top: "50%",
              }}
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 3,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              ExpressJs
            </motion.p>
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "red",
                top: "50%",
              }}
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 4,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              ReactJs
            </motion.p>
          </div>
        </div>
      </div>

      <About />
      <Education />
      <Skills />
      <ProjectDemo />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default Home;