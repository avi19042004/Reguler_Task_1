import React from 'react'
import './Home.css'
import img1 from '../Assets/phoneBackgroundImage.png'
import img2 from '../Assets/phoneImage.png'
import background from '../Assets/LineDesignImage.png'

const Home = () => {
  return (
    <>
      <div className='home-page'>
        <div className="home-left">
          <span className='header'>The Only AI</span><br />
          <span className='header'>CRM for small</span><br />
          <span className='header'>Businesses</span><br />
          <div className="content">
            <span>Respond to  leads, organize contacts, and instantly <br /> genrate client communication with AI CRM </span>
          </div>
          <button>Start For Free</button>
        </div>
        <div className="home-right">
          <img src={img1} alt="" className='img1' />
          <img src={img2} alt="" className='img2' />
        </div>
      </div>

      <div className="backgroung-img">
        <img src={background} alt="" className='background' />
      </div>
    </>

  )
}

export default Home