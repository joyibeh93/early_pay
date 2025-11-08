import React from "react";
import { ChevronRight } from "lucide-react";

const HRModuleCard = ({ module, onClick }) => {
  const Icon = module.icon;
  return (
    <button
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-500 transition-all text-left group"
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className="text-white" size={24} />
      </div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
        {module.name}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{module.description}</p>
      <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
        <span>Access</span>
        <ChevronRight size={16} />
      </div>
    </button>
  );
};

export default HRModuleCard;
