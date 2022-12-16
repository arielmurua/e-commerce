import React from 'react'
import './Header.css'
import SideBar from './SideBar'
import SearchBar from './SearchBar'

const Header = () => {
  const [SbShow, setSbShow] = React.useState('')
  const [SearchShow, setSearchShow] = React.useState('')

  const sbHandler = (e) => {
    if (e.target.className === "fa-solid fa-bars") {
      SbShow ? setSbShow('') : setSbShow('show-sidebar')
    } else {
      SbShow ? setSbShow('') : setSbShow('')
    }
  }
  const searchBtnHandler = () => {
    SearchShow ? setSearchShow('') : setSearchShow('show-search') 
  } 

  return (
    <div onClick={sbHandler} className='header-wrapper'>
      <div className='header-div'>
        <i onClick={searchBtnHandler} className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-brands fa-css3"></i>
        <i className="fa-solid fa-bars"></i>
      </div>
      <SearchBar show={SearchShow} />
      <SideBar show={SbShow}/>
    </div>
  )
}

export default Header