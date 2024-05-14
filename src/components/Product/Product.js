import React, {useState} from 'react'
import './Product.css'
import one from '../../assets/1-customized-transformer.png';
import two from '../../assets/2-power-transformer.png'
import three from '../../assets/3-3phase-CVT.png'
import four from '../../assets/4-detuned-reactor.png'
import five from '../../assets/5-1 phx Constant Voltage Transformer.png'
import six from '../../assets/6-Isolation Transformer.png'
import seven from '../../assets/7-1 phx Choke.png'
import eight from '../../assets/8-1 phx Inverter Transformer.png'
import nine from '../../assets/9-CVT Transformer.png'
import ten from '../../assets/10-3 phx Inverter Transformer.png'
import eleven from '../../assets/11-AC Stabilizer.png'
import twelve from '../../assets/12-Zig-Zag Transformer.png'
import thirteen from '../../assets/13-Mains Stabilizer.png'
import fourteen from '../../assets/14-Refrigerator Stabilizer.png'
import fifteen from '../../assets/15-CVT Stabilizer.png'
import sixteen from '../../assets/16-Electric Voltage Stabilizer.png'
import Line from '../Line/Line'

const Product = ({ product_ref}) => {

  const [style, setStyle] = useState({display: 'none'});
  const [style2, setStyle2] = useState({display: 'none'});
  const [style3, setStyle3] = useState({display: 'none'});
  const [style4, setStyle4] = useState({display: 'none'});
  const [style5, setStyle5] = useState({display: 'none'});
  const [style6, setStyle6] = useState({display: 'none'});
  const [style7, setStyle7] = useState({display: 'none'});
  const [style8, setStyle8] = useState({display: 'none'});
  const [style9, setStyle9] = useState({display: 'none'});
  const [style10, setStyle10] = useState({display: 'none'});
  const [style11, setStyle11] = useState({display: 'none'});
  const [style12, setStyle12] = useState({display: 'none'});
  const [style13, setStyle13] = useState({display: 'none'});
  const [style14, setStyle14] = useState({display: 'none'});
  const [style15, setStyle15] = useState({display: 'none'});
  const [style16, setStyle16] = useState({display: 'none'});


  return (
    <div className='Product' ref={product_ref}>
      <div className='subheading'>What Do We Make?</div>
        <div className='heading'>Our Products</div>
        <Line/>
        <div className='productGrid'>

          <div className='OddProductsGrid'>
            <div className='products' onMouseEnter={e => { setStyle({display: 'flex'}); }}onMouseLeave={e => { setStyle({display: 'none'})}}>
              <img src={one}/>
              <div className='producthover' style={style}>
                <div> 
              <span className='bold'>Customized Transformer </span><br /> (Used in Delhi, Kolkata and Bangalore Metro)</div>
              </div>
            </div>
            <div  className='products' onMouseEnter={e => { setStyle3({display: 'flex'}); }}onMouseLeave={e => { setStyle3({display: 'none'})}}>
              <img src={three}/>
              <div className='producthover' style={style3}>
                <div>
                <span className='bold'>3 Phase Constant Voltage Transformer </span><br />
                (upto 15kW)
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle5({display: 'flex'}); }}onMouseLeave={e => { setStyle5({display: 'none'})}}>
              <img src={five}/>
              <div className='producthover' style={style5}>
                <div>
                <span className='bold'>1 Phase Constant Voltage Transformer </span><br/> (300W - 5kW)
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle7({display: 'flex'}); }}onMouseLeave={e => { setStyle7({display: 'none'})}}>
              <img src={seven}/>
              <div className='producthover' style={style7}>
                <div className='bold'>
                1 Phase Choke
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle9({display: 'flex'}); }}onMouseLeave={e => { setStyle9({display: 'none'})}}>
              <img src={nine}/>
              <div className='producthover' style={style9}>
                <div className='bold'>
                Capacitive Voltage Transformer
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle11({display: 'flex'}); }}onMouseLeave={e => { setStyle11({display: 'none'})}}>
              <img src={eleven}/>
              <div className='producthover' style={style11}>
                <div>
                <span className='bold'>AC Stabilizer</span><br/>
                <div className='ACsubtext'>
                  <span className='ACbold'>1 Ton AC: </span>130V-290V <br/> <span className='ACbold'> 1.5 Ton AC: </span>90V-290V, 130V-290V, 150V-285V, 170V-270V <br/> <span className='ACbold'>2 Ton AC: </span>90V-290V, 130V-290V, 150V-285V
                </div>
                </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle13({display: 'flex'}); }}onMouseLeave={e => { setStyle13({display: 'none'})}}>
              <img src={thirteen}/>
              <div className='producthover' style={style13}>
                <div>
                <span className='bold'>Mains Stabilizer</span><br/> Application: 3KVA & 5KVA
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle15({display: 'flex'}); }}onMouseLeave={e => { setStyle15({display: 'none'})}}>
              <img src={fifteen}/>
              <div className='producthover' style={style15}>
                <div>
                <span className='bold'>CVT Stabilizer</span><br/> For LED TVs upto 55" Panel & 75" Panel/ Home Theater/ Music System
              </div>
              </div>
            </div>
          </div>

          <div className='EvenProductsGrid'>
            <div className='products'onMouseEnter={e => { setStyle2({display: 'flex'}); }}onMouseLeave={e => { setStyle2({display: 'none'})}}>
              <img src={two}/>
              <div className='producthover' style={style2}>
                <div className='bold'>
                Power Transformer
              </div>
              </div>
            </div>
            <div  className='products' onMouseEnter={e => { setStyle4({display: 'flex'}); }}onMouseLeave={e => { setStyle4({display: 'none'})}}>
              <img src={four}/>
              <div className='producthover' style={style4}>
                <div className='bold'>
                Detuned Reactor
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle6({display: 'flex'}); }}onMouseLeave={e => { setStyle6({display: 'none'})}}>
              <img src={six}/>
              <div className='producthover' style={style6}>
                <div>
                <span className='bold'>Isolation Transformer </span><br/> (1 Phase - upto 30kW <br/> 3 Phase - upto 300kW)
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle8({display: 'flex'}); }}onMouseLeave={e => { setStyle8({display: 'none'})}}>
              <img src={eight}/>
              <div className='producthover' style={style8}>
                <div>
                <span className='bold'>1 Phase Inverter Transformer </span><br/> (upto 250kW)
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle10({display: 'flex'}); }}onMouseLeave={e => { setStyle10({display: 'none'})}}>
              <img src={ten}/>
              <div className='producthover' style={style10}>
                <div>
                <span className='bold'>3 Phase Inverter Transformer </span><br/> (upto 250kW)
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle12({display: 'flex'}); }}onMouseLeave={e => { setStyle12({display: 'none'})}}>
              <img src={twelve}/>
              <div className='producthover' style={style12}>
                <div className='bold'>
                Zig - Zag Transformer
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle14({display: 'flex'}); }}onMouseLeave={e => { setStyle14({display: 'none'})}}>
              <img src={fourteen}/>
              <div className='producthover' style={style14}>
                <div>
                <span className='bold'>Refrigerator Stabilizer</span><br/> upto 680 litres <br/> 150V - 285V
              </div>
              </div>
            </div>
            <div className='products' onMouseEnter={e => { setStyle16({display: 'flex'}); }}onMouseLeave={e => { setStyle16({display: 'none'})}}>
              <img src={sixteen}/>
              <div className='producthover' style={style16}>
                <div>
                <span className='bold'>Electronic Voltage Stabilizer </span><br/> For LED TVs upto 65" + DTH / LED Lighting/ Music Systems/ Home Theater <br/> (Max. 3A)
              </div>
              </div>
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