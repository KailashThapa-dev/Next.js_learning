import React from 'react'
import Link from "next/link";
import { getProducts } from '@/api/products';
 export const metadata ={
  title: "Product",

}
const ProductPage = async ({searchParams}) => {
  console.log(await searchParams);
  const products = await getProducts();
 
  console.log(products);
  return (
    <>
    <h1 className='text-3xl'>Products
    </h1>
    {products.map((product,index) => (
      <li key={index}>
        <Link href ={'/products/${product._id'}>{product.name}</Link>
      </li>
    ))}
    </>
  )
}

export default ProductPage