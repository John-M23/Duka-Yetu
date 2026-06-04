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
                <ul>
                    <p  className="hover:cursor-pointer hover:underline">KSH 500 /Monthly</p>
                    <li className="font-bold text-lg text-decoration-line: underline">Basic features</li>
                    <li>Single Branch</li>
                    <li>POS Access</li>
                    <li>Product Management</li>
                    <li>Inventory Tracking</li>
                    <li>Sales Report </li>
                    


                </ul>
                 <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
                 purchase now
                </button>
            </div>

            {/* Advanced Plan */}
            <div className="plan-card">
                <div className="plan-badge-advanced">STANDARD</div>
                <div className="plan-price"><p>KSH 1,500 /Monthly</p></div>
                
                <ul>
                    <li className="font-bold text-lg text-decoration-line: underline">Advanced features</li>
                    <li>More Staff Accounts</li>
                    <li>Higher Product Limits</li>
                    <li>Multiple Devices</li>
                    <li>Enhanced Reporting</li>
                    <li>Better Inventory Control</li>
                </ul>
                 <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
                 purchase now
                </button>
            </div>

            {/* Professional Plan */}
            <div className="plan-card">
                <div className="plan-badge-professional">ADVANCED
                
                </div>
                <p>KSH 2,500 /Monthly</p>
           
                
                <ul>
                    <li className="font-bold text-lg text-decoration-line: underline">All features</li>
                    <li>Multiple Branches</li>
                    <li>Multiple Regions</li>
                    <li>Multi-Device Access</li>
                    <li>Advanced Reports</li>
                    <li>Branch Comparison Reports</li>
                    <li>Centralized Dashboard</li>

                </ul>

                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
                 purchase now
                </button>
            </div>

{/* 
              <div className="plan-card">
                <div className="plan-badge-professional">ADVANCED</div>
           
                <p>KSH 2,500/Annual</p>
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
