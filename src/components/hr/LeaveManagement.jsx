// Leave Management Module
// src/components/hr/LeaveManagement.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Plus,
  Filter,
  Download,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Eye,
} from "lucide-react";

export default function LeaveManagement() {
  const [activeTab, setActiveTab] = useState("pending");
  const [showModal, setShowModal] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);

  const leaveRequests = {
    pending: [
      {
        id: 1,
        employee: "John Doe",
        department: "Engineering",
        type: "Sick Leave",
        startDate: "2025-01-25",
        endDate: "2025-01-27",
        days: 3,
        reason: "Medical appointment and recovery",
        status: "pending",
      },
      {
        id: 2,
        employee: "Sarah Smith",
        department: "Marketing",
        type: "Annual Leave",
        startDate: "2025-02-10",
        endDate: "2025-02-20",
        days: 10,
        reason: "Family vacation",
        status: "pending",
      },
    ],
    approved: [
      {
        id: 3,
        employee: "Mike Johnson",
        department: "Sales",
        type: "Annual Leave",
        startDate: "2025-01-20",
        endDate: "2025-01-24",
        days: 5,
        reason: "Personal matters",
        status: "approved",
        approvedBy: "HR Manager",
        approvedDate: "2025-01-15",
      },
    ],
    rejected: [
      {
        id: 4,
        employee: "Emma Wilson",
        department: "Finance",
        type: "Emergency Leave",
        startDate: "2025-01-22",
        endDate: "2025-01-23",
        days: 2,
        reason: "Not enough notice provided",
        status: "rejected",
        rejectedBy: "HR Manager",
        rejectedDate: "2025-01-18",
      },
    ],
  };

  const leaveStats = [
    { label: "Pending Requests", value: "24", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { label: "Approved This Month", value: "45", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { label: "Rejected", value: "3", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
    { label: "Average Days", value: "8.5", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  ];

  const handleApprove = (id) => {
    alert(`Leave request ${id} approved!`);
  };

  const handleReject = (id) => {
    alert(`Leave request ${id} rejected!`);
  };

  const LeaveCard = ({ leave }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {leave.employee}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {leave.department}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          leave.status === "pending"
            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
            : leave.status === "approved"
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
        }`}>
          {leave.status}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Leave Type:</span>
          <span className="font-medium text-gray-900 dark:text-white">{leave.type}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Duration:</span>
          <span className="font-medium text-gray-900 dark:text-white">{leave.days} days</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Dates:</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {leave.startDate} to {leave.endDate}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span className="font-medium">Reason:</span> {leave.reason}
      </p>

      {leave.status === "pending" && (
        <div className="flex gap-2">
          <button
            onClick={() => handleApprove(leave.id)}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" />
            Approve
          </button>
          <button
            onClick={() => handleReject(leave.id)}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <XCircle className="w-4 h-4" />
            Reject
          </button>
          <button
            onClick={() => {
              setSelectedLeave(leave);
              setShowModal(true);
            }}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Leave Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage employee leave requests and approvals
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {leaveStats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} rounded-xl p-6 border border-gray-200 dark:border-gray-700`}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {stat.label}
            </p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by employee name..."
            className="flex-1 bg-transparent border-none outline-none text-gray-700 dark:text-gray-300"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        {["pending", "approved", "rejected"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium transition-colors capitalize ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            {tab} ({leaveRequests[tab].length})
          </button>
        ))}
      </div>

      {/* Leave Requests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {leaveRequests[activeTab].map((leave) => (
          <LeaveCard key={leave.id} leave={leave} />
        ))}
      </div>

      {leaveRequests[activeTab].length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            No {activeTab} leave requests
          </p>
        </div>
      )}
    </div>
  );
}
