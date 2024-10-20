import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/headers/index";
import Sobre from "../components/sobre";
import Trabalho from "../components/trabalho";
import Depoimentos from "../components/depoimentos";
import Faq from "../components/faq";
import Contato from "../components/contato";
// import Footer from "../components/footer";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Header />
      <Sobre />
      <Trabalho />
      <Depoimentos />
      <Faq />
      <Contato />
      {/* <Footer /> */}
    </React.Fragment>
  );
}
