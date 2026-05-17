import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-green-900/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-56 bg-gray-800 text-white p-5
          transform transition-transform duration-300
          
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          
          md:translate-x-0 md:static md:flex
        `}
      >
        <div className="flex flex-col w-full">

          {/* Close Button Mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden self-end text-2xl mb-4"
          >
            ✕
          </button>

         <span className="text-xl font-bold tracking-tight text-gray-900">
    Duka<span className="text-green-600">Yetu</span>
  </span>

          <nav className="mt-8 flex flex-col gap-4">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/pos">POS</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/reports">Reports</Link>
            <Link to="/staff">Staff</Link>
            <Link to="/Customer">Customer</Link>
            <Link to="/Branch">Branches</Link>
          </nav>

        </div>
      </aside>

    </>
  );
}