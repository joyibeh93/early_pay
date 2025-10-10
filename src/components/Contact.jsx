// Contact Component – EarlyPay Nigeria
// Displays contact information for partnerships and support

import React from "react";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-white dark:bg-[#0f172a] text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-6">
          Get in Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We’d love to hear from you! Reach out for partnerships, demo requests,
          or support inquiries.
        </p>

        <div className="flex flex-col items-center gap-3 text-gray-700 dark:text-gray-300">
          <p>
            <Phone className="inline-block mr-2 text-blue-600" /> +234 800 000 0000
          </p>
          <p>support@earlypay.ng</p>
        </div>
      </div>
    </section>
  );
}
