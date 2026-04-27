import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const AdminUploadCake = () => {

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Cake uploaded (dummy)");
  };

  return (
    <AdminLayout>

      <h2>Upload Cake</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>

        <input name="name" placeholder="Cake Name" className="form-control mb-2" onChange={handleChange} />

        <input name="price" type="number" placeholder="Price" className="form-control mb-2" onChange={handleChange} />

        <select name="category" className="form-control mb-2" onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
        </select>

        <textarea name="description" placeholder="Description" className="form-control mb-2" onChange={handleChange}></textarea>

        <input type="file" name="image" className="form-control mb-2" onChange={handleChange} />

        <button className="btn btn-primary">Upload</button>

      </form>

    </AdminLayout>
  );
};

export default AdminUploadCake;