import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaCode, FaServer, FaRobot } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl sm:text-5xl md:text-6xl" />,
      title: "SaaS Platform Development",
      description:
        "Designing multi-tenant web systems with Laravel, Next.js, secure auth, and subscription workflows.",
    },
    {
      icon: <FaServer className="text-4xl sm:text-5xl md:text-6xl" />,
      title: "Legal-Tech Solutions",
      description:
        "Building client portals, admin dashboards, and document workflows for law firms and professional services.",
    },
    {
      icon: <FaRobot className="text-4xl sm:text-5xl md:text-6xl" />,
      title: "AI & Diagnostics",
      description:
        "Integrating LLM-powered diagnostics, credit-based SaaS models, and analytics for intelligent product experiences.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-12 text-center"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-400">
            What I build
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Engineering modern SaaS and Legal-Tech platforms.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.3 + index * 0.15, 1)}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.03, y: -8 }}
              className="glass-card border border-white/10 p-6 sm:p-8 text-center transition-all duration-300"
            >
              <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
