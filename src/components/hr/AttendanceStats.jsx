import React from "react";

const AttendanceStats = ({ attendanceRecords }) => {
  const attendanceStats = [
    {
      label: "Present Today",
      value: attendanceRecords.filter(
        (r) =>
          r.status !== "absent" &&
          r.date === new Date().toISOString().split("T")[0]
      ).length,
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "✅",
    },
    {
      label: "Clocked In",
      value: attendanceRecords.filter((r) => r.status === "in-progress").length,
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "🔄",
    },
    {
      label: "Completed",
      value: attendanceRecords.filter((r) => r.status === "completed").length,
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: "✔️",
    },
    {
      label: "Total Records",
      value: attendanceRecords.length,
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: "📊",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {attendanceStats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bg} rounded-xl p-6 border border-gray-200 shadow-sm`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl">{stat.icon}</span>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
          <p className="text-sm text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default AttendanceStats;
