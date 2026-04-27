import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import API from "../../api/api";

const ViewCakes = () => {
  console.log("ViewCakes component loaded");
  const [cakes,setCakes] = useState([
    { id: 1, name: "Chocolate Cake", price: 500, image: "/images/cake1.jpg" },
    { id: 2, name: "Vanilla Cake", price: 400, image: "/images/cake2.jpg" },
    { id: 3, name: "Strawberry Cake", price: 600, image: "/images/cake3.jpg" },
  ])


  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Cakes</h2>

        <div className="row">
          
          {cakes.map(cake => (
            <div className="col-md-4 mb-4" key={cake.id}>
              <div className="card">
                <img src={`http://127.0.0.1:8000${cake.cake_image}`} className="card-img-top" alt="" />
                <div className="card-body text-center">
                  <h5>{cake.cake_name}</h5>
                  <p>₹{cake.cake_price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewCakes;