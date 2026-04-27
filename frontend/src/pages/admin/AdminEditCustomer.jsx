import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const AdminEditCustomer = () => {

  const [form, setForm] = useState({
    id: 1,
    name: "John",
    email: "john@gmail.com",
    password: "123",
    phone: "9999999999"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Updated (dummy)");
  };

  return (
    <AdminLayout>

      <h2>Edit Customer</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>

        <input name="id" value={form.id} readOnly className="form-control mb-2" />

        <input name="name" value={form.name} onChange={handleChange} className="form-control mb-2" />

        <input name="email" value={form.email} onChange={handleChange} className="form-control mb-2" />

        <input name="password" value={form.password} onChange={handleChange} className="form-control mb-2" />

        <input name="phone" value={form.phone} onChange={handleChange} className="form-control mb-2" />

        <button className="btn btn-success">Update</button>

      </form>

    </AdminLayout>
  );
};

export default AdminEditCustomer;