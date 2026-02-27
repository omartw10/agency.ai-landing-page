import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center text-center px-6 sm:px-12 lg:px-24 xl:px-40 pt-28 pb-24 text-gray-900 dark:text-white"
    >
      {/* ===== Heading ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] max-w-4xl"
      >
        Automate Smarter.
        <br />
        <span className="text-[#00C2D1]">Scale Faster.</span>
      </motion.h1>

      {/* ===== Subtext ===== */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
      >
        We build <span className="text-[#00C2D1] font-medium">AI-powered</span>{" "}
        automation systems using n8n to eliminate manual work and unlock growth.
      </motion.p>

      {/* ===== Video Section ===== */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative group max-w-6xl mx-auto mt-24"
>
  {/* Glow */}
  <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-r from-[#00C2D1]/40 via-transparent to-[#00C2D1]/40 blur-3xl opacity-50 group-hover:opacity-80 transition duration-500" />

  {/* Gradient Border */}
  <div className="relative rounded-[32px] p-[2px] bg-gradient-to-r from-[#00C2D1] via-[#0B1F3B] to-[#00C2D1]">

    {/* Inner Frame */}
    <div className="rounded-[30px] overflow-hidden bg-black shadow-2xl transform transition duration-500 group-hover:scale-[1.015]">

      <iframe
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        className="w-full aspect-video md:h-[520px]"
        allowFullScreen
      />

    </div>
  </div>
</motion.div>
    </section>
  );
};

export default Hero;
