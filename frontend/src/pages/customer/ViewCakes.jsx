import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { API, BASE_URL } from "../../api/api";

const ViewCakes = () => {
  const [cakes,setCakes] = useState([])

  useEffect(()=>{
    API.get("cakes/")
      .then(res => setCakes(res.data))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Cakes</h2>

        <div className="row">
          
          {cakes.map(cake => (
            <div className="col-md-4 mb-4" key={cake.id}>
              <div className="card">
                <img src={`${BASE_URL}${cake.cake_image}`} className="card-img-top" alt="" />
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