import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import business from "../assets/business-image.png";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      console.log(res.data);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

 return (
  <div className="min-h-screen flex bg-[#f5faf5]">

    {/* LEFT SIDE */}
    <div className="hidden lg:flex w-1/2 flex-col justify-center px-16 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">

      <div className="max-w-xl z-10">

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
            src={business}
            alt="login photo"
            className="w-full max-w-2xl drop-shadow-2xl animate-float"
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
    <div className="w-full lg:w-1/2 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Login to continue to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-green-600 cursor-pointer"
              />
              <span className="text-green-700"> Remember me</span>
            </label>
          

         <h3 className="text-sm text-gray-600 text-right">
            <Link
              to="/forgot-password"
              className="text-green-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </h3>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition duration-300"
          >
            Login
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-700 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </form>
      </div>
    </div>
  </div>
);
}