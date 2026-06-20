import { useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../Dashboard";
export default function BusinessProfile() {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    email: "",
    address: "",
    kraPin: "",
    logo:"",
    description: "",
    receiptFooter: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Saving:", formData);

    // API call here
  };

  return (
    <DashboardLayout>
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-6">
        Business Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="address"
          placeholder="Physical Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="kraPin"
          placeholder="KRA PIN"
          value={formData.kraPin}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <textarea
          name="description"
          placeholder="Business Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3"
          placeholder="Import Your Logo Here"
        />

        <textarea
          name="receiptFooter"
          placeholder="Receipt Footer Message"
          value={formData.receiptFooter}
          onChange={handleChange}
          rows="3"
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
    </DashboardLayout>
  );
}