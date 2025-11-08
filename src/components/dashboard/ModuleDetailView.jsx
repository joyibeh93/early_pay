import React from "react";
import { X } from "lucide-react";

const ModuleDetailView = ({ module, onClose }) => {
  const Icon = module.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${module.color}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {module.name} Management
                </h1>
                <p className="text-gray-600 dark:text-gray-400">{module.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg text-center">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center mx-auto mb-6`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {module.name} Module
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            This module provides comprehensive {module.name.toLowerCase()} management features.
            Connect your existing {module.name} component here or build new functionality.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Back to Dashboard
            </button>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetailView;
