import { useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { products } from "../data/productData";
import ProductCard from "../components/ProductCard";

export default function Pos() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const categories = Object.keys(products);

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">

        {/* ================= LEFT SIDE: PRODUCTS ================= */}
        <div className="flex-1 p-6">

          <h1 className="text-2xl font-bold mb-6">
            Point of Sale (POS)
          </h1>

          {/* SEARCH BAR */}
          <div className="flex items-center border rounded-lg px-3 py-2 mb-6 bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none"
            />
          </div>

          {/* PRODUCTS LIST */}
          {categories.map((category) => (
            <div key={category} className="mb-8">

              <h2 className="text-lg font-bold mb-3 capitalize">
                {category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {products[category].map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>
       

        {/* ================= DESKTOP CART (FIXED) ================= */}
        <div className="hidden lg:block w-[320px] fixed right-0 top-0 h-screen bg-white border-l shadow-sm p-6 overflow-y-auto">

          <h2 className="text-xl font-semibold mb-4">
            Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              No items in cart
            </p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
              >
                <span className="text-sm">{item.name}</span>
              </div>
            ))
          )}

          {/* TOTAL / CHECKOUT */}
          <div className="mt-6 border-t pt-4">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
              Checkout
            </button>
          </div>

        </div>
          
          <div >
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
            Checkout
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}