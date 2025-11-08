import React from "react";
import { TrendingUp, Wallet, ArrowDownCircle, Eye, EyeOff, Calendar } from "lucide-react";
import StatsCard from "./cards/StatsCard";
import { formatCurrency } from "../../utils/formatters";

const EarlyPayStats = ({ userData, showBalance, setShowBalance, totalWithdrawn }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    />

    <StatsCard
      icon={Wallet}
      title="Available to Withdraw"
      value={showBalance ? formatCurrency(userData.availableBalance) : "₦ •••••"}
      subtitle="50% of Gross Income"
      gradient={true}
      actions={
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="text-white/80 hover:text-white transition-colors"
        >
          {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
        </button>
      }
    />

    <StatsCard
      icon={ArrowDownCircle}
      title="Total Withdrawn"
      value={formatCurrency(totalWithdrawn)}
      iconBgColor="from-purple-500 to-purple-600"
      badge={
        <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
          This Month
        </span>
      }
    />
  </div>
);

export default EarlyPayStats;
