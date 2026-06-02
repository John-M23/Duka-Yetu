import { useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { products } from "../data/productData";
import ProductCard from "../components/ProductCard";

export default function Pos() {
  const [cart, setCart] = useState([]);

  const categories = Object.keys(products);

  // Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item completely
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <DashboardLayout>
      <div className="flex min-h-screen bg-gray-100">

        {/* PRODUCTS */}
        <div className="flex-1 p-6 overflow-y-auto">

          <h1 className="text-2xl font-bold mb-6">
            Point of Sale (POS)
          </h1>

          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 mb-6 bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none"
            />
          </div>

          {/* Categories */}
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

        {/* CART */}
    <div className="hidden lg:block w-80 bg-white border-1 p-6 sticky top-0 h-screen overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">
            Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              No items in cart
            </p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 p-3 mb-3 rounded"
                >
                  <div className="flex justify-between items-start">

                    <div>
                      <p className="font-medium">
                        {item.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.size}
                        {item.unit}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 font-bold"
                    >
                      ✕
                    </button>

                  </div>

                  <div className="flex items-center justify-between mt-3">

                    <div className="flex items-center gap-2">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        -
                      </button>

                      <span className="font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          addToCart(item)
                        }
                        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        +
                      </button>

                    </div>

                    <span className="font-semibold">
                      Ksh {item.price * item.quantity}
                    </span>

                  </div>
                </div>
              ))}

              {/* Total */}
              <div className="border-t pt-4 mt-4">

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>Ksh {total}</span>
                </div>

                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
                  Checkout
                </button>

              </div>
            </>
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}