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
    return(<header className="header">
        <div className="logo">Duka-Yetu</div>
        <nav>
          <Link to="/">Home</Link>
          <a href="#features" onClick={handleFeaturesClick}>Features</a>
          <Link to="/price">Pricing</Link>
          <Link to="/login">Login</Link>
          <Link to="/help">Help</Link>
          <button onClick={() => navigate("/register")}>Get Started</button>
          
        </nav>
      </header> 
    );
}

