import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <div className='product-details-wrapper'>
      <div className='product-resume'>
        <div className='product-resume-galery'>
          image
        </div>
        
      </div>
    </div>
  )
}

export default ProductDetails