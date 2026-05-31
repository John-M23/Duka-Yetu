import { FaBars, FaBell, FaChevronDown } from "react-icons/fa";

// 1. Accept setSidebarOpen as a prop from DashboardLayout
export default function DashboardHeader({ setSidebarOpen }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between  fixed px-6 top-0 left-0 right-0 z-50">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 sm:gap-6">

        {/* MENU ICON - Fixed typo and wired up onClick to toggle the sidebar open */}
        <button 
          onClick={() => setSidebarOpen(prev => !prev)}
          className="text-gray-700 hover:text-green-600 transition p-1 rounded hover:bg-gray-50 md:hidden"
        > 
          <FaBars size={20} />
        </button>

        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl font-bold hidden md:block select-none">
          <span className="text-gray-900">Duka </span>
          <span className="text-green-600">Yetu</span>
        </h1>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* NOTIFICATION */}
        <div className="relative cursor-pointer p-1 rounded hover:bg-gray-50 transition">
          <FaBell className="text-gray-700" size={20} />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
            3
          </span>
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-3 cursor-pointer group p-1 rounded hover:bg-gray-50 transition">

          {/* AVATAR */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm sm:text-base">
            JM
          </div>

          {/* USER INFO */}
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition">
              John Macharia
            </p>
            <p className="text-xs text-gray-500">
              Admin
            </p>
          </div>

          {/* DROPDOWN */}
          <FaChevronDown className="text-gray-500 text-xs sm:text-sm group-hover:text-gray-700 transition" />

        </div>

      </div>
    </header>
  );
}
