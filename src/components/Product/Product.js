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

  const [modal4, setModal4] = useState(false);
  const [modal6, setModal6] = useState(false);



  return (
    <>

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
                <span className='bold'>3 Phase Constant Voltage Transformer </span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle5({display: 'flex'}); }}onMouseLeave={e => { setStyle5({display: 'none'})}}>
              <img src={five}/>
              <div className='producthover' style={style5}>
                <div>
                <span className='bold'>1 Phase Constant Voltage Transformer </span>
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
                <div>
                  <span className='bold'>Constant Voltage Transformer</span>
                </div>
               
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle11({display: 'flex'}); }}onMouseLeave={e => { setStyle11({display: 'none'})}}>
              <img src={eleven}/>
              <div className='producthover' style={style11}>
                <div>
                <span className='bold'>AC Stabilizer</span><br/>
                {/* <div className='ACsubtext'>
                  <span className='ACbold'>1 Ton AC: </span>130V-290V <br/> <span className='ACbold'> 1.5 Ton AC: </span>90V-290V, 130V-290V, 150V-285V, 170V-270V <br/> <span className='ACbold'>2 Ton AC: </span>90V-290V, 130V-290V, 150V-285V
                </div> */}
                </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle13({display: 'flex'}); }}onMouseLeave={e => { setStyle13({display: 'none'})}}>
              <img src={thirteen}/>
              <div className='producthover' style={style13}>
                <div>
                <span className='bold'>Mains Stabilizer</span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle15({display: 'flex'}); }}onMouseLeave={e => { setStyle15({display: 'none'})}}>
              <img src={fifteen}/>
              <div className='producthover' style={style15}>
                <div>
                <span className='bold'>CVT Stabilizer</span><br/> For LED TVs upto 55" Panel & 75" Panel/ Home Theater/ Music System/ Petrol Pump Station
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

            <div  className='products' onMouseEnter={e => { setStyle4({display: 'flex'}); }}onMouseLeave={e => { setStyle4({display: 'none'})}}
              onClick={()=> setModal4(true)}
            >
              <img src={four}/>
              <div className='producthover' style={style4}>
                <div className='bold'>
                  Detuned Reactor
                </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle6({display: 'flex'}); }}onMouseLeave={e => { setStyle6({display: 'none'})}}
              onClick={()=> setModal6(true)}
            >
              <img src={six}/>
              <div className='producthover' style={style6}>
                <div>
                <span className='bold'>Isolation Transformer </span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle8({display: 'flex'}); }}onMouseLeave={e => { setStyle8({display: 'none'})}}>
              <img src={eight}/>
              <div className='producthover' style={style8}>
                <div>
                <span className='bold'>1 Phase Inverter Transformer </span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle10({display: 'flex'}); }}onMouseLeave={e => { setStyle10({display: 'none'})}}>
              <img src={ten}/>
              <div className='producthover' style={style10}>
                <div>
                <span className='bold'>3 Phase Inverter Transformer </span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle12({display: 'flex'}); }}onMouseLeave={e => { setStyle12({display: 'none'})}}>
              <img src={twelve}/>
              <div className='producthover' style={style12}>
                <div className='bold'>
                3 Phase Zig - Zag Transformer
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle14({display: 'flex'}); }}onMouseLeave={e => { setStyle14({display: 'none'})}}>
              <img src={fourteen}/>
              <div className='producthover' style={style14}>
                <div>
                <span className='bold'>Refrigerator Stabilizer</span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle16({display: 'flex'}); }}onMouseLeave={e => { setStyle16({display: 'none'})}}>
              <img src={sixteen}/>
              <div className='producthover' style={style16}>
                <div>
                <span className='bold'>Electronic Voltage Stabilizer </span><br/> For LED TVs upto 65" + DTH / LED Lighting/ Music Systems/ Home Theater
              </div>
              </div>
            </div>

          </div>

        </div>
    </div>
    

    {modal4?

      <div className='ModalContainer'>
        <div className='ModalParent'>
          <div className='modalHead'>
            <div>LC Detuned Filter Circuit</div>
            <div className='closeModal'
              onClick={()=> setModal4(false)}>
              X
            </div>
          </div>

          <div className='Modal four'>

            <div className='specs model'>Specifications</div>
            <div className='model'>1 Phase</div>
            <div className='model'>3 Phase</div>

            <div className='specs'>Filter Type</div>
            <div className='data'>Detuned</div>
            <div className='data'>Detuned</div>

            <div className='specs'>Used for Rated Capacitors</div>
            <div className='data'>5 - 70 KVAr</div>
            <div className='data'>5 - 150 KVAr</div>

            <div className='specs'>Network Voltage</div>
            <div className='data'>415V</div>
            <div className='data'>415V / 440V / 600V / 690V / 750V</div>

            <div className='specs'>Network Frequency</div>
            <div className='data'>50 / 60 Hz</div>
            <div className='data'>50 / 60 Hz</div>

            <div className='specs'>Constructional Max Voltage (Reactor)</div>
            <div className='data'>1000V</div>
            <div className='data'>1000V</div>

            <div className='specs'>Filtering Factor</div>
            <div className='data'>7 % / 14%</div>
            <div className='data'>7 % / 14%</div>

            <div className='specs'>Inductance Tolerance</div>
            <div className='data'>(-+) 3 %</div>
            <div className='data'>(-+) 3 %</div>

            <div className='specs'>Linearity of Reactor</div>
            <div className='data'>180% - 200%</div>
            <div className='data'>180% - 200%</div>

            <div className='specs'>Conductor</div>
            <div className='data'>Aluminium / Copper</div>
            <div className='data'>Aluminium / Copper</div>

          </div>
        </div>
      </div>

    : null}
    

    {modal6?

      <div className='ModalContainer'>
        <div className='ModalParent'>
          <div className='modalHead'>
            <div>ISOLATION TRANSFORMER</div>
            <div className='closeModal'
              onClick={()=> setModal6(false)}>
              X
            </div>
          </div>

          <div className='Modal four'>

            <div className='specs model'>Specification</div>
            <div className='model'>1 Phase</div>
            <div className='model'>3 Phase</div>

            <div className='specs'>Rating</div>
            <div className='data'>1KVA - 30KVA</div>
            <div className='data'>10KVA - 250KVA</div>

            <div className='specs'>Configured</div>
            <div className='data'>1 Phase, 2 wire</div>
            <div className='data'>3 Phase : 3 Phase,  Delta / Star or Star / Star</div>

            <div className='specs'>Ratio</div>
            <div className='data'> 1 : 1</div>
            <div className='data'>1 : 1,   Step Up / Step Down</div>

            <div className='specs'>Duty cycle</div>
            <div className='data'>Continous</div>
            <div className='data'>Continuous</div>

            <div className='specs'>I/P Voltage</div>
            <div className='data'>3PH - 415V Delta or 240V Star</div>
            <div className='data'>1000V</div>

            <div className='specs'>O/P Voltage</div>
            <div className='data'>0 - 230V, 50Hz</div>
            <div className='data'>3PH, 0 - 240V Star</div>

            <div className='specs'>Frequency</div>
            <div className='data'>50Hz</div>
            <div className='data'>50Hz</div>

            <div className='specs'>I/P Termination</div>
            <div className='data'>Provided, at back of Cabinet or directly on transformer</div>
            <div className='data'>Provided, at back of Cabinet or directly on transformer</div>

            <div className='specs'>O/P Termination</div>
            <div className='data'>Provided, at back of Cabinet or directly on transformer</div>
            <div className='data'>Provided, at back of Cabinet or directly on transformer</div>

            <div className='specs'>Winding</div>
            <div className='data'>Aluminum Conductor or Copper Conductor</div>
            <div className='data'>Aluminum Conductor or Copper Conductor </div>

            <div className='specs'>Earth Shielding</div>
            <div className='data'>3</div>
            <div className='data'>Provided between Primary & Secondary windings</div>

            <div className='specs'>Earthing</div>
            <div className='data'>Provision provided</div>
            <div className='data'>Provision provided</div>

            <div className='specs'>Insulation</div>
            <div className='data'> 'F' Class or better</div>
            <div className='data'> Class 'F' or 'H'</div>

            <div className='specs'>Cooling</div>
            <div className='data'>Natural Air cooled</div>
            <div className='data'>Natural Air cooled</div>

            <div className='specs'>Efficiency</div>
            <div className='data'>{'>'}96% at full load</div>
            <div className='data'>{'>'}96.5% at full load</div>

            <div className='specs'>Regulation</div>
            <div className='data'>{'<'}3%</div>
            <div className='data'>{'<'}2.5%</div>

            <div className='specs'>IR</div>
            <div className='data'> 100MOhm, at 500V DC</div>
            <div className='data'>{'>'}1000MOhm, at 500V DC</div>

            <div className='specs'>HV</div>
            <div className='data'> 2.5KV for 1 minute between</div>
            <div className='data'> 2.5KV for 1 minute between</div>

            <div className='specs'>With standability</div>
            <div className='data'>Pri. & Sec.,	Pri. & Earth, Sec. & Earth</div>
            <div className='data'>Pri. & Sec.,	Pri. & Earth, Sec. & Earth</div>

            <div className='specs'>Enclosure</div>
            <div className='data'>Powder Coating</div>
            <div className='data'>Powder Coating</div>

            <div className='specs'>Impregnation Media</div>
            <div className='data'>-</div>
            <div className='data'>Saturated Polyster Resin - Class 'H'</div>

            <div className='specs'>Process</div>
            <div className='data'>-</div>
            <div className='data'>V.P.I</div>

            <div className='specs'>Metering</div>
            <div className='data'>-</div>
            <div className='data'>Conforming to customer requirement / request</div>

          </div>
        </div>
      </div>

    : null}

    </>
  )

}

export default Product