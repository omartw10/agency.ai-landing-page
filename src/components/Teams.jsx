import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Founder = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-24 xl:px-40 py-36 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {" "}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            {/* Subtle Border Frame */}
            <div className="rounded-2xl border border-[#00C2D1]/25 p-2 bg-[#0E1624]/30 backdrop-blur-sm">
              <img
                src={assets.omar_photo}
                alt="Founder of NeuraSync AI"
                className="w-[300px] sm:w-[340px] rounded-xl object-cover md:-ml-10g-10"
              />
            </div>
          </div>
        </motion.div>
        {/* ===== Content Side ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-semibold tracking-widest text-[#00C2D1] mb-4">
            FOUNDER
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            Omar Abutwairat
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-xl">
            I design intelligent automation systems that replace manual
            operations with scalable, self-running infrastructure.
          </p>

          <p className="text-gray-400 leading-relaxed mb-10 max-w-xl">
            Through NeuraSync AI, I architect AI-powered workflows using n8n and
            modern automation frameworks — transforming chaotic processes into
            structured, high-performance systems built for growth.
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-[#00C2D1]/60 rounded-full mb-8" />

          {/* Meta Info */}
          <div className="flex flex-wrap gap-10 text-sm">
            <div>
              <div className="text-[#00C2D1] font-medium mb-1">Focus</div>
              <div className="text-gray-400">Automation Architecture</div>
            </div>

            <div>
              <div className="text-[#00C2D1] font-medium mb-1">Stack</div>
              <div className="text-gray-400">
                n8n · AI Systems · Web Infrastructure
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
