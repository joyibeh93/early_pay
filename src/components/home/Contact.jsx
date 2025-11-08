// Enhanced Contact Component – EarlyPay Nigeria
// Professional contact section with multiple channels and interactive cards

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Send, Clock, Users, Briefcase } from "lucide-react";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 6pm",
      value: "+234 800 000 0000",
      link: "tel:+2348000000000",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "support@earlypay.ng",
      link: "mailto:support@earlypay.ng",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Available 24/7 for instant help",
      value: "Start a conversation",
      link: "#",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office in Lagos",
      value: "Victoria Island, Lagos",
      link: "#",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ];

  const quickLinks = [
    { icon: Users, text: "For Employees", link: "#" },
    { icon: Briefcase, text: "For Employers", link: "#" },
    { icon: Clock, text: "Schedule a Demo", link: "#" },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 px-6 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
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
        <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            We're Here to Help
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for partnerships, demo requests, or support inquiries.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isHovered = hoveredCard === index;

            return (
              <motion.a
                key={index}
                href={method.link}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className={`relative w-14 h-14 rounded-xl ${method.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors`} />
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-opacity duration-300`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {method.description}
                </p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {method.value}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a message
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Additional Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Quick Links */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-indigo-800 rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

              <h3 className="text-2xl font-bold mb-2 relative">Quick Links</h3>
              <p className="text-blue-100 mb-6 relative">
                Access resources tailored to your needs
              </p>

              <div className="space-y-4 relative">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{link.text}</span>
                      <motion.div
                        className="ml-auto"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* FAQ Prompt */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Have Questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check out our FAQ section for instant answers to common questions.
              </p>
              <motion.a
                href="#faq"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-semibold transition-all duration-300"
              >
                View FAQs
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-3xl p-8 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Fast Response Time
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Our team typically responds within 2-4 hours during business hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
