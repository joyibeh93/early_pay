// Exit Management Module
// src/components/hr/ExitManagement.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LogOut,
  Calendar,
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
} from "lucide-react";

export default function ExitManagement() {
  const [activeTab, setActiveTab] = useState("pending");

  const exitData = {
    pending: [
      {
        id: 1,
        employee: "John Doe",
        department: "Engineering",
        position: "Senior Developer",
        resignationDate: "2025-01-15",
        lastWorkingDay: "2025-02-15",
        reason: "Better opportunity",
        interviewScheduled: true,
        interviewDate: "2025-02-10",
        status: "pending",
      },
    ],
    completed: [
      {
        id: 2,
        employee: "Sarah Smith",
        department: "Marketing",
        position: "Marketing Manager",
        resignationDate: "2024-12-01",
        lastWorkingDay: "2025-01-01",
        reason: "Relocation",
        interviewCompleted: true,
        exitClearance: "completed",
        status: "completed",
      },
    ],
  };

  const stats = [
    { label: "Pending Exits", value: "3", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { label: "Completed This Month", value: "5", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { label: "Turnover Rate", value: "2.8%", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
    { label: "Avg. Notice Period", value: "30 days", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  ];

  const ExitCard = ({ exit }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {exit.employee}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {exit.position} • {exit.department}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          exit.status === "pending"
            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30"
            : "bg-green-100 text-green-700 dark:bg-green-900/30"
        }`}>
          {exit.status}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Resignation Date:</span>
          <span className="font-medium text-gray-900 dark:text-white">{exit.resignationDate}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Last Working Day:</span>
          <span className="font-medium text-gray-900 dark:text-white">{exit.lastWorkingDay}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Reason:</span>
          <span className="font-medium text-gray-900 dark:text-white">{exit.reason}</span>
        </div>

        {exit.interviewScheduled && (
          <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-800 dark:text-blue-300">
              Exit Interview: {exit.interviewDate}
            </span>
          </div>
        )}

        {exit.interviewCompleted && (
          <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-800 dark:text-green-300">
              Exit Interview Completed
            </span>
          </div>
        )}
      </div>

      {exit.status === "pending" && (
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Schedule Interview
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
            View Checklist
          </button>
        </div>
      )}

      {exit.status === "completed" && (
        <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
          View Exit Report
        </button>
      )}
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Exit Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage employee resignations and exit process
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Record Exit
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bg} rounded-xl p-6 border border-gray-200 dark:border-gray-700`}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        {["pending", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium capitalize ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {tab} ({exitData[tab].length})
          </button>
        ))}
      </div>

      {/* Exit Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {exitData[activeTab].map((exit) => (
          <ExitCard key={exit.id} exit={exit} />
        ))}
      </div>

      {/* Exit Process Checklist */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Exit Process Checklist
        </h3>
        <div className="space-y-3">
          {[
            "Conduct exit interview",
            "Collect company property",
            "Revoke system access",
            "Process final settlement",
            "Obtain clearance certificate",
            "Update records",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
