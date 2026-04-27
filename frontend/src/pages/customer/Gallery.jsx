import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Gallery = () => {

  const images = [
    "/images/cake1.jpg",
    "/images/cake2.jpg",
    "/images/cake3.jpg",
    "/images/cake1.jpg",
    "/images/cake2.jpg",
    "/images/cake3.jpg",
  ];

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-4">Gallery</h1>

        <div className="row">
          {images.map((img, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={img}
                  alt="cake"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Gallery;