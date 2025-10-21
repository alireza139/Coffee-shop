import Slider from "@/components/templates/Index/Slider";
import React from "react";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";
import Menu from "@/components/templates/Index/Menu";
import ReservationBox from "@/components/modules/ReservationBox/ReservationBox";
import Testimonials from "@/components/modules/Testimonials/Testimonials";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer></Offer>
      <Menu data={data.menu}></Menu>
      <ReservationBox/>
      <Testimonials data={data.comments} count={3}/>
    </>
  );
}

// SSG & ISR
export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services")
  const servicesData = await servicesResponse.json()

  const menuResponse = await fetch("http://localhost:4000/menu")
  const menuData = await menuResponse.json()

  const commentsResponse = await fetch("http://localhost:4000/comments")
  const commentsData = await commentsResponse.json()

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comments: commentsData
      }
    },
    revalidate: 3600
  }
}

export default Index;
