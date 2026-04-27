import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Customer/Home";
import About from "./pages/Customer/About";
import Contact from "./pages/Customer/Contact";
import Gallery from "./pages/Customer/Gallery";
import Login from "./pages/Customer/Login";
import Register from "./pages/Customer/Register";
import ViewCakes from "./pages/Customer/ViewCakes";
import Cart from "./pages/Customer/Cart";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCustomers from "./pages/Admin/AdminCustomer";
import AdminEditCustomer from "./pages/Admin/AdminEditCustomer";
import AdminUploadCake from "./pages/Admin/AdminUploadCake";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cakes" element={<ViewCakes />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/edit" element={<AdminEditCustomer />} />
        <Route path="/admin/upload" element={<AdminUploadCake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;