// Footer Component – EarlyPay Nigeria
// Displays site footer with links and social handles

import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-16 bg-gray-100 dark:bg-[#111827] text-center text-gray-600 dark:text-gray-300">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm mb-3">
          &copy; {new Date().getFullYear()} <strong>EarlyPay Nigeria</strong>. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </a>
          <a href="#howitworks" className="hover:text-blue-600 dark:hover:text-blue-400">
            How It Works
          </a>
          <a href="#benefits" className="hover:text-blue-600 dark:hover:text-blue-400">
            Benefits
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </a>
        </div>

        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Designed with ❤️ by the EarlyPay Team
        </div>
      </div>
    </footer>
  );
}
