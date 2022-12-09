import React from 'react'
import './Home.css'
import banner from '../assets/banner_01.jpg'
import ProductCard from './ProductCard'
import Carrousel from './Carrousel'

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
  const array = [0,1,2,3,4]

  return (
    <div className='home-wrapper'>
      <div className='home-banner'>
        <img alt='' src={banner}></img>
      </div>
      <h2 className='home-title'>Carrousel TEST</h2>
      <div className='home-carrousel'>
        <Carrousel />
      </div>
      <h2 className='home-title'>Productos</h2>
      <div className='home-products'>
        {array.map((index) => <ProductCard key={index++} />)}
      </div>
    </div>
  )
}

export default Home