import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Registered successfully (dummy)");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "400px" }}>
        <h2 className="text-center">Register</h2>

        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" className="form-control mb-3" onChange={handleChange} />
          <input name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} />
          <input name="phone" placeholder="Phone" className="form-control mb-3" onChange={handleChange} />

          <button className="btn btn-success w-100">Sign Up</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Register;