import React, { useState, useEffect } from "react";

export default function AttendanceModule() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [attendanceRecords, setAttendanceRecords] = useState([
    {
      id: 1,
      employee: "John Doe",
      department: "Engineering",
      date: "2025-11-23",
      day: "Saturday",
      checkIn: "09:00 AM",
      checkOut: "05:30 PM",
      status: "completed",
      hours: 8.5,
    },
    {
      id: 2,
      employee: "Sarah Smith",
      department: "Marketing",
      date: "2025-11-23",
      day: "Saturday",
      checkIn: "09:15 AM",
      checkOut: "05:45 PM",
      status: "completed",
      hours: 8.5,
    },
    {
      id: 3,
      employee: "Mike Johnson",
      department: "Sales",
      date: "2025-11-23",
      day: "Saturday",
      checkIn: "10:30 AM",
      checkOut: null,
      status: "in-progress",
      hours: 0,
    },
  ]);

  const [todayRecord, setTodayRecord] = useState(null);
  const currentUser = { fullName: "Admin User", role: "hr" };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Check today's record for current user
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const record = attendanceRecords.find(
      (r) => r.date === today && r.employee === currentUser.fullName
    );
    setTodayRecord(record || null);
  }, [attendanceRecords]);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  const calculateHours = (checkIn, checkOut) => {
    const inTime = new Date(`2000-01-01 ${checkIn}`);
    const outTime = new Date(`2000-01-01 ${checkOut}`);
    const diff = (outTime - inTime) / (1000 * 60 * 60);
    return diff.toFixed(1);
  };

  const handleClockIn = () => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const timeString = formatTime(now);
    const dayName = getDayName(today);

    const newRecord = {
      id: attendanceRecords.length + 1,
      employee: currentUser.fullName,
      department: "Human Resources",
      date: today,
      day: dayName,
      checkIn: timeString,
      checkOut: null,
      status: "in-progress",
      hours: 0,
    };

    setAttendanceRecords([...attendanceRecords, newRecord]);
    setTodayRecord(newRecord);
  };

  const handleClockOut = () => {
    if (!todayRecord) return;

    const now = new Date();
    const timeString = formatTime(now);
    const hours = calculateHours(todayRecord.checkIn, timeString);

    const updatedRecords = attendanceRecords.map((record) =>
      record.id === todayRecord.id
        ? {
            ...record,
            checkOut: timeString,
            status: "completed",
            hours: parseFloat(hours),
          }
        : record
    );

    setAttendanceRecords(updatedRecords);
    setTodayRecord({
      ...todayRecord,
      checkOut: timeString,
      status: "completed",
      hours: parseFloat(hours),
    });
  };

  const getStatusBadge = (status) => {
    const styles = {
      completed: "bg-green-100 text-green-700",
      "in-progress": "bg-blue-100 text-blue-700",
      absent: "bg-red-100 text-red-700",
    };
    return styles[status] || styles.completed;
  };

  const attendanceStats = [
    {
      label: "Present Today",
      value: attendanceRecords.filter((r) => r.status !== "absent" && r.date === new Date().toISOString().split("T")[0]).length,
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      </div>

      {/* Stats */}
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

      {/* Clock Display and Clock In/Out */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Clock */}
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="text-center space-y-4">
            <div className="text-6xl">🕐</div>
            <div>
              <p className="text-5xl font-bold tracking-tight">
                {formatTime(currentTime)}
              </p>
              <p className="text-lg opacity-90 mt-2">
                {formatDate(currentTime)}
              </p>
            </div>
          </div>
        </div>

        {/* Clock In/Out Buttons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="space-y-4">
            <button
              onClick={handleClockIn}
              disabled={todayRecord !== null}
              className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                todayRecord
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
              }`}
            >
              <span className="text-2xl">⬇️</span>
              Clock In
            </button>
            <button
              onClick={handleClockOut}
              disabled={!todayRecord || todayRecord.checkOut !== null}
              className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all ${
                !todayRecord || todayRecord.checkOut
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
              }`}
            >
              <span className="text-2xl">⬆️</span>
              Clock Out
            </button>

            {/* Today's Status */}
            {todayRecord && (
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3">Today's Activity</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check In:</span>
                    <span className="font-semibold text-gray-900">{todayRecord.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check Out:</span>
                    <span className="font-semibold text-gray-900">
                      {todayRecord.checkOut || "In Progress"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hours:</span>
                    <span className="font-semibold text-gray-900">
                      {todayRecord.hours > 0 ? `${todayRecord.hours}h` : "Calculating..."}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(todayRecord.status)}`}>
                      {todayRecord.status}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Attendance Records Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">
              📋 Attendance Records
            </h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              📥 Export
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Employee
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Day
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Check In
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Check Out
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Hours
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {attendanceRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {record.employee.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{record.employee}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {record.department}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {new Date(record.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {record.day}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {record.checkIn}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {record.checkOut || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {record.hours > 0 ? `${record.hours}h` : "-"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                        record.status
                      )}`}
                    >
                      {record.status === "completed"
                        ? "✅"
                        : record.status === "in-progress"
                        ? "🔄"
                        : "❌"}{" "}
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <span className="text-3xl">📊</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Today's Summary
            </h3>
            <p className="text-sm text-gray-600">
              Total attendance records: {attendanceRecords.length} | Currently clocked in:{" "}
              {attendanceRecords.filter((r) => r.status === "in-progress").length} |
              Completed shifts: {attendanceRecords.filter((r) => r.status === "completed").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
