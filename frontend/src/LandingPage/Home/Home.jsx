
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
        <svg
          role="img"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <title>GitHub</title>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sudee-p/",
      icon: (
        <svg
          viewBox="0 0 256 256"
          aria-hidden="true"
        >
          <path
            d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
            fill="#0A66C2"
          />
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
    hidden: { opacity: 0, y: -30 },
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
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 px-5 py-24 text-gray-900">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-[120px]" />

        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/30 blur-[100px]" />

        {/* Social Links */}
        <motion.div
          className="absolute right-5 top-6 z-20 flex items-center gap-3 sm:right-10 sm:top-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              aria-label={link.name}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex h-6 w-6 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                {link.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-sm"
            variants={itemVariants}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Open to Opportunities
          </motion.span>

          {/* Introduction */}
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 sm:text-base"
            variants={itemVariants}
          >
            Hello, I'm Sudeep
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
            variants={itemVariants}
          >
            MERN Stack
            <span className="mt-2 block text-emerald-600">
              Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
            variants={itemVariants}
          >
            Building modern, responsive, and scalable web applications
            with clean code and thoughtful user experiences.
          </motion.p>

          {/* Technology Stack */}
          <motion.div
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
            variants={itemVariants}
          >
            {["MongoDB", "Express.js", "React.js", "Node.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md sm:px-5 sm:text-base"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
            >
              Explore My Projects
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:text-gray-900"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-2 text-gray-400"
            variants={itemVariants}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
              Scroll to explore
            </span>
            <span className="animate-bounce text-xl" aria-hidden="true">
              ↓
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Other Sections */}
      <About />
      {/* <Education /> */}
      <Skills />
      {/* <ProjectDemo /> */}
      <Projects />
      {/* <Achievements /> */}
      <Contact />
    </>
  );
}

export default Home;
