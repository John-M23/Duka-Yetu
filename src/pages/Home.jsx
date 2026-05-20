import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Login-template1.png';
import  { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <main>

        {/* HERO */}
        
<section className="pt-20 pb-16 bg-gradient-to-b from-white to-green-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">

    {/* LEFT SIDE */}
    <div className="flex-1 text-center lg:text-left">

      {/* Badge */}
      <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-full">
        Smart Business Management
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
        Smart POS for Modern Businesses
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        Sell, manage inventory, track orders, and grow your business with one powerful dashboard.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

        <Link
          to="/register"
          className="px-6 py-3 text-white bg-green-600 rounded-xl shadow-sm hover:bg-green-700 transition duration-300"
        >
          Start Free
        </Link>

        <button
          onClick={() =>
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300"
        >
          Learn More
        </button>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1 relative">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-green-300/20 blur-3xl rounded-full"></div>

      {/* Dashboard Image */}
      <img
        src={heroImage}
        alt="POS preview"
        className="relative rounded-2xl shadow-2xl border border-gray-200"
      />
    </div>

  </div>
</section>



 {/* TRUST */}
<section className="py-12 bg-white text-center border-b border-gray-100">
  <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
    Trusted by growing businesses
  </p>
</section>

{/* FEATURES CONTAINER */}
<section id="features" className="py-20 bg-gray-50 space-y-24">
  
  {/* Feature 1: Sell Anywhere */}
  <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Sell Anywhere
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
        Use your phone, tablet or computer.
      </p>
    </div>
    <div className="flex-1">
      <img 
        src={heroImage} 
        alt="POS preview" 
        className="rounded-2xl shadow-xl border border-gray-200 bg-white"
      />
    </div>
  </div>

  {/* Feature 2: Track Inventory (Reversed on Desktop) */}
  <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row-reverse items-center gap-12">
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
        Track Inventory
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
        Real-time stock updates and alerts.
      </p>
    </div>
    <div className="flex-1">
      <img 
        src={heroImage} 
        alt="POS preview" 
        className="rounded-2xl shadow-xl border border-gray-200 bg-white"
      />
    </div>
  </div>

  {/* FEATURE GRID */}
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 font-semibold text-xl text-gray-800 text-center flex items-center justify-center min-h-[120px]">
      Reports
    </div>
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 font-semibold text-xl text-gray-800 text-center flex items-center justify-center min-h-[120px]">
      Multiple Payments
    </div>
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 font-semibold text-xl text-gray-800 text-center flex items-center justify-center min-h-[120px]">
      Employee Management
    </div>
  </div>
</section>

{/* CALL TO ACTION (CTA) */}
<section className="py-20 bg-gradient-to-t from-green-50 to-white text-center px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
      Start your shop today
    </h2>
    <button 
      onClick={() => navigate("/register")}
      className="mt-8 inline-block px-8 py-4 bg-green-600 text-white font-medium text-lg rounded-xl shadow-md hover:bg-green-700 transition duration-300 cursor-pointer"
    >
      Get Started
    </button>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}