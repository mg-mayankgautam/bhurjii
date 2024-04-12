import React from 'react'
import './Footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Line from '../Line/Line'


const Footer = ({Footer_ref,Landing_ref,
  about_ref,product_ref,clients_ref}) => {

    const branchLoc =
    "https:www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8531276422536!2d77.07852630948206!3d28.51406628935215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195e6bab49af%3A0x1811861102395ade!2sUdyog%20Vihar%2C%20Phase%20I%2C%20Dundahera%20Village%2C%20Sector%2020%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1711625375791!5m2!1sen!2sin";

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
                src={branchLoc}
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
