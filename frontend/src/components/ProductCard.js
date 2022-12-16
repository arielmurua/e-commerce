import React from 'react'
import './ProductCard.css'
import PrImg from '../assets/iphone-img.png'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className='product-card-img'>
        <img alt='product-img' src={PrImg}></img>
      </div>
      <div className='product-card-data'>
        <p className='product-card-data-name'>
          IPhone X
        </p>
        <small className='product-card-data-brand'>
          Apple
        </small>
        <p className='product-card-data-price'>
          $ 123045
        </p>
      </div>
      <div className='product-card-btns-container'>
        <button>Add to cart</button>
        <button>
          <Link to='/products/1'>Details</Link>
        </button>
      </div>
    </div>
  )
}

export default ProductCard