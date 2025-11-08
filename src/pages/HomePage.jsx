// Landing Page – EarlyPay Nigeria
// Each component handles its own animations

import React from "react";
import { ThemeProvider } from "../context/themecontext";
import Navbar from "../components/home/Navbar";
// import Sidebar from "../components/home/Sidebar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import About from "../components/home/About";
import Benefits from "../components/home/Benefits";
import Contact from "../components/home/Contact";
import DownloadCTA from "../components/home/DownloadCTA";
import Footer from "../components/home/Footer";

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-all duration-300 overflow-x-hidden min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* About */}
        <About />

        {/* How It Works */}
        <HowItWorks />

        {/* Benefits */}
        <Benefits />

        {/* Download CTA */}
        <DownloadCTA />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
