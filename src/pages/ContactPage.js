import React from "react";

import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPage/Contact";

const ContactPage = () => {
  return (
    <>
      <Hero title="contact us" img={contactBcg} />
      <Contact />
    </>
  );
};

export default ContactPage;
