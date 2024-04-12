import React from 'react'
import './GlobalPresence.css'
import map from '../../assets/map.png'
import Line from '../Line/Line'

const GlobalPresence = () => {
  return (
    <div className='GlobalPresence'>

      <div className='subheading'>
        International Demand
      </div>
      
      <div className='heading'>Global Presence</div>
      <Line/>

      <div className='mapDiv'><img className='map' src={map} alt="" /></div>
    </div>
  )
}

export default GlobalPresence
