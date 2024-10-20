import React, { useState } from "react";
import faqData from "../../assets/data/faq";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='py-12 lg:py-24' id='faq'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-20'>
          <h1 className='font-heading text-6xl mb-6'>Perguntas frequentes</h1>
          <p className='text-gray-700'>
            Algumas dúvidas surgem quanto ao trabalho, seguem algumas mais
            abordadas.
          </p>
        </div>
        <div className='max-w-4xl mx-auto'>
          {faqData.map((faq, index) => (
            <div key={index} className='mb-4'>
              <button
                className='flex w-full py-6 px-8 items-start justify-between text-left shadow-md rounded-2xl focus:outline-none'
                onClick={() => toggleAccordion(index)}
              >
                <div>
                  <h5 className='text-lg font-medium'>{faq.question}</h5>
                </div>
                <span className='flex-shrink-0'>
                  {activeIndex === index ? (
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.69995 12H18.3'
                        stroke='#1D1F1E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  ) : (
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 5.69995V18.3'
                        stroke='#1D1F1E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M5.69995 12H18.3'
                        stroke='#1D1F1E'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "h-auto opacity-100" : "h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className='text-gray-700 mt-4 px-8'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
