// Premium Download CTA Component – EarlyPay Nigeria
// Professional app download section with store badges and animations

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/themecontext";

export default function DownloadCTA() {
  const { theme } = useTheme();
  const [hoveredStore, setHoveredStore] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const storeButtons = [
    {
      name: "App Store",
      subtitle: "Download on the",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      link: "#",
    },
    {
      name: "Google Play",
      subtitle: "Get it on",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
        </svg>
      ),
      link: "#",
    },
  ];

  const stats = [
    { value: "4.8", label: "App Rating", suffix: "/5" },
    { value: "100K+", label: "Downloads" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Main Card */}
        <motion.div
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-700 dark:via-indigo-800 dark:to-purple-900 rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Now Available
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Get EarlyPay on Your Phone
              </h2>
              <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
                Access your earned wages instantly, manage your finances, and enjoy seamless transactions — all from your mobile device.
              </p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {stat.value}
                      <span className="text-lg text-blue-200">{stat.suffix}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                {storeButtons.map((store, index) => (
                  <motion.a
                    key={index}
                    href={store.link}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setHoveredStore(store.name)}
                    onHoverEnd={() => setHoveredStore(null)}
                    className="group relative flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 rounded-2xl px-6 py-4 shadow-xl transition-all duration-300"
                  >
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                      animate={hoveredStore === store.name ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />

                    <div className="relative text-gray-900 group-hover:scale-110 transition-transform duration-300">
                      {store.icon}
                    </div>
                    <div className="relative text-left">
                      <div className="text-xs text-gray-600 font-medium">{store.subtitle}</div>
                      <div className="text-base sm:text-lg font-bold">{store.name}</div>
                    </div>

                    {/* Arrow Icon */}
                    <motion.svg
                      className="ml-auto w-5 h-5 text-gray-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={hoveredStore === store.name ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.a>
                ))}
              </div>

              {/* Trust Badge */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-2 mt-6 text-blue-100 text-sm"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure and verified by app stores
              </motion.div>
            </motion.div>

            {/* Right Content - Phone Mockup */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Phone Frame */}
                <div className="relative w-64 h-[520px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] overflow-hidden">
                    {/* App Content Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4"
                        >
                          <span className="text-4xl font-bold">EP</span>
                        </motion.div>
                        <div className="text-sm font-semibold">EarlyPay App</div>
                      </div>
                    </div>

                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1,
                      }}
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center text-2xl"
                  animate={{
                    rotate: [0, 10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ⚡
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-green-400 rounded-full shadow-lg flex items-center justify-center text-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  ✓
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent blur-3xl -z-10" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Info Cards */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-3 gap-4 mt-8 px-4"
        >
          {[
            { icon: "🔒", title: "Secure & Safe", desc: "Bank-level encryption" },
            { icon: "⚡", title: "Lightning Fast", desc: "Instant transactions" },
            { icon: "📱", title: "Easy to Use", desc: "Intuitive interface" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
