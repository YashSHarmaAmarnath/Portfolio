import React from 'react'
import profileImg from '../yash.png'

export const Info = () => {
  return (
    <div className='home'>
      <div className="pyramid-loader">
  <div className="wrapper">
    <span className="side side1"></span>
    <span className="side side2"></span>
    <span className="side side3"></span>
    <span className="side side4"></span>
    <span className="shadow"></span>
  </div>
</div>

        <div className="Text">
            <div className="Name"><p>Hi, I am <br /> Yash Sharma</p></div>
            <p>I am an IT student with a passion for programming and a strong desire to explore the world of technology. I am dedicated to honing my coding skills and leveraging my technical knowledge to create innovative solutions.</p>
        
        </div>
        <div className="image">
            <img src={profileImg} alt="yash" />
        </div>
    </div>
  )
}
