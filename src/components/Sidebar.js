import React from "react";

import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Sidebar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;

        const link = links.map(item => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className="sidebar-link"
                onClick={handleSidebar}
              >
                {item.text}
              </Link>
            </li>
          );
        });
        //console.log(links);

        return (
          <SideWrapper show={sidebarOpen}>
            <ul>{link}</ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const SideWrapper = styled.aside`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 3px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};

  ul {
    list-style-type: none;
    padding: 0 !important;
  }

  .sidebar-link {
    display: block;
    text-transform: capitalize;
    font-size: 1.3rem;
    color: var(--mainBlack);
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    transition: var(--mainTransition);
    cursor: pointer;
    background: transparent;
  }

  .sidebar-link:hover {
    color: var(--mainWhite);
    padding-left: 2rem;
    background: var(--primaryColor);
  }

  @media screen and (min-width: 576px) {
    width: 20rem;
  }
`;

export default Sidebar;
