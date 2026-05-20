import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardLayout from "../Layouts/DashboardLayout";
 
export default function Customer() {
    return(
        <DashboardLayout>
            <div className="min-h-screen bg-gray-50 py-8">
  <div className="mx-auto w-full max-w-6xl px-4">
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-semibold">Customers</h1>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          All
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

    <table className="min-w-full text-sm text-left text-gray-700 mt-8">
            <thead className="bg-gray-100"> 
                <tr>
                    <th className="px-4 py-2 border-b">Name</th>    
                    <th className="px-4 py-2 border-b">Phone</th>
                    <th className="px-4 py-2 border-b">Region</th>
                    <th className="px-4 py-2 border-b">Amount</th>
                    <th className="px-4 py-2 border-b">Order Count</th>
                    <th className="px-4 py-2 border-b">Actions</th>
                    <th className="px-4 py-2 border-b">Customer Code</th>
                </tr>
            </thead>
            <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2">John Doe</td>
                    <td className="px-4 py-2">

                        +254712345678</td>
                    <td className="px-4 py-2">Nairobi</td>
                    <td className="px-4 py-2">5000 Ksh</td> 
                    <td className="px-4 py-2">5</td>
                    <td className="px-4 py-2 space-x-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                            Edit    
                        </button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                            Delete
                        </button>
                    </td>
                    <td className="px-4 py-2">CUST001</td>  
                </tr>   
                <tr className="hover:bg-gray-50">   
                    <td className="px-4 py-2">Jane Smith</td>
                    <td className="px-4 py-2">+254712345679</td>

                    <td className="px-4 py-2">Mombasa</td>
                    <td className="px-4 py-2">3000 Ksh</td>

                    <td className="px-4 py-2">3</td>
                    <td className="px-4 py-2 space-x-2">
                        <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                            Edit
                        </button>
                        <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                            Delete
                        </button>
                    </td>
                    <td className="px-4 py-2">CUST002</td>
                </tr>
            </tbody>
        </table>
    </div>
</DashboardLayout>
                                
    );
}
