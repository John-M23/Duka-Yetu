import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1f2937",
        color: "white",
        padding: "20px"
      }}
    >
      <h2>Duka Yetu</h2>

      <nav style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/pos" style={{ color: "white" }}>POS</Link>
        <Link to="/inventory" style={{ color: "white" }}>Inventory</Link>
        <Link to="/reports" style={{ color: "white" }}>Reports</Link>
      </nav>
    </div>
  );
}