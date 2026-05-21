import { Link } from "react-router-dom";
import { CiLogout} from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa6";
import { GiAmmoBox } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
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
            fixed top-0 left-0 z-50
          h-screen w-64 bg-green-700 text-white p-5
          transform transition-transform duration-300

          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0 md:static md:flex-shrink-0
        `}
      >

        {/* LOGO */}
        {/* <h1 className="text-3xl font-bold">
          <span className="text-white">Duka </span>
          <span className="text-green-300">Yetu</span>
        </h1> */}

        {/* NAVIGATION */}
        <nav className="mt-10 flex flex-col gap-3">

          <Link
            to="/dashboard"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaHome  className="inline mr-2"/>

            Dashboard
          </Link>

          <Link
            to="/pos"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <MdOutlineShoppingCartCheckout className="inline mr-2" />
            POS
          </Link>

          <Link
            to="/inventory"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <GiAmmoBox  className="inline mr-2"/>
            Inventory
          </Link>

          <Link
            to="/reports"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaRegChartBar  className="inline mr-2"/>
            Reports
          </Link>

          <Link
            to="/staff"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaPeopleGroup  className="inline mr-2"/>
            Staff
          </Link>

          <Link
            to="/customer"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <MdGroups2  className="inline mr-2"/>
            Customers
          </Link>

          <Link
            to="/branch"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <FaLocationDot classname="inline mr-2" />
            Branches
          </Link>
          <Link
            to="/settings"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            <IoIosSettings className="inline mr-2" />
            Settings
          </Link>
          <Link
            to="/logout"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition mt-auto"
          >
            <CiLogout className="inline mr-2" />
            Logout
          </Link>

        </nav>
      </aside>
    </>
  );
}