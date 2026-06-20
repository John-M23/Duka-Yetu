import { useState } from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";

export default function TaxSettings() {
  const [settings, setSettings] = useState({
    enableTax: true,
    taxType: "vat", // vat | fixed | service
    taxRate: 16,
    applyTo: "all", // all | categories
    showTaxOnReceipt: true,
    showBreakdown: true,
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

  const handleSubmit = () => {
    console.log("Tax settings saved:", settings);

    // API CALL HERE
  };

  return (
   <DashboardLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Tax Settings
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-6">

        {/* Enable Tax */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.enableTax}
            onChange={() => handleToggle("enableTax")}
          />
          Enable Tax
        </label>

        {/* Tax Type */}
        <div>
          <p className="font-semibold mb-2">Tax Type</p>

          <div className="space-y-2">
            <label className="flex gap-2">
              <input
                type="radio"
                name="taxType"
                value="vat"
                checked={settings.taxType === "vat"}
                onChange={handleChange}
              />
              VAT (%)
            </label>

            <label className="flex gap-2">
              <input
                type="radio"
                name="taxType"
                value="fixed"
                checked={settings.taxType === "fixed"}
                onChange={handleChange}
              />
              Fixed Amount
            </label>

            <label className="flex gap-2">
              <input
                type="radio"
                name="taxType"
                value="service"
                checked={settings.taxType === "service"}
                onChange={handleChange}
              />
              Service Charge (%)
            </label>
          </div>
        </div>

        {/* Tax Rate */}
        <div>
          <label className="font-semibold">
            Tax Rate
          </label>

          <input
            type="number"
            name="taxRate"
            value={settings.taxRate}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-2"
            placeholder="Enter tax rate"
          />
        </div>

        {/* Apply To */}
        <div>
          <p className="font-semibold mb-2">
            Apply Tax To
          </p>

          <select
            name="applyTo"
            value={settings.applyTo}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="all">All Products</option>
            <option value="categories">
              Selected Categories
            </option>
          </select>
        </div>

        {/* Receipt Options */}
        <div className="space-y-2">
          <p className="font-semibold">
            Receipt Display
          </p>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={settings.showTaxOnReceipt}
              onChange={() =>
                handleToggle("showTaxOnReceipt")
              }
            />
            Show tax on receipt
          </label>

          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={settings.showBreakdown}
              onChange={() =>
                handleToggle("showBreakdown")
              }
            />
            Show tax breakdown
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full"
        >
          Save Tax Settings
        </button>
      </div>
    </div>
     </DashboardLayout>
  );
}