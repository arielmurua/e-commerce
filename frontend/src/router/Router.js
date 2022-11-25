import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import Products from '../components/Products';
import NotFound from '../components/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Router