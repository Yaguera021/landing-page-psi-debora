import React from "react";
import ImageSlider from "../carrossel";

export default function Sobre() {
  return (
    <React.Fragment>
      <>
        <section
          className='py-12 lg:py-24 bg-orange-50 bs-section-dragged'
          id='sobre'
        >
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
          <ImageSlider />
        </section>
      </>
    </React.Fragment>
  );
}
