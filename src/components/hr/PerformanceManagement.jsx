// Performance Management Module
// src/components/hr/PerformanceManagement.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Award,
  Calendar,
  Plus,
  Star,
  FileText,
} from "lucide-react";

export default function PerformanceManagement() {
  const [activeTab, setActiveTab] = useState("reviews");

  const performanceData = {
    reviews: [
      {
        id: 1,
        employee: "John Doe",
        department: "Engineering",
        reviewer: "Tech Lead",
        period: "Q1 2025",
        dueDate: "2025-01-30",
        status: "pending",
        score: null,
      },
      {
        id: 2,
        employee: "Sarah Smith",
        department: "Marketing",
        reviewer: "Marketing Director",
        period: "Q1 2025",
        dueDate: "2025-01-28",
        status: "completed",
        score: 4.5,
      },
    ],
    goals: [
      {
        id: 1,
        employee: "Mike Johnson",
        goal: "Increase sales by 20%",
        progress: 75,
        deadline: "2025-03-31",
        status: "on-track",
      },
      {
        id: 2,
        employee: "Emma Wilson",
        goal: "Complete certification training",
        progress: 40,
        deadline: "2025-02-15",
        status: "at-risk",
      },
    ],
  };

  const stats = [
    { label: "Pending Reviews", value: "8", color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { label: "Completed Reviews", value: "45", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { label: "Average Score", value: "4.2/5", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { label: "Goals On Track", value: "82%", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  const ReviewCard = ({ review }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {review.employee}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {review.department}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          review.status === "pending"
            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30"
            : "bg-green-100 text-green-700 dark:bg-green-900/30"
        }`}>
          {review.status}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Period:</span>
          <span className="font-medium text-gray-900 dark:text-white">{review.period}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Reviewer:</span>
          <span className="font-medium text-gray-900 dark:text-white">{review.reviewer}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Due Date:</span>
          <span className="font-medium text-gray-900 dark:text-white">{review.dueDate}</span>
        </div>
        {review.score && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Score:</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-gray-900 dark:text-white">{review.score}/5</span>
            </div>
          </div>
        )}
      </div>

      {review.status === "pending" && (
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Complete Review
        </button>
      )}
      {review.status === "completed" && (
        <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
          View Details
        </button>
      )}
    </motion.div>
  );

  const GoalCard = ({ goal }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {goal.goal}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{goal.employee}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          goal.status === "on-track"
            ? "bg-green-100 text-green-700 dark:bg-green-900/30"
            : "bg-red-100 text-red-700 dark:bg-red-900/30"
        }`}>
          {goal.status}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">Progress</span>
          <span className="font-medium text-gray-900 dark:text-white">{goal.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${
              goal.progress >= 75 ? "bg-green-500" : goal.progress >= 50 ? "bg-yellow-500" : "bg-red-500"
            }`}
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-600 dark:text-gray-400">Deadline:</span>
        <span className="font-medium text-gray-900 dark:text-white">{goal.deadline}</span>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Performance Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track employee performance and goals
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Schedule Review
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
        {["reviews", "goals"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium capitalize ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeTab === "reviews" && performanceData.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
        {activeTab === "goals" && performanceData.goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
}
