import React, { useState, useEffect } from "react";
import "./Glimpses.css"; 
import Footer from "../components/Footer";

const Glimpses = () => {
  const images = [
    "/HomePage/i2.JPG",
    "/HomePage/image1.jpg",
    "/HomePage/i8.JPG",
    "/HomePage/i10.jpg",
    "/HomePage/i4.JPG",
    "/HomePage/i5.JPG",
    "/HomePage/i6.JPG",
    "/HomePage/i7.JPG",
    "/HomePage/i9.JPG",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); 
  const isMobileView = window.innerWidth <= 600;

  const imagesPerSlide = isMobileView ? 1 : 3;
  const totalSlides = Math.ceil(images.length - 2);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
    setDirection(-1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    setDirection(1);
  };

  return (
    <>
      <div id="background__gradient">
        <h1 id="glimpses__heading">Glimpses</h1>
        <div className="image-slider-container">
          <div
            className="slider"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / imagesPerSlide)
              }%)`,
            }}
          >
            {Array.from({ length: totalSlides * 2 }).map((_, index) => (
              <div
                key={index}
                className="slide"
                style={{
                  flexDirection: direction === -1 ? "row-reverse" : "row",
                }}
              >
                {images
                  .slice(index * imagesPerSlide, (index + 1) * imagesPerSlide)
                  .map((image, i) => (
                    <div key={i} className="image-column">
                      <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
          {/* <button className="arrow left" onClick={goToPrevSlide}>
            <img src="/HomePage/left-arrow.png" alt="" />
          </button>
          <button className="arrow right" onClick={goToNextSlide}>
            &gt;
          </button> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Glimpses;
