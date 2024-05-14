import React from 'react'
import './Clients.css'
import luminous from '../../assets/luminous.jpg'
import maruti from '../../assets/maruti.png'
import microtech from '../../assets/microtech.png'
import sidwal from '../../assets/sidwal.png'
import bhel from '../../assets/bhel.png'
import statcon from '../../assets/statcon.jpg'
import exide from '../../assets/exide.png'
import smarten from '../../assets/smarten.jpg'
import genus from '../../assets/genus.png'
import sukam from '../../assets/sukam.png'
import neptune from '../../assets/neptune.png'
import Line from '../Line/Line'

const Clients = ({clients_ref}) => {
  return (
    <div className='clients' ref={clients_ref}>
      
      <div className='subheading clients_pre_heading'>Bhurji’s Admirers</div>
      <div className='heading clients_heading'>Our Clientele</div>
      <Line/>
      <div className='client_logos_div'>
        <div className='client_logos' ><img  className='client_logos_img' src={luminous}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={maruti}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={microtech}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={sidwal}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={bhel}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={statcon}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={exide}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={smarten}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={genus}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={sukam}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={neptune}  /></div>
      </div>
    </div>
  )
}

export default Clients
