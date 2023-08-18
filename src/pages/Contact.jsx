import React from "react";
import PageHeading from "../components/Utils/PageHeading";
import ContactForm from "../components/Contact/ContactForm";
const Contact = () => {
  return (
    <div>
      <div className="container">
        <PageHeading>Contact</PageHeading>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
