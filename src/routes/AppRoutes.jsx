import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Pos from "../pages/Pos"
import Register from "../pages/Register";


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
             
        </Routes>
        
        
        </BrowserRouter>
    );
}