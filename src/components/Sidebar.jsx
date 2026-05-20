import { Link } from "react-router-dom";

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

          md:translate-x-0 md:static
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
            Dashboard
          </Link>

          <Link
            to="/pos"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            POS
          </Link>

          <Link
            to="/inventory"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            Inventory
          </Link>

          <Link
            to="/reports"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            Reports
          </Link>

          <Link
            to="/staff"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            Staff
          </Link>

          <Link
            to="/customer"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            Customers
          </Link>

          <Link
            to="/branch"
            className="hover:bg-green-600 px-4 py-3 rounded-xl transition"
          >
            Branches
          </Link>

        </nav>
      </aside>
    </>
  );
}