import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../Layouts/DashboardLayout";
 
export default function StaffManagement() {
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "John Maina",
      email: "john@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Mary Wanjiku",
      email: "mary@gmail.com",
      role: "Cashier",
      status: "Active",
    },
  ]);

  return (
    <DashboardLayout>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Staff Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FaPlus />
          Add Staff
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {staff.map((user) => (
              <tr
                key={user.id}
                className="border-t"
              >
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.role}</td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-4 flex gap-3">
                  <button>
                    <FaEdit />
                  </button>

                  <button className="text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</DashboardLayout>
  );
}