import React, { useState, useEffect } from 'react';
import img1 from "./Images/image1.jpg";
import img2 from "./Images/image2.jpg";
import img3 from "./Images/image3.jpg";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade d-flex align-items-center justify-content-center"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item${index === currentSlide ? " active" : ""}`}
          >
            <img
              src={img}
              className={`d-block w-100${index === currentSlide ? " opacity-100" : " opacity-0"}`}
              alt={`Slide ${index + 1}`}
              style={{
                transition: "opacity 1s ease-in-out",
                position: index === currentSlide ? "relative" : "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
