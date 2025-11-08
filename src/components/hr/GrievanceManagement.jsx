// Grievance & Disciplinary Management Module
// src/components/hr/GrievanceManagement.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
} from "lucide-react";

export default function GrievanceManagement() {
  const [activeTab, setActiveTab] = useState("open");

  const grievances = {
    open: [
      {
        id: 1,
        employee: "Anonymous",
        type: "Workplace Harassment",
        priority: "high",
        filed: "2025-01-18",
        status: "under-investigation",
        description: "Complaint about inappropriate behavior from supervisor",
      },
      {
        id: 2,
        employee: "John Doe",
        type: "Salary Dispute",
        priority: "medium",
        filed: "2025-01-20",
        status: "pending",
        description: "Discrepancy in monthly salary calculation",
      },
    ],
    resolved: [
      {
        id: 3,
        employee: "Sarah Smith",
        type: "Work Schedule",
        priority: "low",
        filed: "2025-01-10",
        resolved: "2025-01-15",
        status: "resolved",
        resolution: "Schedule adjusted as requested",
      },
    ],
  };

  const stats = [
    { label: "Open Cases", value: "2", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
    { label: "Under Investigation", value: "1", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { label: "Resolved This Month", value: "8", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { label: "Avg. Resolution Time", value: "5 days", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  ];

  const GrievanceCard = ({ grievance }) => {
    const priorityColors = {
      high: "bg-red-100 text-red-700 dark:bg-red-900/30",
      medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30",
      low: "bg-green-100 text-green-700 dark:bg-green-900/30",
    };

    const statusColors = {
      "pending": "bg-gray-100 text-gray-700 dark:bg-gray-900/30",
      "under-investigation": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30",
      "resolved": "bg-green-100 text-green-700 dark:bg-green-900/30",
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {grievance.type}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Filed by: {grievance.employee}
            </p>
          </div>
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[grievance.priority]}`}>
              {grievance.priority}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[grievance.status]}`}>
              {grievance.status}
            </span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Filed:</span>
            <span className="font-medium text-gray-900 dark:text-white">{grievance.filed}</span>
          </div>
          {grievance.resolved && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Resolved:</span>
              <span className="font-medium text-gray-900 dark:text-white">{grievance.resolved}</span>
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {grievance.description || grievance.resolution}
        </p>

        {grievance.status !== "resolved" && (
          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Update Case
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Resolve
            </button>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Grievance & Disciplinary
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage employee grievances and disciplinary actions
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          New Case
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bg} rounded-xl p-6 border border-gray-200 dark:border-gray-700`}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        {["open", "resolved"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium capitalize ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {tab} ({grievances[tab].length})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {grievances[activeTab].map((grievance) => (
          <GrievanceCard key={grievance.id} grievance={grievance} />
        ))}
      </div>
    </div>
  );
}
