import React from "react";
import Image from "next/image";
import PlaceholderImage from "@/images/placeholder.png";

export const LoadingCard = () => {
  return (
    <div className="bg-dark border border-light rounded-2xl overflow-hidden shadow-lg animate-pulse">

      {/* Image skeleton */}
      <div className="bg-gray-300 w-full h-50" />

      <div className="p-4 space-y-3">

        {/* Title */}
        <div className="h-5 bg-gray-300 rounded w-3/4" />

        {/* Category */}
        <div className="h-4 bg-gray-300 rounded w-1/3" />

        {/* Brand */}
        <div className="h-4 bg-gray-300 rounded w-1/2" />

        {/* Price */}
        <div className="h-6 bg-gray-300 rounded w-1/3 mt-2" />

        {/* Buttons */}
        <div className="grid grid-cols-[1fr_2fr] gap-2 mt-4">

          <div className="h-10 bg-gray-300 rounded-xl" />

          <div className="h-10 bg-gray-300 rounded-xl" />

        </div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      
    </div>
  );
};

export default Loading;