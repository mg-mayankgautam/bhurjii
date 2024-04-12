import React from 'react'
import './Landing.css'
import home from '../../assets/home.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

const Landing = ({Landing_ref}) => {
  return (
    <div className='Landing' ref={Landing_ref}>
        <div className='landingBg'>
            <div className='bgColor'></div>
            <div className='bgImgDiv'>
            <img src={home} className='bgImg'/></div>
        </div>
        <div className='landinghead1'>BHURJI</div>
        <div className='landinghead2'>ELECTRONICS.</div>
        <div className='landingseeMore'>
            <div>SEE MORE <FaLongArrowAltRight /></div>
        </div>
        <div className='landingText'>LEADING <br /> MANUFACTURERS OF <br /> OEM TRANSFORMERS</div>
    </div>
  )
}

export default Landing