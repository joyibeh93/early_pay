// Talent Management Module
// src/components/hr/TalentManagement.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Star,
} from "lucide-react";

export default function TalentManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const employees = [
    {
      id: 1,
      name: "John Doe",
      position: "Senior Software Engineer",
      department: "Engineering",
      email: "john.doe@company.com",
      phone: "+234 801 234 5678",
      location: "Lagos",
      joinDate: "2023-01-15",
      performance: 4.5,
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      position: "Marketing Manager",
      department: "Marketing",
      email: "sarah.smith@company.com",
      phone: "+234 802 345 6789",
      location: "Abuja",
      joinDate: "2022-06-20",
      performance: 4.8,
      status: "active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Sales Executive",
      department: "Sales",
      email: "mike.johnson@company.com",
      phone: "+234 803 456 7890",
      location: "Port Harcourt",
      joinDate: "2023-09-10",
      performance: 4.2,
      status: "active",
    },
  ];

  const stats = [
    { label: "Total Employees", value: "180", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { label: "New Hires (This Month)", value: "5", color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { label: "Open Positions", value: "12", color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
    { label: "Avg. Performance", value: "4.3/5", color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
  ];

  const departments = ["all", "Engineering", "Marketing", "Sales", "Finance", "HR"];

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDepartment === "all" || emp.department === selectedDepartment;
    return matchesSearch && matchesDept;
  });

  const EmployeeCard = ({ employee }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xl">
            {employee.name.split(" ").map(n => n[0]).join("")}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {employee.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {employee.position}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {employee.performance}
              </span>
            </div>
          </div>

          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Briefcase className="w-4 h-4" />
              {employee.department}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Mail className="w-4 h-4" />
              {employee.email}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4" />
              {employee.phone}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              {employee.location}
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              View Profile
            </button>
            <button className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
              Edit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Talent Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage employee information and recruitment
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          <UserPlus className="w-4 h-4" />
          Add Employee
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

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-gray-700 dark:text-gray-300"
          />
        </div>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>
              {dept === "all" ? "All Departments" : dept}
            </option>
          ))}
        </select>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">No employees found</p>
        </div>
      )}
    </div>
  );
}
