import { useState ,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function MpesaPayment() {
   // To redirect back to POS if state is not available
   const navigate = useNavigate();
   const { state } = useLocation();
   useEffect(() => {
      if (!state){
        navigate("/pos");
      }
    }, [state, navigate]);

    const {
    total = 0,
    subtotal = 0,
               } = state || {};
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Waiting to send payment");

  const handleSTKPush = async () => {
    if (!phone.trim()) {
      alert("Please enter the customer's phone number.");
      return;
    }

    setLoading(true);
    setStatus("Waiting for customer to enter M-Pesa PIN...");

    // TODO:
    // Call your backend endpoint here

    setTimeout(() => {
      setLoading(false);
      setStatus("Payment Successful");

      navigate("/receipt", {
        state: {
          ...state,
          paymentMethod: "M-Pesa",
          phone,
        },
      });
    }, 4000);



   


  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg">

        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-green-600"
          >
            <FaArrowLeft />
            Back
          </button>

          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaMobileAlt className="text-green-600" />
            M-Pesa Payment
          </h1>

          <div />
        </div>

        {/* Body */}
        <div className="p-6">

          {/* Amount */}
          <div className="bg-green-50 rounded-xl p-5 mb-6">
            <p className="text-gray-600">Amount Due</p>

            <h2 className="text-4xl font-bold text-green-700 mt-2">
              Ksh {Number(total).toLocaleString()}
            </h2>
          </div>

          {/* Customer */}
          {/* <div className="mb-6">
            <p className="text-sm text-gray-500">Customer</p>
            <p className="font-semibold">{customer}</p>
          </div> */}

          {/* Phone */}
          <div className="mb-6">
            <label className="block font-medium mb-2">
              Customer Phone
            </label>

            <input
              type="tel"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Payment Status */}
          <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <p className="font-semibold">Payment Status</p>
            <p className="mt-2 text-green-700">{status}</p>
          </div>

          {/* Summary */}
          <div className="border rounded-xl p-4 mb-6">
            <div className="flex justify-between py-1">
              <span>Subtotal</span>
              <span>Ksh {subtotal.toLocaleString()}</span>
            </div>

            {/* <div className="flex justify-between py-1">
              <span>Discount</span>
              <span>Ksh {discount.toLocaleString()}</span>
            </div> */}

            {/* <div className="flex justify-between py-1">
              <span>Tax</span>
              <span>Ksh {tax.toLocaleString()}</span>
            </div> */}

            <div className="flex justify-between border-t pt-3 mt-3 font-bold text-lg">
              <span>Total</span>
              <span>Ksh {total.toLocaleString()}</span>
            </div>
          </div>

          {/* Button */}
          <button
            disabled={loading}
            onClick={handleSTKPush}
            className={`w-full py-4 rounded-xl text-white font-semibold flex justify-center items-center gap-2 transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            <FaCheckCircle />

            {loading ? "Waiting..." : "Send STK Push"}
          </button>

        </div>
      </div>
    </div>
  );
}