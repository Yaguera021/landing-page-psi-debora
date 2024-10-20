import React from "react";

export default function Sobre() {
  return (
    <React.Fragment>
      <>
        <section
          className='py-12 lg:py-24 bg-orange-50 bs-section-dragged'
          id='sobre'
        >
          {" "}
          <div data-from-ai='false' className='flex flex-col items-center '>
            <h1 className='font-heading text-6xl text-center'>Sobre mim</h1>
            <br />
            <p className='text-2xl mb-10 px-6'>
              Sou Débora Böhm, psicóloga e empresária com mais de 30 anos de
              experiência. Durante minha trajetória no mundo dos negócios, tive
              a oportunidade de desenvolver uma ampla experiência em gestão,
              liderança e empreendedorismo. Essa vivência me proporcionou um
              contato profundo com diversas pessoas e situações, permitindo-me
              aprimorar minhas habilidades de comunicação e compreensão humana.
              Além de empresária, sou mãe, uma das experiências mais
              gratificantes e desafiadoras da minha vida. Como psicóloga, trago
              para o consultório essa rica bagagem pessoal e profissional, que
              me ajuda a entender as necessidades e desafios de cada paciente de
              forma única e empática. Juntos, podemos trabalhar para que você
              encontre equilíbrio, bem-estar e qualidade de vida.
            </p>
            <a
              href='https://wa.me/53984847284'
              target='_blank'
              className='inline-flex py-4 px-6 text-lg font-medium text-teal-900 hover:text-lime-500 border border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-teal-900 rounded-full transition duration-300'
            >
              Entre em contato
            </a>
          </div>
          <div className='container mx-auto px-4'>
            {" "}
            <div className='flex flex-wrap -mx-4 mb-24'>
              {" "}
              <div className='w-full md:w-1/2 px-4 mb-6 md:mb-0'>
                {" "}
                <div> </div>{" "}
              </div>{" "}
              <div className='w-full md:w-1/2 px-4'>
                {" "}
                <div className='lg:max-w-lg md:ml-auto'> </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className='flex overflow-x-hidden'>
            {" "}
            <div className='w-1/3 lg:w-1/5 -ml-32 flex-shrink-0 px-2 md:px-4'>
              {" "}
              <img
                className='block w-full h-full object-cover rounded-3xl'
                src='https://static.shuffle.dev/uploads/files/23/23785d7e7f7c1e5ed4bd54c7686b8ed80fb3c9c3/user4.png'
                alt
              />{" "}
            </div>{" "}
            <div className='w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4'>
              {" "}
              <img
                className='block w-full h-full object-cover rounded-3xl'
                src='https://static.shuffle.dev/uploads/files/23/23785d7e7f7c1e5ed4bd54c7686b8ed80fb3c9c3/user6.png'
                alt
              />{" "}
            </div>{" "}
            <div className='w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4'>
              {" "}
              <img
                className='block w-full h-full object-cover rounded-2xl'
                src='https://static.shuffle.dev/uploads/files/23/23785d7e7f7c1e5ed4bd54c7686b8ed80fb3c9c3/WhatsApp-Image-2024-10-08-at-20-50-49.jpeg'
                alt
              />{" "}
            </div>{" "}
            <div className='w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4'>
              {" "}
              <img
                className='block w-full h-full object-cover rounded-2xl'
                src='https://static.shuffle.dev/uploads/files/23/23785d7e7f7c1e5ed4bd54c7686b8ed80fb3c9c3/psidebora.'
                alt
              />{" "}
            </div>{" "}
            <div className='w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4'>
              {" "}
              <img
                className='block w-full h-full object-cover rounded-2xl'
                src='https://static.shuffle.dev/uploads/files/23/23785d7e7f7c1e5ed4bd54c7686b8ed80fb3c9c3/profile2.jpeg'
                alt
              />{" "}
            </div>{" "}
            <div className='w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4'>
              {" "}
              <img
                className='block w-full h-full object-cover rounded-2xl'
                src='https://static.shuffle.dev/uploads/files/23/23785d7e7f7c1e5ed4bd54c7686b8ed80fb3c9c3/WhatsApp-Image-2024-10-08-at-20-57-12.jpeg'
                alt
              />{" "}
            </div>{" "}
            <div className='w-1/3 lg:w-1/5 flex-shrink-0 px-2 md:px-4'>
              {" "}
              <img
                className='block w-full h-full object-cover rounded-2xl'
                src='flow-assets/about/about-image2.png'
                alt
              />{" "}
            </div>{" "}
          </div>{" "}
        </section>
      </>
    </React.Fragment>
  );
}
