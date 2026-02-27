import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-24 xl:px-40 py-28 text-gray-900 dark:text-white">

      {/* ===== Section Header ===== */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold">
          Product <span className="text-[#00C2D1]">&</span> Studio
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
          Ready automation solutions and fully custom AI systems — built to scale.
        </p>
      </div>

      {/* ===== Cards ===== */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* ===== PRODUCT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative p-10 rounded-3xl bg-white dark:bg-[#0E1624] border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="mb-6 text-sm font-medium text-[#00C2D1] uppercase tracking-wide">
            Product
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            InboxPilot AI
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            A production-ready intelligent inbox automation system that classifies,
            routes and prioritizes emails using AI and n8n workflows.
          </p>

          <Link
            to="/inboxpilot"
            className="inline-flex items-center text-[#00C2D1] font-medium group-hover:translate-x-1 transition"
          >
            Explore Product →
          </Link>
        </motion.div>

        {/* ===== STUDIO CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative p-10 rounded-3xl bg-white dark:bg-[#0E1624] border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <div className="mb-6 text-sm font-medium text-[#00C2D1] uppercase tracking-wide">
            Studio
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            Custom AI Automation
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Have a workflow in mind? We design and build tailored AI-powered
            automation systems around your exact business needs — from lead routing
            to internal operations and beyond.
          </p>

          <a
            href="#contact-us"
            className="inline-flex items-center text-[#00C2D1] font-medium group-hover:translate-x-1 transition"
          >
            Build With Us →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default OurWork;