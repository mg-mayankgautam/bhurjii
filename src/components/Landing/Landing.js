import React from 'react'
import './Landing.css'
import home from '../../assets/home.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

const Landing = ({Landing_ref,product_ref}) => {
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
            <div className='landingseeMore_button' onClick={() => {product_ref.current?.scrollIntoView({behavior:'smooth'})}
      }>SEE MORE <FaLongArrowAltRight className='scrollBtn'/> </div>
        </div>
        <div className='landingText'>LEADING <br /> MANUFACTURERS OF <br /> OEM TRANSFORMERS</div>
    </div>
  )
}

export default Landing