import React from "react";
import AdminLayout from "../../components/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>

      <h2>Dashboard</h2>

      <div className="d-flex gap-3 mt-4">

        <div className="card p-3" style={{ width: "200px" }}>
          <h4>Customers</h4>
          <p>128</p>
        </div>

        <div className="card p-3" style={{ width: "200px" }}>
          <h4>Products</h4>
          <p>280</p>
        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminDashboard;