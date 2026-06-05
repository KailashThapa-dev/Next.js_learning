import React from 'react'

const ProductReview = async ({ params }) => {
     const { id, reviewId }= await params;
  return (
    <div>Product Id :{id} and the review id :{reviewId}</div>
  )
}

export default ProductReview