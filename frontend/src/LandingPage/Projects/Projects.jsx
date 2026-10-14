import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  MotionConfig,
  AnimatePresence,
  animate,
  useInView,
} from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GitHubIcon from '@mui/icons-material/GitHub';

// Needs the Anton font (same one used in Home / About / Skills):
// <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
const DISPLAY_FONT = "'Anton', Impact, 'Arial Narrow Bold', sans-serif";

const projects = [
  {
    title: 'Nexus - AI RAG Chatbot',
    img: '/Images/nexus.png',
    desc: 'A full-stack RAG chatbot that enables users to query PDF and Excel documents using AI-powered retrieval, chat history, and web search.',
    langs: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Qdrant', 'Voyage AI', 'Groq API', 'Tailwind CSS'],
    repo: 'https://github.com/Sudeep4705/Nexus',
    demo: 'https://nexus-gules-rho.vercel.app/',
  },
  {
    title: 'Sentinal AI',
    img: '/Images/sentinalai.png',
    desc: 'An AI-powered security monitoring dashboard that analyzes events, detects suspicious activity, visualizes movement on maps, and generates incident summaries.',
    langs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq API', 'Leaflet.js', 'Tailwind CSS'],
    repo: 'https://github.com/Sudeep4705/SentinalAi',
    demo: 'https://senti-nal-ai.netlify.app/',
  },
  {
    title: 'MediNova',
    img: '/Images/medinova.png',
    desc: 'An AI-powered medical research assistant that fetches research papers and clinical trials and generates simplified health insights through intelligent summarization.',
    langs: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq API', 'PubMed API', 'OpenAlex API', 'Tailwind CSS'],
    repo: 'https://github.com/Sudeep4705/Curalink',
    demo: 'https://curalink-rust.vercel.app/',
  },
  {
    title: 'AI Customer Support Agent',
    img: '/Images/customeragent.png',
    desc: 'An Amazon-focused AI customer support agent using RAG to classify customer issues, retrieve similar historical conversations from Qdrant, and generate contextual responses using Groq.',
    langs: ['React', 'Node.js', 'Express', 'Qdrant', 'Voyage AI', 'Groq', 'Tailwind CSS'],
    repo: 'https://github.com/Sudeep4705/ai-customer-support-agent',
    demo: 'https://ai-customer-support-agent-ruddy.vercel.app/',
  },
  {
    title: 'Go4Give',
    img: '/Images/go4give.png',
    desc: 'A compassionate MERN platform for donating to orphanages and personal fundraisers. Users can create campaigns, track live progress, and complete secure payments using Razorpay.',
    langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'Bootstrap'],
    repo: 'https://github.com/Sudeep4705/Go4Give',
    demo: 'https://go4give.netlify.app/',
  },
  {
    title: 'Airbnb Clone',
    img: '/Images/airbnb.png',
    desc: 'A full-stack marketplace where hosts can manage property listings, upload photos, and manage bookings. Includes search, filters, maps, and an admin dashboard.',
    langs: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
    repo: 'https://github.com/Sudeep4705/Airbnb',
    demo: 'https://airbnb-7r6k.onrender.com/listings',
  },
  {
    title: 'Golf Charity Lottery Platform',
    img: '/Images/golfgives.png',
    desc: 'A MERN platform where users submit golf scores for lottery-based prize draws while contributing to charities. Includes score tracking, prize distribution, and donations.',
    langs: ['JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    repo: 'https://github.com/Sudeep4705/golf-gives-platform',
    demo: 'https://golf-gives-platform.netlify.app/',
  },
  {
    title: 'ZoomClone',
    img: '/Images/zoomclone.png',
    desc: 'A real-time video conferencing application with audio and video calls, screen sharing, and collaborative communication.',
    langs: ['React', 'Node.js', 'Express', 'WebRTC', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    repo: 'https://github.com/Sudeep4705/ZoomClone.git',
    demo: 'https://zoom-clo-ne.netlify.app/',
  },
  {
    title: 'SkillBridge',
    img: '/Images/skillbridge.png',
    desc: 'A role-based learning management system for managing batches, sessions, students, and attendance with secure authentication and role-based access control.',
    langs: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'Axios'],
    repo: 'https://github.com/Sudeep4705/SkillBridge.git',
    demo: 'https://skill-bri-dge.netlify.app/',
  },
  {
    title: 'FitnessHelper',
    img: '/Images/fitnessHelper.png',
    desc: 'An AI-powered fitness application that generates personalized seven-day workout and fitness plans based on user-provided fitness details.',
    langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Groq AI API', 'Framer Motion', 'Tailwind CSS'],
    repo: 'https://github.com/Sudeep4705/Fitness-Helper-Ai-Assessment.git',
    demo: 'https://fit-ness-helper.netlify.app/',
  },
  {
    title: 'FoodZo',
    img: '/Images/foodzo.png',
    desc: 'A full-stack food platform with hotel CRUD operations, JWT authentication, and a responsive interface built with React and Tailwind CSS.',
    langs: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    repo: 'https://github.com/Sudeep4705/FoodZo-Assessment.git',
    demo: 'https://food-zo.netlify.app/',
  },
];

// Same technology written two ways (React / React.js, Groq / Groq API) counts once.
const normalize = (name) => name.replace(/\.js$/i, '').replace(/ (AI )?API$/i, '');
const technologyCount = new Set(projects.flatMap((p) => p.langs.map(normalize))).size;

