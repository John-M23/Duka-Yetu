import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">

      <Sidebar />

      <main className="flex-1 p-3 md:p-6 overflow-x-hidden">
        {children}
      </main>

    </div>
  );
}