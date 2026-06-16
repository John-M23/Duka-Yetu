import DashboardLayout from "../../Layouts/DashboardLayout";

export default function Payment() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-borld mb-4">
          Payment Settings
        </h1>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label className="block mb-2">M-Pesa Till</label>
            <input
              type="numbers"
              className="border p-2 w-full rounded"
              placeholder="1343"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Mpesa Number</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
              placeholder="Enter Mpesa-NO"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Bank Account</label>
            <input
              type="text"
              className="border p-2 w-full rounded"
            />
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}