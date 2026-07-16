import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import dashboard from '../assets/Dashboard-Image.png';
import heroImage from '../assets/Login-template1.png';
import  { useNavigate } from 'react-router-dom';
// import { fromJSON } from 'postcss';
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <main>
<section className="pt-10 pb-20 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-16">

    {/* LEFT SIDE */}
    <div className="flex-1 text-center lg:text-left">

      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
        🇰🇪 Proudly Built in Kenya
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
        Sell Faster.
        <br />
        Track Inventory.
        <br />
        Grow Your Business.
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
        Duka Yetu POS helps businesses manage sales, inventory, staff,
        reports, and payments from one modern dashboard making
         day-to-day operations faster, easier, and more organized.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

        <Link
          to="/register"
          className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-green-700 transition duration-300"
        >
          Get Started Free
        </Link>

        <button
          onClick={() =>
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-4 border border-gray-300 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          Explore Features
        </button>

      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">

        <div>
          <h3 className="text-2xl font-bold text-green-600">100%</h3>
          <p className="text-sm text-gray-600 mt-1">
            Cloud Based
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-600">24/7</h3>
          <p className="text-sm text-gray-600 mt-1">
            Business Access
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-600">Multi</h3>
          <p className="text-sm text-gray-600 mt-1">
            Payment Methods
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-600">Real-Time</h3>
          <p className="text-sm text-gray-600 mt-1">
            Inventory
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1 relative">

      {/* Glow */}
      <div className="absolute inset-0 bg-green-300/20 blur-3xl rounded-full"></div>

      {/* Dashboard */}
      <img
        src={dashboard}
        alt="Duka Yetu POS Dashboard"
        className="relative rounded-3xl shadow-2xl border border-gray-200 hover:scale-[1.02] transition duration-500"
      />

     

    </div>

  </div>
</section>



{/* TRUST BAR */}
<section className="py-12 bg-white border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">

    <div>
      <div className="text-3xl">🔒</div>
      <h3 className="font-semibold mt-3">Secure</h3>
      <p className="text-sm text-gray-500 mt-1">Protected business data</p>
    </div>

    <div>
      <div className="text-3xl">💳</div>
      <h3 className="font-semibold mt-3">M-Pesa Ready</h3>
      <p className="text-sm text-gray-500 mt-1">Fast digital payments</p>
    </div>

    <div>
      <div className="text-3xl">🧾</div>
      <h3 className="font-semibold mt-3">Receipt Printing</h3>
      <p className="text-sm text-gray-500 mt-1">Professional receipts</p>
    </div>

    <div>
      <div className="text-3xl">📱</div>
      <h3 className="font-semibold mt-3">Mobile Friendly</h3>
      <p className="text-sm text-gray-500 mt-1">Works anywhere</p>
    </div>

    <div>
      <div className="text-3xl">⚡</div>
      <h3 className="font-semibold mt-3">Fast Performance</h3>
      <p className="text-sm text-gray-500 mt-1">Quick checkout</p>
    </div>

    <div>
      <div className="text-3xl">☁️</div>
      <h3 className="font-semibold mt-3">Cloud Sync</h3>
      <p className="text-sm text-gray-500 mt-1">Access anytime</p>
    </div>

  </div>
</section>

{/* FEATURES */}
<section id="features" className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-gray-900">
        Everything You Need to Run Your Business
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
        From sales and inventory management to employee tracking and business
        insights, Duka Yetu POS keeps everything organized in one place.
      </p>
    </div>

    {/* Feature 1 */}
    <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">

      <div className="flex-1">
        <img
          src={heroImage}
          alt="POS Checkout"
          className="rounded-3xl shadow-xl border"
        />
      </div>

      <div className="flex-1">

        <span className="text-green-600 font-semibold uppercase">
          Fast Checkout
        </span>

        <h3 className="text-4xl font-bold mt-3">
          Sell Faster with an Intuitive POS
        </h3>

        <p className="mt-6 text-lg text-gray-600">
          Complete sales in seconds, accept multiple payment methods,
          generate receipts instantly, and keep queues moving effortlessly.
        </p>

        <ul className="mt-8 space-y-4 text-gray-700">

          <li>✅ Cash Payments</li>

          <li>✅ M-Pesa Integration</li>

          <li>✅ Receipt Printing</li>

          <li>✅ Quick Product Search</li>

        </ul>

      </div>

    </div>

    {/* Feature 2 */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">

      <div className="flex-1">
        <img
          src={heroImage}
          alt="Inventory"
          className="rounded-3xl shadow-xl border"
        />
      </div>

      <div className="flex-1">

        <span className="text-green-600 font-semibold uppercase">
          Inventory Management
        </span>

        <h3 className="text-4xl font-bold mt-3">
          Stay in Control of Your Stock
        </h3>

        <p className="mt-6 text-lg text-gray-600">
          Monitor stock levels in real time, receive low-stock alerts,
          organize products into categories, and never miss a sale.
        </p>

        <ul className="mt-8 space-y-4 text-gray-700">

          <li>✅ Real-Time Inventory</li>

          <li>✅ Low Stock Alerts</li>

          <li>✅ Product Categories</li>

          <li>✅ Stock History</li>

        </ul>

      </div>

    </div>

    {/* Feature Cards */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-4xl">📈</div>
        <h3 className="font-bold text-xl mt-5">
          Smart Reports
        </h3>
        <p className="text-gray-600 mt-3">
          Understand your business performance with detailed sales reports.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-4xl">👥</div>
        <h3 className="font-bold text-xl mt-5">
          Staff Management
        </h3>
        <p className="text-gray-600 mt-3">
          Manage employees with secure role-based access.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-4xl">💳</div>
        <h3 className="font-bold text-xl mt-5">
          Multiple Payments
        </h3>
        <p className="text-gray-600 mt-3">
          Accept cash, M-Pesa, and other payment methods with ease.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
        <div className="text-4xl">📊</div>
        <h3 className="font-bold text-xl mt-5">
          Business Insights
        </h3>
        <p className="text-gray-600 mt-3">
          Make informed decisions using powerful analytics and dashboards.
        </p>
      </div>

    </div>

  </div>
</section>

{/* FINAL CALL TO ACTION */}
<section className="py-24 bg-gradient-to-br from-green-600 to-green-700 text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
      Ready to Transform Your Business?
    </span>

    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Start Selling Smarter with Duka Yetu POS
    </h2>

    <p className="mt-6 text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
      Simplify your sales, manage inventory with confidence, track business
      performance, and serve your customers faster all from one powerful
      platform.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

      <button
        onClick={() => navigate("/register")}
        className="px-8 py-4 bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
      >
        Get Started Free
      </button>

      <button
        onClick={() =>
          document
            .getElementById("features")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-8 py-4 border border-white text-white rounded-xl hover:bg-white/10 transition duration-300 cursor-pointer"
      >
        Explore Features
      </button>

    </div>

    {/* Trust Text */}
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-green-100">

      <div>
        <p className="font-semibold text-white">✓ Easy Setup</p>
      </div>

      <div>
        <p className="font-semibold text-white">✓ Secure Platform</p>
      </div>

      <div>
        <p className="font-semibold text-white">✓ Multiple Payments</p>
      </div>

      <div>
        <p className="font-semibold text-white">✓ Real-Time Reports</p>
      </div>

    </div>

  </div>
</section>
      </main>
      <Footer />
    </>
  );
}