import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const workExperience = [
    {
      title: "FullStack Developer",
      company: "Digital Matrix Company",
      period: "2025 - 2026",
      description:
        "Building enterprise-grade SaaS applications with full-stack expertise. Architecting secure APIs, optimized databases, and responsive interfaces for law firms, marketplaces, and specialized platforms.",
      highlights: [
        "Multi-tenant SaaS Legal Management System with client portals and admin dashboards",
        "Automotive Marketplace Platform with dynamic listings and SEO optimization",
        "Credit-based SaaS Platform with secure wallet system and analytics dashboard",
      ],
    },
    {
      title: "Full-Stack Developer (Freelance)",
      company: "Self-Employed",
      period: "2023 - 2025",
      description:
        "Developed complex web and mobile applications for various clients across e-commerce, HR, and travel sectors.",
      highlights: [
        "Multi-tenant E-Commerce Platform with Paymob payment integration",
        "HR Management System with React Native mobile deployment",
        "Travel Booking Engine with custom admin panels",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Laws",
      institution: "Alexandria University",
      year: "2014 - 2019",
      description:
        "Legal education providing strong foundation in business law, contracts, and analytical thinking.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 md:py-28 bg-slate-950"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Profile Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-16 sm:mb-20 text-center"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold">
            Who I Am
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Full-Stack Web Developer
          </h2>
        </motion.div>

        {/* Profile Content */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_.9fr] mb-20 sm:mb-24">
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="space-y-6 sm:space-y-8"
          >
            <div className="rounded-2xl sm:rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 p-6 sm:p-8 md:p-10 shadow-2xl shadow-sky-500/5 backdrop-blur-xl">
              <p className="text-base sm:text-lg md:text-lg leading-8 sm:leading-9 text-slate-300">
                I'm <span className="font-bold text-sky-300">Samer Hamdy</span>,
                a Full-Stack Web Developer with a unique legal background and
                strong expertise in building dynamic, scalable SaaS
                applications.
              </p>
              <p className="mt-4 text-base sm:text-lg md:text-lg leading-8 sm:leading-9 text-slate-300">
                Highly skilled in{" "}
                <span className="font-bold text-sky-300">
                  Laravel, Next.js, React, and full-stack web technologies
                </span>
                , I specialize in building secure APIs, scalable databases, and
                polished interfaces. I deliver end-to-end solutions across
                FinTech, Legal-Tech, e-commerce, and SaaS platforms.
              </p>
              <p className="mt-4 text-base sm:text-lg md:text-lg leading-8 sm:leading-9 text-slate-300">
                Passionate about writing clean code using{" "}
                <span className="font-bold text-sky-300">SOLID principles</span>{" "}
                and delivering high-performance, database-driven systems.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">
                  Phone
                </p>
                <a
                  href="tel:+201097929493"
                  className="text-white hover:text-sky-300 transition font-semibold"
                >
                  +20 109 792 9493
                </a>
              </div>
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">
                  Email
                </p>
                <a
                  href="mailto:samerhamdyemam@gmail.com"
                  className="text-white hover:text-sky-300 transition font-semibold break-all"
                >
                  samerhamdyemam@gmail.com
                </a>
              </div>
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">
                  Location
                </p>
                <p className="text-white font-semibold">Alexandria, Egypt</p>
              </div>
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-2">
                  Experience
                </p>
                <p className="text-white font-semibold">3+ Years Full-Stack</p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="grid gap-6 place-content-center"
          >
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 backdrop-blur-xl">
              <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6 text-center hover:border-sky-500/50 transition">
                  <div className="text-4xl sm:text-5xl font-bold text-sky-400">
                    {inView ? (
                      <CountUp end={20} duration={2} suffix="+" />
                    ) : (
                      "20+"
                    )}
                  </div>
                  <p className="mt-2 sm:mt-3 text-sm text-slate-400 font-semibold">
                    Projects Delivered
                  </p>
                </div>
                <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6 text-center hover:border-purple-500/50 transition">
                  <div className="text-4xl sm:text-5xl font-bold text-purple-400">
                    {inView ? (
                      <CountUp end={3} duration={2} suffix="+" />
                    ) : (
                      "3+"
                    )}
                  </div>
                  <p className="mt-2 sm:mt-3 text-sm text-slate-400 font-semibold">
                    Years Experience
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-400 text-center border-t border-white/10 pt-6">
                Specialized in building scalable SaaS products with modern tech
                stack
              </p>
            </div>
          </motion.div>
        </div>

        {/* Work Experience */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-20 sm:mb-24"
        >
          <div className="mb-10 sm:mb-12 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold">
              Professional Journey
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Work Experience
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {workExperience.map((job, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", "spring", 0.4 + idx * 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-sky-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 backdrop-blur-xl shadow-xl shadow-sky-500/5 hover:border-sky-500/50 transition duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      {job.title}
                    </h4>
                    <p className="text-sm sm:text-base text-sky-400 font-semibold mt-1">
                      {job.company}
                    </p>
                  </div>
                  <span className="inline-block px-4 py-2 text-xs sm:text-sm font-bold bg-sky-500/20 text-sky-300 rounded-full border border-sky-500/30 w-fit">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 mb-5 leading-relaxed">
                  {job.description}
                </p>
                <div className="space-y-2">
                  {job.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <span className="text-sky-400 font-bold mt-0.5">✓</span>
                      <p className="text-sm sm:text-base text-slate-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <div className="mb-10 sm:mb-12 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold">
              Academic Background
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Education
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", "spring", 0.5 + idx * 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 backdrop-blur-xl shadow-xl shadow-purple-500/5 hover:border-purple-500/50 transition duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-sm sm:text-base text-purple-400 font-semibold mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="inline-block px-4 py-2 text-xs sm:text-sm font-bold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 w-fit">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
