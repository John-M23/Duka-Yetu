import { Link } from "react-router-dom";
import "./Price.css"
import Header from "./Header";

export default function Price(){
    return(<>
        
<Header />
        <div className="price">
        <h2>Affordable Pricing Plans</h2>
        <p>Choose a plan that fits your needs and budget. Our pricing is transparent and competitive, ensuring you get the best value for your money.</p>
        <div className="pricing-table">
            <div className="Beginner">
                <h3>Beginner</h3>
                <p>$9.99/month</p>
                <ul>
                    <li>Basic features</li>
                    <li>Up to 5 users</li>
                    <li>Email support</li>
                </ul>
            </div>
            <div className="Advanced">
                <h3>Advanced</h3>
                <p>$19.99/month</p>
                <ul>
                    <li>Advanced features</li>
                    <li>Up to 20 users</li>
                    <li>Email support</li>
                </ul>
            </div>

        </div>
        </div>
        </>
    );
}
