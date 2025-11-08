import React from "react";
import { Users, Clock, FileText, Award } from "lucide-react";

const HRStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-2">
        <Users className="text-blue-600" size={24} />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">248</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Total Employees</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-2">
        <Clock className="text-green-600" size={24} />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">95%</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Attendance Rate</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-2">
        <FileText className="text-purple-600" size={24} />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Pending Requests</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-2">
        <Award className="text-pink-600" size={24} />
        <span className="text-2xl font-bold text-gray-900 dark:text-white">8</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Active Courses</p>
    </div>
  </div>
);

export default HRStats;
