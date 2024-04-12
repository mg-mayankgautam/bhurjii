import React from 'react'
import './Footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Line from '../Line/Line'


const Footer = ({Footer_ref,Landing_ref,
  about_ref,product_ref,clients_ref}) => {

    const branchLoc = process.env.REACT_APP_MAP

  return (
    <div className='Footer' ref={Footer_ref}>
        <div className='heading'>Get In Touch</div>
        <Line/>
        <div className='FooterContent'>
            <div className='quick_links'> 
                <div className='quick_link' onClick={() => {Landing_ref.current?.scrollIntoView({behavior:'smooth'})}}>Home</div>
                <div className='quick_link' onClick={() => {about_ref.current?.scrollIntoView({behavior:'smooth'})}}>About</div>
                <div className='quick_link' onClick={() => {product_ref.current?.scrollIntoView({behavior:'smooth'})}}>Products</div>
                <div className='quick_link' onClick={() => {clients_ref.current?.scrollIntoView({behavior:'smooth'})}}>Our Clients</div>
            </div>
              <div className='vr'></div>
            <div className='middle_footer'>
                <div className='footer_icons'><FaPhone /></div>
                <div>+91 9315839234</div>
                <div className='footer_icons'><IoMdMail /></div>
                <div>sales@burjitransformers.co</div>
                <div className='footer_icons'><FaLocationDot /></div>
                <div>Ydtig Vihar, Udyog Vihar, Phase I, Plot 107, Dundahera, Gurgaon, Haryana 122001 </div>
           

               
                
                
            </div>

        
            <div className='vr'></div>
            <div className='location_image_div'>
            <iframe
                src={branchLoc}
                style={{ border: 0 }}
                id="map"
                allowFullScreen=""
                loading="lazy"
                title="Brach Location"
              ></iframe>
            </div>
        </div>

        <div className='location_image_div_mobile'>
          <div>
              <iframe
                src={process.env.REACT_APP_MAP}
                style={{ border: 0 }}
                id="map"
                allowFullScreen=""
                loading="lazy"
                title="Brach Location"
              ></iframe>
              </div>
        </div>

        <div className='footerCopyright'>
        ©2024 BHURJI ELECTRONICS, ALL RIGHTS RESERVED
        <br />
        <a href="https://www.thefuelmedia.co">DESIGNED BY THE FUEL MEDIA</a>
        </div>
    </div>
  )
}

export default Footer
