import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailClick = () => {
    setContactOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById("contact-us");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const section = document.getElementById("contact-us");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-40 backdrop-blur-xl bg-white/60 dark:bg-[#060D18]/80"
      >
        {/* Logo */}
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt="logo"
          className="h-10 sm:h-12 w-auto"
        />

        {/* Links */}
        <div
          className={`text-gray-700 dark:text-white sm:text-sm fixed sm:static top-0 bottom-0 right-0 h-full sm:h-auto flex flex-col sm:flex-row sm:items-center gap-6 sm:bg-transparent transition-all duration-300
            ${
              sidebarOpen
                ? "w-60 pl-10 bg-[#00C2D1] text-[#0B1F3B] pt-20"
                : "w-0 overflow-hidden sm:w-auto sm:pl-0 sm:pt-0"
            }`}
        >
          <img
            src={assets.close_icon}
            alt="close"
            className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />

          <Link
            onClick={() => setSidebarOpen(false)}
            to="/"
            className="sm:hover:text-[#00C2D1] transition"
          >
            Home
          </Link>

          <a
            onClick={() => setSidebarOpen(false)}
            href="#solutions"
            className="sm:hover:text-[#00C2D1] transition"
          >
            Solutions
          </a>

          <Link
            onClick={() => setSidebarOpen(false)}
            to="/inboxpilot"
            className="sm:hover:text-[#00C2D1] transition"
          >
            InboxPilot
          </Link>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="menu"
            onClick={() => setSidebarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />

          <button
            onClick={() => setContactOpen(true)}
            className="
              hidden sm:flex items-center gap-2
              bg-[#00C2D1]
              text-[#0B1F3B]
              px-6 py-2.5
              rounded-lg
              font-semibold
              hover:bg-[#00A8B5]
              transition-all
              duration-300
              shadow-lg
              shadow-[#00C2D1]/30
            "
          >
            Contact
          </button>
        </div>
      </motion.div>

      {/* ===== CONTACT MODAL ===== */}
      {contactOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

          <div className="bg-white dark:bg-[#0E1624] rounded-xl p-8 w-80 text-center shadow-2xl">

            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact NeuraSync AI
            </h3>

            <div className="flex flex-col gap-4">

              {/* WhatsApp */}
              <a
                href="https://wa.me/218926467332"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-[#00C2D1]
                  text-[#0B1F3B]
                  py-2.5
                  rounded-lg
                  font-semibold
                  hover:bg-[#00A8B5]
                  transition
                "
              >
                WhatsApp
              </a>

              {/* Email Scroll */}
              <button
                onClick={handleEmailClick}
                className="
                  border border-[#00C2D1]
                  text-[#00C2D1]
                  py-2.5
                  rounded-lg
                  font-semibold
                  hover:bg-[#00C2D1]
                  hover:text-[#0B1F3B]
                  transition
                "
              >
                Email
              </button>

            </div>

            <button
              onClick={() => setContactOpen(false)}
              className="mt-6 text-sm text-gray-500 hover:text-[#00C2D1] transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;