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
      </Routes>
    </BrowserRouter>
  );
}