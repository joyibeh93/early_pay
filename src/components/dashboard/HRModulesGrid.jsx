import React from "react";
import HRModuleCard from "./cards/HRModuleCard";

const HRModulesGrid = ({ modules, onModuleClick }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
      HR Management Modules
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {modules.map((module) => (
        <HRModuleCard
          key={module.id}
          module={module}
          onClick={() => onModuleClick(module.id)}
        />
      ))}
    </div>
  </div>
);

export default HRModulesGrid;
