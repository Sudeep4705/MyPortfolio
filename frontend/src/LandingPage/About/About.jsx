
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Database,
  GraduationCap,
  Trophy,
  MapPin,
  ArrowUpRight,
  Terminal,
} from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Building responsive web applications, REST APIs, secure authentication, and complete end-to-end solutions.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Applications',
    description:
      'Developing RAG chatbots, AI agents, document intelligence tools, and applications powered by LLMs.',
  },
  {
    icon: Database,
    title: 'Backend & Databases',
    description:
      'Working with MongoDB, PostgreSQL, Prisma, vector databases, and backend architecture.',
  },
];

const skills = [
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Prisma',
  'Redux',
  'Zustand',
  'Tailwind CSS',
  'REST APIs',
  'JWT Authentication',
  'Docker',
  'Git & GitHub',
  'RAG',
  'LLM Integration',
  'Qdrant',
];

const projects = [
  {
    name: 'Nexus',
    type: 'AI & RAG Chatbot',
    description:
      'A full-stack AI chatbot that answers questions about PDF and Excel documents using Qdrant, Voyage AI embeddings, Groq, and tool calling.',
  },
  {
    name: 'SentinelAI',
    type: 'AI Security Platform',
    description:
      'An industrial security review platform that visualizes security events and uses AI agents to investigate incidents and generate structured reports.',
  },
  {
    name: 'MediNova',
    type: 'AI Medical Research Assistant',
    description:
      'An AI-powered research assistant that retrieves medical literature and clinical-trial information and supports conversational follow-up questions.',
  },
  {
    name: 'Go4Give',
    type: 'Full Stack & Payments',
    description:
      'A charity donation platform featuring Razorpay integration, JWT authentication, protected routes, and automated donation receipts.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Introduction */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Turning ideas into{' '}
            <span className="text-emerald-600">
              real-world applications.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Hi, I'm Sudeep, a Full Stack Developer with a
            Master of Computer Applications and hands-on
            experience building web applications and
            AI-powered solutions. I enjoy solving practical
            problems through clean code, thoughtful design,
            and reliable backend systems.
          </p>
        </motion.div>

        {/* Journey and Education */}
        <div className="grid gap-6 lg:grid-cols-5">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9 lg:col-span-3"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Terminal size={25} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                My Journey
              </h3>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                My journey in software development began with
                building web applications and exploring how
                frontend interfaces connect with backend
                systems. I work with the MERN stack to develop
                full-stack applications, REST APIs, secure
                authentication flows, and database-driven
                features.
              </p>

              <p>
                I've also expanded my work into AI engineering,
                integrating large language models, retrieval-
                augmented generation (RAG), vector search, and
                tool-calling AI agents into practical applications.
              </p>

              <p>
                My projects include Nexus, an AI document chatbot;
                SentinelAI, an AI-powered security review platform;
                MediNova, a medical research assistant; and Go4Give,
                a charity platform with payment integration.
              </p>

              <p>
                I'm continuously learning, improving my engineering
                skills, and looking for opportunities to contribute
                to real-world products while growing as a developer.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <MapPin
                size={23}
                className="shrink-0 text-emerald-600"
              />

              <div>
                <p className="font-semibold text-slate-900">
                  Bengaluru, India
                </p>

                <p className="text-sm text-slate-500">
                  Full Stack Development · AI Applications
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education and Achievement */}
          <div className="flex flex-col gap-6 lg:col-span-2">

            {/* Education Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 rounded-3xl bg-slate-900 p-7 text-white md:p-8"
            >
              <GraduationCap
                size={32}
                className="mb-5 text-emerald-400"
              />

              <p className="text-sm font-medium text-slate-400">
                Education
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Master of Computer Applications
              </h3>

              <p className="mt-3 text-slate-300">
                CMR University
              </p>

              <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-sm text-slate-300">
                  MCA CGPA
                </span>

                <span className="text-xl font-bold text-emerald-400">
                  8.23 / 10
                </span>
              </div>

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="font-semibold">
                  Bachelor of Computer Applications
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Mangalore University · CGPA 7.33
                </p>
              </div>
            </motion.div>

            {/* Hackathon Recognition */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-8"
            >
              <Trophy
                size={30}
                className="mb-4 text-amber-600"
              />

              <h3 className="text-xl font-bold text-slate-900">
                Hackathon Recognition
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Received a Certificate of Distinction at
                CuraLink Hackathon v2.0, organized by
                Humanity Founders.
              </p>

              <p className="mt-4 font-bold text-amber-700">
                Top 100 out of 7,000+ participants
              </p>

              {/* View Certificate Button */}
              <a
                href="https://drive.google.com/file/d/1OfY4R1lr-5aeA2v27U_gckI3L_CruoQS/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-400 transition duration-300"
              >
                View Certificate
                <ArrowUpRight size={18} />
              </a>
            </motion.div>

          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mt-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              What I Do
            </p>

            <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Areas of Expertise
            </h3>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon size={27} />
                  </div>

                  <h4 className="mb-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technical Skills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl border border-slate-200 bg-white p-7 md:p-10"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            My Toolkit
          </p>

          <h3 className="mt-3 text-3xl font-bold text-slate-900">
            Technologies I Work With
          </h3>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Technologies and tools I use across full-stack
            development, database management, and AI-powered
            application development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl bg-emerald-600 px-7 py-12 text-center text-white md:px-12 md:py-16"
        >
          <h3 className="text-3xl font-extrabold md:text-4xl">
            Always Learning. Always Building.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            I'm looking for opportunities to contribute to
            meaningful software projects, collaborate with
            talented teams, and grow as a Full Stack Developer
            working at the intersection of web development and AI.
          </p>

          <a
            href="https://github.com/Sudeep4705"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-emerald-800 transition hover:bg-emerald-50"
          >
            Explore My Work
            <ArrowUpRight size={19} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
