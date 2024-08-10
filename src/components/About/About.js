import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import aboutblur from '../../assets/lazy/about.png'
import Line from '../Line/Line'
import { useRef } from 'react'

const About = ({about_ref}) => {
  return (
    <div className='About' ref={about_ref}>
        <div className='subheading get_to_know_us'>Get To Know Us</div>
        <div className='heading'>About Us</div>
        <Line/>
        <div className='about_content'>
            <div>Bhurji Electronics has been the leading transformer manufacturer in India since its establishment in 1972. Bhurji has evolved over the past 5 decades from being the 75% Indian market shareholder of TV transformers to its state-of-the-art efficient products curated and developed to serve the national energy needs.
                 <br /><br />
            With the futuristic approach towards innovation and research, Bhurji Electronics led the markets as the first C-Core Transformers developers. We have successfully delivered constant voltage transformers to multiple governmental organizations and OEM’s such as The Indian Railways, Ministry of Finance, Income Tax Department, HCL Limited, WIPRO Limited and SIEMENS Limited.
            <br /><br />
            Today we have a complete backward manufacturing facility in Gurugram, India which holds the capabilities to facilitate progressive tools, die requirements for lamination cutting and punching and developing transformer clamps, studs and housing cabinets for its captive usage.</div>
            
            <div className='about_img_div blur-load' style={{backgroundImage:`url(${aboutblur})`}}>
              <img className='about_img' src={about_img} loading='lazy' />
            </div>
        </div>
    </div>
  )
}

export default About
