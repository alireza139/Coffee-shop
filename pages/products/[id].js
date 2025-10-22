import React from "react";
import ProductsDetails from "@/components/templates/Products/ProductDetails";
import Comments from "@/components/templates/Products/Comments";

function Product({ product }) {
  return (
    <>
      <ProductsDetails data={product}></ProductsDetails>
      <Comments></Comments>
    </>
  );
}

export async function getStaticPaths(context) {
  const { params } = context

  const productsResponse = await fetch(`http://localhost:4000/menu`)
  const products = await productsResponse.json()

  const paths = products.map(product => ({ params: { id: product.id } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { params } = context

  const productResponse = await fetch(`http://localhost:4000/menu/${params.id}`)
  const product = await productResponse.json()


  return {
    props: {
      product,
    },
    revalidate: 3600
  }
}
export default Product;
