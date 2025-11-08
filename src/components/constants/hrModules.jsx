import {
  Clock,
  DollarSign,
  FileText,
  Users,
  Target,
  AlertCircle,
  TrendingUp,
  BookOpen
} from "lucide-react";

export const hrModules = [
  {
    id: 'attendance',
    name: 'Attendance',
    icon: Clock,
    color: 'from-blue-500 to-blue-600',
    description: 'Track time and attendance'
  },
  {
    id: 'payroll',
    name: 'Payroll',
    icon: DollarSign,
    color: 'from-green-500 to-green-600',
    description: 'Manage salary & payments'
  },
  {
    id: 'leave',
    name: 'Leave',
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
    description: 'Request and track leave'
  },
  {
    id: 'recruitment',
    name: 'Recruitment',
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
    description: 'Hiring and onboarding'
  },
  {
    id: 'performance',
    name: 'Performance',
    icon: Target,
    color: 'from-red-500 to-red-600',
    description: 'Reviews and evaluations'
  },
  {
    id: 'grievance',
    name: 'Grievance',
    icon: AlertCircle,
    color: 'from-orange-500 to-orange-600',
    description: 'Submit concerns'
  },
  {
    id: 'promotion',
    name: 'Promotion',
    icon: TrendingUp,
    color: 'from-teal-500 to-teal-600',
    description: 'Career advancement'
  },
  {
    id: 'learning',
    name: 'Learning',
    icon: BookOpen,
    color: 'from-pink-500 to-pink-600',
    description: 'Training & development'
  }
];
