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
      url: "https://github.com/Sudeep4705",
      icon: (
        <svg role="img" viewBox="0 0 24 24"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      ),
    },
    {
      id: 3,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sudee-p/",
      icon: (
        <svg width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/></svg>
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
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
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

        {/* Social Navbar - Top Right */}
        <motion.div
          className="absolute top-10 right-8 z-50 flex flex-col items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-row gap-4 items-center"
            variants={containerVariants}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white cursor-pointer transition-all duration-300 hover:bg-yellow-400/15 hover:border-yellow-400/50 hover:text-yellow-400 hover:shadow-[0_0_20px_rgba(255,255,0,0.4),inset_0_0_20px_rgba(255,255,0,0.1)] group"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={link.name}
              >
                <div className="flex items-center justify-center w-full h-full transition-transform duration-300">
                  {link.icon}
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full mb-3 hidden group-hover:block bg-black/80 text-yellow-400 px-3 py-2 rounded text-xs whitespace-nowrap pointer-events-none z-10">
                  {link.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 clip-path-triangle"></div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Horizontal Divider Line */}
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-yellow-400/50 via-white/20 to-yellow-400/50 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.div>

        {/* Main Box */}
        <div className="flex flex-col md:flex-row justify-evenly items-center text-center box relative z-10">
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