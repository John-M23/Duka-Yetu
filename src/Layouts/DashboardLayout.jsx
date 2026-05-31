import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" min-h-screen  flex bg-gray-100">
      
      {/* SIDEBAR: Pinned to the left side */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTAINER: Takes up the remaining horizontal space */}
      <div className="flex-1 flex flex-col min-w-0 pt-16">
        
        {/* HEADER: Ensure DashboardHeader has 'fixed' or 'sticky' and 'top-0' inside its own component */}
        <DashboardHeader setSidebarOpen={setSidebarOpen} />

        {/* PAGE CONTENT: Margined top to push content down past the header */}
        <main className="p-6 overflow-y-auto flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}