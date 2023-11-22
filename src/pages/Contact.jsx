import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="container">
        <PageHeading path="/contact">Contact</PageHeading>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
