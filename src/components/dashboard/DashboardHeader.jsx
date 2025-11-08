import React from "react";
import { RefreshCw, Building } from "lucide-react";

const DashboardHeader = ({ userData, onRefresh }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
        Welcome back, {userData.name}! 👋
      </h1>
      <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
        <Building className="w-4 h-4" />
        {userData.company} • ID: {userData.employeeId}
      </p>
    </div>
    <button
      onClick={onRefresh}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
    >
      <RefreshCw className="w-4 h-4" />
      Refresh
    </button>
  </div>
);

export default DashboardHeader;
