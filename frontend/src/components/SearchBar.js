import React from 'react'
import './SearchBar.css'

const searchBar = (props) => {
  const searchSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <div id="searchBar" className={props.show}>
      <form onSubmit={searchSubmit} className='search-form'>
        <input className='search-input' type="search"></input>
        <button className='btn-search' type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}

export default searchBar