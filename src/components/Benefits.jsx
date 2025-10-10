// Benefits Component – EarlyPay Nigeria
// Highlights key advantages of using EarlyPay

import React from "react";
import { CheckCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Instant financial relief for employees",
    "Improved retention and productivity",
    "No loans, no interest — just your earned wages",
    "Seamless integration for employers",
  ];

  return (
    <section
      id="benefits"
      className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-[#111827]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-10">
          Benefits of Using EarlyPay
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              <CheckCircle className="text-blue-600 w-6 h-6" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
