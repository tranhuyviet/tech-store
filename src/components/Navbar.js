import React from "react";

import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

import { ProductConsumer } from "../context";

import logo from "../images/logo.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper className="cac">
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={logo} alt="tech store logo" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    position: absolute;
    top: -8px;
    right: -8px;
    background: var(--primaryColor);
    opacity: 0.8;
    border-radius: 50%;
    width: 20px;
    color: var(--mainWhite);
    text-align: center;
    font-size: 0.85rem;
  }
`;

export default Navbar;
