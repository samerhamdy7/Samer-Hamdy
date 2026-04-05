import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Header = () => {
  return (
    <motion.header
      variants={fadeIn("down", "spring", 0.2, 1)}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 w-full z-40 bg-slate-950/70 backdrop-blur-2xl border-b border-slate-700/30"
    >
      <div className="container mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/20">
            <span className="text-lg font-semibold text-white">SH</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Full-Stack Web & SaaS Developer
            </p>
            <h1 className="text-lg font-semibold text-white">Samer Hamdy</h1>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:opacity-90"
        >
          Let's collaborate
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
