import React from 'react'
import './GlobalPresence.css'
import map from '../../assets/map.png'
import mapblur from '../../assets/lazy/map.png'
import Line from '../Line/Line'

const GlobalPresence = () => {
  return (
    <div className='GlobalPresence'>

      <div className='subheading'>
        International Demand
      </div>
      
      <div className='heading'>Global Presence</div>
      <Line/>

      <div className='mapDiv blur-load' style={{backgroundImage:`url(${mapblur})`}}>
        <img className='map' src={map}  loading='lazy'/>
      </div>
    </div>
  )
}

export default GlobalPresence
