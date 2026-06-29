import React, { useState, useEffect } from "react";

export default function AddStaffModal({
  isOpen,
  onClose,
  onSave,
  editingStaff,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Cashier",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (editingStaff) {
      setFormData({
        name: editingStaff.name || "",
        email: editingStaff.email || "",
        phone: editingStaff.phone || "",
        role: editingStaff.role || "Cashier",
        password: "",
        confirmPassword: "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "Cashier",
        password: "",
        confirmPassword: "",
      });
    }
  }, [editingStaff]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !editingStaff &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">
          {editingStaff ? "Edit Staff" : "Add Staff"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option value="Admin">Admin</option>
              <option value="Cashier">Cashier</option>
            </select>

            {!editingStaff && (
              <>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                  required
                />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                  required
                />
              </>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              {editingStaff ? "Update Staff" : "Create Staff"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}