/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  featureCardsData,
  descriptiveCardsData,
  tableData as tData,
} from "../data";

import "../App.scss";
import spaceman1 from "../assets/spaceman-1.png";

import chevronDownWhite from "../assets/chevron-down-white.png";

import team from "../assets/team.png";
import { BsArrowRight } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import DescriptiveCard from "../components/DescriptiveCard";

function Landing() {
  const [featureCards, setFeatureCards] = useState(featureCardsData);
  const descriptiveCards = descriptiveCardsData;
  const tableData = tData;
  const setActiveCard = useCallback((cardIndex) => {
    const newCards = [...featureCards];
    const updatedCards = newCards.map((card, index) => {
      return cardIndex === index
        ? { ...card, active: true }
        : { ...card, active: false };
    });
    setFeatureCards(updatedCards);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row py-5 vh-75">
          <div className="col-12 col-md-6 h-100 d-flex align-items-center justify-content-center">
            <img src={spaceman1} alt="" className="w-75" />
          </div>
          <div className="col-12 col-md-6 h-100 d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-center mb-5 fs-lg fw-bold">
              Desarrolla todo <br />
              <span className="text-main-red">tu POTENCIAL</span>
              <br />
              dentro del equipo <br />
              <span className="text-main-red">ATOMIC</span>LABS
            </h1>
            <Link to="/register">
              <Button>¡Quiero ser parte!</Button>
            </Link>
          </div>
        </div>
        <div className="row vh-25">
          <div className="col-12">
            <div className="w-25 text-center mx-auto">
              <img src={chevronDownWhite} alt="" />
              <p>Quiero saber más</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-5 fs-lg fw-bold">
              SOMOS EL BRAZO DERECHO <br />
              <span className="text-main-red">DE LA TECNOLOGÍA</span>
            </h2>
            <div className="row row-cols-3 g-0 pt-5 mb-5">
              {featureCards.map((card, index) => (
                <FeatureCard
                  key={index}
                  {...card}
                  clickHandler={setActiveCard}
                  cardIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="my-5 pt-5 text-center fs-lg fw-bold">
              ¡TE ENCANTARÁ <br />{" "}
              <span className="text-main-red">TRABAJAR CON NOSOTROS!</span>
            </h2>
            <img src={team} alt="" />
            <div className="d-flex justify-content-between align-items-center text-center">
              <p className="fs-3 m-0">
                Contratación
                <br />
                remota
              </p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">
                Entrevista con
                <br />
                el área de RH
              </p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">
                Prueba
                <br />
                práctica
              </p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">
                Entrevista
                <br />
                técnica
              </p>
            </div>
            <div className="text-center mx-auto my-5 py-4">
              <Link to="/register">
                <Button>¡Quiero ser parte!</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="my-5 text-center fs-lg fw-bold">
              ¿POR QUÉ <span className="text-main-red">ATOMIC?</span>
            </h2>
            <div className="row row-cols-3 g-4 mb-5">
              {descriptiveCards.map((card) => {
                return <DescriptiveCard {...card} />;
              })}
            </div>
            <div className="card">
              <table className="table features-table">
                <thead>
                  <tr>
                    <th scope="col" className="border-bottom-0 ps-4 fs-5">
                      CARACTERISTICAS
                    </th>
                    <th
                      scope="col"
                      className="text-center border-bottom-0 fs-5"
                    >
                      OTROS
                    </th>
                    <th
                      scope="col"
                      className="bg-highlight fs-3 text-center border-bottom-0"
                    >
                      ATOMIC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => {
                    const { feature, others, atomic } = item;
                    return (
                      <tr>
                        <td className="ps-4">{feature}</td>
                        <td className="text-center">
                          {others && (
                            <FaRegCheckCircle size={26} color="#fa4d09" />
                          )}
                        </td>
                        <td className="bg-highlight text-center">
                          {atomic && (
                            <FaRegCheckCircle size={26} color="#fa4d09" />
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="w-25 py-5 my-3 mx-auto">
              <Link to="/register">
                <Button>¡Quiero ser parte!</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
