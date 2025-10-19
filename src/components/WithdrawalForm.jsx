// WithdrawalForm Component – Withdrawal request form
// src/components/dashboard/WithdrawalForm.jsx

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, AlertCircle, ArrowDownCircle, CreditCard } from "lucide-react";

export default function WithdrawalForm({
  withdrawAmount,
  setWithdrawAmount,
  selectedBank,
  setSelectedBank,
  isProcessing,
  maxAmount,
  formatCurrency,
  bankAccounts,
  onSubmit,
  itemVariants,
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Request Withdrawal
        </h2>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <p className="font-semibold mb-1">Transaction Fee: ₦500</p>
            <p>
              A flat fee of ₦500 applies to each withdrawal. Funds are credited
              within 2-4 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Withdrawal Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
              ₦
            </span>
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              max={maxAmount}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              placeholder="Enter amount"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Maximum: {formatCurrency(maxAmount)}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Bank Account
          </label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
            >
              <option value="">Select bank account</option>
              {bankAccounts.map((bank) => (
                <option key={bank.id} value={bank.id}>
                  {bank.name} - {bank.number}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <motion.button
        onClick={onSubmit}
        disabled={isProcessing}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ArrowDownCircle className="w-5 h-5" />
            Withdraw Now
          </>
        )}
      </motion.button>
    </motion.div>
  );
}
