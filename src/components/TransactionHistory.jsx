// TransactionHistory Component – Transaction history table
// src/components/dashboard/TransactionHistory.jsx

import React from "react";
import { motion } from "framer-motion";
import { Clock, Download, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function TransactionHistory({
  transactions,
  formatCurrency,
  itemVariants,
}) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case "failed":
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50 dark:bg-green-900/20";
      case "pending":
        return "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20";
      case "failed":
        return "text-red-600 bg-red-50 dark:bg-red-900/20";
      default:
        return "text-gray-600 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Transaction History
          </h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Fee
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Bank
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Reference
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <motion.tr
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="py-4 px-4 text-sm text-gray-900 dark:text-white">
                  {new Date(transaction.date).toLocaleDateString("en-GB")}
                </td>
                <td className="py-4 px-4 text-sm font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(transaction.amount)}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                  {formatCurrency(transaction.fee)}
                </td>
                <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                  {transaction.bankAccount}
                </td>
                <td className="py-4 px-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
                  {transaction.reference}
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {getStatusIcon(transaction.status)}
                    {transaction.status.charAt(0).toUpperCase() +
                      transaction.status.slice(1)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">No transactions yet</p>
        </div>
      )}
    </motion.div>
  );
}

