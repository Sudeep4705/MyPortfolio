import { motion, MotionConfig } from 'framer-motion';
import {
  Code2,
  BrainCircuit,
  Database,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

// Needs the Anton font (already added for Home): 
// <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
const DISPLAY_FONT = "'Anton', Impact, 'Arial Narrow Bold', sans-serif";

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

const journey = [
  {
    title: 'Bachelor of Computer Applications',
    place: 'Mangalore University',
    text: 'CGPA 7.33. Began building web applications and exploring how frontends connect to backend systems.',
  },
  {
    title: 'Master of Computer Applications',
    place: 'CMR University',
    text: 'CGPA 8.23 / 10. Full-stack apps, REST APIs, and AI engineering with LLMs, RAG, and tool-calling agents.',
  },
  {
    title: 'Building projects',
    place: 'Nexus · SentinelAI · MediNova · Go4Give',
    text: 'An AI document chatbot, a security review platform, a medical research assistant, and a charity platform with payments.',
  },
];

const stats = [
  { value: '8+', label: 'Projects built' },
  { value: '8.23', label: 'MCA CGPA' },
  {
    value: 'Top 100',
    label: 'of 7,000+ at CuraLink Hackathon',
    href: 'https://drive.google.com/file/d/1OfY4R1lr-5aeA2v27U_gckI3L_CruoQS/view?usp=drive_link',
  },
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

function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        className="scroll-mt-4 bg-orange-400 p-3 sm:p-6 lg:p-8"
      >
        <div className="relative mx-auto grid w-full max-w-[1400px] overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900 via-orange-700 to-orange-600 shadow-2xl lg:min-h-[860px] lg:grid-cols-2">
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
            className="relative z-10 flex flex-col justify-between gap-10 px-6 py-10 sm:px-10 lg:px-14 lg:py-14"
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
                About me
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
                className="mt-8 text-[5.5rem] font-normal uppercase leading-[0.9] text-white sm:text-[8rem] lg:text-[9rem] xl:text-[10rem]"
              >
                {['Ideas', 'into', 'apps.'].map((word) => (
                  <span key={word} className="block overflow-hidden pb-1">
                    <motion.span variants={lineReveal} className="block">
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h2>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-sm text-xl leading-8 text-white"
              >
                Turning ideas into real-world applications through clean code,
                thoughtful design, and reliable backend systems.
              </motion.p>

              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-orange-600 shadow-[0_0_30px_rgba(255,255,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View my work
                <ArrowUpRight size={16} />
              </motion.a>
            </div>

            {/* Stats */}
            <motion.dl
              variants={fadeUp}
              className="grid grid-cols-3 divide-x divide-white/25"
            >
              {stats.map((stat, i) => {
                const content = (
                  <>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span
                        className={`block font-semibold text-white ${
                          stat.href ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
                        }`}
                      >
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-xs uppercase leading-snug tracking-wide text-orange-100">
                        {stat.label}
                        {stat.href && (
                          <ArrowUpRight size={12} className="ml-1 inline" />
                        )}
                      </span>
                    </dd>
                  </>
                );

                return (
                  <div
                    key={stat.label}
                    className={`${i === 0 ? 'pr-4' : 'px-4'} sm:px-6 first:sm:pl-0`}
                  >
                    {stat.href ? (
                      <a
                        href={stat.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </motion.dl>
          </motion.div>

          {/* RIGHT: white panel */}
          <motion.div
            className="relative z-10 m-3 rounded-3xl bg-white p-6 sm:p-8 lg:m-4 lg:p-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-semibold uppercase tracking-wider text-orange-600"
              >
                About me
              </motion.p>

              {/* Title + side note */}
              <div className="mt-2 flex flex-wrap items-start justify-between gap-4">
                <motion.h3
                  variants={fadeUp}
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="relative text-[4rem] font-normal uppercase leading-[0.92] text-black sm:text-[5.5rem] xl:text-[6.5rem]"
                >
                  Full Stack
                  <span className="block">Developer</span>

                  {/* spark lines */}
                  <motion.svg
                    aria-hidden="true"
                    viewBox="0 0 40 40"
                    className="absolute -right-8 -top-1 hidden h-9 w-9 text-orange-600 sm:block"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    <path d="M8 6 20 12M20 2 26 14M6 22 18 24" />
                  </motion.svg>
                </motion.h3>

                <motion.div variants={fadeUp} className="max-w-[10rem] pt-6">
                  <p className="flex items-start gap-1.5 text-base leading-snug text-slate-800">
                    <MapPin size={16} className="mt-1 shrink-0 text-orange-600" />
                    <span>
                      Bengaluru, India
                      <span className="block text-sm text-slate-500">
                        Full Stack Development · AI Applications
                      </span>
                    </span>
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 100 10"
                    className="mt-3 w-24 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <motion.path
                      d="M2 7C30 2 60 2 98 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </svg>
                </motion.div>
              </div>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-lg leading-8 text-slate-700"
              >
                Hi, I'm <strong className="font-semibold text-black">Sudeep</strong>,
                a Full Stack Developer with a Master of Computer Applications and
                hands-on experience building web applications and AI-powered
                solutions. I enjoy solving practical problems through clean code,
                thoughtful design, and reliable backend systems.
              </motion.p>

              {/* Areas of expertise */}
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <motion.div
                      key={h.title}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="group"
                    >
                      <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 shadow-sm transition-colors group-hover:bg-orange-500 group-hover:text-white">
                        <Icon size={30} strokeWidth={1.6} />
                      </div>
                      <h4 className="text-sm font-bold leading-tight text-black">
                        {h.title}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {h.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Journey + quote */}
              <motion.div
                variants={fadeUp}
                className="mt-8 grid gap-6 rounded-3xl bg-slate-100 p-6 sm:grid-cols-[1.6fr_1fr] sm:p-7"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                    My journey
                  </p>

                  <ol className="relative mt-5 space-y-5 pl-8">
                    <motion.span
                      aria-hidden="true"
                      className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-orange-500"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                    {journey.map((step, i) => (
                      <motion.li
                        key={step.title}
                        className="relative"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.25 }}
                      >
                        <span className="absolute -left-8 top-1 h-3 w-3 rounded-full bg-orange-500 ring-4 ring-slate-100" />
                        <p className="text-sm font-semibold leading-tight text-black">
                          {step.title}
                        </p>
                        <p className="text-xs text-slate-700">{step.place}</p>
                        <p className="mt-0.5 text-xs leading-5 text-slate-500">
                          {step.text}
                        </p>
                      </motion.li>
                    ))}
                  </ol>
                </div>

                <div className="border-t border-slate-300 pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                  <span
                    aria-hidden="true"
                    style={{ fontFamily: DISPLAY_FONT }}
                    className="block text-6xl leading-none text-orange-600"
                  >
                    “
                  </span>
                  <p className="mt-2 text-base leading-7 text-slate-900">
                    Always learning, always building. I'm looking to contribute to
                    meaningful software and grow as a developer working across web
                    and AI.
                  </p>
                  <a
                    href="https://github.com/Sudeep4705"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-800"
                  >
                    Explore my work
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default About;