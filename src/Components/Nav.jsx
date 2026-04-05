import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../variants";

const Nav = () => {
  return (
    <motion.nav
      variants={fadeIn("up", "spring", 0.2, 1)}
      initial="hidden"
      animate="show"
      className="fixed bottom-0 left-0 w-full z-40 bg-slate-950/80 backdrop-blur-2xl border-t border-slate-700/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm font-medium text-white flex-wrap">
        {[
          { label: "Home", to: "banner" },
          { label: "About", to: "about" },
          { label: "Services", to: "services" },
          { label: "Work", to: "work" },
          { label: "Contact", to: "contact" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition text-white hover:text-sky-300 cursor-pointer"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Nav;
