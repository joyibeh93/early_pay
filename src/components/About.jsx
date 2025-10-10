// About Component – EarlyPay Nigeria
// Introduces the company and its mission

import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#111827] text-center md:text-left"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          About EarlyPay
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          EarlyPay Nigeria is a financial technology platform designed to give employees access
          to their earned wages before payday. We work with employers to provide instant,
          stress-free, and transparent financial flexibility that improves productivity and reduces
          financial stress.
        </p>
      </div>
    </section>
  );
}
