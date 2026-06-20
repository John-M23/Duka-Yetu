import { useState, useRef, useEffect } from "react";
import { FaBars, FaBell, FaChevronDown } from "react-icons/fa";

export default function DashboardHeader({ setSidebarOpen }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Example user (replace with real auth data later)
  const user = {
    name: "John Macharia",
    role: "Admin", // or "Cashier"
    region: "Kariobangi South",
    initials: "JM",
  };

  function handleLogout() {
    // replace with your logout logic
    console.log("Logging out...");
  }

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between fixed px-6 top-0 left-0 right-0 z-50">

      {/* LEFT */}
      <div className="flex items-center gap-4 sm:gap-6">

        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          className="text-gray-700 hover:text-green-600 transition p-1 rounded hover:bg-gray-50 md:hidden"
        >
          <FaBars size={20} />
        </button>

        <h1 className="text-xl sm:text-2xl font-bold hidden md:block select-none">
          <span className="text-gray-900">Duka </span>
          <span className="text-green-600">Yetu</span>
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        {/* NOTIFICATIONS */}
        <div className="relative cursor-pointer p-1 rounded hover:bg-gray-50 transition">
          <FaBell className="text-gray-700" size={20} />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
            3
          </span>
        </div>

        {/* PROFILE DROPDOWN */}
        <div className="relative" ref={dropdownRef}>

          {/* TRIGGER */}
          <div
            onClick={() => setOpen(prev => !prev)}
            className="flex items-center gap-3 cursor-pointer group p-1 rounded hover:bg-gray-50 transition"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm sm:text-base">
              {user.initials}
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition">
                {user.name}
              </p>
              <p className="text-xs text-gray-500">
                {user.role}
              </p>
            </div>

            <FaChevronDown className="text-gray-500 text-xs sm:text-sm" />
          </div>

          {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">

              <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                View Region: <span className="font-medium">{user.region}</span>
              </button>

              {/* <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                Role (Admin)
              </button> */}

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm text-red-600"
                
              >
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}