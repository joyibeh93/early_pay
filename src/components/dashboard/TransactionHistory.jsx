import React from "react";
import { formatCurrency } from "../../utils/formatters";

const TransactionHistory = ({ transactions }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
      Recent Transactions
    </h2>
    <div className="space-y-4">
      {transactions.map((txn) => (
        <div
          key={txn.id}
          className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
        >
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {formatCurrency(txn.amount)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {txn.bankAccount} • {txn.date}
            </p>
          </div>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
            {txn.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionHistory;
