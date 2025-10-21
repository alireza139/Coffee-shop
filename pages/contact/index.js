import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ContactDetails from "@/components/templates/Contact/ContactDetails";

function Contact() {
  return (
    <>
      <PageHeader route="Contact" />
      <ContactDetails />
    </>
  );
}

export default Contact;
