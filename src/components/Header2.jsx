import React from 'react';
import search from  "../assets/search.png";

const Header2 = () => {
  return (
    <div className='main-header2'>
        <div className="container1">
            <p className="search-here">search here</p>
            <p className="web">www.google.com</p>
        </div>
        <div className="search-div">
            <img src={search} alt="" className='search-image' />
            <input placeholder='Search Scams' className='search-input'/>
            <button className='search-btn'>
                Search
            </button>

        </div>
    </div>
  )
}

export default Header2