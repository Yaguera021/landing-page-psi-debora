import React from "react";

export default function Contato() {
  return (
    <React.Fragment>
      <>
        <section className='py-12 lg:py-24 bg-teal-900' id='contato'>
          <div className='container mx-auto px-4'>
            <div className='max-w-lg mx-auto md:max-w-none'>
              <h1 className='font-heading text-4xl sm:text-6xl tracking-sm text-white mb-6 text-center'>
                Entre em contato&nbsp;
              </h1>
              <p className='text-lg text-white opacity-80 mb-20 text-center'>
                Estou aqui para te ajudar a dar o primeiro passo em direção a
                escolhas mais saudáveis e equilibradas para o seu bem-estar
                emocional.
              </p>
              <div className='flex flex-wrap -mx-4 justify-between'>
                <div className='w-full sm:w-1/2 md:w-1/3 px-4 mb-10 md:mb-0'>
                  <div className='flex flex-col h-full items-center'>
                    <svg
                      width={48}
                      height={48}
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z'
                        fill='#BEF264'
                      />
                      <path
                        d='M13.3333 12C12.597 12 12 12.597 12 13.3333C12 25.8518 22.1482 36 34.6667 36C35.403 36 36 35.403 36 34.6667V28.2667C36 27.6779 35.6138 27.1588 35.0498 26.9896L29.7165 25.3896C29.2466 25.2486 28.7374 25.377 28.3905 25.7239L26.8288 27.2856C24.2738 25.847 22.153 23.7262 20.7144 21.1712L22.2761 19.6095C22.623 19.2626 22.7514 18.7534 22.6104 18.2835L21.0104 12.9502C20.8412 12.3862 20.3221 12 19.7333 12H13.3333Z'
                        fill='#022C22'
                      />
                    </svg>
                    <span className='block mt-8 mb-1 text-2xl font-medium text-white'>
                      Telefone
                    </span>
                    <p className='text-white opacity-80'>
                      Disponível de segunda-sexta
                    </p>
                    <p className='text-white opacity-80 mb-auto'>
                      {" "}
                      9 AM - 5 PM
                    </p>
                    <p className='mt-8 text-lg font-medium text-white'>
                      (53) 98484-7284
                    </p>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 px-4'>
                  <div className='flex flex-col h-full items-center'>
                    <svg
                      width={48}
                      height={48}
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z'
                        fill='#BEF264'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M24.7886 37.0751L24.7902 37.074L24.7926 37.0722L24.8 37.0667L24.8247 37.0483C24.8456 37.0328 24.875 37.0106 24.9126 36.9821C24.9876 36.9249 25.0948 36.8422 25.2297 36.7351C25.4994 36.5212 25.8803 36.2099 26.3353 35.8126C27.2435 35.0196 28.4568 33.876 29.6738 32.4735C32.0637 29.7193 34.6667 25.7403 34.6667 21.3333C34.6667 15.4423 29.8911 10.6667 24 10.6667C18.109 10.6667 13.3334 15.4423 13.3334 21.3333C13.3334 25.7403 15.9364 29.7193 18.3263 32.4735C19.5433 33.876 20.7566 35.0196 21.6648 35.8126C22.1198 36.2099 22.5007 36.5212 22.7704 36.7351C22.9053 36.8422 23.0125 36.9249 23.0875 36.9821C23.125 37.0106 23.1545 37.0328 23.1754 37.0483L23.2001 37.0667L23.2075 37.0722L23.2108 37.0746C23.6802 37.4189 24.3192 37.4194 24.7886 37.0751ZM23.9971 24.6667C25.8381 24.6667 27.3304 23.1743 27.3304 21.3333C27.3304 19.4924 25.8381 18 23.9971 18C22.1562 18 20.6638 19.4924 20.6638 21.3333C20.6638 23.1743 22.1562 24.6667 23.9971 24.6667Z'
                        fill='#022C22'
                      />
                    </svg>
                    <span className='block mt-8 mb-1 text-2xl font-medium text-white'>
                      Consultório
                    </span>
                    <p className='text-white opacity-80 mb-auto'>
                      Atendimento presencial
                    </p>
                    <p className='mt-8 text-lg font-medium text-white'>
                      Duque de Caxias,308 - Centro
                    </p>
                    <p className='text-lg font-medium text-white'>
                      Rio Grande - Rio Grande do Sul
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
