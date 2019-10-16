import React from "react";

import styled from "styled-components";
import { ProductConsumer } from "../context";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ProductConsumer>
      {value => {
        const { socialIcons } = value;
        return (
          <FooterWrapper>
            <div className="container py-4">
              <div className="row">
                <div className="col-md-6 text-center">
                  <p className="text-capitalize my-0">
                    copyright &copy; tech store {new Date().getFullYear()}. all
                    rights reversed
                  </p>
                </div>
                <div className="col-md-6 socials">
                  {socialIcons.map(link => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);

  .socials {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
  }

  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }

  .icon:hover {
    color: var(--primaryColor);
    transform: translateY(-10%);
  }

  @media screen and (min-width: 768px) {
    .socials {
      margin-top: 0;
    }
  }
`;

export default Footer;
