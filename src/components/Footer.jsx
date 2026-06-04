import React from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  return (

    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2026 Duka Yetu. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">  
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
             <Link to="/about" className="hover:underline">About Us</Link>
             <Link to="/price" className="hover:underline">Pricing</Link>
              <Link to="/support" className="hover:underline">Support</Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
} 