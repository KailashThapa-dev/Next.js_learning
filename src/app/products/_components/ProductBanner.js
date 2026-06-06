import Image from 'next/image'
import React from 'react'
import watchImage from '@/images/watch.png'

const ProductBanner = () => {
  return (
    <div className='p-10 bg-linear-to-r from-blue-800 via-blue-300 to-blue-700 shadow-2xl grid grid-cols-3'>
        <h2 className='font-black text-white text-6xl'>New Arrival</h2>
        <Image src={watchImage} height={400} width={400} className ="h-67 w-auto mx-auto" alt='Watch'/>
        <h4 className='flex flex-col justify-center items-center rounded-full bg-white border-blue-900 shadow-2xl h-25 w-25 text-center'> <span className='text-red-600 text-3xl block'>50%</span>off</h4>
    </div>
  )
}

export default ProductBanner