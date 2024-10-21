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
      src: "/src/assets/images/ambiente.jpeg",
      alt: "Imagem 1",
    },
    {
      src: "/src/assets/images/background5.jpeg",
      alt: "Imagem 3",
    },
    {
      src: "/src/assets/images/backgroundimg.jpeg",
      alt: "Imagem 4",
    },
    {
      src: "/src/assets/images/card.jpeg",
      alt: "Imagem 5",
    },
    {
      src: "/src/assets/images/chimasbackground.jpeg",
      alt: "Imagem 6",
    },
    {
      src: "/src/assets/images/entrada.jpeg",
      alt: "Imagem 7",
    },
    {
      src: "/src/assets/images/namaste.jpeg",
      alt: "Imagem 9",
    },

    {
      src: "/src/assets/images/profile2.jpeg",
      alt: "Imagem 11",
    },
    {
      src: "/src/assets/images/psico.jpeg",
      alt: "Imagem 12",
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
