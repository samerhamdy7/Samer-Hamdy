import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import workImage from "../imgs/work/work.jpg";
import lawyer from "../imgs/work/lawyer.png";
import auto from "../imgs/work/auto.png";

const Work = () => {
  const skills = {
    "Frontend & Mobile": [
      "Next.js (App/Pages Router)",
      "React.js",
      "React Native",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Bootstrap",
    ],
    Backend: [
      "Laravel (MVC, Eloquent, Livewire)",
      "PHP/OOP",
      "RESTful APIs",
      "Laravel Sanctum",
      "PHPUnit",
      "Spatie RBAC",
    ],
    Database: [
      "MySQL",
      "PostgreSQL",
      "Query Optimization",
      "Database Design",
      "Indexing & Relationships",
    ],
    "Architecture & Security": [
      "SaaS Architecture",
      "Multi-tenant Systems",
      "JWT & Sanctum Auth",
      "RBAC",
      "SOLID Principles",
      "Design Patterns",
    ],
    "DevOps & Tools": [
      "Git & GitHub",
      "Docker",
      "CI/CD (GitHub Actions)",
      "VPS (Nginx, PM2)",
    ],
  };

  const projects = [
    {
      title: "SaaS Legal Management System",
      category: "Professional (2025-2026)",
      image: lawyer,
      description:
        "Full-scale legal-tech ecosystem for law firms with specialized client portal and centralized admin dashboard. Architected multi-tenant subscription system with seamless data synchronization.",
      features: [
        "Client Portal: High-performance interface for case management and legal documentation",
        "Admin Dashboard: Multi-tenant billing and system-wide configurations",
        "Unified API: Synchronized data between client and admin platforms",
      ],
      technologies: [
        "Next.js",
        "Laravel",
        "Filament",
        "MySQL",
        "JWT Auth",
        "Multi-tenant Architecture",
      ],
      liveLink: "https://lawyer.adalatech.online",
    },
    {
      title: "Automotive Marketplace Platform",
      category: "Professional (2025-2026)",
      image: auto,
      description:
        "Comprehensive German automotive market platform enabling vehicle listings via dynamic multi-step forms. Custom admin dashboard for request management, technical verification, and high-resolution image processing.",
      features: [
        "Dynamic vehicle listing forms with real-time validation",
        "Admin review dashboard with approval workflows",
        "Secure image upload and vehicle data management",
        "SEO optimization for German market",
      ],
      technologies: [
        "Laravel",
        "Next.js",
        "PostgreSQL",
        "Image Processing",
        "Responsive Design",
        "SEO",
      ],
      liveLink: "https://autokaufendirekt.de",
    },
    {
      title: "AI-Powered Automotive Diagnostic Platform",
      category: "Professional (2025-2026)",
      image: workImage,
      description:
        "Advanced SaaS platform with credit-based subscription model utilizing AI for automotive diagnostics. Built secure credit management and multi-tier dashboard using modern web technologies.",
      features: [
        "LLM integration for AI-driven automotive diagnostics",
        "Credit/Points wallet system with purchase and consumption tracking",
        "Multi-tier dashboard for usage analytics and personalized recommendations",
      ],
      technologies: [
        "Next.js",
        "Laravel",
        "MySQL",
        "AI Integration",
        "Credit System",
        "Analytics",
      ],
      liveLink: "#contact",
      buttonLabel: "Request Case Study",
    },
    {
      title: "E-Commerce Platform (Salla Clone)",
      category: "Freelance (2023-2025)",
      image: workImage,
      description:
        "Multi-tenant e-commerce system with integrated Paymob payment gateway. Implemented complex product management, dynamic cart logic, and real-time order tracking.",
      features: [
        "Multi-tenant SaaS architecture for multiple store owners",
        "Integrated Paymob payment processing",
        "Advanced product and inventory management",
        "Real-time order tracking and notifications",
      ],
      technologies: [
        "Laravel",
        "Next.js",
        "Paymob API",
        "Multi-tenant",
        "MySQL",
        "Payment Integration",
      ],
      liveLink: "#contact",
      buttonLabel: "View Details",
    },
    {
      title: "Employee Management & HR System",
      category: "Freelance (2023-2025)",
      image: workImage,
      description:
        "Comprehensive HR dashboard with smart leave management, real-time attendance tracking, and daily task management. Cross-compiled to mobile using React Native for iOS and Android.",
      features: [
        "Smart leave management with custom business rules",
        "Real-time attendance tracking and reports",
        "Daily task management and employee productivity",
        "Mobile app deployment for seamless access",
      ],
      technologies: [
        "React",
        "React Native",
        "Laravel",
        "Authentication",
        "Task Management",
        "iOS/Android",
      ],
      liveLink: "#contact",
      buttonLabel: "View Details",
    },
    {
      title: "Travel Booking Engine",
      category: "Freelance (2023-2025)",
      image: workImage,
      description:
        "Web-based reservation platform with custom admin panels for managing scheduled trips, predefined programs, and hotel availability. Full booking workflow integration.",
      features: [
        "Trip and program management with scheduling",
        "Hotel availability integration",
        "Booking workflow and reservation tracking",
        "Admin management dashboards",
      ],
      technologies: [
        "Laravel",
        "React.js",
        "MySQL",
        "Booking System",
        "Admin Dashboard",
      ],
      liveLink: "#contact",
      buttonLabel: "View Details",
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 bg-slate-950">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Skills Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-20 sm:mb-24 md:mb-28"
        >
          <div className="mb-12 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold">
              My Expertise
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Core Technologies & Skills
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-slate-400">
              Full-stack expertise across frontend, backend, and cloud
              infrastructure
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <motion.div
                key={category}
                variants={fadeIn("up", "spring", 0.2 + idx * 0.1, 1)}
                initial="hidden"
                whileInView="show"
                className="p-5 transition duration-300 border shadow-xl sm:p-6 rounded-xl sm:rounded-2xl border-sky-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 backdrop-blur-xl shadow-sky-500/5 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 group"
              >
                <h3 className="mb-4 text-xs font-bold tracking-widest uppercase transition sm:text-sm text-sky-400 group-hover:text-sky-300">
                  {category}
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {skillList.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start text-xs leading-relaxed sm:text-sm text-slate-400 group/item"
                    >
                      <span className="mr-2 transition text-sky-400 group-hover/item:text-sky-300">
                        ▸
                      </span>
                      <span className="transition group-hover/item:text-slate-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Work Header */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-12 text-center sm:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold">
            Featured Work
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Live Project Showcases
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-slate-400">
            Here's a selection of professional projects I've built and delivered
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.3 + index * 0.1, 1)}
              initial="hidden"
              whileInView="show"
              className="relative flex flex-col h-full overflow-hidden transition duration-300 border shadow-2xl group rounded-2xl sm:rounded-3xl border-sky-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/80 hover:border-sky-500/50 hover:shadow-sky-500/30"
            >
              {/* Project Image Section */}
              <div className="relative h-48 overflow-hidden border-b sm:h-56 md:h-64 border-sky-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-20 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>

              {/* Content Section - Always Visible */}
              <div className="flex flex-col flex-grow px-5 py-6 text-white sm:px-6 sm:py-7">
                <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-sky-300 bg-sky-500/20 px-3 py-1.5 rounded-full w-fit">
                  {project.category}
                </span>

                <h3 className="mb-2 text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl line-clamp-2">
                  {project.title}
                </h3>

                <p className="flex-grow mb-4 text-xs leading-relaxed sm:text-sm text-slate-300">
                  {project.description}
                </p>

                {/* Features */}
                <div className="pb-4 mb-4 border-b border-slate-700/50">
                  <p className="mb-2 text-xs font-bold uppercase text-sky-300">
                    Key Features
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 mr-2 text-sky-400">
                          ✓
                        </span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-5">
                  <p className="mb-2 text-xs font-bold uppercase text-sky-300">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-sky-500/15 text-sky-300 rounded-lg border border-sky-500/30 font-medium whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-1 text-xs text-slate-400 font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

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
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white transition bg-gradient-to-r from-sky-500 to-blue-600 rounded-full sm:px-6 sm:py-3 sm:text-sm hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/20 w-fit"
                >
                  {project.buttonLabel || "View Live"}
                  <span>→</span>
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
