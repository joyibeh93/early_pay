// StatsCard Component – Reusable statistics card
// src/components/dashboard/StatsCard.jsx

import React from "react";
import { motion } from "framer-motion";

export default function StatsCard({
  icon: Icon,
  title,
  value,
  subtitle,
  iconBgColor = "from-blue-500 to-blue-600",
  badge,
  gradient = false,
  actions,
  itemVariants
}) {
  const baseClasses = gradient
    ? "bg-gradient-to-br from-green-500 to-green-600 text-white"
    : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700";

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`${baseClasses} rounded-2xl p-6 shadow-lg relative overflow-hidden`}
    >
      {gradient && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      )}

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${gradient ? 'bg-white/20 backdrop-blur-sm' : `bg-gradient-to-br ${iconBgColor}`} rounded-xl flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${gradient ? 'text-white' : 'text-white'}`} />
          </div>
          {badge && (
            <span className={`text-xs ${gradient ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'} flex items-center gap-1`}>
              {badge}
            </span>
          )}
          {actions && actions}
        </div>

        <h3 className={`text-sm font-medium mb-2 ${gradient ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'}`}>
          {title}
        </h3>

        <p className={`text-3xl font-bold ${gradient ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {value}
        </p>

        {subtitle && (
          <p className={`text-sm mt-2 ${gradient ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
