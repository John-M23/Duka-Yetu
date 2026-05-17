import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import business2 from "../assets/business2-image.png";
export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessLocation: "",
    businessType: "",
  });

  const [error, setError] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      console.log(res.data);

      navigate("/login");

    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
  <div className="min-h-screen flex bg-[#f5faf5]">

    {/* LEFT SIDE */}
    <div className="hidden lg:flex w-1/2 flex-col justify-center px-16 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">

      <div className="max-w-xl">

        <h1 className="text-6xl font-bold leading-tight text-gray-900">
          Manage your <br />
          business,{" "}
          <span className="text-green-600">
            grow faster.
          </span>
        </h1>

        <p className="mt-6 text-2xl text-gray-700 leading-relaxed">
          All in one simple solution for Kenyan businesses.
        </p>

        {/* IMAGE */}
        <div className="mt-10">
          <img
            src={business2}
            alt="Business Dashboard"
            className="w-full max-w-2xl animate-float drop-shadow-2xl"
          />
        </div>

        {/* FEATURES */}
        <div className="mt-10 grid grid-cols-3 gap-4">

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="font-bold text-green-700">
              Track Sales
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Monitor business performance easily.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="font-bold text-green-700">
              Manage Stock
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Keep inventory updated in real time.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-md">
            <h3 className="font-bold text-green-700">
              Grow Business
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Make smarter business decisions.
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10 space-y-4"
      >

        <h2 className="text-4xl font-bold text-center text-green-700">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Fill in the details to get started
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

        </div>

        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <input
          type="text"
          name="businessLocation"
          placeholder="Business Location"
          value={formData.businessLocation}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        >
          <option value="">
            Select Business Type
          </option>

          <option value="Hardware">
            Hardware
          </option>

          <option value="Kiosk">
            Kiosk
          </option>

          <option value="Liquor Store">
            Liquor Store/Wines & Spirit
          </option>

          <option value="Shop">
            Shop
          </option>

          <option value="Supermarket">
            Supermarket
          </option>

          <option value="Wholesale Shop">
            Wholesale Shop
          </option>

          <option value="Others">
            Others
          </option>
        </select>

        {error && (
          <p className="text-red-500 text-center text-sm">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition duration-300"
        >
          Register
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  </div>
);
}