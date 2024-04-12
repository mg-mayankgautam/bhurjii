import React from 'react'
import './Clients.css'
import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.png'
import client5 from '../../assets/client5.jpg'
import client6 from '../../assets/client6.jpg'
import Line from '../Line/Line'

const Clients = ({clients_ref}) => {
  return (
    <div className='clients' ref={clients_ref}>
      
      <div className='subheading clients_pre_heading'>Bhurji’s Admirers</div>
      <div className='heading clients_heading'>Our Clientele</div>
      <Line/>
      <div className='client_logos_div'>
        <div className='client_logos' ><img  className='client_logos_img' src={client1}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={client2}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={client3}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={client4}  /></div>
        <div className='client_logos' ><img className='client_logos_img' src={client5}  /></div>
        <div className='client_logos luminous' ><img className='client_logos_img' src={client6}  /></div>
      </div>
    </div>
  )
}

export default Clients
