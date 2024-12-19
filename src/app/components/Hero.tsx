import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/images/banner_bg.png)] bg-cover'
    style={{backgroundSize: "25%" ,backgroundPosition:'left 100px top 100px'}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-100px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[60px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
      <div>
        <p data-aos="zoom-in">I'm</p>
        <p data-aos="zoom-in">Almas</p>
        <p data-aos="zoom-in">Yaqoob</p>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Hero

