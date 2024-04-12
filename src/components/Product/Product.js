import React, {useState} from 'react'
import './Product.css'
import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import four from '../../assets/4.png'
import five from '../../assets/5.png'
import six from '../../assets/6.png'
import Line from '../Line/Line'

const Product = ({ product_ref}) => {

  const [style, setStyle] = useState({display: 'none'});
  const [style2, setStyle2] = useState({display: 'none'});
  const [style3, setStyle3] = useState({display: 'none'});
  const [style4, setStyle4] = useState({display: 'none'});
  const [style5, setStyle5] = useState({display: 'none'});
  const [style6, setStyle6] = useState({display: 'none'});
  const [style7, setStyle7] = useState({display: 'none'});


  return (
    <div className='Product' ref={product_ref}>
      <div className='subheading'>What Do We Make?</div>
        <div className='heading'>Our Products</div>
        <Line/>
        <div className='productGrid'>
          <div className='products product1' onMouseEnter={e => { setStyle({display: 'flex'}); }}onMouseLeave={e => { setStyle({display: 'none'})}}>
            <img src={one}/>
            <div className='producthover' style={style}>Three Phase - Constant Voltage Transformer <br /> (upto 15kW)</div>
          </div>
          <div className='products product2'onMouseEnter={e => { setStyle2({display: 'flex'}); }}onMouseLeave={e => { setStyle2({display: 'none'})}}>
            <img src={two}/>
            <div className='producthover' style={style2}>
              Reactors <br /> (Single Phase - upto 750 A <br/> Three Phase - upto 1300 A)
            </div>
          </div>
          <div  className='products product3' onMouseEnter={e => { setStyle3({display: 'flex'}); }}onMouseLeave={e => { setStyle3({display: 'none'})}}>
            <img src={three}/>
            <div className='producthover' style={style3}>
              I.G.B.T Inverter / Stepdown Transformer and Chokes <br />
              (Single Phase - upto 70kW <br/> Three Phase - upto 250kW)
            </div>
          </div>
          <div  className='products product4' onMouseEnter={e => { setStyle4({display: 'flex'}); }}onMouseLeave={e => { setStyle4({display: 'none'})}}>
            <img src={four}/>
            <div className='producthover' style={style4}>
              Isolation Transformer <br /> (Single Phase - upto 30 kW <br/> Three Phase - upto 300 kW)
            </div>
          </div>
          <div className='products product5' onMouseEnter={e => { setStyle5({display: 'flex'}); }}onMouseLeave={e => { setStyle5({display: 'none'})}}>
            <img src={five}/>
            <div className='producthover' style={style5}>
              Single Phase Constant Voltage Transformer (300 W - 5 kW)
            </div>
          </div>
          <div className='products product6' onMouseEnter={e => { setStyle6({display: 'flex'}); }}onMouseLeave={e => { setStyle6({display: 'none'})}}>
            <img src={six}/>
            <div className='producthover' style={style6}>
              Constant Voltage Transformer
            </div>
          </div>

        </div>
    </div>
    
    
    // <div className='usermoviehover' >
    //     <div className='usermoviename'>{Movie.moviename}</div>
    //     <div className='usermoviedirector'>{Movie.director.map(director=>(<div key={director.name}>{director.name}</div>))}</div>
    //     <div className='usermovierelease'>{Movie.releasedate}</div>
    //     <div>
        
    //     </div>
    // </div>
// </div>
  )

}

export default Product