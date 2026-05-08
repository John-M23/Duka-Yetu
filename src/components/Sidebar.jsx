import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-56 lg:w-64 min-h-screen bg-gray-800 text-white p-5 flex-col">
      
      <h2 className="text-2xl font-bold">Duka Yetu</h2>

      <nav className="mt-8 flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/pos">POS</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/Customer">Customer</Link>
        <Link to="/Branch">Branches</Link>
      </nav>

    </aside>
  );
}