import React from 'react'
import './SearchBar.css'

const searchBar = (props) => {
  return (
    <div id="searchBar" className={props.show}>
      <input className='search-input' type="search"></input>
      <button className='btn-search' type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  )
}

export default searchBar