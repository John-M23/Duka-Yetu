
import React, { useState } from 'react';
export default function AddProductModal({ isOpen, onClose, onAddProduct }) {
   
const [name, setName] = useState("");
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");
const [stock, setStock] = useState("");
const [stockUnit, setStockUnit] = useState("");
const [alertLevel, setAlertLevel] = useState("");
const [buyPrice, setBuyPrice] = useState("");
const [sellPrice, setSellPrice] = useState("");

 if (!isOpen) return null;

const handleSubmit = (e) => {
  e.preventDefault();

  const newProduct = {
    id: Date.now(),
    product: name,
    category,
    description,
    stock: Number(stock),
    stockUnit,
    alertLevel: Number(alertLevel),
    buyPrice: Number(buyPrice),
    sellPrice: Number(sellPrice),
    sold: 0,
    image: "",
  };
  console.log("New Product:", newProduct);
  onAddProduct(newProduct);

  onClose();
};
    return (
        <div className=" fixed inset-0 bg-green-500 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md max-h-full overflow-auto">
                <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter product name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                            Stock Quantity
                        </label>
                        <input
                            type="number"
                            id="stock"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter stock quantity"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unit">
                            Stock Unit
                        </label>
                        <input
                            type="text"
                            id="unit"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter stock unit (e.g., bottles, bags)"
                            value={stockUnit}
                            onChange={(e) => setStockUnit(e.target.value)}  
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alert">
                            Alert Level
                        </label>
                        <input
                            type="number"
                            id="alert"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter alert level"
                            value={alertLevel}
                            onChange={(e) => setAlertLevel(e.target.value)}
                        />
                    </div>
 



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Buy Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter buy price"
                            value={buyPrice}
                            onChange={(e) => setBuyPrice(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellPrice">
                            Sell Price
                        </label>
                        <input
                            type="number"
                            id="sellPrice"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter sell price"
                            value={sellPrice}
                            onChange={(e) => setSellPrice(e.target.value)}
                        />
                    </div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Image
                </button>

                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 mt-8 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}