import { motion, MotionConfig } from "motion/react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const HERO_IMAGE = "/Images/Hero1-clean.png";

// Add this once in index.html <head> for the tall condensed headline:
// <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
const DISPLAY_FONT = "'Anton', Impact, 'Arial Narrow Bold', sans-serif";

const navLinks = [
  { id: 1, name: "Projects", href: "#projects" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Sudeep4705",
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
  { name: "React.js", role: "What people see and click", color: "#0ea5e9" },
  { name: "Express.js", role: "Routes and API logic", color: "#374151" },
  { name: "Node.js", role: "Runs the server", color: "#16a34a" },
  { name: "AI agents", role: "Chatbots and agentic AI in JavaScript", color: "#7c3aed" },
  { name: "MongoDB", role: "Stores the data", color: "#15803d" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className="min-h-screen bg-orange-400 p-3 pt-20 sm:p-6 sm:pt-24 lg:p-8 lg:pt-24"
      >
        {/* Main hero card */}
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1400px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-orange-700 to-orange-900 shadow-2xl lg:block lg:min-h-[680px]">
          {/* White panel (top right) */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 hidden h-[82%] w-[42%] rounded-bl-3xl bg-white lg:block"
          />

          {/* Portrait */}
          <motion.img
            src={HERO_IMAGE}
            alt="Sudeep"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden h-[108%] w-auto max-w-none -translate-x-[30%] object-contain object-bottom drop-shadow-2xl lg:block"
          />

          {/* Top nav + social links */}
          <motion.div
            className="relative z-20 flex items-center justify-between px-6 py-6 lg:absolute lg:right-0 lg:top-0 lg:w-[42%] lg:px-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              variants={item}
              href="#home"
              className="text-lg font-bold text-white lg:hidden"
            >
              Sudeep
            </motion.a>

            <motion.nav
              variants={item}
              aria-label="Main"
              className="hidden items-center gap-6 text-[11px] font-semibold uppercase tracking-wider text-slate-800 lg:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="transition-colors hover:text-orange-600"
                >
                  {link.name}
                </a>
              ))}
            </motion.nav>

            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  aria-label={link.name}
                  variants={item}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:border-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  <span className="flex h-4 w-4 [&>svg]:h-full [&>svg]:w-full">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Left content */}
          <motion.div
            className="relative z-20 flex flex-1 flex-col justify-center px-6 pb-10 pt-6 sm:px-10 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[48%] lg:px-14 lg:py-0"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={item}
              style={{ fontFamily: DISPLAY_FONT }}
              className="text-7xl font-normal uppercase leading-[0.92] tracking-tight text-slate-900 sm:text-8xl lg:text-[8.5rem]"
            >
              Hi, I'm
              <span className="block">Sudeep.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-sm text-lg font-medium leading-7 text-slate-900"
            >
              I build web apps and AI agents in JavaScript.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 max-w-sm text-sm leading-6 text-slate-800"
            >
              I build full-stack apps with the MERN stack, plus chatbots and
              agentic AI that can reason, use tools, and get tasks done.
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-[0_0_30px_rgba(255,255,255,0.35)] transition-colors hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View my projects
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Mobile portrait */}
          <div className="relative z-10 flex h-80 items-end justify-center lg:hidden">
            <img
              src={HERO_IMAGE}
              alt="Sudeep"
              className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Right panel content */}
          <motion.div
            className="relative z-20 bg-white p-6 sm:p-8 lg:absolute lg:right-0 lg:top-[26%] lg:w-[24%] lg:bg-transparent lg:p-0 lg:pr-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="lg:ml-auto lg:w-fit">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-orange-600">
                Available for
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
              </p>
              <p className="mt-2 text-2xl font-semibold leading-tight text-slate-900">
                Open to
                <span className="block">opportunities</span>
              </p>
            </motion.div>

            <motion.ol
              variants={item}
              aria-label="Tech stack layers"
              className="mt-8 space-y-3 lg:ml-auto lg:w-fit"
            >
              {stack.map((layer) => (
                <li key={layer.name} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-8 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div>
                    <p className="text-sm font-bold leading-tight text-slate-900">
                      {layer.name}
                    </p>
                    <p className="text-[11px] leading-snug text-slate-600">
                      {layer.role}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ol>
          </motion.div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </MotionConfig>
  );
}

export default Home;