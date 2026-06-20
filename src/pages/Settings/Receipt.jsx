import { useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

import {
  FaStore,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ReceiptSettings() {
  const [settings, setSettings] = useState({
    businessName: "Duka Yetu Store",
    phone: "0712345678",
    email: "info@dukayetu.com",
    address: "Nairobi, Kenya",

    showLogo: true,
    showPhone: true,
    showEmail: false,
    showAddress: true,

    showCashier: true,
    showCustomer: false,

    showTax: true,
    showDiscount: true,

    receiptWidth: "80mm",

    footerMessage: "Thank you for shopping with us!",
  });

  const handleToggle = (field) => {
    setSettings({
      ...settings,
      [field]: !settings[field],
    });
  };

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log(settings);

    // API Call Here
  };

  return (
    <DashboardLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Receipt Designer
      </h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* SETTINGS PANEL */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg mb-4">
            Receipt Settings
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              name="businessName"
              value={settings.businessName}
              onChange={handleChange}
              placeholder="Business Name"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border rounded-lg px-4 py-3"
            />

            <textarea
              name="footerMessage"
              value={settings.footerMessage}
              onChange={handleChange}
              rows={3}
              placeholder="Footer Message"
              className="w-full border rounded-lg px-4 py-3"
            />

            {/* Receipt Size */}
            <div>
              <label className="font-medium">
                Receipt Size
              </label>

              <select
                name="receiptWidth"
                value={settings.receiptWidth}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 mt-2"
              >
                <option>58mm</option>
                <option>80mm</option>
                <option>A4 Invoice</option>
              </select>
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                ["showLogo", "Logo"],
                ["showPhone", "Phone"],
                ["showEmail", "Email"],
                ["showAddress", "Address"],
                ["showCashier", "Cashier"],
                ["showCustomer", "Customer"],
                ["showTax", "Tax"],
                ["showDiscount", "Discount"],
              ].map(([field, label]) => (
                <label
                  key={field}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={settings[field]}
                    onChange={() =>
                      handleToggle(field)
                    }
                  />
                  {label}
                </label>
              ))}
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mt-4"
            >
              Save Receipt Settings
            </button>
          </div>
        </div>

        {/* PREVIEW PANEL */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h2 className="font-semibold text-lg mb-4">
            Live Preview
          </h2>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto font-mono text-sm">
            {settings.showLogo && (
              <div className="text-center mb-3">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                  LOGO
                </div>
              </div>
            )}

            <div className="text-center">
              <h3 className="font-bold text-lg">
                {settings.businessName}
              </h3>

              {settings.showAddress && (
                <p>{settings.address}</p>
              )}

              {settings.showPhone && (
                <p>{settings.phone}</p>
              )}

              {settings.showEmail && (
                <p>{settings.email}</p>
              )}
            </div>

            <hr className="my-3" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Water 20L x1</span>
                <span>150</span>
              </div>

              <div className="flex justify-between">
                <span>Water 10L x2</span>
                <span>200</span>
              </div>
            </div>

            <hr className="my-3" />

            <div className="space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>350</span>
              </div>

              {settings.showDiscount && (
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>-20</span>
                </div>
              )}

              {settings.showTax && (
                <div className="flex justify-between">
                  <span>VAT</span>
                  <span>56</span>
                </div>
              )}

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>386</span>
              </div>
            </div>

            <hr className="my-3" />

            {settings.showCashier && (
              <p>Cashier: John</p>
            )}

            {settings.showCustomer && (
              <p>Customer: Jane Doe</p>
            )}

            <div className="text-center mt-4">
              <p>{settings.footerMessage}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}