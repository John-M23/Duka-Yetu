import { useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";

import {
  MdPhoneIphone,
  MdShoppingBag,
} from "react-icons/md";
import { FaRegClipboard, FaWallet } from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ------------------- COMPONENTS ------------------- */

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-500 flex items-center gap-2">
        {icon}
        {title}
      </p>
      <h2 className="text-3xl font-bold mt-3">{value}</h2>
    </div>
  );
}

/* ------------------- MOCK DATA ------------------- */

const revenueData = [
  { day: "Mon", revenue: 12000 },
  { day: "Tue", revenue: 18000 },
  { day: "Wed", revenue: 14000 },
  { day: "Thu", revenue: 22000 },
  { day: "Fri", revenue: 28000 },
  { day: "Sat", revenue: 35000 },
  { day: "Sun", revenue: 25000 },
];

const orderData = [
  { name: "M-Pesa", value: 65 },
  { name: "Cash", value: 25 },
  { name: "Card", value: 10 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b"];

const cashiers = [
  { name: "John", sales: 45200, orders: 63 },
  { name: "Mary", sales: 38800, orders: 52 },
  { name: "Kevin", sales: 30100, orders: 44 },
];

/* ------------------- DASHBOARD ------------------- */

export default function Dashboard() {
  const [branch, setBranch] = useState("all");

  return (
    <DashboardLayout>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-500">
            Monitor sales, stock, and performance
          </p>
        </div>

        {/* BRANCH SELECTOR (Premium Feature) */}
        <select
          className="border rounded-lg px-4 py-2"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="all">All Branches</option>
          <option value="cbd">Nairobi CBD</option>
          <option value="westlands">Westlands</option>
          <option value="kasarani">Kasarani</option>
        </select>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
        <StatCard
          icon={<MdPhoneIphone className="text-green-500" />}
          title="Unique Customers"
          value="622"
        />

        <StatCard
          icon={<MdShoppingBag className="text-blue-500" />}
          title="Total Orders"
          value="916"
        />

        <StatCard
          icon={<FaRegClipboard className="text-orange-500" />}
          title="Orders Today"
          value="42"
        />

        <StatCard
          icon={<FaWallet className="text-green-600" />}
          title="Revenue Today"
          value="Ksh 36,000"
        />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Revenue Trend</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Methods */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Payment Methods
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {orderData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* TOP CASHIERS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Top Cashiers
          </h3>

          {cashiers.map((c, i) => (
            <div
              key={i}
              className="flex justify-between py-3 border-b"
            >
              <span>{c.name}</span>
              <span>{c.orders} Orders</span>
              <span className="font-bold">
                Ksh {c.sales.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        {/* RECENT TRANSACTIONS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Recent Transactions
          </h3>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">#</th>
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Payment</th>
                <th className="text-left py-2">Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td>#1024</td>
                <td>Jane</td>
                <td>M-Pesa</td>
                <td>Ksh 1,250</td>
              </tr>

              <tr className="border-b">
                <td>#1023</td>
                <td>David</td>
                <td>Cash</td>
                <td>Ksh 800</td>
              </tr>

              <tr>
                <td>#1022</td>
                <td>Mike</td>
                <td>M-Pesa</td>
                <td>Ksh 2,100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* THIRD ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TOP PRODUCTS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Top Products
          </h3>

          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span>Coca Cola</span>
              <span>100 Units</span>
              <span>Ksh 12,500</span>
            </li>

            <li className="flex justify-between border-b pb-2">
              <span>Sprite</span>
              <span>80 Units</span>
              <span>Ksh 10,000</span>
            </li>

            <li className="flex justify-between">
              <span>Fanta</span>
              <span>60 Units</span>
              <span>Ksh 8,000</span>
            </li>
          </ul>
        </div>

        {/* LOW STOCK */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4 text-red-600">
            Low Stock Alerts
          </h3>

          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span>Raha Water 500ml</span>
              <span className="text-red-600">
                5 left
              </span>
            </li>

            <li className="flex justify-between border-b pb-2">
              <span>Sprite 300ml</span>
              <span className="text-red-600">
                3 left
              </span>
            </li>

            <li className="flex justify-between">
              <span>Coca Cola 1L</span>
              <span className="text-red-600">
                2 left
              </span>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}