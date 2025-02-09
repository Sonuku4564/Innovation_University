import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Empowering Future Leaders Shaping Global Entrepreneurs</h1>
            <p>  
               Whether you're launching a startup, leading an enterprise, or redefining industries, 
               we provide the tools, network, and mindset to make it happen. Step into a future where opportunities are limitless,
               and success is built on vision, passion, and action. Your journey starts here.
            </p>
            <button className='btn'> Explore Now  <img src={dark_arrow} alt="arrow icon" /></button>
            
        </div> 

    </div>
  )
}

export default Hero