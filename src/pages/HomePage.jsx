// Landing Page – EarlyPay Nigeria (Animated Version)
// Smooth motion reveal for each section on scroll and load

import React from "react";
import { ThemeProvider } from "../context/themecontext";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItworks";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import DownloadCTA from "../components/DownloadCTA";
import Footer from "../components/Footer";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-all duration-1000 overflow-x-hidden min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Animated Sections */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* About */}
          <motion.div variants={fadeInUp}>
            <About />
          </motion.div>

          {/* How It Works */}
          <motion.div variants={fadeInUp}>
            <HowItWorks />
          </motion.div>

          {/* Benefits */}
          <motion.div variants={fadeInUp}>
            <Benefits />
          </motion.div>

           {/* DownloadCTA */}
          <motion.div variants={fadeInUp}>
            <DownloadCTA />
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <Contact />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