const stats = [
  { value: projects.length, label: 'Projects built' },
  { value: technologyCount, label: 'Technologies used' },
  { value: projects.length, label: 'Live demos' },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const lineReveal = {
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction * 80 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: (direction) => ({ opacity: 0, x: direction * -80, transition: { duration: 0.25 } }),
};

// Counts up from 0 when it scrolls into view.
function CountUp({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value}</span>;
}

// 3 cards per slide on wide screens, fewer on smaller ones.
function usePerPage() {
  const getValue = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1280) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };
  const [perPage, setPerPage] = useState(getValue);

  useEffect(() => {
    const onResize = () => setPerPage(getValue());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return perPage;
}

const Projects = () => {
  const perPage = usePerPage();
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const pageCount = Math.ceil(projects.length / perPage);
  const current = Math.min(page, pageCount - 1);
  const slideProjects = projects.slice(current * perPage, current * perPage + perPage);

  // Keep the page valid when the screen size changes.
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const goTo = (next) => {
    if (next < 0 || next >= pageCount || next === current) return;
    setDirection(next > current ? 1 : -1);
    setPage(next);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" className="scroll-mt-4 bg-orange-400 p-3 sm:p-6 lg:p-8">
        <div className="relative mx-auto grid w-full max-w-[1400px] overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900 via-orange-700 to-orange-600 shadow-2xl lg:grid-cols-[0.8fr_1.4fr]">
          {/* Floating background shapes */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/3 h-[34rem] w-[34rem] rounded-full bg-orange-500/30 blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/4 top-1/2 h-[28rem] w-[28rem] rounded-full bg-amber-400/30 blur-3xl"
            animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* LEFT: statement */}
          <motion.div
            className="relative z-10 flex flex-col justify-between gap-10 px-6 py-10 sm:px-10 lg:px-12 lg:py-14"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-white"
              >
                My work
                <motion.span
                  className="h-px w-24 origin-left bg-white/60"
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.3 } },
                  }}
                />
              </motion.div>

              <h2
                style={{ fontFamily: DISPLAY_FONT }}
                className="mt-8 text-[4.5rem] font-normal uppercase leading-[0.92] text-white sm:text-[7rem] lg:text-[6rem] xl:text-[7.5rem]"
              >
                {['My', 'Projects'].map((line) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <motion.span variants={lineReveal} className="block">
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h2>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-sm text-lg leading-8 text-white"
              >
                A selection of my full-stack applications and AI-powered
                projects. Explore the live demos and source code.
              </motion.p>

              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://github.com/Sudeep4705"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-orange-600 shadow-[0_0_30px_rgba(255,255,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <GitHubIcon fontSize="small" />
                Explore GitHub
              </motion.a>
            </div>

            {/* Stats */}
            <motion.dl
              variants={fadeUp}
              className="grid grid-cols-3 divide-x divide-white/25"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i === 0 ? 'pr-3 sm:pr-5' : 'px-3 sm:px-5'}
                >
                  <dd className="text-4xl font-semibold text-white">
                    <CountUp to={stat.value} />
                  </dd>
                  <dt className="mt-1 text-xs uppercase leading-snug tracking-wide text-orange-100">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* RIGHT: white panel with the slider */}
          <motion.div
            className="relative z-10 m-3 flex flex-col rounded-3xl bg-white p-5 sm:p-8 lg:m-4 lg:p-9"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Title + prev / next */}
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                  My work
                </p>
                <h3
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="mt-1 text-[3rem] font-normal uppercase leading-[0.95] text-black sm:text-[4.5rem] xl:text-[5rem]"
                >
                  Featured projects
                </h3>
              </div>

              <div className="flex shrink-0 items-center gap-3 pb-2">
                <span
                  className="hidden text-sm font-semibold tabular-nums text-slate-500 sm:inline"
                  aria-live="polite"
                >
                  {current + 1} / {pageCount}
                </span>
                <button
                  type="button"
                  onClick={() => goTo(current - 1)}
                  disabled={current === 0}
                  aria-label="Previous projects"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500 bg-white text-orange-600 transition-colors hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-300 disabled:hover:bg-white disabled:hover:text-slate-300"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(current + 1)}
                  disabled={current === pageCount - 1}
                  aria-label="Next projects"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:hover:bg-slate-200"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>

            {/* Slide */}
            <div className="mt-6 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={`${perPage}-${current}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag={pageCount > 1 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) goTo(current + 1);
                    else if (info.offset.x > 80) goTo(current - 1);
                  }}
                  className="grid items-stretch gap-4"
                  style={{ gridTemplateColumns: `repeat(${perPage}, minmax(0, 1fr))` }}
                >
                  {slideProjects.map((project, i) => (
                    <motion.article
                      key={project.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                      className="group flex flex-col rounded-2xl bg-orange-50/70 p-3 transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-200"
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={project.img}
                          alt={`${project.title} project screenshot`}
                          loading="lazy"
                          draggable={false}
                          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-grow flex-col px-1 pb-1 pt-4">
                        <h4 className="mb-2 text-base font-bold leading-tight text-black">
                          {project.title}
                        </h4>

                        <p className="mb-4 flex-grow text-xs leading-5 text-slate-600">
                          {project.desc}
                        </p>

                        <div className="mb-4 flex flex-wrap gap-1.5">
                          {project.langs.map((lang) => (
                            <span
                              key={lang}
                              className="rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-slate-700 shadow-sm"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>

                        <div className="mt-auto grid grid-cols-2 gap-2">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo`}
                            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-orange-500 bg-white px-3 py-2 text-xs font-semibold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white"
                          >
                            Live Demo
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M7 17 17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </a>

                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code on GitHub`}
                            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-900 hover:text-white"
                          >
                            <GitHubIcon sx={{ fontSize: 16 }} />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Project slides">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="relative h-2.5 rounded-full bg-slate-200 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  style={{ width: i === current ? 28 : 10 }}
                >
                  {i === current && (
                    <motion.span
                      layoutId="project-dot"
                      className="absolute inset-0 rounded-full bg-orange-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default Projects;