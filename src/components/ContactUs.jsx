import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactUs = ({ subject = "New Inquiry - NeuraSync AI" }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
    const botcheck = formData.get("botcheck");

    // ===== Honeypot Anti-Spam =====
    if (botcheck) return;

    // ===== Validation =====
    if (!name || !email || !message) {
      toast.error("Please complete all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    formData.append("access_key", "2eabdc35-f4cc-438b-a09a-7914b9fb6b9c");

    formData.append("subject", subject);
    formData.append("from_name", name);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("✅ Message sent successfully! We’ll contact you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="px-6 sm:px-12 lg:px-24 xl:px-40 py-28">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
          Send Us a Message
        </h2>
        <p className="text-gray-400">Tell us about your automation needs.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl mx-auto"
      >
        <div
          className="
    relative rounded-3xl p-12
    bg-white/70 dark:bg-[#0E1624]/70
    backdrop-blur-xl
    border border-transparent
    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
    dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
  "
        >
          {/* Soft Glow */}
          <div
            className="
      absolute -inset-1 rounded-3xl
      bg-gradient-to-r from-[#00C2D1]/20 via-transparent to-[#00C2D1]/20
      blur-2xl opacity-40
      pointer-events-none
    "
          />

          <form
            onSubmit={onSubmit}
            className="relative grid sm:grid-cols-2 gap-8"
          >
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="
  w-full rounded-xl px-5 py-3 outline-none transition-all duration-300
  bg-white dark:bg-[#0F1B2D]
  text-gray-900 dark:text-white
  placeholder-gray-400
  border border-gray-300 dark:border-white/10
  focus:border-[#00C2D1]
  focus:ring-2 focus:ring-[#00C2D1]/40
"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="
  w-full rounded-xl px-5 py-3 outline-none transition-all duration-300
  bg-white dark:bg-[#0F1B2D]
  text-gray-900 dark:text-white
  placeholder-gray-400
  border border-gray-300 dark:border-white/10
  focus:border-[#00C2D1]
  focus:ring-2 focus:ring-[#00C2D1]/40
"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2 space-y-2">
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Project Details
              </label>
              <textarea
                rows={6}
                name="message"
                required
                placeholder="Describe what you want to automate..."
                className="
  w-full rounded-xl px-5 py-3 outline-none transition-all duration-300
  bg-white dark:bg-[#0F1B2D]
  text-gray-900 dark:text-white
  placeholder-gray-400
  border border-gray-300 dark:border-white/10
  focus:border-[#00C2D1]
  focus:ring-2 focus:ring-[#00C2D1]/40
"
              />
            </div>

            {/* Button */}
            <div className="sm:col-span-2 mt-6">
              <button
                type="submit"
                disabled={loading}
                className="
            w-full py-4 rounded-xl font-semibold transition-all duration-300
            bg-[#00C2D1] hover:bg-[#00AEBB]
            text-[#06121F]
            shadow-[0_0_30px_rgba(0,194,209,0.35)]
            disabled:opacity-60
          "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
