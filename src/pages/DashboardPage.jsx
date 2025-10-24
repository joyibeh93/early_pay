// Dashboard Main Component – Refactored with separate components
// src/pages/Dashboard.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Wallet,
  ArrowDownCircle,
  RefreshCw,
  Building,
  Eye,
  EyeOff,
  Calendar,
} from "lucide-react";
import StatsCard from "../components/StatsCard";
import WithdrawalForm from "../components/WithdrawalForm";
import TransactionHistory from "../components/TransactionHistory";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock user data
  const userData = {
    name: "John Doe",
    grossIncome: 400000, // ₦400,000
    availableBalance: 200000, // 50% of gross income
    lastUpdated: "2025-01-19",
    employeeId: "EP-2025-001",
    company: "Tech Solutions Ltd",
  };

  // Mock bank accounts
  const [bankAccounts, setBankAccounts] = useState([
    { id: 1, name: "Access Bank", number: "**** **** **** 1234" },
    { id: 2, name: "GTBank", number: "**** **** **** 5678" },
    { id: 3, name: "First Bank", number: "**** **** **** 9012" },
  ]);

  // Function to add new bank account
  const handleAddBank = (newBankData) => {
    const newBank = {
      id: bankAccounts.length + 1,
      name: newBankData.bankName,
      number: `**** **** **** ${newBankData.accountNumber.slice(-4)}`,
      fullAccountNumber: newBankData.accountNumber,
      accountName: newBankData.accountName,
    };
    setBankAccounts([...bankAccounts, newBank]);
    setSelectedBank(newBank.id.toString());
    alert(`Bank account added successfully! ${newBankData.bankName} - ${newBankData.accountName}`);
  };

  // Mock transaction history
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2025-01-15",
      amount: 50000,
      fee: 500,
      status: "completed",
      bankAccount: "Access Bank",
      reference: "TXN-2025-0115-001",
    },
    {
      id: 2,
      date: "2025-01-10",
      amount: 75000,
      fee: 500,
      status: "completed",
      bankAccount: "GTBank",
      reference: "TXN-2025-0110-001",
    },
    {
      id: 3,
      date: "2025-01-05",
      amount: 30000,
      fee: 500,
      status: "completed",
      bankAccount: "First Bank",
      reference: "TXN-2025-0105-001",
    },
    {
      id: 4,
      date: "2024-12-28",
      amount: 45000,
      fee: 500,
      status: "completed",
      bankAccount: "Access Bank",
      reference: "TXN-2024-1228-001",
    },
  ]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const calculateTotalWithdrawn = () => {
    return transactions
      .filter((t) => t.status === "completed")
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const handleWithdrawal = async () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (!selectedBank) {
      alert("Please select a bank account");
      return;
    }
    if (parseFloat(withdrawAmount) > userData.availableBalance) {
      alert(
        `Maximum withdrawal amount is ${formatCurrency(
          userData.availableBalance
        )}`
      );
      return;
    }

    setIsProcessing(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split("T")[0],
      amount: parseFloat(withdrawAmount),
      fee: 500,
      status: "pending",
      bankAccount: bankAccounts.find((b) => b.id === parseInt(selectedBank))
        ?.name,
      reference: `TXN-${new Date()
        .toISOString()
        .split("T")[0]
        .replace(/-/g, "")}-${String(transactions.length + 1).padStart(3, "0")}`,
    };

    setTransactions([newTransaction, ...transactions]);
    setWithdrawAmount("");
    setSelectedBank("");
    setIsProcessing(false);
    alert("Withdrawal request submitted successfully!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 sm:p-6 lg:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Welcome back, {userData.name}! 👋
            </h1>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
              <Building className="w-4 h-4" />
              {userData.company} • ID: {userData.employeeId}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </motion.button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gross Income */}
          <StatsCard
            icon={TrendingUp}
            title="Gross Monthly Income"
            value={formatCurrency(userData.grossIncome)}
            iconBgColor="from-blue-500 to-blue-600"
            badge={
              <>
                <Calendar className="w-3 h-3" />
                {userData.lastUpdated}
              </>
            }
            itemVariants={itemVariants}
          />

          {/* Available Balance */}
          <StatsCard
            icon={Wallet}
            title="Available to Withdraw"
            value={
              showBalance
                ? formatCurrency(userData.availableBalance)
                : "₦ •••••"
            }
            subtitle="50% of Gross Income"
            gradient={true}
            actions={
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {showBalance ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            }
            itemVariants={itemVariants}
          />

          {/* Total Withdrawn */}
          <StatsCard
            icon={ArrowDownCircle}
            title="Total Withdrawn"
            value={formatCurrency(calculateTotalWithdrawn())}
            iconBgColor="from-purple-500 to-purple-600"
            badge={
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                This Month
              </span>
            }
            itemVariants={itemVariants}
          />
        </div>

        {/* Withdrawal Form */}
        <WithdrawalForm
          withdrawAmount={withdrawAmount}
          setWithdrawAmount={setWithdrawAmount}
          selectedBank={selectedBank}
          setSelectedBank={setSelectedBank}
          isProcessing={isProcessing}
          maxAmount={userData.availableBalance}
          formatCurrency={formatCurrency}
          bankAccounts={bankAccounts}
          onSubmit={handleWithdrawal}
          itemVariants={itemVariants}
        />

        {/* Transaction History */}
        <TransactionHistory
          transactions={transactions}
          formatCurrency={formatCurrency}
          itemVariants={itemVariants}
        />
      </motion.div>
    </div>
  );
}
