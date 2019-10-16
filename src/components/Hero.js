import React from "react";

import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";

const Hero = ({ img, title, max, children }) => {
  //console.log(max);
  return (
    <HeroWrapper max={max} imgBcg={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.imgBcg}) center/cover no-repeat;

  min-height: ${props => (props.max ? "calc(100vh - 61px)" : "60vh")};
  .title {
    font-size: 3.5rem;
    text-transform: uppercase;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: var(--mainSpacing);
  }
`;

Hero.defaultProps = {
  img: mainBcg
};

export default Hero;
