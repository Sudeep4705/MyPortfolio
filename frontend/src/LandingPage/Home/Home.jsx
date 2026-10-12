
import { motion, MotionConfig } from "motion/react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

// Place your image in public/Images/Hero1-clean.png
const HERO_IMAGE = "/Images/Hero1-clean.png";

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
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sudee-p/",
    icon: (
      <svg viewBox="0 0 256 256" aria-hidden="true">
        <path
          d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
          fill="#0A66C2"
        />
      </svg>
    ),
  },
];

const stack = [
  {
    name: "React.js",
    role: "What people see and click",
    color: "#0ea5e9",
  },
  {
    name: "Express.js",
    role: "Routes and API logic",
    color: "#374151",
  },
  {
    name: "Node.js",
    role: "Runs the server",
    color: "#16a34a",
  },
  {
    name: "AI agents",
    role: "Chatbots and agentic AI in JavaScript",
    color: "#7c3aed",
  },
  {
    name: "MongoDB",
    role: "Stores the data",
    color: "#15803d",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className="relative flex min-h-screen flex-col overflow-hidden bg-[#dfe0e3] px-6 pb-10 pt-24 text-slate-900 sm:px-10"
      >
        {/* Larger Portrait — Centered and Slightly Lower */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-full items-end justify-center overflow-hidden md:w-[55%]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <img
            src={HERO_IMAGE}
            alt=""
            className="relative bottom-0 h-[85%] w-auto max-w-none object-contain object-bottom opacity-40 mix-blend-multiply sm:h-[95%] md:h-[110%] md:translate-y-[-12%] md:opacity-100"
          />
        </motion.div>

        {/* Bottom Fade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#dfe0e3] to-transparent"
        />

        {/* Social Links */}
        <motion.div
          className="absolute right-5 top-6 z-20 flex items-center gap-3 sm:right-10 sm:top-8"
          variants={container}
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
              variants={item}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-slate-800 shadow-sm backdrop-blur transition-colors hover:border-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <span className="flex h-5 w-5 [&>svg]:h-full [&>svg]:w-full">
                {link.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between gap-14"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Introduction */}
          <div className="my-auto max-w-xl text-left">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-emerald-800 backdrop-blur"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Open to opportunities
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Hi, I'm Sudeep.
              <span className="mt-2 block text-slate-600">
                I build web apps and AI agents in JavaScript.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-lg leading-8 text-slate-700"
            >
              I build full-stack apps with the MERN stack, plus chatbots and
              agentic AI that can reason, use tools, and get tasks done.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                View my projects
              </a>
            </motion.div>
          </div>

          {/* Tech Stack Cards */}
          <motion.ol
            variants={item}
            aria-label="Tech stack layers"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
          >
            {stack.map((layer) => (
              <li
                key={layer.name}
                className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="h-10 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
                <div>
                  <p className="font-bold leading-tight">{layer.name}</p>
                  <p className="text-xs leading-snug text-slate-600">
                    {layer.role}
                  </p>
                </div>
              </li>
            ))}
          </motion.ol>
        </motion.div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </MotionConfig>
  );
}

export default Home;
