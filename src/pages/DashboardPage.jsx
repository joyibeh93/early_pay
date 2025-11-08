import React, { useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import TabNavigation from "../components/dashboard/TabNavigation";
import EarlyPayStats from "../components/dashboard/EarlyPayStats";
import WithdrawalForm from "../components/dashboard/WithdrawalForm";
import TransactionHistory from "../components/dashboard/TransactionHistory";
import HRStats from "../components/dashboard/HRStats";
import HRModulesGrid from "../components/dashboard/HRModulesGrid";
import ModuleDetailView from "../components/dashboard/ModuleDetailView";
import { hrModules } from "../components/constants/hrModules";
import { formatCurrency } from "../utils/formatters";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("early-pay");
  const [selectedHRModule, setSelectedHRModule] = useState(null);

  const userData = {
    name: "John Doe",
    grossIncome: 400000,
    availableBalance: 200000,
    lastUpdated: "2025-01-19",
    employeeId: "EP-2025-001",
    company: "Tech Solutions Ltd",
  };

  const [bankAccounts] = useState([
    { id: 1, name: "Access Bank", number: "**** **** **** 1234" },
    { id: 2, name: "GTBank", number: "**** **** **** 5678" },
    { id: 3, name: "First Bank", number: "**** **** **** 9012" },
  ]);

  const [transactions] = useState([
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
  ]);

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
      alert(`Maximum withdrawal amount is ${formatCurrency(userData.availableBalance)}`);
      return;
    }

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setWithdrawAmount("");
    setSelectedBank("");
    setIsProcessing(false);
    alert("Withdrawal request submitted successfully!");
  };

  if (selectedHRModule) {
    const module = hrModules.find(m => m.id === selectedHRModule);
    return <ModuleDetailView module={module} onClose={() => setSelectedHRModule(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader userData={userData} onRefresh={() => alert('Refreshing...')} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'early-pay' && (
          <>
            <EarlyPayStats
              userData={userData}
              showBalance={showBalance}
              setShowBalance={setShowBalance}
              totalWithdrawn={calculateTotalWithdrawn()}
            />
            <WithdrawalForm
              withdrawAmount={withdrawAmount}
              setWithdrawAmount={setWithdrawAmount}
              selectedBank={selectedBank}
              setSelectedBank={setSelectedBank}
              bankAccounts={bankAccounts}
              userData={userData}
              isProcessing={isProcessing}
              onSubmit={handleWithdrawal}
            />
            <TransactionHistory transactions={transactions} />
          </>
        )}

        {activeTab === 'hr-modules' && (
          <>
            <HRStats />
            <HRModulesGrid modules={hrModules} onModuleClick={setSelectedHRModule} />
          </>
        )}
      </div>
    </div>
  );
}
