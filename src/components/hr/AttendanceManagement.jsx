// Attendance Management Module
// src/components/hr/AttendanceManagement.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Download,
  Filter,
  CheckCircle,
  XCircle,
  AlertCircle,
  Users,
} from "lucide-react";

export default function AttendanceManagement() {
  const [selectedDate, setSelectedDate] = useState("2025-01-20");
  const [viewMode, setViewMode] = useState("daily"); // daily, weekly, monthly

  const attendanceData = [
    {
      id: 1,
      employee: "John Doe",
      department: "Engineering",
      checkIn: "09:00 AM",
      checkOut: "05:30 PM",
      status: "present",
      hours: "8.5h",
    },
    {
      id: 2,
      employee: "Sarah Smith",
      department: "Marketing",
      checkIn: "09:15 AM",
      checkOut: "05:45 PM",
      status: "present",
      hours: "8.5h",
    },
    {
      id: 3,
      employee: "Mike Johnson",
      department: "Sales",
      checkIn: "10:30 AM",
      checkOut: "06:00 PM",
      status: "late",
      hours: "7.5h",
    },
    {
      id: 4,
      employee: "Emma Wilson",
      department: "Finance",
      checkIn: "-",
      checkOut: "-",
      status: "absent",
      hours: "0h",
    },
    {
      id: 5,
      employee: "David Brown",
      department: "HR",
      checkIn: "09:05 AM",
      checkOut: "-",
      status: "present",
      hours: "In Progress",
    },
  ];

  const attendanceStats = [
    { label: "Present Today", value: "156/180", percentage: "86.7%", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { label: "Late Arrivals", value: "8", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { label: "Absent", value: "16", color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
    { label: "Average Hours", value: "8.2h", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      present: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      late: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      absent: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    };
    return styles[status] || styles.present;
  };

  const getStatusIcon = (status) => {
    if (status === "present") return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (status === "late") return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    return <XCircle className="w-5 h-5 text-red-600" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Attendance Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and monitor employee attendance
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {attendanceStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.bg} rounded-xl p-6 border border-gray-200 dark:border-gray-700`}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {stat.label}
            </p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            {stat.percentage && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {stat.percentage}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Date Selector and View Mode */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          {["daily", "weekly", "monthly"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 py-2 rounded-xl font-medium transition-colors capitalize ${
                viewMode === mode
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Check Out
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Hours
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {attendanceData.map((record, index) => (
                <motion.tr
                  key={record.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {record.employee.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {record.employee}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {record.department}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                    {record.checkIn}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                    {record.checkOut}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                    {record.hours}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(record.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(record.status)}`}>
                        {record.status}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-start gap-3">
          <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Today's Summary
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Out of 180 employees, 156 are present (86.7%), 8 arrived late, and 16 are absent.
              Average working hours: 8.2 hours per employee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
