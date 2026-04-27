import "./Header.css"
import { Link } from "react-router-dom";    
export default function Header(){
    return(<header className="header">
        <div className="logo">Duka-Yetu</div>
        <nav>
          <Link to="/features">Features</Link>
          <Link to="/price">Pricing</Link>
          <Link to="/login">Login</Link>
          
          <Link to="/register" className="cta-nav">Get Started</Link>
          <Link to="/help">Help</Link>
        </nav>
      </header> 
    );

}