import React from 'react';
import { Link, useNavigate } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto px-4">
        <p className="text-center">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}