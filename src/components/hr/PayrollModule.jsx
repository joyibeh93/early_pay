import React, { useState } from "react";
import PayrollStats from "./PayrollStats";
// import PayrollSummaryCard from "./PayrollSummaryCard";
// import PayrollQuickActions from "./PayrollQuickActions";
// import PayrollTable from "./PayrollTable";

const PayrollModule = () => {
  const [payrollData, setPayrollData] = useState([
    {
      id: 1,
      name: "John Doe",
      department: "Engineering",
      baseSalary: 500000,
      bonus: 50000,
      deductions: 45000,
      netSalary: 505000,
      status: "paid",
    },
    {
      id: 2,
      name: "Sarah Smith",
      department: "Marketing",
      baseSalary: 450000,
      bonus: 30000,
      deductions: 40000,
      netSalary: 440000,
      status: "paid",
    },
    {
      id: 3,
      name: "Mike Johnson",
      department: "Sales",
      baseSalary: 400000,
      bonus: 60000,
      deductions: 35000,
      netSalary: 425000,
      status: "pending",
    },
    {
      id: 4,
      name: "Emma Wilson",
      department: "Finance",
      baseSalary: 550000,
      bonus: 40000,
      deductions: 50000,
      netSalary: 540000,
      status: "paid",
    },
    {
      id: 5,
      name: "David Brown",
      department: "HR",
      baseSalary: 480000,
      bonus: 35000,
      deductions: 42000,
      netSalary: 473000,
      status: "pending",
    },
  ]);

  const currentMonth = new Date().toLocaleDateString("en-US", { month: "long" });
  const currentYear = new Date().getFullYear();

  const handleProcessPayroll = () => {
    const updatedData = payrollData.map(emp => ({
      ...emp,
      status: "paid"
    }));
    setPayrollData(updatedData);
    alert("Payroll processed successfully for all employees!");
  };

  const handleGenerateReport = () => {
    alert("Generating payroll report...");
    // Add report generation logic here
  };

  const handleAddEmployee = () => {
    alert("Opening Add Employee form...");
    // Add employee form logic here
  };

  const getStatusBadge = (status) => {
    const styles = {
      paid: "bg-green-100 text-green-700",
      pending: "bg-orange-100 text-orange-700",
      failed: "bg-red-100 text-red-700",
    };
    return styles[status] || styles.pending;
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <PayrollStats payrollData={payrollData} />

      {/* Payroll Summary and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PayrollSummaryCard month={currentMonth} year={currentYear} />
        <PayrollQuickActions
          onProcessPayroll={handleProcessPayroll}
          onGenerateReport={handleGenerateReport}
          onAddEmployee={handleAddEmployee}
        />
      </div>

      {/* Payroll Table */}
      <PayrollTable payrollData={payrollData} getStatusBadge={getStatusBadge} />

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-start gap-3">
          <span className="text-3xl">💼</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Payroll Summary
            </h3>
            <p className="text-sm text-gray-600">
              Total employees: {payrollData.length} |
              Paid: {payrollData.filter(e => e.status === "paid").length} |
              Pending: {payrollData.filter(e => e.status === "pending").length} |
              Total payout: ₦{payrollData.reduce((sum, e) => sum + e.netSalary, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollModule;
