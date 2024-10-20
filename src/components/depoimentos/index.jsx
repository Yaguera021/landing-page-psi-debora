import React, { useState } from "react";
import depoimentos from "../../assets/data/data";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import frases from "../../assets/data/frases";

export default function Depoimentos() {
  const [text] = useTypewriter({
    words: frases,
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? depoimentos.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section
      className='py-12 lg:py-24 bg-orange-50 overflow-hidden'
      id='depoimentos'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-xs sm:max-w-md md:max-w-none mx-auto text-center mb-6'>
          <h1 className='font-heading text-2xl sm:text-xl tracking-tight mb-6'>
            "{text}
            <Cursor />"
          </h1>
        </div>
        <div className='max-w-md md:max-w-2xl lg:max-w-6xl mx-auto'>
          <div className='relative flex items-center justify-between'>
            <button
              onClick={handlePrev}
              className='text-gray-700 hover:text-lime-500 p-2'
            >
              <svg width={32} height={32} viewBox='0 0 32 32' fill='none'>
                <path
                  d='M24.4 16H7.6'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16 24.4L7.6 16L16 7.6'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <div className='w-full  text-center bg-white shadow-md rounded-2xl py-12 px-8'>
              <h4 className='text-xl lg:text-2xl font-medium mb-6'>
                "{depoimentos[currentIndex].quote}"
              </h4>
              <span className='block text-xl font-medium'>
                {depoimentos[currentIndex].nome}
              </span>
              <span className='block text-lg text-gray-700'>
                {depoimentos[currentIndex].profissao}
              </span>
            </div>

            <button
              onClick={handleNext}
              className='text-gray-700 hover:text-lime-500 p-2'
            >
              <svg width={32} height={32} viewBox='0 0 32 32' fill='none'>
                <path
                  d='M7.6 16H24.4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16 7.6L24.4 16L16 24.4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
