import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">

        {/* HERO SECTION */}
        <div className="text-center p-5 bg-light rounded">
          <h1 className="display-4">Explore Delicious Cakes</h1>
          <p>Freshly baked with love and premium ingredients</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>

        {/* ABOUT SECTION */}
        <div className="text-center mt-5">
          <h2>Welcome to Cake Store</h2>
          <p>
            We provide the best cakes with amazing taste and quality.
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Home;