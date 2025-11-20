import React, { useState } from "react";

export default function SignInPage() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
    role: "employee"
  });
  const [loginError, setLoginError] = useState("");

  const getRoleIcon = (role) => {
    switch(role) {
      case "hr": return "👥";
      case "manager": return "⭐";
      case "officer": return "👮";
      default: return "👤";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login form submitted:", loginForm);

    // ✅ Redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* Logo/Header */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">👤</span>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔒</span>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {/* Role Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Role
              </label>
              <select
                value={loginForm.role}
                onChange={(e) => setLoginForm({ ...loginForm, role: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500"
              >
                <option value="employee">Employee</option>
                <option value="hr">HR Officer</option>
                <option value="manager">Manager</option>
                <option value="officer">Security Officer</option>
              </select>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
            >
              Sign In
            </button>

            {/* Error Message */}
            {loginError && (
              <p className="text-red-500 text-center mt-2">{loginError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
