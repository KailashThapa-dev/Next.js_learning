import React from 'react'
import ProductBanner from './_components/ProductBanner'

function ProductLayout({children}) {
  return (
    <div className='container mx-auto py-20'>
        <ProductBanner/>
        <div>{children}</div>
    </div>
  )
}

export default ProductLayout