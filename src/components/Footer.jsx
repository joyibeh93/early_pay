// Enhanced Footer Component – EarlyPay Nigeria
// Professional footer with links, social media, newsletter, and company info

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUp,
  Shield,
  Award,
  Lock
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: "How It Works", href: "#howitworks" },
      { name: "Benefits", href: "#benefits" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "#security" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#faq" },
      { name: "Status", href: "#status" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
  ];

  const trustBadges = [
    { icon: Shield, text: "SSL Secured" },
    { icon: Award, text: "Licensed by CBN" },
    { icon: Lock, text: "Data Protected" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-600 dark:text-gray-400 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EP</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  EarlyPay
                </span>
              </div>

              <p className="text-sm leading-relaxed mb-6">
                Empowering Nigerian employees with flexible wage access. Get paid for the work you've already done — whenever you need it.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <a href="tel:+2348000000000" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +234 800 000 0000
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <a href="mailto:support@earlypay.ng" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    support@earlypay.ng
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Victoria Island, Lagos, Nigeria</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center group"
                      >
                        <span>{link.name}</span>
                        <motion.span
                          className="opacity-0 group-hover:opacity-100 ml-1"
                          initial={{ x: -5 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-indigo-800 rounded-3xl p-8 md:p-10 mb-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-100">
                Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white text-sm mt-2"
                >
                  ✓ Thank you for subscribing!
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>

        {/* Trust Badges & Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 mb-8 border-b border-gray-300 dark:border-gray-700"
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {badge.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <strong className="text-gray-900 dark:text-white">EarlyPay Nigeria</strong>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs">
              Designed with <span className="text-red-500">❤️</span> by the EarlyPay Team
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
