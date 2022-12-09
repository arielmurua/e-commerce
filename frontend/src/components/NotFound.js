import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { AuthContext } from './App'

const NotFound = () => {
  const { userLogged } = React.useContext(AuthContext)
  // const clickTestCreate = (e) => {
  //   e.preventDefault();
  //   let user = {
  //     email: "testing@gmail.com",
  //     username: "testing44",
  //     role: 1
  //   }
  //   localStorage.setItem("userLogged", JSON.stringify(user))
  //   updateUserLogged(user)
  // }
  // const clickLogOut = (e) => {
  //   localStorage.removeItem("userLogged")
  //   updateUserLogged(null)
  // }

  return (
    <div className='notfound-wrapper'>
      <h1 className='notfound-title'>404 Not found</h1>
      {userLogged && userLogged.email
        ? 
        <strong>{userLogged.email}</strong> 
        : 
        <strong>Loading...</strong>
      }
      <Link className='notfound-link' to='/'>
        <p>Go back home</p>
      </Link>
    </div>
  )
}

export default NotFound