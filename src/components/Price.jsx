import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaCheckCircle,
  FaStore,
  FaUsers,
  FaBuilding,
  FaStar,
} from "react-icons/fa";

export default function Price() {
  const navigate = useNavigate();

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 500,
      icon: <FaStore className="text-2xl text-green-600" />,
      features: [
        "Single Branch",
        "POS Access",
        "Product Management",
        "Inventory Tracking",
        "Sales Reports",
      ],
      popular: false,
    },
    {
      id: "standard",
      name: "Standard",
      price: 1500,
      icon: <FaUsers className="text-2xl text-green-600" />,
      features: [
        "Up to 10 Staff Accounts",
        "Multiple Devices",
        "Enhanced Reporting",
        "Better Inventory Control",
        "Daily Cloud Backup",
        "Email Support",
      ],
      popular: true,
    },
    {
      id: "advanced",
      name: "Advanced",
      price: 2500,
      icon: <FaBuilding className="text-2xl text-green-600" />,
      features: [
        "Unlimited Branches",
        "Unlimited Staff",
        "Central Dashboard",
        "Branch Comparison Reports",
        "Priority Support",
        "Future AI Features",
      ],
      popular: false,
    },
  ];

  const handlePlanSelect = (plan) => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/subscription/payment", {
        state: {
          plan,
        },
      });
    } else {
      navigate("/register", {
        state: {
          redirectTo: "/subscription/payment",
          plan,
        },
      });
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
              Simple Pricing
            </h1>

            <p className="mt-1 text-lg text-gray-600">
              Start small and upgrade as your business grows.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">

            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white p-8 transition duration-300
                ${
                  plan.popular
                    ? "border-2 border-green-600 shadow-2xl scale-105"
                    : "border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                }`}
              >

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                    <FaStar />
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3">
                  {plan.icon}

                  <h2 className="text-2xl font-bold">
                    {plan.name}
                  </h2>
                </div>

                <div className="mt-8">

                  <h3 className="text-5xl font-extrabold text-gray-900">
                    KSh {plan.price.toLocaleString()}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    per month
                  </p>

                </div>

                <ul className="space-y-4 mt-8">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-green-500" />

                      {feature}
                    </li>
                  ))}

                </ul>

                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full mt-10 py-3 rounded-xl font-semibold transition
                  ${
                    plan.popular
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-900 hover:bg-black text-white"
                  }`}
                >
                  Choose {plan.name}
                </button>

              </div>
            ))}

          </div>

          {/* FAQ */}

          <div className="max-w-4xl mx-auto mt-24">

            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-lg">
                  Can I upgrade later?
                </h3>

                <p className="text-gray-600 mt-2">
                  Yes. Upgrade or downgrade your plan at any time without
                  losing your data.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-lg">
                  Is my data secure?
                </h3>

                <p className="text-gray-600 mt-2">
                  Yes. All business information is securely stored and backed
                  up automatically.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="font-bold text-lg">
                  Can I cancel anytime?
                </h3>

                <p className="text-gray-600 mt-2">
                  Absolutely. There are no long-term contracts.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}