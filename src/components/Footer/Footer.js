import React from 'react'
import './Footer.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Line from '../Line/Line'


const Footer = ({Footer_ref,Landing_ref,
  about_ref,product_ref,clients_ref}) => {

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
                <div className='footer_text'>+91 9315839234</div>
                <div className='footer_icons'><IoMdMail /></div>
                <div className='footer_text'>sales@bhurjitransformers.com</div>
                <div className='footer_icons'><FaLocationDot /></div>
                <div className='footer_text'>Plot No. P12, Street No 12, Sector - 3, METL, <br/> Dadri Toye - 124103, Haryana</div>
           
            </div>

        
            <div className='vr vr_right'></div>
            <div className='location_image_div'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5660876662573!2d76.7480604!3d28.522699900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6de6c2062fb1%3A0x818ba48fef0f091c!2sBhurji%20Electronics!5e0!3m2!1sen!2sin!4v1756660654495!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div className='location_image_div_mobile'>
          <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5660876662573!2d76.7480604!3d28.522699900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6de6c2062fb1%3A0x818ba48fef0f091c!2sBhurji%20Electronics!5e0!3m2!1sen!2sin!4v1756660654495!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
        </div>

        <div className='footerCopyright'>
        ©2024 BHURJI ELECTRONICS, ALL RIGHTS RESERVED
        <br />
        <a href="https://www.thefuelmedia.co" target='_blank'>DESIGNED BY THE FUEL MEDIA</a>
        </div>
    </div>
  )
}

export default Footer
