// Enhanced HowItWorks Component – EarlyPay Nigeria
// Professional step-by-step process with animations and connecting lines

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wallet, TrendingUp, CheckCircle, ArrowRight, Zap } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      icon: Wallet,
      title: "Earn Access",
      text: "Employees can view and access a portion of their earned wages anytime.",
      detail: "Track your daily earnings in real-time and access up to 50% before payday.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      number: "01",
    },
    {
      icon: TrendingUp,
      title: "Receive Instantly",
      text: "Funds are credited instantly to your preferred bank account or wallet.",
      detail: "Lightning-fast transfers directly to your bank account within seconds.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      number: "02",
    },
    {
      icon: CheckCircle,
      title: "Repay Automatically",
      text: "The accessed amount is automatically deducted on payday — seamless and transparent.",
      detail: "No manual payments needed. Everything is handled automatically on your payday.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      number: "03",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="howitworks"
      className="relative py-20 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 dark:bg-purple-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            <Zap className="w-4 h-4" />
            Simple Process
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Access your earned wages in three simple steps. Fast, secure, and completely transparent.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Connecting Lines - Desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 dark:text-gray-700/50 group-hover:text-gray-200 dark:group-hover:text-gray-600/50 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    className={`relative w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-10 h-10 ${step.iconColor}`} />

                    {/* Icon Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mb-4 leading-relaxed">
                    {step.text}
                  </p>

                  {/* Expandable Detail */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`pt-4 border-t border-gray-200 dark:border-gray-700 text-sm ${step.iconColor} font-medium`}>
                      {step.detail}
                    </div>
                  </motion.div>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  />

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl lg:rounded-3xl`} />
                </div>

                {/* Arrow Connector - Desktop Only */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:flex absolute top-20 -right-6 lg:-right-10 z-10 items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg border-4 border-gray-50 dark:border-gray-900"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                )}

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="md:hidden flex justify-center my-6"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center shadow-md">
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6 text-gray-600 dark:text-gray-300 rotate-90" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16 lg:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg cursor-pointer"
          >
            Get Started Now
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Join thousands of employees already using EarlyPay
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
