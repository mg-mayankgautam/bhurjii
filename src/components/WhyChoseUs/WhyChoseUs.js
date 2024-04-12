import React from 'react'
import './WhyChoseUs.css' 
import plant from '../../assets/plant.png'
import Line from '../Line/Line'

const WhyChoseUs = () => {
  return (
    <div className='WhyChoseUs'>
        <div className='subheading'>
            What Makes Us Credible?
        </div>
        <div className='heading'>
            Why Choose Us?
        </div>
<Line/>
        <div className='WhyChoseUs_content'>
            <div className='plant_div'><img className='plant' src={plant} /></div>
            <div className='why_chose_us_text'>The exemplary legacy of Bhurji Electronics has had the privilege
                 of introducing various technologies to the Transformer Industry in India. 
                 The revolutionary adoption of the industrial best practices we have adopted 
                 ISO:9001 – 2015 to ensure the development of best-in-class products driven 
                 by quality and innovation. <br /><br />

                Bhurji Electronics specializes in producing a wide range of high-quality transformers by
                leveraging advanced equipment and machinery to ensure the adherence of the highest quality 
                and reliability industrial standards.
            </div>
        </div>
    </div>
  )
}

export default WhyChoseUs
