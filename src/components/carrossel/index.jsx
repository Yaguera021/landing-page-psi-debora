import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const images = [
    {
      src: "/images/ambiente.jpeg",
      alt: "Imagem 1",
    },
    {
      src: "/images/namaste.jpeg",
      alt: "Imagem 2",
    },
    {
      src: "/images/backgroundimg.jpeg",
      alt: "Imagem 3",
    },
    {
      src: "/images/card.jpeg",
      alt: "Imagem 4",
    },
    {
      src: "/images/chimasbackground.jpeg",
      alt: "Imagem 5",
    },
    {
      src: "/images/entrada.jpeg",
      alt: "Imagem 6",
    },
    {
      src: "/images/profile2.jpeg",
      alt: "Imagem 7",
    },
    {
      src: "/images/psico.jpeg",
      alt: "Imagem 8",
    },
  ];

  return (
    <div className='slider-container'>
      <br />
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='px-2 md:px-4'>
            <img
              className='block w-full h-full object-cover rounded-2xl'
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
