import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='notfound-wrapper'>
      <h1 className='notfound-title'>404 Not found</h1>
      <Link className='notfound-link' to='/'>
        <p>Go back home</p>
      </Link>
    </div>
  )
}

export default NotFound