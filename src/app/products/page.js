import React from 'react'

const ProductPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const products = await res.json();
  console.log(products);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage