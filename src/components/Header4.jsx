import React from 'react'
import "../styles/Header4.css";
import NewReport from "../assets/NewReport.png";
import rightarrow from "../assets/right-arrow.png";


export const Header4 = () => {
  return (
    <div className='main-Header4-div'>
        <div className='NewReport-div'>
            <img src={NewReport} alt="" className='NewReport_img' />
            <div className='NewReport-header'>
                <p className='NewReport-header-text1'>Earn Free TSIT</p>
                <p className="text-scam">Report Scam and earn free TSIT</p>
                <div className='signup_div'>
                <p className='NewReport-header-text3'>Signup to mining</p>
                <img src={rightarrow} alt="" className='right-arrow' />
                </div>
                
              
            </div>
        </div>
    </div>
  )
}
