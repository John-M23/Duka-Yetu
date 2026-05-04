import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from "../Layouts/DashboardLayout";



export default function Report() {
  return (
   
<div>
   <DashboardLayout>
  <div className="min-h-screen bg-gray-50 py-8">
  <div className="mx-auto w-full max-w-6xl px-4">
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-semibold">Reports</h1>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          All Branches
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          KSN
        </button>
      </div>
      <div className="w-full max-w-xl">
        <input className="w-full mb-4 px-3 py-2 border rounded" type="text" placeholder="Search customers..." />
      </div>
    </div>
    </div>
      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Date</th>  
              <th className="px-4 py-2 border-b">Total Sales</th>
              <th className="px-4 py-2 border-b">Total Transactions</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">  
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">2024-06-01</td>
              <td className="px-4 py-2">5000 Ksh</td>
              <td className="px-4 py-2">50</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600">
                  View
                </button>
                <button className="bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600">
                  Export
                </button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">2024-06-02</td>
              <td className="px-4 py-2">7000 Ksh</td>
              <td className="px-4 py-2">70</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600">
                  View
                </button>
                <button className="bg-gray-500 text-white px-2 py-1 rounded text-xs hover:bg-gray-600">
                  Export
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>



 
</div> 
  
  );
}