
import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Nexus — AI RAG Chatbot',
    img: '/Images/nexus.png',
    desc: 'A full-stack AI chatbot that lets users query PDF and Excel documents using RAG, semantic search, conversation history, and web search integrations.',
    langs: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Qdrant',
      'Voyage AI',
      'Groq API',
    ],
    repo: 'https://github.com/Sudeep4705/Nexus',
    demo: 'https://nexus-gules-rho.vercel.app/',
  },
  {
    title: 'SentinelAI',
    img: '/Images/sentinalai.png',
    desc: 'An AI-powered security monitoring dashboard that analyzes events, detects suspicious activity, visualizes movement on maps, and generates incident summaries.',
    langs: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Groq API',
      'Leaflet.js',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/Sudeep4705/SentinalAi',
    demo: 'https://senti-nal-ai.netlify.app/',
  },
  {
    title: 'AI Customer Support Agent',
    img: '/Images/customeragent.png',
    desc: 'An Amazon-focused AI support agent that classifies customer issues into 20 intents, retrieves similar historical conversations using Qdrant, and generates contextual responses with Groq LLM.',
    langs: [
      'React',
      'Node.js',
      'Express',
      'Qdrant',
      'Voyage AI',
      'Groq',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/Sudeep4705/ai-customer-support-agent',
    demo: 'https://ai-customer-support-agent-ruddy.vercel.app/',
  },
  {
    title: 'MediNova',
    img: '/Images/medinova.png',
    desc: 'An AI-powered medical research assistant that retrieves research papers and clinical-trial information and generates simplified insights using intelligent summarization.',
    langs: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Groq API',
      'PubMed API',
      'OpenAlex API',
    ],
    repo: 'https://github.com/Sudeep4705/Curalink',
    demo: 'https://curalink-rust.vercel.app/',
  },
  {
    title: 'Go4Give',
    img: '/Images/go4give.png',
    desc: 'A charity donation platform where users can create fundraising campaigns, track donation progress, and make secure payments through Razorpay, with JWT authentication and automated receipts.',
    langs: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Razorpay',
      'JWT',
      'Bootstrap',
    ],
    repo: 'https://github.com/Sudeep4705/Go4Give',
    demo: 'https://go4give.netlify.app/',
  },
  {
    title: 'Airbnb Clone',
    img: '/Images/airbnb.png',
    desc: 'A full-stack accommodation marketplace featuring listing management, image uploads, search and filters, map integration, and booking-related functionality.',
    langs: [
      'Node.js',
      'Express',
      'MongoDB',
      'Cloudinary',
      'Mapbox',
    ],
    repo: 'https://github.com/Sudeep4705/Airbnb',
    demo: 'https://airbnb-7r6k.onrender.com/listings',
  },
  {
    title: 'ZoomClone',
    img: '/Images/zoomclone.png',
    desc: 'A real-time video conferencing application supporting video and audio calls, screen sharing, and live communication using WebRTC and Socket.io.',
    langs: [
      'React',
      'Node.js',
      'Express',
      'WebRTC',
      'Socket.io',
      'MongoDB',
      'Tailwind CSS',
    ],
    repo: 'https://github.com/Sudeep4705/ZoomClone.git',
    demo: 'https://zoom-clo-ne.netlify.app/',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 py-16 text-white md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
            Selected Work
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            My Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            A selection of full-stack applications and AI-powered
            solutions built to solve practical problems and explore
            modern software engineering.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-950/40"
            >
              {/* Project Screenshot */}
              <div className="relative overflow-hidden bg-gray-800">
                <img
                  src={project.img}
                  alt={`${project.title} project screenshot`}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/30 to-transparent opacity-60" />
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">

                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-7 text-gray-300">
                  {project.desc}
                </p>

                {/* Technology Badges */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.langs.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-emerald-500/15 bg-emerald-900/40 px-3 py-1 text-xs font-semibold text-emerald-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-gray-700 pt-4">

                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-emerald-400"
                  >
                    <GitHubIcon fontSize="small" />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-emerald-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14 21 3" />
                        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                      </svg>

                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-gray-400">
            Want to explore more of my work?
          </p>

          <a
            href="https://github.com/Sudeep4705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-6 py-3 font-semibold text-emerald-400 transition duration-300 hover:bg-emerald-500 hover:text-gray-950"
          >
            <GitHubIcon fontSize="small" />
            Explore All Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
