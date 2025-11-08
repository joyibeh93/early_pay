import React from "react";
import { formatCurrency } from "../../utils/formatters";

const WithdrawalForm = ({
  withdrawAmount,
  setWithdrawAmount,
  selectedBank,
  setSelectedBank,
  bankAccounts,
  userData,
  isProcessing,
  onSubmit
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
      Request Early Salary
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Amount to Withdraw
        </label>
        <input
          type="number"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          max={userData.availableBalance}
        />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Max: {formatCurrency(userData.availableBalance)}
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Bank Account
        </label>
        <select
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
          <option value="">Choose bank account</option>
          {bankAccounts.map((bank) => (
            <option key={bank.id} value={bank.id}>
              {bank.name} - {bank.number}
            </option>
          ))}
        </select>
      </div>
    </div>
    <button
      onClick={onSubmit}
      disabled={isProcessing}
      className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
    >
      {isProcessing ? "Processing..." : "Withdraw Now"}
    </button>
  </div>
);

export default WithdrawalForm;
