import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export default function CashPayment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const order = state || {};

  const {
    cartItems = [],
    total = 0,
    customer = "",
    notes = "",
  } = order;

  const [amountReceived, setAmountReceived] = useState("");

  const received = Number(amountReceived) || 0;

  const change = useMemo(() => {
    return received >= total ? received - total : 0;
  }, [received, total]);

  const quickAmounts = [
    total,
    Math.ceil(total / 100) * 100,
    Math.ceil(total / 500) * 500,
    Math.ceil(total / 1000) * 1000,
  ];

  const handleCompleteSale = () => {
    if (received < total) {
      alert("Amount received is less than the total.");
      return;
    }

    // TODO:
    // Save sale
    // Update inventory
    // Save payment
    // Generate receipt

    navigate("/receipt", {
      state: {
        ...order,
        paymentMethod: "Cash",
        amountReceived: received,
        change,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg">

        {/* Header */}
        <div className="border-b p-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <FaArrowLeft />
            Back
          </button>

          <h1 className="text-2xl font-bold">
            Cash Payment
          </h1>

          <div />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 p-6">

          {/* Left */}
          <div>

            <h2 className="font-semibold text-lg mb-4">
              Order Summary
            </h2>

            <div className="space-y-3">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p>
                    Ksh {(item.quantity * item.price).toLocaleString()}
                  </p>
                </div>
              ))}

            </div>

            <div className="border-t mt-6 pt-4 space-y-2">

              <div className="flex justify-between">
                <span>Total</span>

                <span className="font-bold text-xl">
                  Ksh {total.toLocaleString()}
                </span>
              </div>

              {customer && (
                <div className="flex justify-between text-gray-600">
                  <span>Customer</span>
                  <span>{customer}</span>
                </div>
              )}

              {notes && (
                <div className="mt-3 text-sm text-gray-600">
                  <strong>Notes:</strong> {notes}
                </div>
              )}

            </div>

          </div>

          {/* Right */}
          <div>

            <h2 className="font-semibold text-lg mb-4">
              Receive Cash
            </h2>

            <div className="mb-5">

              <label className="block mb-2">
                Amount Received
              </label>

              <input
                type="number"
                value={amountReceived}
                onChange={(e) => setAmountReceived(e.target.value)}
                placeholder="Enter amount"
                className="w-full border rounded-lg p-4 text-2xl"
              />

            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">

              {quickAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setAmountReceived(amount)}
                  className="border rounded-lg py-3 hover:bg-blue-50"
                >
                  Ksh {amount.toLocaleString()}
                </button>
              ))}

            </div>

            <div className="rounded-xl bg-green-50 p-5 mb-6">

              <div className="flex justify-between text-lg">
                <span>Change</span>

                <span className="font-bold text-green-700">
                  Ksh {change.toLocaleString()}
                </span>
              </div>

            </div>

            <button
              disabled={received < total}
              onClick={handleCompleteSale}
              className={`w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 ${
                received >= total
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              <FaCheckCircle />

              Complete Sale
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}