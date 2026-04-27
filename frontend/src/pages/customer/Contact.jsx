import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent (dummy)");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-4">Contact Us</h1>

        <div className="row">

          {/* LEFT SIDE INFO */}
          <div className="col-md-5 mb-4">
            <div className="p-4 shadow rounded bg-light">
              <h4>Get in Touch</h4>
              <p>We’d love to hear from you!</p>

              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Email:</strong> cakestore@gmail.com</p>
              <p><strong>Location:</strong> Kochi, Kerala</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-7">
            <div className="p-4 shadow rounded">

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-control mb-3"
                  rows="5"
                  onChange={handleChange}
                  required
                />

                <button className="btn btn-primary w-100">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;