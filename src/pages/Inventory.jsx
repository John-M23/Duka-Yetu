import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardLayout from "../Layouts/DashboardLayout";

export default function Inventory() {
  return (
    <DashboardLayout>
    <div className="p-4">

      <h2 className="text-xl font-semibold mb-4">Inventory</h2>
    <div className="mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add New Product
        </button>
      </div>
      <input
        className="w-full mb-4 px-3 py-2 border rounded"
        type="text"
        placeholder="Search inventory..."
      />

      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">

          {/* HEADER */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Product</th>
              <th className="px-4 py-2 border-b">Description</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Quantity</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y">

            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">Cocacolla</td>
              <td className="px-4 py-2">1 liter</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">Beverages</td>
              <td className="px-4 py-2">100ksh</td>
              <td className="px-4 py-2 text-green-600 font-medium">In Stock</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">Raha</td>
              <td className="px-4 py-2">500ml</td>
              <td className="px-4 py-2">Flour</td>
              <td className="px-4 py-2">5</td>    
              <td className="px-4 py-2">200ksh</td>
              <td className="px-4 py-2 text-yellow-600 font-medium">Low Stock</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
               <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">Cocacolla</td>
              <td className="px-4 py-2">1 liter</td>
              <td className="px-4 py-2">Beverages</td>
              <td className="px-4 py-2">5</td>    
              <td className="px-4 py-2">200ksh</td>
              <td className="px-4 py-2 text-yellow-600 font-medium">Low Stock</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
               <tr className="hover:bg-gray-50">
              <td className="px-4 py-2"> Cooking Oil</td>
               <td className='px-4 py-2'>Oil</td>
              <td className='px-4 py-2'>10l</td>
              <td className="px-4 py-2">5</td>    
              <td className="px-4 py-2">200ksh</td>
              <td className="px-4 py-2 text-yellow-600 font-medium">Low Stock</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>   <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">Exercise Books</td>
              <td className="px-4 py-2">A5 books</td>
              <td className="px-4 py-2">Stationary</td>

         

              <td className="px-4 py-2">5</td>    
              <td className="px-4 py-2">200ksh</td>
              <td className="px-4 py-2 text-green-600 font-medium">In Stock</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>   <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">Pencils</td>
              <td className="px-4 py-2">Hb</td>
              <td className="px-4 py-2">120pages</td>

              <td className="px-4 py-2">5</td>    
              <td className="px-4 py-2">200ksh</td>
              <td className="px-4 py-2 text-yellow-600 font-medium">Low Stock</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
               <tr className="hover:bg-gray-50">
              <td className="px-4 py-2">Obama Smoothline  Pen</td>
              <td className="px-4 py-2">Pen</td>

              <td className="px-4 py-2">Stationary</td>
              <td className="px-4 py-2">5</td>    
              <td className="px-4 py-2">200ksh</td>
              <td className="px-4 py-2 text-green-600 font-medium">In Stock</td>
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

      <Link to="/dashboard" className="block mt-4 text-blue-500 hover:underline">
       - Back to Dashboard
      </Link>

    </div>
    </DashboardLayout>
  );
}