import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'
import { AuthContext } from './App'

const SideBar = (props) => {
  const { userLogged, logOut } = React.useContext(AuthContext)
  return (
    <div id="sidebar-wrapper" className={props.show}>
      <div className='sidebar'>
        <ul className='main-menu-list'>
          <div className='user-menu'>
            <Link to='/login' className='btn'>
              <p>LOG IN</p>
            </Link>
            <Link to='/register' className='btn'>
              <p>REGISTER</p>
            </Link>
          </div>
          <ul className='sub-menu-list'>
            <div className='item-title'>
              Titulo A
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
        {userLogged ?
          <>
            <small>{userLogged.email}</small>
            <button onClick={logOut} className='btn'>LOGOUT</button> 
          </>
          :
          <></>
        }
      </div>
    </div>
  )
}

export default SideBar