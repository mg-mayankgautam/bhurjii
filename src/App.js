import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Product from './components/Product/Product';
import Clients from './components/Clients/Clients';
import GlobalPresence from './components/GlobalPresence/GlobalPresence';
import WhyChoseUs from './components/WhyChoseUs/WhyChoseUs';
import Footer from './components/Footer/Footer'
import { PiArrowBendLeftUpFill } from "react-icons/pi";



function App() {

  const Landing_ref = useRef(null);
  const about_ref = useRef(null);
  const product_ref = useRef(null);
  const clients_ref = useRef(null);
  const Footer_ref = useRef(null);

  useEffect(()=>{
    console.log(Landing_ref)

  },[Landing_ref])

  return (
    <div className="App">
      <Nav 
        Landing_ref={Landing_ref}
        about_ref={about_ref}
        product_ref={product_ref}
        clients_ref={clients_ref}
        Footer_ref={Footer_ref}/>
      <Landing Landing_ref={Landing_ref}  product_ref={product_ref}/>
      <About about_ref={about_ref}/>
      <Product product_ref={product_ref}/>
      <Clients  clients_ref={clients_ref}/>
      <GlobalPresence/>
      <WhyChoseUs/>
      <Footer Footer_ref={Footer_ref} Landing_ref={Landing_ref}
        about_ref={about_ref}
        product_ref={product_ref}
        clients_ref={clients_ref}/>
      {/* {Landing_ref.current?<></>: */}
      <div className='scrollBtnDiv'>
        <PiArrowBendLeftUpFill className='scrollBtn' onClick={() => {Landing_ref.current?.scrollIntoView({behavior:'smooth'})}}/>
      </div>
      {/* } */}
    </div>
  );
}

export default App;
