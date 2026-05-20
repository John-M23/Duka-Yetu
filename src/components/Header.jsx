import { useState } from "react"; // 1. Imported useState
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Imported FaTimes for a close 'X' icon

export default function Header() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // 2. Created the open/close state
    
    const handleFeaturesClick = (e) => {
        e.preventDefault();
        setIsMenuOpen(false); // Close menu if clicked inside mobile view
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
          
            <div className="px-6 py-4 flex items-center justify-between">
                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3 pl-2 group focus:outline-none">
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        Duka<span className="text-green-600">Yetu</span>
                    </span>
                </Link>

                {/* DESKTOP LINKS  */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="text-black hover:text-green-800 hover:underline">Home</Link>
                    <a href="#features" onClick={handleFeaturesClick} className="text-black hover:text-green-800 hover:underline">Features</a>
                    <Link to="/price" className="text-black hover:text-green-800 hover:underline">Pricing</Link>
                    <Link to="/help" className="text-black hover:text-green-800 hover:underline">Help</Link>
                </nav>

                {/* DESKTOP ACTIONS */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="bg-white text-black hover:bg-green-200 py-2 px-4 rounded border border-green-800">Sign In</Link>
                    <Link to="/register" className="bg-green-500 text-white hover:bg-green-700 py-2 px-4 rounded">Get Started</Link>  
                </div>

                {/* MOBILE TOGGLE BUTTON */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="text-gray-700 hover:text-green-600 transition p-1 rounded hover:bg-gray-50 md:hidden focus:outline-none"
                >
                    {/* Switches icon between Hamburger (☰) and Close (✕) depending on state */}
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* 4. MOBILE DROPDOWN MENU */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-inner">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-green-600 font-medium py-1">Home</Link>
                    <a href="#features" onClick={handleFeaturesClick} className="text-gray-800 hover:text-green-600 font-medium py-1">Features</a>
                    <Link to="/price" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-green-600 font-medium py-1">Pricing</Link>
                    <Link to="/help" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-green-600 font-medium py-1">Help</Link>
                    
                    <hr className="border-gray-200 my-1" />
                    
                    {/* Mobile Actions Stacked Layout */}
                    <div className="flex flex-col gap-2 pt-2">
                        <Link to="/login" onClick={() => setIsMenuOpen(false)} className="bg-white text-center text-black hover:bg-green-500 py-2 px-4 rounded border border-gray-300">Sign In</Link>
                        <Link to="/register" onClick={() => setIsMenuOpen(false)} className="bg-green-500 text-center text-white hover:bg-green-600 py-2 px-4 rounded font-medium">Get Started</Link>  
                    </div>
                </div>
            )}
        </header>
    );
}