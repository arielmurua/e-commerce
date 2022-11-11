import React from 'react'
import './Home.css'
import banner from '../assets/banner_01.jpg'
// import iphoneImg from '../assets/iphone-img.png'
import ProductCard from './ProductCard'

const Home = () => {
  // const productsData = [
  //   {
  //     name: "IPhone X",
  //     brand: "Apple",
  //     price: "324450",
  //   },
  //   {
  //     name: "Galaxy S21",
  //     brand: "Samsung",
  //     price: "244502",
  //   }
  // ]

  return (
    <div className='home-wrapper'>
      <div className='home-banner'>
        <img alt='' src={banner}></img>
      </div>
      <div className='home-carrousel'>

      </div>
      <div className='home-products'>
        <h2 className='home-title'>Productos</h2>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Home