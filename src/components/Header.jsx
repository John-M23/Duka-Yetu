import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Header(){
    const navigate = useNavigate();
    
    const handleFeaturesClick = (e) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 " >
<Link to="/" className="flex items-center gap-3 pl-2 group focus:outline-none">
  {/* The Logo Icon */}
  {/* <img 
    src={logo} 
    alt="Duka Yetu Logo" 
    className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
  /> */}
  
  {/* The Brand Name Text */}
  <span className="text-xl font-bold tracking-tight text-gray-900">
    Duka<span className="text-green-600">Yetu</span>
  </span>
</Link>
        <nav className="flex gap-6 items-center ">
            <Link to="/" className="text-black hover:text-green-800  hover:underline">Home</Link>
            <a href="#features" onClick={handleFeaturesClick} className="text-black hover:text-green-800 hover:underline">Features</a>
            <Link to="/price" className="text-black hover:text-green-800 hover:underline">Pricing</Link>
            <Link to="/help" className="text-black hover:text-green-800 hover:underline">Help</Link>
        </nav>
        <div className="nav-actions">
        <Link to ="/login" className="bg-white text-black hover:bg-green-200 py-2 px-4 rounded border border-green-800">Sign In</Link>
        <Link to ="/register" className="bg-green-500 text-white hover:bg-green-700 py-2 px-4 rounded">Get Started</Link>
        </div>
        </header>






    );
}

