import { Link } from "react-router-dom";
import "./price.css"
import Header from "./Header";
import Footer from "./Footer";

export default function Price(){
    return(<>
        
<Header />
        <div className="product-card">
        <h2>Affordable Pricing Plans</h2>
        <p>Choose a plan that fits your needs and budget. Our pricing is transparent and competitive, ensuring you get the best value for your money.</p>
        
        <div className="pricing-container">
            {/* Beginner Plan */}
            <div className="plan-card">
                <div className="plan-badge-beginner">BASIC</div>
               
                <p>$9.99/month</p>
                <ul>
                    <li>Basic features</li>
                    <li>Up to 5 users</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>


                </ul>
            </div>

            {/* Advanced Plan */}
            <div className="plan-card">
                <div className="plan-badge-advanced">STANDARD</div>
                
                <p>$19.99/month</p>
                <ul>
                    <li>Advanced features</li>
                    <li>Up to 20 users</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                </ul>
            </div>

            {/* Professional Plan */}
            <div className="plan-card">
                <div className="plan-badge-professional">ADVANCED
                
                </div>
                <p>$29.99/month</p>
           
                
                <ul>
                    <li>All features</li>
                    <li>Unlimited users</li>
                    <li>Priority support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>
                    <li>Email support</li>

                </ul>
            </div>

{/* 
              <div className="plan-card">
                <div className="plan-badge-professional">ADVANCED</div>
           
                <p>$29.99/Annual</p>
                <ul>
                    <li>All features</li>
                    <li>Unlimited users</li>
                    <li>Priority support</li>
                </ul>
            </div> */}
        </div>
        </div>
        <Footer />
        </>
    );
}
