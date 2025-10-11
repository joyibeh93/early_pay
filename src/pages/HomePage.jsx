// Landing Page – EarlyPay Nigeria
// Each component handles its own animations

import React from "react";
import { ThemeProvider } from "../context/themecontext";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItworks";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import DownloadCTA from "../components/DownloadCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-all duration-300 overflow-x-hidden min-h-screen">
        {/* Navbar */}
        <Navbar />

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
