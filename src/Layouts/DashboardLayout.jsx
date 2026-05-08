import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Top Navbar */}
        <header className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow-sm">

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-3xl text-gray-700"
          >
            ☰
          </button>

          {/* Profile */}
          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
            JM
          </div>

        </header>

        {/* Main Content */}
        <main className="flex-1 p-3 md:p-6">
          {children}
        </main>

      </div>

    </div>
  );
}