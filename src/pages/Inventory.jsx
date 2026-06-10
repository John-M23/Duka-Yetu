import React,{useState,useEffect} from "react";
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardLayout from "../Layouts/DashboardLayout";
import { inventory } from "../data/inventoryData";

import AddProductModal from '../components/AddProductModal';
import { VscHistory } from "react-icons/vsc";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Inventory() {
  const handleAddProduct = (newProduct) => {
    setInventoryItems((prev) => [...prev, newProduct]);
  }
const [showModal, setShowModal] = useState(false);
const [searchTerm, setSearchTerm] = useState("");


// For Editing & Deleting 
const handleEdit = (id) => {
  alert(`Edit product with ID: ${id}`);
};



const [inventoryItems, setInventoryItems] = useState(() => {
  const savedItems = localStorage.getItem("inventory");

  return savedItems
    ? JSON.parse(savedItems)
    : inventory;
});

const handleDelete = (id) => {
  if (
    window.confirm(
      "Are you sure you want to delete this product?"
    )
  ) {
    setInventoryItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }
};


// Local Storage 
useEffect(() => {
  localStorage.setItem(
    "inventory",
    JSON.stringify(inventoryItems)
  );
}, [inventoryItems]);


  return (
    <DashboardLayout>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Inventory</h2>
        <div className="mb-4">
          <button 
          onClick={() => setShowModal(true)

          }
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add New Product
          </button>
        </div>
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          type="text"
          placeholder="Search inventory..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Unit</th>
                <th className="px-4 py-2">Alert</th>
                <th className="px-4 py-2">Buy Price</th>
                <th className="px-4 py-2">Sell Price</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Sold</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryItems 
              .filter((item) => 
                item.product
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
            .map((item) => (
                <tr key={item.id} className="hover:bg-green-50">
               <td className="px-4 py-2">
                             {item.image ? (
                <img
                          src={item.image}
                    alt={item.product}
               className="w-16 h-12 object-cover rounded"
       />
         ) : (
    <span>No Image</span>
  )}
</td>
                  <td className="px-4 py-2">{item.product}</td> {/* Fixed: Changed item.name to item.product */}
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.stock}</td>
                  <td className="px-4 py-2">{item.stockUnit}</td>
                  <td className="px-4 py-2">{item.alertLevel}</td>
                  <td className="px-4 py-2">Ksh {item.buyPrice}</td>
                  <td className="px-4 py-2">Ksh {item.sellPrice}</td>
                  <td className="px-4 py-2">
                    <span
                      className={
                        item.stock <= item.alertLevel
                          ? "text-red-500 font-semibold"
                          : "text-green-500 font-semibold"
                      }
                    >
                      {item.stock <= item.alertLevel ? "Low Stock" : "In Stock"}
                    </span>
                  </td>
                  <td className="px-4 py-2">{item.sold}</td>
                  <td className="px-2 py-1 space-x-2 whitespace-nowrap">
                    <button 
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                      <MdModeEditOutline />
                    </button>
                    <button 
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                      <MdDelete />
                    </button>
                  </td>
                  <td ><button className=" bg-green-500 text-white px-2 py-1 rounded text-xs"> Edit stock
                    </button></td>
                  <td><button className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:Text:View Hidtory">
                    History<VscHistory /></button ></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/dashboard" className="block mt-4 text-blue-500 hover:underline">
          - Back to Dashboard
        </Link>
      </div>
      <AddProductModal isOpen={showModal} onClose={() => setShowModal(false)} onAddProduct={handleAddProduct} />
        
    </DashboardLayout>
  );
}