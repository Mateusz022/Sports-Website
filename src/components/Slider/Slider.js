import { Component } from "react";
import "./Slider.css";
import React, { useState } from 'react';

const Slider = ({ image1, caption1, image2, caption2, image3, caption3, image4, caption4, image5, caption5 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const images = [image1, image2, image3, image4, image5];
    const captions = [caption1, caption2, caption3, caption4, caption5];
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="slider">
        <div className="slide-container">
          <img
            className="slide-image"
            src={process.env.PUBLIC_URL + images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <p className="slide-caption">{captions[currentIndex]}</p>
          <div className="nav-buttons">
            <button className="nav-button" onClick={prevSlide}>Poprzedni</button>
            <button className="nav-button" onClick={nextSlide}>Następny</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Slider;