import React, { useState, useEffect } from "react";
import ArrowUp from "../../assets/svgs/arrowUp.jsx";
import HamburgerMenu from "../../assets/svgs/hamburgerMenu.jsx";

export default function Header() {
  const [showScroll, setShowScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const checkScrollTop = () => {
    const scrollY = window.pageYOffset;

    if (!showScroll && scrollY > 100) {
      setShowScroll(true);
    } else if (showScroll && scrollY <= 100) {
      setShowScroll(false);
    }

    if (scrollY > 100 && menuOpen) {
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll, menuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <section className='pb-12 lg:pb-24 bg-teal-900'>
        <nav className='py-12'>
          <div className='container mx-auto px-4'>
            <div className='relative flex-row-reverse items-center justify-between'>
              <ul
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex`}
              >
                <li className='mr-8'>
                  <a
                    className='inline-block text-white hover:text-lime-500 font-medium'
                    href='#sobre'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("sobre");
                    }}
                  >
                    Sobre
                  </a>
                </li>
                <li className='mr-8'>
                  <a
                    className='inline-block text-white hover:text-lime-500 font-medium'
                    href='#faq'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("faq");
                    }}
                  >
                    FAQ
                  </a>
                </li>
                <li className='mr-8'>
                  <a
                    className='inline-block text-white hover:text-lime-500 font-medium'
                    href='#trabalho'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("trabalho");
                    }}
                  >
                    Trabalho
                  </a>
                </li>
                <li>
                  <a
                    className='inline-block text-white hover:text-lime-500 font-medium'
                    href='#contato'
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contato");
                    }}
                  >
                    Contato
                  </a>
                </li>
              </ul>
              <div className='flex items-center justify-end'>
                {!menuOpen && (
                  <button
                    className='md:hidden navbar-burger text-white hover:text-lime-500'
                    onClick={toggleMenu}
                  >
                    <HamburgerMenu />
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className='md:hidden'>
            <ul className='fixed flex justify-between top-0 left-0 w-full p-4 '>
              <li className='mb-4'>
                <a
                  className='block text-white hover:text-lime-500 font-medium'
                  href='#sobre'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("sobre");
                    toggleMenu();
                  }}
                >
                  Sobre
                </a>
              </li>
              <li className='mb-4'>
                <a
                  className='block text-white hover:text-lime-500 font-medium'
                  href='#faq'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("faq");
                    toggleMenu();
                  }}
                >
                  FAQ
                </a>
              </li>
              <li className='mb-4'>
                <a
                  className='block text-white hover:text-lime-500 font-medium'
                  href='#trabalho'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("trabalho");
                    toggleMenu();
                  }}
                >
                  Trabalho
                </a>
              </li>
              <li>
                <a
                  className='block text-white hover:text-lime-500 font-medium'
                  href='#contato'
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contato");
                    toggleMenu();
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full lg:w-1/2 px-4 mb-16 lg:mb-0'>
              <div className='max-w-lg lg:max-w-none mx-auto'>
                <h1 className='font-heading text-5xl xs:text-6xl sm:text-7xl xl:text-8xl text-center tracking-tight text-white mb-8'>
                  Débora Böhm
                </h1>
                <p className='text-lg text-white mb-10 text-center'>
                  Olá e seja bem-vindo(a)!
                  <br />
                  Cuidar da sua saúde mental é essencial, e eu estou aqui para
                  ajudar.
                  <br />
                  Eu sou a psicóloga Débora Böhm, e, nas minhas sessões, aplico
                  técnicas da Terapia Cognitiva-Comportamental (TCC), que é o
                  foco principal do meu trabalho. A TCC é uma abordagem
                  comprovada que pode ajudar você a lidar com dificuldades
                  emocionais e comportamentais. Através dela, trabalharemos
                  juntos para identificar padrões de pensamento e comportamento
                  que podem estar afetando sua qualidade de vida, promovendo
                  mudanças positivas e duradouras. Juntos, podemos trabalhar
                  para que você alcance o equilíbrio e a qualidade de vida que
                  merece. Agende uma consulta e comece sua jornada de
                  transformação!
                </p>
                <div className='flex flex-row items-center justify-center'>
                  <a
                    href='https://wa.me/53984847284'
                    target='_blank'
                    className='inline-flex py-4 px-6 items-center justify-center sm:items-center text-lg font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200'
                  >
                    Entre em contato
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full lg:w-1/2 px-4'>
              <div className='relative max-w-lg mx-auto lg:mr-0'>
                <img
                  className='block w-full relative rounded-2xl'
                  src='https://static.shuffle.dev/uploads/files/23/23785d7e7f7c1e5ed4bd54c7686b8ed80fb3c9c3/profile.jpeg'
                  alt='Profile image of Debora Böhm'
                />
              </div>
            </div>
          </div>
        </div>
        {showScroll && (
          <button
            onClick={scrollToTop}
            className='fixed bg-teal-900 text-white rounded-full shadow-lg hover:bg-lime-500 transition duration-300'
            style={{
              width: "40px",
              height: "40px",
              right: "2%",
              bottom: "5%",
            }}
          >
            <ArrowUp />
          </button>
        )}
      </section>
    </React.Fragment>
  );
}
