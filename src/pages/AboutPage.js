import React from "react";

import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

//import { Link } from "react-router-dom";
//import Title from "../components/Title";

import styled from "styled-components";
import Info from "../components/AboutPage/Info";

const AboutPage = () => {
  return (
    <>
      <Hero title="about us" img={aboutBcg}></Hero>
      <Info />
      {/* <AboutWrapper>
        <div className="about-img-container">
          <img src={aboutBcg} alt="about img" />
        </div>
        <div className="about-info">
          <Title title="our store" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            necessitatibus itaque mollitia qui aliquam! Vero reiciendis
            voluptatem ipsum id mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            necessitatibus itaque mollitia qui aliquam! Vero reiciendis
            voluptatem ipsum id mollitia.
          </p>
          <Link
            to="/products"
            className="main-link"
            style={{ marginTop: "2rem" }}
          >
            more info
          </Link>
        </div>
      </AboutWrapper> */}
    </>
  );
};

const AboutWrapper = styled.section`
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  align-items: center;
  padding: 5rem 0;

  .about-img-container {
    width: 100%;
    border: 4px solid var(--darkGrey);

    img {
      display: block;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

export default AboutPage;
