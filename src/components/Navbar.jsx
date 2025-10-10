// Navbar Component – EarlyPay Nigeria
// Handles site navigation and dark/light theme toggle

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import {Button }from "./ui/Button"
import { useTheme } from "../context/themecontext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex justify-between items-center px-6 sm:px-10 py-5 sticky top-0 z-50 shadow-sm transition-colors duration-1000 bg-white dark:bg-gradient-to-r dark:from-[#0f172a] dark:to-[#1e293b]"
    >
      {/* Brand Name */}
      <div className="text-2xl font-bold text-blue-900 dark:text-blue-400">EarlyPay</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-900 dark:text-gray-700">
        {["About", "How It Works", "Benefits", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "")}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-500 hover:drop-shadow-[0_0_6px_#3b82f6]"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button className="hidden sm:block bg-blue-600 text-white hover:bg-blue-700 dark:hover:shadow-[0_0_15px_#3b82f6] transition-all duration-500">
          Get Early Access
        </Button>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ rotate: 180 }}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} className="text-yellow-400" />}
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded bg-gray-100 dark:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-[#0f172a] shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-4 text-gray-700 dark:text-gray-200">
              {["About", "How It Works", "Benefits", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, "")}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <Button className="bg-blue-600 text-white hover:bg-blue-700 w-10/12">
                Get Early Access
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
