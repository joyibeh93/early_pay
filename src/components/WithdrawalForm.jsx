// WithdrawalForm Component – Withdrawal request form with Add Bank option
// src/components/dashboard/WithdrawalForm.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, AlertCircle, ArrowDownCircle, CreditCard, Plus, X } from "lucide-react";

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
  onAddBank, // New prop for adding bank accounts
}) {
  const [showAddBank, setShowAddBank] = useState(false);
  const [newBankData, setNewBankData] = useState({
    bankName: "",
    accountNumber: "",
    accountName: "",
  });

  const handleAddBank = () => {
    if (newBankData.bankName && newBankData.accountNumber && newBankData.accountName) {
      if (onAddBank) {
        onAddBank(newBankData);
      }
      // Reset form
      setNewBankData({ bankName: "", accountNumber: "", accountName: "" });
      setShowAddBank(false);
    } else {
      alert("Please fill all bank details");
    }
  };

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
              onChange={(e) => {
                if (e.target.value === "add_new") {
                  setShowAddBank(true);
                  setSelectedBank("");
                } else {
                  setSelectedBank(e.target.value);
                }
              }}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
            >
              <option value="">Select bank account</option>
              {bankAccounts.map((bank) => (
                <option key={bank.id} value={bank.id}>
                  {bank.name} - {bank.number}
                </option>
              ))}
              <option value="add_new" className="text-blue-600 font-semibold">
                + Add New Bank Account
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Add New Bank Account Modal/Section */}
      <AnimatePresence>
        {showAddBank && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Add New Bank Account
                </h3>
                <button
                  onClick={() => setShowAddBank(false)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    value={newBankData.bankName}
                    onChange={(e) => setNewBankData({ ...newBankData, bankName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="e.g., Access Bank"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={newBankData.accountNumber}
                    onChange={(e) => setNewBankData({ ...newBankData, accountNumber: e.target.value })}
                    maxLength={10}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="0123456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Account Name
                  </label>
                  <input
                    type="text"
                    value={newBankData.accountName}
                    onChange={(e) => setNewBankData({ ...newBankData, accountName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleAddBank}
                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Add Bank Account
                  </button>
                  <button
                    onClick={() => setShowAddBank(false)}
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
