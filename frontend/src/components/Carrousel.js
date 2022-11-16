import React from 'react'
import './Carrousel.css'
import ProductCard from './ProductCard'

const Carrousel = () => {
  const array = [0,1,2,3,4,5,6,7,8,9]

  return (
    <div className='carrousel-container'>
      {array.map(() => <ProductCard />)}
      <p>btn</p>
    </div>
  )
}

export default Carrousel