import React, { useEffect, useState,useRef } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Nav = ({ Landing_ref,
  about_ref,
  product_ref,
  clients_ref,
  Footer_ref}) => {

  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({display:'none'})

  

  useEffect(()=>{
    if(show){
      setStyle({display:'flex'})
    }
    else{
      setStyle({display:'none'})
    }
  }, [show])

  useEffect(()=>{
    const check = document.querySelector('.mobile_nav_show');
    console.log(check)
    if(check){
        document.body.style.overflow = 'hidden';
    }
    if(!check){
        document.body.style.overflow = 'unset';
    }
}, [])

const navside=document.querySelector('.mobile_nav');
const hamburger=document.querySelector('.hamburger_icon_div');



  return (
    <div className='Nav'>
        <div className='nav_logo_div'><img className='nav_logo' src={logo} /></div>
        <div className='nav_main_heading'>BHURJI <br /> ELECTRONICS</div>

        <div className='nav_headings' onClick={() => {Landing_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          HOME
        </div>

        <div className='nav_headings' onClick={() => {about_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          ABOUT
        </div>

        <div className='nav_headings'
        onClick={() => {product_ref.current?.scrollIntoView({behavior:'smooth'})}
      }
        >
          PRODUCTS
           </div>

        <div className='nav_headings' onClick={() => {clients_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          OUR CLIENTS
        </div>

        <div className='nav_headings'  onClick={() => {Footer_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          CONTACT US
        </div>    

        <div className='hamburger_icon_div' onClick={()=>{navside.classList.add('mobile_nav_show');hamburger.classList.add('hamburger_icon_hide')}} ><GiHamburgerMenu className='hamburger_icon_img' />
</div> 
        {/* <img className='hamburger_logo' src={logo} /> */}
      <div className='mobile_nav' >
        <div className='mobile_nav_cross' onClick={()=>{navside.classList.remove('mobile_nav_show');hamburger.classList.remove('hamburger_icon_hide')}}><RxCross1 /></div>
        <div className='mobile_nav_child'>
        <div className='mobile_nav_headings' onClick={() => {Landing_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          HOME
        </div>

        <div className='mobile_nav_headings' onClick={() => {about_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          ABOUT
        </div>

        <div className='mobile_nav_headings'
        onClick={() => {product_ref.current?.scrollIntoView({behavior:'smooth'})}
      }
        >
          PRODUCTS
           </div>

        <div className='mobile_nav_headings' onClick={() => {clients_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          OUR CLIENTS
        </div>

        <div className='mobile_nav_headings'  onClick={() => {Footer_ref.current?.scrollIntoView({behavior:'smooth'})}}>
          CONTACT US
        </div>     
        </div>
      </div>

    </div>
  )
}

export default Nav