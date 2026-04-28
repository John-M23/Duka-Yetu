import "./Header.css"
import { Link, useNavigate } from "react-router-dom";

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
        <header className="header" >
        <div className="logo">
            <Link to="/">Duka Yetu</Link>
        </div>

        <nav className="nav-links">
            <Link to="/">Home</Link>
            <a href="#features" onClick={handleFeaturesClick}>Features</a>
           <Link to ="/price">Pricing</Link>
            <Link to ="/help">Help</Link>

        </nav>
        <div className="nav-actions">
        <Link to ="/login" className="btn-outline">Sign In</Link>
        <Link to ="/register" className="btn-primary">Get Started</Link>
        </div>
      







        </header>






    );
}

