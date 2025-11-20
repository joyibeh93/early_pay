import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();  // ← Add this!

  const [signUpForm, setSignUpForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
    department: "",
    role: "employee"
  });

  const [signUpErrors, setSignUpErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const getRoleIcon = (role) => {
    switch(role) {
      case "hr": return "👥";
      case "manager": return "⭐";
      case "officer": return "👮";
      default: return "👤";
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!signUpForm.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!signUpForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signUpForm.email)) {
      errors.email = "Email is invalid";
    }

    if (!signUpForm.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[0-9]{11}$/.test(signUpForm.phone.replace(/\s/g, ""))) {
      errors.phone = "Phone number must be 11 digits";
    }

    if (!signUpForm.username.trim()) {
      errors.username = "Username is required";
    }

    if (!signUpForm.password) {
      errors.password = "Password is required";
    } else if (signUpForm.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (signUpForm.password !== signUpForm.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!signUpForm.department.trim()) {
      errors.department = "Department is required";
    }

    setSignUpErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Sign up form submitted:", signUpForm);

      alert(`Account created successfully for ${signUpForm.fullName}!`);

      // 🚀 Redirect to dashboard after successful Sign Up
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 max-h-[90vh] overflow-y-auto">
          {/* Logo/Header */}
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">📝</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">Join the attendance system</p>
          </div>

          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">👤</span>
                <input
                  type="text"
                  value={signUpForm.fullName}
                  onChange={(e) => setSignUpForm({ ...signUpForm, fullName: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3 border ${signUpErrors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="John Doe"
                />
              </div>
              {signUpErrors.fullName && <p className="text-red-500 text-xs mt-1">{signUpErrors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📧</span>
                <input
                  type="email"
                  value={signUpForm.email}
                  onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3 border ${signUpErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="john@company.com"
                />
              </div>
              {signUpErrors.email && <p className="text-red-500 text-xs mt-1">{signUpErrors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">📱</span>
                <input
                  type="tel"
                  value={signUpForm.phone}
                  onChange={(e) => setSignUpForm({ ...signUpForm, phone: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3 border ${signUpErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="08012345678"
                />
              </div>
              {signUpErrors.phone && <p className="text-red-500 text-xs mt-1">{signUpErrors.phone}</p>}
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🏢</span>
                <input
                  type="text"
                  value={signUpForm.department}
                  onChange={(e) => setSignUpForm({ ...signUpForm, department: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3 border ${signUpErrors.department ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="Engineering"
                />
              </div>
              {signUpErrors.department && <p className="text-red-500 text-xs mt-1">{signUpErrors.department}</p>}
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🆔</span>
                <input
                  type="text"
                  value={signUpForm.username}
                  onChange={(e) => setSignUpForm({ ...signUpForm, username: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3 border ${signUpErrors.username ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="john.doe"
                />
              </div>
              {signUpErrors.username && <p className="text-red-500 text-xs mt-1">{signUpErrors.username}</p>}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Register as
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
                  {getRoleIcon(signUpForm.role)}
                </span>
                <select
                  value={signUpForm.role}
                  onChange={(e) => setSignUpForm({ ...signUpForm, role: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 appearance-none bg-white cursor-pointer"
                >
                  <option value="employee">Employee</option>
                  <option value="officer">Officer</option>
                  <option value="manager">Manager</option>
                  <option value="hr">HR</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  ▼
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Choose the role that best describes your position</p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={signUpForm.password}
                  onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                  className={`w-full pl-12 pr-12 py-3 border ${signUpErrors.password ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {signUpErrors.password && <p className="text-red-500 text-xs mt-1">{signUpErrors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔒</span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={signUpForm.confirmPassword}
                  onChange={(e) => setSignUpForm({ ...signUpForm, confirmPassword: e.target.value })}
                  className={`w-full pl-12 pr-12 py-3 border ${signUpErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 outline-none`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {signUpErrors.confirmPassword && <p className="text-red-500 text-xs mt-1">{signUpErrors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
            >
              Create Account
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
