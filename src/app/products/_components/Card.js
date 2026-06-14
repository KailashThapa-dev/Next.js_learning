import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS_ROUTE } from "@/constants/routes";

const Card = ({ name, brand, category, price, _id, imageUrls }) => {
  return (
    <div
      className="
        bg-dark
        border border-light
        rounded-xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      {/* Image (smaller + fixed height) */}
      <div className="h-44 w-full overflow-hidden">
        <Image
          src={imageUrls?.[0]}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-3">

        <Link href={`${PRODUCTS_ROUTE}/${_id}`}>
          <h2 className="text-base font-semibold text-white line-clamp-1 hover:text-primary transition">
            {name}
          </h2>
        </Link>

        <span className="inline-block mt-1 text-xs bg-primary text-white px-2 py-0.5 rounded">
          {category}
        </span>

        <p className="text-sm mt-1 text-light">
          <span className="text-white font-medium">Brand:</span> {brand}
        </p>

        <p className="text-primary text-lg font-bold mt-2">
          Rs. {price}
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-[1fr_2fr] gap-2 mt-3">

          <Link
            href={`${PRODUCTS_ROUTE}/${_id}`}
            className="
              flex items-center justify-center
              bg-background
              hover:bg-primary-dark
              text-black
              text-sm
              py-2
              rounded-lg
              transition
            "
          >
            View
          </Link>

          <button
            className="
              bg-primary
              hover:bg-primary-dark
              text-white
              text-sm
              py-2
              rounded-lg
              transition
            "
          >
            Add
          </button>

        </div>
      </div>
    </div>
  );
};

export default Card;