import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaCreditCard,
  FaTimes,
} from "react-icons/fa";

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems = [],
  subtotal = 0,
  discount = 0,
  tax = 0,
  total = 0,
}) {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!isOpen) return null;

  const handleContinue = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    const orderData = {
      customer,
      notes,
      paymentMethod,
      cartItems,
      subtotal,
      discount,
      tax,
      total,
    };

    switch (paymentMethod) {
      case "cash":
        navigate("/cash-payment", { state: orderData });
        break;

      case "mpesa":
        navigate("/mpesa-payment", { state: orderData });
        break;

      case "card":
        navigate("/card-payment", { state: orderData });
        break;

      default:
        return;
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Checkout
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {/* Order Summary */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Order Summary
            </h3>

            <div className="border rounded-lg">
              {cartItems.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  No items in cart.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b last:border-none px-4 py-3"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      Ksh {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Customer */}
          <div>
            <label className="block font-medium mb-2">
              Customer (Optional)
            </label>

            <input
              type="text"
              placeholder="Customer name"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block font-medium mb-2">
              Order Notes
            </label>

            <textarea
              rows={3}
              placeholder="Add notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-lg border p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Totals */}
          <div className="rounded-xl bg-gray-50 p-5">
            <div className="flex justify-between py-1">
              <span>Subtotal</span>
              <span>Ksh {subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between py-1">
              <span>Discount</span>
              <span>Ksh {discount.toLocaleString()}</span>
            </div>

            <div className="flex justify-between py-1">
              <span>Tax</span>
              <span>Ksh {tax.toLocaleString()}</span>
            </div>

            <div className="border-t mt-3 pt-3 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>Ksh {total.toLocaleString()}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Select Payment Method
            </h3>

            <div className="grid md:grid-cols-3 gap-4">

              <button
                onClick={() => setPaymentMethod("cash")}
                className={`border rounded-xl p-5 transition ${
                  paymentMethod === "cash"
                    ? "border-green-600 bg-green-50"
                    : "hover:border-green-500"
                }`}
              >
                <FaMoneyBillWave
                  className="mx-auto mb-3 text-green-600"
                  size={28}
                />
                <p className="font-semibold">Cash</p>
              </button>

              <button
                onClick={() => setPaymentMethod("mpesa")}
                className={`border rounded-xl p-5 transition ${
                  paymentMethod === "mpesa"
                    ? "border-green-600 bg-green-50"
                    : "hover:border-green-500"
                }`}
              >
                <FaMobileAlt
                  className="mx-auto mb-3 text-green-600"
                  size={28}
                />
                <p className="font-semibold">M-Pesa</p>
              </button>

              <button
                onClick={() => setPaymentMethod("card")}
                className={`border rounded-xl p-5 transition ${
                  paymentMethod === "card"
                    ? "border-blue-600 bg-blue-50"
                    : "hover:border-blue-500"
                }`}
              >
                <FaCreditCard
                  className="mx-auto mb-3 text-blue-600"
                  size={28}
                />
                <p className="font-semibold">Card</p>
              </button>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleContinue}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Continue
          </button>

        </div>

      </div>
    </div>
  );
}