// Simple reusable Button component for EarlyPay Nigeria

import React from "react";

export function Button({ children, onClick, variant = "solid", className = "" }) {
  const base =
    "px-5 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none";

  const styles =
    variant === "outline"
      ? "border border-gray-400 text-gray-700 hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
