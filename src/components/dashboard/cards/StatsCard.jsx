import React from "react";

const StatsCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  gradient,
  actions,
  iconBgColor,
  badge
}) => (
  <div className={`${gradient ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : 'bg-white dark:bg-gray-800'} rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${iconBgColor || 'from-blue-500 to-blue-600'}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {actions}
    </div>
    <h3 className={`text-sm font-medium mb-2 ${gradient ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
      {title}
    </h3>
    <p className={`text-2xl font-bold mb-1 ${gradient ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
      {value}
    </p>
    {subtitle && (
      <p className={`text-sm ${gradient ? 'text-white/70' : 'text-gray-500'}`}>{subtitle}</p>
    )}
    {badge && (
      <div className={`mt-3 flex items-center gap-2 text-sm ${gradient ? 'text-white/90' : 'text-gray-600'}`}>
        {badge}
      </div>
    )}
  </div>
);

export default StatsCard;
