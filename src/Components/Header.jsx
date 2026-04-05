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
      <div className="container mx-auto px-4 py-4 flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/20">
            <span className="text-sm sm:text-lg font-semibold text-white">
              SH
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400 truncate">
              Full-Stack Developer
            </p>
            <h1 className="text-base sm:text-lg font-semibold text-white truncate">
              Samer Hamdy
            </h1>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:opacity-90 flex-shrink-0"
        >
          Let's collaborate
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
