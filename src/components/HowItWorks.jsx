// HowItWorks Component – EarlyPay Nigeria
// Explains the process in three steps with icons

import React from "react";
import { Wallet, TrendingUp, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Wallet className="w-8 h-8 text-blue-600" />,
      title: "Earn Access",
      text: "Employees can view and access a portion of their earned wages anytime.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Receive Instantly",
      text: "Funds are credited instantly to your preferred bank account or wallet.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Repay Automatically",
      text: "The accessed amount is automatically deducted on payday — seamless and transparent.",
    },
  ];

  return (
    <section
      id="howitworks"
      className="py-20 px-6 md:px-16 bg-white dark:bg-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 dark:bg-[#1e293b] rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
