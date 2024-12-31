import React, { useState, useEffect, useCallback } from "react";
import { carouselData } from "./carouseldata";


export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) =>
        prev === 0 ? carouselData.length - 1 : prev - 1
      );
    }
  }, [isAnimating]);

  useEffect(() => {
  const timer = setInterval(nextSlide, 5000); // 10 seconds per slide
  return () => clearInterval(timer);
}, [nextSlide]);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsAnimating(false);
  }, 5000); // Matches the transition duration
  return () => clearTimeout(timer);
}, [currentSlide]);

  return (
    <div className="w-full h-[50vh] overflow-hidden ">
  {carouselData.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 h-[85vh] transition-opacity duration-5000 ease-in-out ${
        currentSlide === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={slide.imageURL}
        alt={slide.text}
        className="w-full h-[85vh] object-cover "
      />
      <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
        <p className="text-white text-4xl font-bold text-center flex flex-wrap max-w-2xl ">
          {slide.text}
        </p>
      </div>
    </div>
  ))}
</div>
  );
};