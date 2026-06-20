import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardHeader from "../components/DashboardHeader";
import Pos from "../pages/Pos"
import Register from "../pages/Register";
import Price from "../components/Price";
import Help from "../components/Help";
import Inventory from "../pages/Inventory";
import Report from "../pages/Report";

import Staff from "../pages/Staff";
import Customer from "../pages/Customer";
import Branch from "../pages/Branch";
import Receipt from "../pages/Settings/Receipt";
import Payment from "../pages/Settings/Payment";
import Security from "../pages/Settings/Security";
import Taxes from "../pages/Settings/Taxes";
import Subscription from "../pages/Settings/Subscription";
import Business from "../pages/Settings/Business";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/price" element={<Price />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/security" element={<Security />} />
        <Route path="/taxes" element={<Taxes />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path ="/Business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}