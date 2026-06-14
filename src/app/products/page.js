import React from "react";
import Link from "next/link";
import { getProducts } from "@/api/products";
import Card from "./_components/Card";

export const metadata = {
  title: "Products",
};

const ProductPage = async () => {
  const products = await getProducts();

  return (
  <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Features Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product,index) => (
         <Card {...product} key={product._id} />
          
        ))}
      </div>
    </div>
  </>
  
  );
};

export default ProductPage;