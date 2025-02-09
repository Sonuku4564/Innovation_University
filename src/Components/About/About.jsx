import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'> 
        <div className="about-left">
            <img src= {about_img}alt=""  className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />
        </div>
        <div className="about-right">
            <h3> ABOUT UNIVERSITY</h3>
            <h2> Nurturing Tommorow's Future</h2>
            <p> Innovation University is India's first institution dedicated to fostering entrepreneurship,
               innovation, and startup culture. Our mission is to empower aspiring entrepreneurs with the skills, mentorship, 
               and resources to build high-impact ventures that transform industries and create jobs. With state-of-the-art incubators,
                industry partnerships, and a curriculum designed by successful founders,
               we provide an ecosystem where ideas turn into billion-dollar businesses.
            </p>

        </div>
    </div>
  )
}

export default About