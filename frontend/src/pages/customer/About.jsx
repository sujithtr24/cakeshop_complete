import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h1 className="text-center mb-4">About Us</h1>

        {/* Carousel */}
        <div id="carouselExample" className="carousel slide mb-5">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="/images/cake1.jpg"
                className="d-block w-100 rounded"
                height="500"
                alt="Cake 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/cake2.jpg"
                className="d-block w-100 rounded"
                height="500"
                alt="Cake 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/images/cake3.jpg"
                className="d-block w-100 rounded"
                height="500"
                alt="Cake 3"
              />
            </div>

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* About Content */}
        <div className="text-center">
          <h2>Welcome to Cake Store 🍰</h2>
          <p className="mt-3">
            Our bakery is dedicated to crafting delicious and beautiful cakes
            for every occasion. We use high-quality ingredients and passion
            to bring sweetness into your life.
          </p>

          <p>
            Whether it's birthdays, weddings, or special celebrations,
            we make every moment memorable with our handcrafted cakes.
          </p>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;