import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mb-12 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Ready to turn your idea into a strong web product?
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            className="glass-card p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Let&apos;s build something reliable.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-7">
              I'm available for freelance work, product collaborations, and
              full-time roles. Share your project goals and I&apos;ll reply with
              a practical plan.
            </p>
            <div className="mt-10 space-y-6">
              <div>
                <span className="block text-sm text-slate-400">Email</span>
                <a
                  className="text-white hover:text-sky-300"
                  href="mailto:samerhamdyemam@gmail.com"
                >
                  samerhamdyemam@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-sm text-slate-400">Phone</span>
                <a
                  className="text-white hover:text-sky-300"
                  href="tel:+201097929493"
                >
                  +20 109 792 9493
                </a>
              </div>
              <div>
                <span className="block text-sm text-slate-400">Location</span>
                <p className="text-white">Alexandria, Egypt</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn("left", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 md:p-10"
          >
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-200 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-40 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 resize-none"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition"
            >
              Send Message
            </motion.button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-center text-emerald-400"
              >
                Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
