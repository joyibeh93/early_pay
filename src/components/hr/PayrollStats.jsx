import React from "react";

const PayrollStats = ({ payrollData }) => {
  const totalPayroll = payrollData.reduce((sum, emp) => sum + emp.netSalary, 0);
  const totalDeductions = payrollData.reduce((sum, emp) => sum + emp.deductions, 0);
  const totalBonuses = payrollData.reduce((sum, emp) => sum + emp.bonus, 0);
  const pendingPayments = payrollData.filter(emp => emp.status === "pending").length;

  const stats = [
    {
      label: "Total Payroll",
      value: `₦${totalPayroll.toLocaleString()}`,
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "💰",
    },
    {
      label: "Total Deductions",
      value: `₦${totalDeductions.toLocaleString()}`,
      color: "text-red-600",
      bg: "bg-red-50",
      icon: "📉",
    },
    {
      label: "Total Bonuses",
      value: `₦${totalBonuses.toLocaleString()}`,
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "🎁",
    },
    {
      label: "Pending Payments",
      value: pendingPayments,
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: "⏳",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
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

export default PayrollStats;
