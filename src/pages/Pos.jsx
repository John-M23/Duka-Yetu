import { useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import { products } from "../data/productData";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";



export default function Pos() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

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

  // Remove item
  const removeItem = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }
    const checkoutData = {
       cart,
    total,
    };
    if (paymentMethod === "cash") {
      navigate("/cash-payment", { state: checkoutData });


    } 
    else if (paymentMethod === "mpesa") {
      navigate("/mpesa-payment", { state: checkoutData });
    }
    else if (paymentMethod === "card") {
      alert(" Card Payment is coming soon... ");
    }

  };


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
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
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

        {products[category]
  .filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((product) => (
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
<div className="hidden lg:block w-80 bg-white border-l p-6 sticky top-0 h-screen overflow-y-auto">

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
                {item.size} {item.unit}
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
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => addToCart(item)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                +
              </button>

            </div>

            <span>
              Ksh {item.price * item.quantity}
            </span>

          </div>

        </div>
      ))}

      {/* Summary */}
      <div className="border-t pt-4 mt-4">

        <p className="mb-2">
          Items: {cart.reduce(
            (sum, item) => sum + item.quantity,
            0
          )}
        </p>

  <div className="flex justify-between text-lg font-bold">
    <span>Total</span>
    <span>Ksh {total}</span>
  </div>

  <select
    value={paymentMethod}
    onChange={(e) => setPaymentMethod(e.target.value)}
    className="w-full border rounded p-2 mt-4"
  >
    <option value="cash">Cash</option>
    <option value="mpesa">M-Pesa</option>
    <option value="card">Card</option>
  </select>

  <button
    onClick={handleCheckout}
    className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
  >
    Checkout
  </button>

  <button
    onClick={clearCart}
    className="w-full mt-2 bg-red-500 text-white py-2 rounded"
  >
    Clear Cart
  </button>

</div>
</>
  )}
</div>
   </div>

    </DashboardLayout>  
  );
}