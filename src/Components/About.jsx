import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" ref={ref} className="py-24 bg-slate-950">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
            About Me
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Fullstack development for legal-tech, marketplaces, and AI services.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl"
          >
            <p className="text-lg leading-8 text-slate-300">
              I&apos;m Samer Hamdy, a Full-Stack Web Developer with a legal
              background. I build dynamic SaaS products and secure Legal-Tech
              systems using Laravel, Next.js, Python, and modern frontend
              tooling.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Next.js",
                "Laravel",
                "Python",
                "React",
                "Tailwind",
                "MySQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm border rounded-full border-white/10 bg-slate-950/50 text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="grid gap-6"
          >
            <div className="p-8 glass-card">
              <h3 className="text-2xl font-semibold text-white">
                Clean Architecture
              </h3>
              <p className="mt-3 text-slate-300">
                I deliver maintainable SaaS systems with strong security,
                modular API design, and optimized data workflows.
              </p>
            </div>
            <div className="p-8 glass-card">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 text-center">
                  <div className="text-4xl font-semibold text-sky-400">
                    {inView ? <CountUp end={20} duration={2} /> : 0}+
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    Projects Delivered
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 text-center">
                  <div className="text-4xl font-semibold text-purple-400">
                    {inView ? <CountUp end={3} duration={2} /> : 0}+
                  </div>
                  <p className="mt-3 text-sm text-slate-400">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
