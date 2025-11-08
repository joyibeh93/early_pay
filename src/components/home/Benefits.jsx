// Enhanced Benefits Component – EarlyPay Nigeria
// Comprehensive benefits showcase with dual perspectives and interactive cards

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Briefcase,
  Zap,
  Heart,
  TrendingUp,
  Shield,
  DollarSign,
  Clock,
  Smile,
  BarChart,
  Lock,
  ArrowRight
} from "lucide-react";

export default function Benefits() {
  const [activePerspective, setActivePerspective] = useState("employees");

  const employeeBenefits = [
    {
      icon: Zap,
      title: "Instant Financial Relief",
      description: "Access your earned wages immediately when you need them most, without waiting for payday.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: DollarSign,
      title: "No Loans, No Interest",
      description: "It's your money — not a loan. Access up to 50% of your earned wages with zero interest or hidden fees.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Bank-level encryption protects your data. Your financial information stays completely confidential.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access your wages anytime, anywhere through our mobile app or web platform.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Heart,
      title: "Reduce Financial Stress",
      description: "Handle unexpected expenses without anxiety or resorting to expensive payday loans.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Smile,
      title: "Improved Well-being",
      description: "Financial flexibility leads to better mental health, focus, and overall life satisfaction.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const employerBenefits = [
    {
      icon: TrendingUp,
      title: "Improved Retention",
      description: "Employees are 2x more likely to stay with companies offering wage flexibility benefits.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: BarChart,
      title: "Boost Productivity",
      description: "Financially secure employees are more focused and productive at work, reducing absenteeism.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Attract Top Talent",
      description: "Stand out as a forward-thinking employer and attract quality candidates in competitive markets.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Easy setup with your existing payroll system. No disruption to your operations.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: DollarSign,
      title: "Zero Cost to Employers",
      description: "No implementation fees or ongoing costs. We handle everything at no expense to your business.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Lock,
      title: "Compliance & Security",
      description: "Fully compliant with Nigerian labor laws and data protection regulations.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const currentBenefits = activePerspective === "employees" ? employeeBenefits : employerBenefits;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="benefits"
      className="relative py-20 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl"
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
        <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            <CheckCircle className="w-4 h-4" />
            Why Choose EarlyPay
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Benefits of Using EarlyPay
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover how EarlyPay creates value for both employees and employers
          </p>
        </motion.div>

        {/* Perspective Toggle */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex gap-2 bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            <motion.button
              onClick={() => setActivePerspective("employees")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activePerspective === "employees"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Users className="w-5 h-5" />
              For Employees
            </motion.button>
            <motion.button
              onClick={() => setActivePerspective("employers")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activePerspective === "employers"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              For Employers
            </motion.button>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          key={activePerspective}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {currentBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon Container */}
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-8 h-8 text-white" />

                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-300`} />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-700 dark:via-indigo-800 dark:to-purple-900 rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="relative p-8 sm:p-12 lg:p-16 text-center text-white">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              >
                <Zap className="w-4 h-4" />
                Ready to Get Started?
              </motion.div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Experience the Benefits Today
              </h3>
              <p className="text-blue-100 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of employees and hundreds of companies already transforming their financial wellness with EarlyPay.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started as Employee
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Partner with Us
                  <Briefcase className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold mb-1">50K+</div>
                  <div className="text-sm text-blue-200">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm text-blue-200">Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">4.9★</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
