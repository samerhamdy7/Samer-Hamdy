import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.24),transparent_18%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.22),transparent_20%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="space-y-6 text-center">
            <motion.p
              variants={fadeIn("up", "spring", 0.2, 1)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-blue-200"
            >
              Full-Stack Web Developer
            </motion.p>
            <motion.h1
              variants={fadeIn("up", "spring", 0.3, 1)}
              initial="hidden"
              animate="show"
              className="text-5xl font-black leading-[1.02] text-white sm:text-6xl md:text-7xl"
            >
              Samer Hamdy
            </motion.h1>
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 1)}
              initial="hidden"
              animate="show"
              className="text-center text-2xl font-semibold text-sky-300"
            >
              <TypeAnimation
                sequence={[
                  "Laravel & Next.js Expert",
                  2000,
                  "SaaS, Legal-Tech & FinTech",
                  2000,
                  "AI-Enabled Diagnostic Platforms",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", "spring", 0.5, 1)}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-2xl text-lg text-slate-300"
            >
              I build scalable web applications for law firms, marketplaces, and
              AI-driven services using clean architecture, secure APIs, and
              polished interfaces.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 1)}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-4 sm:flex-row items-center justify-center"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]"
              >
                View Live Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400 hover:text-blue-300"
              >
                Let’s collaborate
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "spring", 0.7, 1)}
              initial="hidden"
              animate="show"
              className="mt-10 grid gap-3 sm:grid-cols-4"
            >
              {["Next.js", "Laravel", "Python", "Tailwind"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
