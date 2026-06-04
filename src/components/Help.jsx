import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { Link } from "react-router-dom";
export default function Help(){
    return( <>
    <Header />
    {/* <div className="p-4 bg-gray-100 rounded-lg">
        <p>Welcome to the Help Page! Here you can find answers to frequently asked questions, contact support, and access resources to assist you with any issues you may encounter while using our application.</p>
        <p>If you have any specific questions or need further assistance, please don't hesitate to reach out to our support team. We're here to help!</p>
        </div> */}
        <div className="p-4 bg-gray-100 rounded-lg">   
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">How do I reset my password?</h3>
                <p className="text-gray-700">To reset your password, click on the "Forgot Password" link on the login page and follow the instructions to receive a password reset email.</p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">How do I contact support?</h3>
                <p className="text-gray-700">You can contact our support team by emailing</p>
                <a href="mailto:support@company.com" className="text-blue-500 hover:underline">
                    support@company.com
                </a>
                <p className="text-gray-700">or by calling our support hotline at <a href="tel:0110304492" className="text-blue-500 hover:underline">0110304492</a>.</p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Where can I find user guides and tutorials?</h3>
                <p className="text-gray-700">You can find user guides and tutorials in our Help Center. Visit our <Link to="/help-center" className="text-blue-500 hover:underline">Help Center</Link> for step-by-step instructions and video tutorials.</p>
                </div>
            </div>
         
                
<Footer />
    </>
    );
}