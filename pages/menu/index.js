import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/modules/Menu/Pricing";

function Menu({ menu }) {
  return (
    <>
      <PageHeader route="Menu" />
      <Pricing data={menu} length={menu.length}/>
    </>
  );
}

// SSG & ISR
export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:4000/menu")
  const menuData = await menuResponse.json()

  return {
    props: {
      menu: menuData
    },
    revalidate: 3600
  }
}

export default Menu;
