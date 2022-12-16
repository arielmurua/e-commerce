import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'
import { AuthContext } from './App'

const SideBar = (props) => {
  const { userLogged, logOut } = React.useContext(AuthContext)

  return (
    <>
    <div id="sidebar-wrapper" className={props.show}>
      <div className='sidebar'>
        <ul className='main-menu-list'>
          <div className='user-menu'>
            {userLogged ?
              <div className='sb-userLogged-menu'>
                <div>{userLogged.username}</div>
                <div>{userLogged.email}</div>
                <Link to={`/user/${userLogged.username}`} className='btn'>Profile</Link>
                <Link onClick={logOut} className='btn'>LOGOUT</Link>  
              </div>
              :
              <>
                <Link to='/login' className='btn'>
                  <p>LOG IN</p>
                </Link>
                <Link to='/register' className='btn'>
                  <p>REGISTER</p>
                </Link>
              </>
            }
          </div>
          <ul className='sub-menu-list'>
            <div className='item-title'>
              <Link to="/products" >
                Products
              </Link>
            </div>
            <li>Item 1A</li>
            <li>Item 2A</li>
            <li>Item 3A</li>
          </ul>
          <ul className='sub-menu-list'>
            <div className='item-title'>
              Titulo B
            </div>
            <li>Item 1B</li>
            <li>Item 2B</li>
            <li>Item 3B</li>
          </ul>
          <ul className='sub-menu-list'>
            <div className='item-title'>
              Titulo C
            </div>
            <li>Item 1C</li>
            <li>Item 1B</li>
            <li>Item 1C</li>
          </ul>
          <li>Item Z</li>
        </ul>
        <hr/>
        <Link className='btn' to='/'>
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>
      <div id='sb-filler'>
      </div>
    </div>
    </>
  )
}

export default SideBar