import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Products from '../components/Products';
import NotFound from '../components/NotFound';
import Profile from '../components/Profile';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login mode='login'/>}/>
      <Route path='/register' element={<Register mode='register'/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:productId' element={<ProductDetails/>}/>
      <Route path='/user/:userName' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Router