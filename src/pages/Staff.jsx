import DashboardLayout from "../Layouts/DashboardLayout";
import { Link } from 'react-router-dom';
import { PiEyeThin } from "react-icons/pi";

export default function Staff()
{    return(
        <DashboardLayout>
            <div>
                  <fieldset className="border border-gray-300 p-4 rounded mb-4">
        <legend className="text-lg font-semibold">Staff Management</legend>
        <div className="mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Add New Staff
            </button>
        </div>
        <input
            className="w-full mb-4 px-3 py-2 border rounded"
            type="text"
            placeholder="Search staff..."
        />  
        <div className="overflow-auto border rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100"> 
                    <tr>
                        <th className="px-4 py-2 border-b">Name</th>

                        <th className="px-4 py-2 border-b">Role</th>
                        <th className="px-4 py-2 border-b">Email</th>
                        <th className="px-4 py-2 border-b">Phone</th>
                        <th className='px-4 py-2 border-b'>Employee Code</th>
                        <th className='px-4 py-2'>PassWord</th>

                        <th className="px-4 py-2 border-b">Actions</th>
                        
                    </tr>
                </thead>
                <tbody className="divide-y">
                    <tr className="hover:bg-green-50">
                        <td className="px-4 py-2">John Doe</td>
                        <td className="px-4 py-2">Manager</td>
                        <td className="px-4 py-2">john@gmail.com</td>
                        <td className="px-4 py-2">+254712345678</td>
                        <td className='px-4 py-2'>203</td>
                        <td className='px-4 py-2 '>1234 <PiEyeThin  className="text-green-700" /></td>
                        <td className="px-4 py-2 space-x-2">
                            <button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600">
                                Edit
                            </button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr className="hover:bg-green-50">
                        <td className="px-4 py-2">Jane Smith</td>
                        <td className="px-4 py-2">Cashier</td>
                        <td className="px-4 py-2">jane@gmail.com</td>
                        <td className="px-4 py-2">+254712345679</td>
                        <td className="px-4 py-2">303</td>
                        <td className='px-4 py-2'>7035</td>
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
    </fieldset>
</div>

                

            
        </DashboardLayout>
    );
}