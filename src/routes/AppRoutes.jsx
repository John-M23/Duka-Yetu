import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Pos from "../pages/Pos"
import Register from "../pages/Register";
import Price from "../components/Price";
import Inventory from "../pages/Inventory";
// import Reports from "../pages/Reports";
// import Staff from "../pages/Staff";

export default function AppRoutes()
{
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/login" element={<Login/>} />
            <Route path ="/dashboard" element={<Dashboard/>} />
             <Route path ="/pos" element={<Pos/>} />
             <Route path ="/register" element={<Register/>} />
             <Route path ="/price" element={<Price/>} />
              <Route path ="/Inventory"element={<Inventory/>} />
               {/* <Route path ="/reports" element={<Reports/>} /> */}
                {/* <Route path ="/staff" element={<Staff/>} /> */}
        </Routes>
        
        
        </BrowserRouter>
    );
}