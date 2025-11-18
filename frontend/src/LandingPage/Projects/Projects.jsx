import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';


const projects = [
  // {
  //   title: 'Go4Give',
  //   img: 'Images/go4give.png',
  //   desc: 'A compassionate MERN platform for donating to orphanages and personal fundraisers. Users can create campaigns, track live progress bars, and complete secure payments via Razorpay integration.',
  //   langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'Bootstrap'],
  //   repo: 'https://github.com/Sudeep4705/Go4Give',
  // },
  // {
  //   title: 'Airbnb-Clone',
  //   img: 'Images/airbnb.png',
  //   desc: 'Full-stack MERN marketplace where hosts can add, edit, delete hotel listings, upload multiple photos, and manage bookings. search & filters, map view, and an admin dashboard.',
  //   langs: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
  //   repo: 'https://github.com/Sudeep4705/Airbnb',
  // },
  {
    title: 'Go4Give',
    img: 'Images/go4give.png',
    desc: 'A compassionate MERN platform for donating to orphanages and personal fundraisers. Users can create campaigns, track live progress bars, and complete secure payments via Razorpay integration.',
    langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'JWT', 'Bootstrap'],
    repo: 'https://github.com/Sudeep4705/Go4Give',
    demo: 'https://go4give.netlify.app/',
  },
  {
    title: 'Airbnb-Clone',
    img: 'Images/airbnb.png',
    desc: 'Full-stack MERN marketplace where hosts can add, edit, delete hotel listings, upload multiple photos, and manage bookings. search & filters, map view, and an admin dashboard.',
    langs: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
    repo: 'https://github.com/Sudeep4705/Airbnb',
    demo: 'https://airbnb-7r6k.onrender.com/listings',
  },
  {
    title: 'LevelUp – Gamer Social Hub',
    img: 'Images/levelup.png',
    desc: 'A gamer hub where users create quests, track achievements, and chat in real-time. Drag-and-drop boards, live updates, and secure auth via Passport.js.',
    langs: ['React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Passport.js'],
    repo: 'https://github.com/Sudeep4705/Levelup',
  },
  {
    title: 'Zerodha-Clone',
    img: 'Images/zerodha.png',
    desc: 'Full-stack stock-trading platform clone featuring live price feeds, portfolio dashboard, buy/sell orders, holdings & funds pages, and secure JWT authentication.',
    langs: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap'],
    repo: 'https://github.com/Sudeep4705/Zerodha',
  },
  {
    title: 'Formula1',
    img: 'Images/formula1.png',
    desc: 'Backend-first RESTful API and React dashboard for Formula 1 enthusiasts to add, edit, delete and view detailed car specs. Secured with Passport.js authentication.',
    langs: ['Node.js', 'Express', 'MongoDB', 'Passport.js', 'Bootstrap'],
    repo: 'https://github.com/Sudeep4705/Formula1',
  },
  {
    title: 'Gamers World',
    img: 'Images/gamers.png',
    desc: 'A React + Node CRUD platform where gamers can create, read, update and delete game records, reviews, and ratings.',
    langs: ['Node.js', 'Express', 'MongoDB', 'Passport.js', 'Bootstrap'],
    repo: 'https://github.com/Sudeep4705/Gamers-World',
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
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
    <section className="bg-gray-900 py-12 md:py-20 text-white">
  <div className="container mx-auto px-4">
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-center mb-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      My Projects
    </motion.h1>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((p, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          className="group flex flex-col bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/50"
        >
          <div className="overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-gray-100 mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm flex-grow mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.langs.map((lang) => (
                <span
                  key={lang}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-900/60 text-emerald-300"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Links Container */}
            <div className="mt-auto flex items-center gap-4">
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 font-semibold transition-colors hover:text-emerald-400"
              >
                <GitHubIcon fontSize="small" />
                View Code
              </a>

              {/* Live Demo Link */}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 font-semibold transition-colors hover:text-emerald-400"
                >
                  {/* Inline SVG for External Link (No import needed) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
  );
};

export default Projects;