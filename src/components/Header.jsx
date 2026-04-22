import "./Header.css"
import { Link } from "react-router-dom";    
export default function Header(){
    return(<header className="header">
        <div className="logo">Duka-Yetu</div>
        <nav>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/login">Login</Link>
          
          <Link to="/register" className="cta-nav">Get Started</Link>
        <link to="/help" ></link>
        </nav>
      </header> 
    );

}