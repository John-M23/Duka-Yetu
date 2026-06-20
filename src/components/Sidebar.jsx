import { useState } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa6";
import { GiAmmoBox } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [settingOpen, setSettingOpen] = useState(false);




  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          bg-green-700 text-white
          w-64 h-screen p-5 flex flex-col
          transition-transform duration-300
          overflow-y-auto

          fixed top-0 left-0 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0 md:sticky md:top-0
        `}
      >
        {/* LOGO */}
   

        {/* NAVIGATION */}
        <nav className="mt-10 flex flex-col gap-3 flex-1">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaHome />
            Dashboard
          </Link>

          <Link
            to="/pos"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <MdOutlineShoppingCartCheckout />
            POS
          </Link>

          <Link
            to="/inventory"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <GiAmmoBox />
            Inventory
          </Link>

          <Link
            to="/reports"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaRegChartBar />
            Reports
          </Link>

          <Link
            to="/staff"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaPeopleGroup />
            Staff
          </Link>

          <Link
            to="/customer"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <MdGroups2 />
            Customers
          </Link>

          <Link
            to="/branch"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaLocationDot />
            Branches
          </Link>

          <div>
  <button
    onClick={() => setSettingOpen(!settingOpen)}
    className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition w-full text-left"
  >
    <IoIosSettings />
    Settings
  </button>

  {settingOpen && (
    <div className="ml-8 mt-2 flex flex-col gap-2">
      


 <Link
        to="/Business"
        className="hover:bg-green-600 px-4 py-2 rounded-xl transition block"
      >
        Business Profile 
      </Link>
      <Link
        to="/payment"
        className="hover:bg-green-600 px-4 py-2 rounded-xl transition block"
      >
        Payment Settings
      </Link>

     

      <Link
        to="/receipt"
        className="hover:bg-green-600 px-4 py-2 rounded-xl transition block"
      >
        Receipt Settings
      </Link>

      <Link
        to="/taxes"
        className="hover:bg-green-600 px-4 py-2 rounded-xl transition block"
      >
        Tax Settings
      </Link>

      <Link
        to="/subscription"
        className="hover:bg-green-600 px-4 py-2 rounded-xl transition block"
      >
        Subscription
      </Link>


      <Link
        to="/security"
        className="hover:bg-green-600 px-4 py-2 rounded-xl transition block"
      >
        Security Settings 
      </Link>
      
    </div>
  )}
</div>
        
          <Link
            to="/login"
            className="flex items-center gap-3 hover:bg-green-600 px-4 py-3 rounded-xl transition mt-auto"
          >
            <CiLogout />
            Logout
          </Link>
        </nav>
      </aside>
    </>
  );
}