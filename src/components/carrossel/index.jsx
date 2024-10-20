import React, { useState, useEffect } from "react";

export default function Carrossel({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className='relative flex items-center justify-center'>
      <div className='flex overflow-hidden w-full'>
        <img
          className='block w-full h-full object-cover rounded-2xl'
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
        />
      </div>

      <button
        onClick={goToPrevious}
        className='absolute left-0 bg-gray-700 text-white p-2 rounded-full'
      >
        &#10094;
      </button>
      <button
        onClick={goToNext}
        className='absolute right-0 bg-gray-700 text-white p-2 rounded-full'
      >
        &#10095;
      </button>
    </div>
  );
}
