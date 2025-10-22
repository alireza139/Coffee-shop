import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Pricing from "@/components/modules/Menu/Pricing";

function Search({ menu }) {
  return (
    <>
      <PageHeader route="Search" />
      <Pricing data={menu} length={menu.length} />
    </>
  );
}

// SSR
export async function getServerSideProps(contex) {
  const { query } = contex

  const menuResponse = await fetch("http://localhost:4000/menu")
  const menuData = await menuResponse.json()

  const searchResult = menuData.filter(item =>
    item.type.toLowerCase().includes(query.q.toLowerCase()) ||
    item.title.toLowerCase().includes(query.q.toLowerCase())
  );


  console.log(searchResult);
  return {
    props: {
      menu: searchResult
    }
  }
}

export default Search;
