import React from "react";

import Title from "../Title";

import aboutBcg from "../../images/aboutBcg.jpeg";

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {/* image */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about img"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>

          {/* info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              perferendis pariatur odit culpa placeat quod dolorum quos, optio
              explicabo accusamus.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              perferendis pariatur odit culpa placeat quod dolorum quos, optio
              explicabo accusamus.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
