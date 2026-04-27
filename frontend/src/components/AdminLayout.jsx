import React from "react";
import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", background: "#fff7e6", minHeight: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{
        width: "250px",
        background: "#c28e52",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        height: "100%"
      }}>
        <h3 className="text-center mb-4">Admin Panel</h3>

        <Link to="/admin" className="d-block text-white mb-3">Dashboard</Link>
        <Link to="/admin/customers" className="d-block text-white mb-3">Users</Link>
        <Link to="/admin/upload" className="d-block text-white mb-3">Upload Products</Link>
      </div>

      {/* CONTENT */}
      <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <div className="bg-warning text-white p-3 rounded mb-4">
          Welcome Admin!
        </div>

        {children}
      </div>

    </div>
  );
};

export default AdminLayout;