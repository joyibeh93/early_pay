import React from "react";
import { CreditCard, Grid } from "lucide-react";

const TabNavigation = ({ activeTab, setActiveTab }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg inline-flex gap-2">
    <button
      onClick={() => setActiveTab('early-pay')}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition ${
        activeTab === 'early-pay'
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <CreditCard className="w-5 h-5" />
      Early Pay
    </button>
    <button
      onClick={() => setActiveTab('hr-modules')}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition ${
        activeTab === 'hr-modules'
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <Grid className="w-5 h-5" />
      HR Modules
    </button>
  </div>
);

export default TabNavigation;
