// Groups skills by name, so the SVG data above stays untouched.
const categories = [
  {
    title: "Frontend",
    note: "Interfaces and styling",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Backend",
    note: "Servers and APIs",
    skills: ["Node.js", "Express.js", "Prisma"],
  },
  {
    title: "Databases",
    note: "Where the data lives",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    note: "Shipping and teamwork",
    skills: ["Docker", "GitHub"],
  },
];

const skillsByName = Object.fromEntries(skillsData.map((s) => [s.name, s]));

const rowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function Skills() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="skills" className="bg-gray-950 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Technologies I work with
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              The tools I use to build web apps, APIs, and AI agents in
              JavaScript.
            </p>
          </div>

          {/* Categories */}
          <div className="divide-y divide-gray-800">
            {categories.map((category) => (
              <motion.div
                key={category.title}
                className="grid gap-6 py-10 first:pt-0 last:pb-0 lg:grid-cols-[220px_1fr] lg:gap-12"
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{category.note}</p>
                </div>

                <ul className="flex flex-wrap gap-4">
                  {category.skills.map((name) => {
                    const skill = skillsByName[name];
                    if (!skill) return null;

                    return (
                      <motion.li
                        key={skill.name}
                        variants={tileVariants}
                        className="group flex w-28 flex-col items-center gap-3 rounded-2xl border border-transparent bg-white px-3 py-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400"
                      >
                        <span className="flex h-10 w-10 items-center justify-center [&>svg]:h-full [&>svg]:w-full">
                          {skill.svg}
                        </span>
                        <span className="text-center text-xs font-semibold text-slate-700">
                          {skill.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default Skills;