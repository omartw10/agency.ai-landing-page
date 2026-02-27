import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Intelligent Inbox Systems",
      desc: "AI-powered classification, routing and priority detection that turns chaotic inboxes into structured workflows.",
    },
    {
      title: "AI Workflow Architecture",
      desc: "Designing scalable n8n automation systems that connect your tools and eliminate repetitive operations.",
    },
    {
      title: "Custom Automation Engineering",
      desc: "Tailored automation systems built around your exact business logic, data flow and growth goals.",
    },
  ];

  return (
    <section
      id="solutions"
      className="px-6 sm:px-12 lg:px-24 xl:px-40 py-32 text-gray-900 dark:text-white"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl sm:text-5xl font-semibold">
          What We <span className="text-[#00C2D1]">Build</span>
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg">
          Intelligent automation systems designed to reduce friction, increase
          speed and unlock operational scale.
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto">
        {/* ===== Interactive Glass Frame ===== */}
        <div
          className="
    absolute -inset-6
    rounded-[40px]
    bg-gradient-to-r from-[#00C2D1]/20 via-transparent to-[#00C2D1]/20
    blur-3xl
    opacity-60
  "
        />

        <div
          className="
    relative
    rounded-[36px]
    border border-[#00C2D1]/30
    bg-white/40 dark:bg-[#0E1624]/40
    backdrop-blur-2xl
    p-10
  "
        >
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="
            group
            p-8
            rounded-2xl
            border border-gray-200 dark:border-gray-700
            bg-white/70 dark:bg-[#0E1624]/70
            backdrop-blur-lg
            hover:border-[#00C2D1]
            transition-all duration-300
            hover:shadow-xl
            hover:shadow-[#00C2D1]/20
          "
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00C2D1] transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
