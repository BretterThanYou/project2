// src/pages/Home.js
import React, { useState } from "react";
import mario1 from "../images/mariotitle.jpg"
import zelda1 from "../images/zeldatitle.jpg"
import pokemon1 from "../images/pokemontitle.jpg"
import mario2 from "../images/mariotitle2.jpg"
import zelda2 from "../images/zeldatitle2.jpg"
import pokemon2 from "../images/pokemontitle2.jpg"
import "./Home.css";

const Home = () => {
  // Array of image URLs
  const images = [mario1, zelda1, pokemon1, mario2, zelda2, pokemon2];
  const [currentImage, setCurrentImage] = useState(0);

  // Handlers to navigate the slideshow
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the History of Video Games</h1>
      <p>Explore the iconic games that shaped the gaming industry.</p>

      {/* Slideshow container */}
      <div className="slideshow">
        <button className="slideshow-btn prev" onClick={prevImage}>
          &#8249; {/* Left arrow */}
        </button>
        <div className="slideshow-image-container">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="slideshow-image"
          />
        </div>
        <button className="slideshow-btn next" onClick={nextImage}>
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default Home;