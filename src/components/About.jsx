// Enhanced About Component – EarlyPay Nigeria
// Compelling company story with stats, mission, and visual elements

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { value: "50K+", label: "Active Users", icon: Users, color: "from-blue-500 to-blue-600" },
    { value: "₦2B+", label: "Disbursed", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
    { value: "500+", label: "Partner Companies", icon: Award, color: "from-green-500 to-green-600" },
    { value: "99.9%", label: "Uptime", icon: Shield, color: "from-orange-500 to-orange-600" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To revolutionize financial wellness in Nigeria by providing employees with instant access to their earned wages, reducing financial stress and improving quality of life.",
      key: "mission",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To become Africa's leading earned wage access platform, empowering millions of workers with financial freedom and flexibility they deserve.",
      key: "vision",
    },
    {
      icon: Heart,
      title: "Values",
      description: "Transparency, Innovation, Employee-First, Security, and Inclusivity. We believe in building trust through honest practices and cutting-edge technology.",
      key: "values",
    },
  ];

  const features = [
    { text: "Instant wage access with no hidden fees", icon: Zap },
    { text: "Bank-level security and data protection", icon: Shield },
    { text: "Seamless integration with payroll systems", icon: CheckCircle },
    { text: "24/7 customer support", icon: Heart },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            <Target className="w-4 h-4" />
            Who We Are
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            About EarlyPay
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform financial wellness in Nigeria by giving employees control over their earned wages.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative mb-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Side - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h3>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-gray-900 dark:text-white">EarlyPay Nigeria</strong> was born from a simple observation: hardworking Nigerians shouldn't have to wait weeks to access money they've already earned.
                </p>

                <p>
                  We recognized that financial stress affects productivity, health, and overall quality of life. Traditional payment cycles don't align with the realities of daily expenses and unexpected emergencies.
                </p>

                <p>
                  Our platform bridges this gap by partnering with forward-thinking employers to provide <strong className="text-blue-600 dark:text-blue-400">instant wage access</strong> — giving employees the financial flexibility they need, when they need it most.
                </p>

                <p>
                  Today, we're proud to serve thousands of employees across Nigeria, helping them achieve greater financial wellness and peace of mind.
                </p>
              </div>

              {/* Features List */}
              <div className="mt-8 space-y-3">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Mission/Vision/Values Tabs */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Tab Buttons */}
            <div className="flex gap-3 bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-100 dark:border-gray-700">
              {values.map((value) => {
                const Icon = value.icon;
                const isActive = activeTab === value.key;

                return (
                  <motion.button
                    key={value.key}
                    onClick={() => setActiveTab(value.key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{value.title}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700 min-h-[300px]"
            >
              {values.map((value) => {
                const Icon = value.icon;
                if (value.key !== activeTab) return null;

                return (
                  <div key={value.key}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                        Our {value.title}
                      </h3>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-indigo-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

              <div className="relative">
                <h4 className="text-xl font-bold mb-3">
                  Ready to Transform Your Workplace?
                </h4>
                <p className="text-blue-100 mb-6 text-sm">
                  Join hundreds of forward-thinking companies already using EarlyPay to improve employee wellness.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Testimonial/Quote */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.3),transparent_50%)]" />
          </div>

          <div className="relative">
            <div className="text-6xl text-blue-400 mb-4">"</div>
            <p className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto leading-relaxed">
              Financial wellness isn't a luxury — it's a right. We're here to make it accessible to every Nigerian employee.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-lg font-bold">EP</span>
              </div>
              <div className="text-left">
                <div className="font-bold">EarlyPay Team</div>
                <div className="text-sm text-gray-400">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
