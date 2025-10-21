import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";

function Services({ services }) {
  return (
    <>
      <PageHeader route="services" />
      <ServicesDetails data={services} />
    </>
  );
}

// SSG
export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services")
  const servicesData = await servicesResponse.json()

  return {
    props: {
      services: servicesData,
    }
  }
}

export default Services;
