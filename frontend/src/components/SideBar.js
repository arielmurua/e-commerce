import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'

const SideBar = (props) => {
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
          <i class="fa-solid fa-house"></i>
        </Link>
      </div>
    </div>
  )
}

export default SideBar