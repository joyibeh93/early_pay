// Enhanced Navbar Component – EarlyPay Nigeria
// Handles site navigation, auth buttons, and dark/light theme toggle

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, LogIn, UserPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/Button";
import { useTheme } from "../context/themecontext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if we're on auth pages
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";

  const navLinks = ["About", "How It Works", "Benefits", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex justify-between items-center px-6 sm:px-10 py-5 sticky top-0 z-50 shadow-sm transition-colors duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      {/* Brand Name/Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-lg">EP</span>
        </div>
        <span className="text-2xl font-bold text-blue-900 dark:text-blue-400">
          EarlyPay
        </span>
      </Link>

      {/* Desktop Menu - Only show on home page */}
      {!isAuthPage && (
        <div className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "")}`}
              className="relative font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Auth Buttons - Desktop */}
        {!isAuthPage && (
          <>
            <Link to="/signin" className="hidden sm:block">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </Button>
            </Link>

            <Link to="/signup" className="hidden sm:block">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-l=
              g hover:shadow-xl transition-all duration-300">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </Button>
            </Link>
          </>
        )}

        {/* Back to Home button on auth pages */}
        {isAuthPage && (
          <Link to="/" className="hidden sm:block">
            <Button
              variant="outline"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
            >
              ← Back to Home
            </Button>
          </Link>
        )}

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          whileTap={{ rotate: 180 }}
          whileHover={{ scale: 1.1 }}
          className="p-2.5 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={18} className="text-gray-700" />
          ) : (
            <Sun size={18} className="text-yellow-400" />
          )}
        </motion.button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={20} className="text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu size={20} className="text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              style={{ top: "72px" }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[72px] right-0 h-[calc(100vh-72px)] w-80 bg-white dark:bg-gray-900 shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6 space-y-6">
                {/* Navigation Links */}
                {!isAuthPage && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Navigation
                    </h3>
                    {navLinks.map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/ /g, "")}`}
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}

                {/* Auth Buttons */}
                <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Account
                  </h3>

                  {!isAuthPage ? (
                    <>
                      <Link to="/signin" onClick={() => setIsOpen(false)} className="block">
                        <Button
                          variant="outline"
                          className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600"
                        >
                          <LogIn className="w-4 h-4" />
                          Sign In
                        </Button>
                      </Link>

                      <Link to="/signup" onClick={() => setIsOpen(false)} className="block">
                        <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800">
                          <UserPlus className="w-4 h-4" />
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Link to="/" onClick={() => setIsOpen(false)} className="block">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-300 dark:border-gray-600"
                      >
                        ← Back to Home
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Additional Info */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    Get instant access to your earned wages
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Online
                    </span>
                    <span>•</span>
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
