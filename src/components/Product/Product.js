import React, {useEffect, useState} from 'react'
import './Product.css'
import one from '../../assets/1-customized-transformer.png';
import two from '../../assets/2-power-transformer.png'
import three from '../../assets/3-3phase-CVT.png'
import four from '../../assets/4-detuned-reactor.png'
import five from '../../assets/5-1 phx Constant Voltage Transformer.png'
import six from '../../assets/6-Isolation Transformer.png'
import seven from '../../assets/7-1 phx Choke.png'
import eight from '../../assets/1 phx inverter transformer.png'
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
  const [modal11, setModal11] = useState(false);
  const [modal13, setModal13] = useState(false);
  const [modal15, setModal15] = useState(false);
  const [modal14, setModal14] = useState(false);
  const [modal16, setModal16] = useState(false);


  useEffect(() => {
    if (modal4|| modal6|| modal11|| modal13|| modal15|| modal4|| modal16) {
      document.body.style.overflow='hidden';
    } else {
      document.body.style.overflow='visible';
    }
    
    // Cleanup when the component is unmounted or modal16 changes
    return () => {
      document.body.style.overflow='visible';
    };
  }, [modal4, modal6, modal11, modal13, modal15, modal4, modal16]);



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

            <div className='products' onMouseEnter={e => { setStyle11({display: 'flex'}); }}onMouseLeave={e => { setStyle11({display: 'none'})}}
              onClick={()=> setModal11(true)}  
            >
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

            <div className='products' onMouseEnter={e => { setStyle13({display: 'flex'}); }}onMouseLeave={e => { setStyle13({display: 'none'})}}
              onClick={()=> setModal13(true)}  
            >
              <img src={thirteen}/>
              <div className='producthover' style={style13}>
                <div>
                <span className='bold'>Mains Stabilizer</span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle15({display: 'flex'}); }}onMouseLeave={e => { setStyle15({display: 'none'})}}
              onClick={()=> setModal15(true)}  
            >
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

            <div className='products' onMouseEnter={e => { setStyle14({display: 'flex'}); }}onMouseLeave={e => { setStyle14({display: 'none'})}}
              onClick={()=> setModal14(true)}  
            >
              <img src={fourteen}/>
              <div className='producthover' style={style14}>
                <div>
                <span className='bold'>Refrigerator Stabilizer</span>
              </div>
              </div>
            </div>

            <div className='products' onMouseEnter={e => { setStyle16({display: 'flex'}); }}onMouseLeave={e => { setStyle16({display: 'none'})}}
              onClick={()=> setModal16(true)}  
            >
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

      <div className='ModalContainer'
      onClick={(e) => {
        if (e.target.className === 'ModalContainer') {
          setModal4(false);
        }
      }}>
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

      <div className='ModalContainer'
      onClick={(e) => {
        if (e.target.className === 'ModalContainer') {
          setModal6(false);
        }
      }}>
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


    {modal11?

      <div className='ModalContainer'
      onClick={(e) => {
        if (e.target.className === 'ModalContainer') {
          setModal11(false);
        }
      }}>
        <div className='ModalParent'>
          <div className='modalHead'>
            <div>AC Stabilizer</div>
            <div className='closeModal'
              onClick={()=> setModal11(false)}>
              X
            </div>
          </div>

          <div className='Modal eleven'>

            <div className='specs model'>Specifications</div>
            <div className='model'>bel-3130</div>
            <div className='model'>bel-4090</div>
            <div className='model'>bel-4130</div>
            <div className='model'>bel-4150</div>
            <div className='model'>bel-4170</div>
            <div className='model'>bel-5090</div>
            <div className='model'>bel-5130</div>
            <div className='model'>bel-5150</div>

            <div className='specs'>Application</div>
            <div className='data'>One Air Conditioner (Up to 1 TON)</div>
            <div className='data'>One Air Conditioner (Up to 1.5 TON)</div>
            <div className='data'>One Air Conditioner (Up to 1.5 TON)</div>
            <div className='data'>One Air Conditioner (Up to 1.5 TON)</div>
            <div className='data'>One Air Conditioner (Up to 1.5 TON)</div>
            <div className='data'>One Air Conditioner (Up to 2.0 TON)</div>
            <div className='data'>One Air Conditioner (Up to 2.0 TON)</div>
            <div className='data'>One Air Conditioner (Up to 2.0 TON)</div>

            <div className='specs'>Working Range</div>
            <div className='data'>130V - 290V AC, 1PH. 50Hz</div>
            <div className='data'>90V - 290V AC, 1PH. 50Hz</div>
            <div className='data'>130V - 290V AC, 1PH. 50Hz</div>
            <div className='data'>150V - 285V AC, 1PH. 50Hz</div>
            <div className='data'>170V - 270V AC, 1PH. 50Hz</div>
            <div className='data'>90V - 290V AC, 1PH. 50Hz</div>
            <div className='data'>130V - 290V AC, 1PH. 50Hz</div>
            <div className='data'>150V - 285V AC, 1PH. 50Hz</div>

            <div className='specs'>Output Voltage</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>

            <div className='specs'>Time Delay</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>

            <div className='specs'>Advance Digital Display</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            <div className='data'>L.E.D- 2 No.s (1 for Mains, 1 for output)</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>

            <div className='specs'>Low Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if below 130V</div>
            <div className='data'>Provided, for Mains Supply if below 90V</div>
            <div className='data'>Provided, for Mains Supply if below 130V</div>
            <div className='data'>Provided, for Mains Supply if below 150V</div>
            <div className='data'>Provided, for Mains Supply if below 170V (L.E.D Output glow Red)</div>
            <div className='data'>Provided, for Mains Supply if below 90V</div>
            <div className='data'>Provided, for Mains Supply if below 130V</div>
            <div className='data'>Provided, for Mains Supply if below 150V</div>

            <div className='specs'>High Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if above 290V</div>
            <div className='data'>Provided, for Mains Supply if above 290V</div>
            <div className='data'>Provided, for Mains Supply if above 290V</div>
            <div className='data'>Provided, for Mains Supply if above 285V</div>
            <div className='data'>Provided, for Mains Supply if above 270V (L.E.D Output glow Red)</div>
            <div className='data'>Provided, for Mains Supply if above 290V</div>
            <div className='data'>Provided, for Mains Supply if above 290V</div>
            <div className='data'>Provided, for Mains Supply if above 285V</div>

            <div className='specs'>Auto Start Facility</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>

            <div className='specs'>Wall Mounting</div>
            <div className='data'>Yes</div>
            <div className='data'>Yes</div>
            <div className='data'>Yes</div>
            <div className='data'>Yes</div>
            <div className='data'>Yes</div>
            <div className='data'>Yes</div>
            <div className='data'>Yes</div>
            <div className='data'>Yes</div>

            <div className='specs'>Warranty</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>

          </div>
        </div>
      </div>

    : null}


    {modal13?

      <div className='ModalContainer'
      onClick={(e) => {
        if (e.target.className === 'ModalContainer') {
          setModal13(false);
        }
      }}>
        <div className='ModalParent'>
          <div className='modalHead'>
            <div>Mains Stabilizer</div>
            <div className='closeModal'
              onClick={()=> setModal13(false)}>
              X
            </div>
          </div>

          <div className='Modal four'>

            <div className='specs model'>Specifications</div>
            <div className='model'>bel-MS-3090</div>
            <div className='model'>bel-MS-5090</div>

            <div className='specs'>Application</div>
            <div className='data'>Mains- 3KVA - 230V, 50Hz</div>
            <div className='data'>Mains- 5KVA - 230V, 50Hz</div>

            <div className='specs'>Working Range</div>
            <div className='data'>90V - 290V AC, 1PH. 50Hz</div>
            <div className='data'>90V - 290V AC, 1PH. 50Hz</div>

            <div className='specs'>Output Voltage</div>
            <div className='data'>Stabilized</div>
            <div className='data'>Stabilized</div>
            
            <div className='specs'>Time Delay</div>
            <div className='data'>5 Secs ITDS Provided</div>
            <div className='data'>5 Secs ITDS Provided</div>
            
            <div className='specs'>Advance Digital Display</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            <div className='data'>Provided (SSD- Seven Segment Display)</div>
            
            <div className='specs'>Low Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if below 90V</div>
            <div className='data'>Provided, for Mains Supply if below 90V</div>
            
            <div className='specs'>High Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if above 290V</div>
            <div className='data'>Provided, for Mains Supply if above 290V</div>

            <div className='specs'>Overload Protection</div>
            <div className='data'>Available through separate MCB's</div>
            <div className='data'>Available through separate MCB's</div>
            
            <div className='specs'>Auto Start Facility</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>
            
            <div className='specs'>Warranty</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            
          </div>
        </div>
      </div>

    : null}


    {modal15?

      <div className='ModalContainer'
      onClick={(e) => {
        if (e.target.className === 'ModalContainer') {
          setModal15(false);
        }
      }}>
        <div className='ModalParent'>
          <div className='modalHead'>
            <div>CVT Stabilizer</div>
            <div className='closeModal'
              onClick={()=> setModal15(false)}>
              X
            </div>
          </div>

          <div className='Modal fifteen'>

            <div className='specs model'>Specifications</div>
            <div className='model'>CVT-250 VA</div>
            <div className='model'>CVT-500 VA</div>

            <div className='specs'>Applications</div>
            <div className='data'>One LED TV upto 55" Panel + DTH/ Home Theatre/ Music System</div>
            <div className='data'>One LED TV upto 75" Panel + DTH/ Home Theatre/ Music System</div>

            <div className='specs'>Input Working Range</div>
            <div className='data'>110V - 285V AC, 1PH. 50Hz</div>
            <div className='data'>110V - 285V AC, 1PH. 50Hz</div>

            <div className='specs'>Output Voltage</div>
            <div className='data'>Stabilized & Sine Wave Shape</div>
            <div className='data'>Stabilized & Sine Wave Shape</div>
            
            <div className='specs'>Offers</div>
            <div className='data'>Pure Sine Wave Regulated Output Voltage Irrespective of Input Wave Shape (Sine Or Square Wave)</div>
            <div className='data'>Pure Sine Wave Regulated Output Voltage Irrespective of Input Wave Shape (Sine Or Square Wave)</div>
            
            <div className='specs'>Output Voltage Correction</div>
            <div className='data'>Instantaneous within 30 milliseconds</div>
            <div className='data'>Instantaneous within 30 milliseconds</div>
            
            <div className='specs'>Protects Against</div>
            <div className='data'>Spikes/ Surges/ Transients/ Sags/ Brown Outs Conditions</div>
            <div className='data'>Spikes/ Surges/ Transients/ Sags/ Brown Outs Conditions</div>
            
            <div className='specs'>Inherently Protected Against</div>
            <div className='data'>Short Circuiting of Output</div>
            <div className='data'>Short Circuiting of Output</div>

            <div className='specs'>Achieves</div>
            <div className='data'>Zero Voltage at Output Between Neutral & Earth</div>
            <div className='data'>Zero Voltage at Output Between Neutral & Earth</div>
            
            <div className='specs'>Protection on Input</div>
            <div className='data'>Provided through Glass Cartridge Fuse (Slow Blow)</div>
            <div className='data'>Provided through Glass Cartridge Fuse (Slow Blow)</div>
            
            <div className='specs'>Warranty</div>
            <div className='data'>3 Years</div>
            <div className='data'>3 Years</div>
            
          </div>
        </div>
      </div>

    : null}


    {modal14?

      <div className='ModalContainer'
      onClick={(e) => {
        if (e.target.className === 'ModalContainer') {
          setModal14(false);
        }
      }}>
        <div className='ModalParent'>
          <div className='modalHead'>
            <div>Refrigerator Stabilizer</div>
            <div className='closeModal'
              onClick={()=> setModal14(false)}>
              X
            </div>
          </div>

          <div className='Modal fourteen'>

            <div className='specs model'>Specifications</div>
            <div className='model'>bel-FR-1504</div>

            <div className='specs'>Application</div>
            <div className='data'>One Refrigerator (Up to 680 Litre/ 4 Amp. Capacity)</div>

            <div className='specs'>Working Range</div>
            <div className='data'>150V - 285V AC, 1PH. 50Hz</div>

            <div className='specs'>Output Voltage</div>
            <div className='data'>Stabilized</div>

            <div className='specs'>Time Delay</div>
            <div className='data'>5 Secs ITDS Provided</div>
            
            <div className='specs'>Advance Digital Display</div>
            <div className='data'>L.E.D - 2 No.s (1 for Mains, 1 for Output)</div>
            
            <div className='specs'>Low Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if below 150V (LED Output glow Red)</div>
            
            <div className='specs'>High Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if above 285V (LED Output glow Red)</div>
            
            <div className='specs'>Auto Start Facility</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>

            <div className='specs'>Mounting</div>
            <div className='data'>Table/ Platform</div>
            
            <div className='specs'>Warranty</div>
            <div className='data'>3 Years</div>
            
          </div>
        </div>
      </div>

    : null}


    {modal16?

      <div className='ModalContainer'
      onClick={(e) => {
        if (e.target.className === 'ModalContainer') {
          setModal16(false);
        }
      }}>
        <div className='ModalParent'>
          <div className='modalHead'>
            <div>Electronic Voltage Stabilizer</div>
            <div className='closeModal'
              onClick={()=> setModal16(false)}>
              X
            </div>
          </div>

          <div className='Modal fourteen'>

            <div className='specs model'>Specifications</div>
            <div className='model'>VENUS</div>

            <div className='specs'>Application</div>
            <div className='data'>One LED TV upto 65" Panel + DTH/ LED Lighting/ Music Systems/ Home Theatres (Max. 3 Amp.) </div>

            <div className='specs'>Input Working Range</div>
            <div className='data'>11V - 290V AC, 1PH. 50Hz</div>

            <div className='specs'>Output Voltage</div>
            <div className='data'>Stabilized</div>

            <div className='specs'>Time Delay</div>
            <div className='data'>5 Secs ITDS Provided</div>
            
            <div className='specs'>Advance Digital Display</div>
            <div className='data'>L.E.D - 2 No.s (1 for Mains, 1 for Output)</div>
            
            <div className='specs'>Low Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if below 90V (LED Output glow Red)</div>
            
            <div className='specs'>High Cut Off Protection</div>
            <div className='data'>Provided, for Mains Supply if above 290V (LED Output glow Red)</div>
            
            <div className='specs'>Auto Start Facility</div>
            <div className='data'>Starts Automatically when Mains is sensed within designed Input Voltage Range</div>

            <div className='specs'>Wall Mounting</div>
            <div className='data'>Yes</div>
            
            <div className='specs'>Warranty</div>
            <div className='data'>3 Years</div>
            
          </div>
        </div>
      </div>

    : null}

    </>
  )

}

export default Product