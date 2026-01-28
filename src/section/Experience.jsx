import { motion, useScroll, useSpring } from "framer-motion";

const experiences = [
  {
    year: "Aug 2025 – Present",
    role: "Web Development Team Co-Lead",
    company: "GDGC",
    desc: "Leading the web development team, mentoring members, reviewing code, and coordinating with the core team to build scalable and production-ready web applications.",
    tech: ["React", "Tailwind", "Git", "Team Leadership"],
  },
  {
    year: "Feb 2026 – Present",
    role: "Open Source Contributor",
    company: "Open Source Connect",
    desc: "Actively contributing to open-source repositories by developing features, fixing bugs, and improving documentation while collaborating with developers worldwide.",
    tech: ["Git", "GitHub", "Open Source", "Collaboration"],
  },
  {
    year: "26 Jan 2026 – Mar 2026",
    role: "Open Source Contributor",
    company: "ECWoC",
    desc: "Worked on real-world open-source projects, resolving issues and implementing features under mentor guidance while following best open-source practices.",
    tech: ["Git", "GitHub", "JavaScript", "Open Source"],
  },
  {
    year: "Oct 2025 – Nov 2025",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    desc: "Selected contributor for GSSoC, collaborating on open-source projects, improving code quality, and gaining experience with large-scale codebases.",
    tech: ["Git", "GitHub", "Open Source", "Teamwork"],
  },
  {
    year: "Dec 2025 – Jan 2025",
    role: "AI/ML Intern",
    company: "Edunet Foundation",
    desc: "Completed a 6-week AI/ML internship focused on data preprocessing, machine learning models, and practical implementation using real-world datasets.",
    tech: ["Python", "Machine Learning"],
  },
];


export default function Experience() {
  // Smooth scroll progress for timeline
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  return (
    <section id="work" className="bg-black text-white py-32 px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-28">
          <p className="text-purple-400 tracking-widest text-sm mb-2">
            CAREER JOURNEY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience that{" "}
            <span className="text-purple-400">speaks volumes.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mt-6 leading-relaxed">
            A timeline of my professional growth — from learning the basics
            to building complete, production-ready web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Animated Center Line */}
          <motion.div
            style={{ scaleY: smoothProgress }}
            className="absolute left-1/2 top-0 h-full w-[2px] origin-top
            bg-gradient-to-b from-purple-500/30 via-purple-500 to-purple-500/30"
          />

          <div className="space-y-32">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Dot */}
                  <span
                    className="absolute left-1/2 top-8 w-4 h-4
                    bg-purple-400 rounded-full -translate-x-1/2
                    shadow-[0_0_25px_rgba(168,139,250,0.8)]"
                  />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                      mass: 0.9,
                    }}
                    viewport={{ once: true, margin: "-120px" }}
                    className={`w-full md:w-[46%] bg-[#0e0e0e]
                    border border-gray-800 rounded-xl p-6
                    ${isLeft ? "mr-auto" : "ml-auto"}`}
                  >
                    <span className="text-purple-400 text-sm font-medium">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold mt-2">
                      {item.role}
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      {item.company}
                    </p>

                    <p className="text-gray-300 mt-4 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3 mt-5">
                      {item.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1
                          border border-gray-700 rounded-full
                          text-gray-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
