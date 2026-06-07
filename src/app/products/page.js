import React from 'react'
 export const metadata ={
  title: "Product",

}
const ProductPage = async ({searchParams}) => {
  console.log(await searchParams);
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const products = await res.json();
  console.log(products);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage