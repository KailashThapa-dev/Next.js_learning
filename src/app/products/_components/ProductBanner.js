import Image from "next/image";
import React from "react";
import watchImage from "@/images/watch.png";

const ProductBanner = () => {
  return (
    <div
      className="
        bg-linear-to-r from-blue-800 via-blue-500 to-blue-700
        shadow-xl
        rounded-2xl
        mx-4
        px-6
        py-6
        grid grid-cols-1 md:grid-cols-3
        items-center
        gap-6
      "
    >
      {/* Left Text */}
      <h2 className="font-bold text-white text-3xl md:text-4xl text-center md:text-left">
        New Arrival
      </h2>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={watchImage}
          height={250}
          width={250}
          alt="Watch"
          className="h-40 md:h-52 w-auto object-contain"
        />
      </div>

      {/* Discount Badge */}
      <div className="flex justify-center md:justify-end">
        <div className="flex flex-col justify-center items-center bg-white rounded-full shadow-lg h-20 w-20">
          <span className="text-red-500 text-xl font-bold">
            50%
          </span>
          <span className="text-xs font-medium text-gray-600">
            OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;