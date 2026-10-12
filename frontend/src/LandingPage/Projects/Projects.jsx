import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Go4Give',
    img: '/Images/go4give.png',
    desc: 'A compassionate MERN platform for donating to orphanages and personal fundraisers. Users can create campaigns, track live progress, and complete secure payments using Razorpay.',
    langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'Bootstrap'],
    repo: 'https://github.com/Sudeep4705/Go4Give',
    demo: 'https://go4give.netlify.app/',
  },
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
    title: 'Airbnb Clone',
    img: '/Images/airbnb.png',
    desc: 'A full-stack marketplace where hosts can manage property listings, upload photos, and manage bookings. Includes search, filters, maps, and an admin dashboard.',
    langs: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
    repo: 'https://github.com/Sudeep4705/Airbnb',
    demo: 'https://airbnb-7r6k.onrender.com/listings',
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15,
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 py-12 text-white md:py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-4 text-center text-4xl font-bold md:text-5xl"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          A selection of my full-stack applications and AI-powered projects.
          Explore the live demos and source code.
        </p>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/30"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={`${project.title} project screenshot`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-100">
                  {project.title}
                </h3>

                <p className="mb-5 flex-grow text-sm leading-6 text-gray-400">
                  {project.desc}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.langs.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-emerald-900/60 px-2.5 py-1 text-xs font-semibold text-emerald-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

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

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Live Demo
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
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Sudeep4705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500 px-6 py-3 font-semibold text-emerald-400 transition-colors hover:bg-emerald-500 hover:text-white"
          >
            <GitHubIcon />
            Explore GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;