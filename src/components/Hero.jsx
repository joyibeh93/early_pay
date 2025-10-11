// Enhanced Hero Component – EarlyPay Nigeria
// Advanced animations, floating elements, and professional design

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Button } from "./ui/Button";
import { useTheme } from "../context/themecontext";
import phone from "../images/phone-fintech.png";
import { Import } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-20 lg:py-28 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center lg:text-left overflow-hidden min-h-[90vh]"
    >
      {/* Animated Background Gradient Orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating Icons/Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-10 dark:opacity-20 rotate-12"
        style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-10 dark:opacity-20"
        style={{ x: mousePosition.x * -0.3, y: mousePosition.y * -0.3 }}
      />

      {/* Left Section - Text Content */}
      <motion.div className="max-w-lg lg:max-w-xl w-full z-10" variants={itemVariants}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm"
        >

        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent"
        >
          Access Your Earned Wages Anytime,  Instantly.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          EarlyPay empowers Nigerian employees with flexible wage access  giving you
          <span className="font-semibold text-gray-900 dark:text-white">complete control</span> over
          your money before payday.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
        >
          {[
            { value: "50K+", label: "Active Users" },
            { value: "₦2B+", label: "Disbursed" },
            { value: "4.9★", label: "Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center lg:justify-start gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow:
                theme === "dark"
                  ? [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                    ]
                  : [
                      "0 4px 20px rgba(59, 130, 246, 0.2)",
                      "0 8px 30px rgba(59, 130, 246, 0.3)",
                      "0 4px 20px rgba(59, 130, 246, 0.2)",
                    ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="rounded-lg"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 px-8 py-6 text-base font-semibold shadow-lg">
              Get Early Access →
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-6 text-base font-semibold"
            >
              Partner with Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center lg:justify-start gap-4 mt-8 text-xs text-gray-500 dark:text-gray-400"
        >
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Bank-level security
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            No hidden fees
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section - Mockup with Advanced Effects */}
      <motion.div
        className="relative mt-12 lg:mt-0 w-full max-w-[520px] flex justify-center lg:justify-end z-10"
        variants={itemVariants}
        style={{ y }}
      >
        <Tilt
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          glareEnable={true}
          glareMaxOpacity={0.15}
          glareColor="#3b82f6"
          glarePosition="all"
          glareBorderRadius="20px"
          scale={1.02}
          transitionSpeed={450}
          className="relative"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={phone}
              alt="EarlyPay App Mockup"
              className="w-full rounded-2xl shadow-2xl object-contain relative z-10"
            />

            {/* Multi-layer shimmer effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
              <motion.div
                className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
              />
            </div>

            {/* Animated border gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-20 blur-lg animate-pulse" />

            {/* Glow effects */}
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 rounded-full w-64 h-24 blur-3xl bg-blue-600/30 dark:bg-blue-500/40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Floating particles around mockup */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                style={{
                  top: `${20 + i * 30}%`,
                  right: `-${10 + i * 5}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </motion.div>
        </Tilt>
      </motion.div>
    </motion.section>
  );
}
