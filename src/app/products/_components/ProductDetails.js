import React from "react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div>
          <Image
            src={product.imageUrls?.[0]}
            alt={product.name}
            width={600}
            height={600}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <span className="bg-primary text-white px-3 py-1 rounded">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mt-4">
            {product.name}
          </h1>

          <p className="mt-2">
            <strong>Brand:</strong> {product.brand}
          </p>

          <p className="text-3xl font-bold mt-4 text-primary">
            Rs. {product.price}
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600 mt-2">
              {product.description || "No description available"}
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="bg-primary text-white px-6 py-3 rounded-lg">
              Add to Cart
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;