import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import workImage from "../imgs/work/work.jpg";
import digitalImage from "../imgs/work/digital market.jpg";

const Work = () => {
  const projects = [
    {
      title: "SaaS Legal Management System",
      image: workImage,
      description:
        "A legal-tech platform with law firm portals, admin dashboards, multi-tenant billing, and document workflows.",
      liveLink: "https://lawyer.adalatech.online",
    },
    {
      title: "Automotive Marketplace Platform",
      image: digitalImage,
      description:
        "A German vehicle marketplace with dynamic listings, admin review flows, secure image uploads, and SEO-first design.",
      liveLink: "https://autokaufendirekt.de",
    },
    {
      title: "AI Automotive Diagnostic Platform",
      image: workImage,
      description:
        "A credit-based SaaS diagnostic tool using Python and LangChain to power AI-driven vehicle maintenance advice.",
      liveLink: "#contact",
      buttonLabel: "Request Case Study",
    },
  ];

  return (
    <section id="work" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
            Featured Work
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Live project showcases.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.3 + index * 0.15, 1)}
              initial="hidden"
              whileInView="show"
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-slate-950/40"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-8 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
                <p className="mb-5 text-sm text-slate-300">
                  {project.description}
                </p>
                <a
                  href={project.liveLink}
                  target={
                    project.liveLink.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    project.liveLink.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  {project.buttonLabel || "View Live"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
