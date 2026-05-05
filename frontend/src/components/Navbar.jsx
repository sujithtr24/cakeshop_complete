import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = false; // dummy

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Cake Store
        </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="nav">
          <ul className="navbar-nav mx-auto gap-3">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/gallery">Gallery</Link></li>

            {isLoggedIn ? (
              <>
                <li><Link className="nav-link" to="/cakes">Cakes</Link></li>
                <li><Link className="nav-link" to="/cart">Cart</Link></li>
                <li><Link className="nav-link" to="/">Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link className="nav-link" to="/register">Register</Link></li>
                <li><Link className="nav-link" to="/login">Login</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;