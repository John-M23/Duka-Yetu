
import React from "react"
import DashboardLayout from "../../Layouts/DashboardLayout";
import { useState } from "react";

export default function SecuritySettings() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

    autoLogout: true,
    requireDailyLogin: true,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggle = (field) => {
    setForm((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handlePasswordChange = () => {
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Password updated:", form);
    // API CALL HERE
  };

  const logoutAllDevices = () => {
    console.log("Logging out all devices");
    // API CALL HERE
  };

  return (
    <DashboardLayout>
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Security Settings
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-8">

        {/* PASSWORD SECTION */}
        <div>
          <h2 className="font-semibold mb-4">
            Change Password
          </h2>

          <div className="space-y-3">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={form.currentPassword}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              onClick={handlePasswordChange}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Update Password
            </button>
          </div>
        </div>

        {/* LOGIN SECURITY */}
        <div>
          <h2 className="font-semibold mb-4">
            Login Security
          </h2>

          <label className="flex gap-2 mb-2">
            <input
              type="checkbox"
              checked={form.autoLogout}
              onChange={() => toggle("autoLogout")}
            />
            Auto logout after inactivity (30 min)
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={form.requireDailyLogin}
              onChange={() => toggle("requireDailyLogin")}
            />
            Require login every 24 hours
          </label>
        </div>

        {/* ACTIVE SESSIONS */}
        <div>
          <h2 className="font-semibold mb-4">
            Active Sessions
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between border p-2 rounded">
              <span>Chrome - Nairobi</span>
              <span className="text-green-600">
                Current
              </span>
            </div>

            <div className="flex justify-between border p-2 rounded">
              <span>Android Device</span>
              <button className="text-red-500">
                Logout
              </button>
            </div>
          </div>

          <button
            onClick={logoutAllDevices}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout All Devices
          </button>
        </div>

        {/* SAVE NOTE */}
        <p className="text-xs text-gray-500">
          Security settings protect your business data and
          staff access.
        </p>
      </div>
    </div>
    </DashboardLayout>
  );
}