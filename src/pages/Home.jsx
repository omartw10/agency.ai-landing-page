import React, { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Teams from "../components/Teams";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = ({ theme, setTheme }) => {
  const location = useLocation();

  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // ===== Scroll to hash (for email button navigation) =====
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // ===== Custom Cursor =====
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3D(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3D(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative bg-white dark:bg-[#060D18] transition-colors duration-300">
      
      <Toaster position="top-center" />

      <Navbar theme={theme} setTheme={setTheme} />

      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Cursor Outline */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-[#00C2D1] pointer-events-none z-[9999]"
        style={{
          transition: "transform 0.1s ease-out",
          boxShadow: "0 0 20px rgba(0,194,209,0.5)",
        }}
      />

      {/* Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-[#00C2D1] pointer-events-none z-[9999]"
        style={{
          boxShadow: "0 0 12px rgba(0,194,209,0.8)",
        }}
      />
    </div>
  );
};

export default Home;