import React from 'react';
import "../styles/header1.css";
import logo from "../assets/logo.png";

const Header1 = () => {
  return (
    <div className='main-header1-div'>
      <div className='logo-div'>
       <img src={logo} alt="" className='logo_img' />
       <div className='logo-header'>
       <p className='logo-header-text1'>Scam Scan</p>
       <p className='logo-header-text2'>Scan Dictionary</p>
       </div>
      </div>
    </div>
  )
}

export default Header1