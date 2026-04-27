import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dummy validation
    if (form.email === "admin@gmail.com" && form.password === "1234") {
      alert("Login success");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5" style={{ maxWidth: "400px" }}>
        <h2 className="text-center">Login</h2>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;