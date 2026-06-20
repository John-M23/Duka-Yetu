import { FaCheckCircle } from "react-icons/fa";
import DashboardLayout from "../../Layouts/DashboardLayout";

export default function SubscriptionSettings() {
  const plans = [
    {
      name: "Basic",
      price: "KES 999/mo",
      features: [
        "POS System",
        "Inventory",
        "Reports",
        "2 Staff Accounts",
      ],
    },
    {
      name: "Advanced",
      price: "KES 2,499/mo",
      features: [
        "5 Branches",
        "Receipt Designer",
        "Customer Database",
        "Advanced Reports",
      ],
    },
    {
      name: "Premium",
      price: "KES 4,999/mo",
      features: [
        "Unlimited Branches",
        "Daraja Integration",
        "Analytics Dashboard",
        "Priority Support",
      ],
    },
  ];

  return (
    <DashboardLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Subscription
      </h1>

      {/* Current Plan */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold">
          Current Plan
        </h2>

        <div className="mt-4">
          <p>
            Plan:
            <span className="font-bold text-blue-600 ml-2">
              Basic
            </span>
          </p>

          <p>Status: Active</p>

          <p>Renewal Date: 15 Jul 2026</p>

          <p>Amount: KES 999/month</p>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="font-semibold mb-4">
          Usage
        </h2>

        <div className="mb-4">
          <div className="flex justify-between">
            <span>Staff Accounts</span>
            <span>3 / 5</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
            <div className="h-3 bg-blue-600 rounded-full w-[60%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span>Products</span>
            <span>120 / 500</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
            <div className="h-3 bg-green-600 rounded-full w-[80%]" />
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-xl shadow p-6"
          >
            <h2 className="text-xl font-bold">
              {plan.name}
            </h2>

            <p className="text-2xl font-bold text-blue-600 mt-2">
              {plan.price}
            </p>

            <div className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2"
                >
                  <FaCheckCircle className="text-green-500" />
                  {feature}
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg">
              Upgrade
            </button>
          </div>
        ))}
      </div>
    </div>
    </DashboardLayout>
  );
}