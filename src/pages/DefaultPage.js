import React from "react";

import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";

const DefaultPage = () => {
  return (
    <Hero title="404" img={defaultBcg} max="true">
      <h2 className="text-uppercase">page not found</h2>
      <Link to="/" className="main-link" style={{ margin: "2rem" }}>
        back to home
      </Link>
    </Hero>
  );
};

export default DefaultPage;
