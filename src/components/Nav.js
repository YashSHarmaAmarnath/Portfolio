import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='nav'>
      
            <ul>
              {/* <li><div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>
</div></li> */}
                <li><NavLink to="/" className={(e)=>{return e.isActive?"active":""}}>HOME</NavLink></li>
                <li><NavLink to="/about" className={(e)=>{return e.isActive?"active":""}}>ABOUT</NavLink></li>
                <li><NavLink to="/skill" className={(e)=>{return e.isActive?"active":""}}>SKILL</NavLink></li>
                <li><NavLink to="/project" className={(e)=>{return e.isActive?"active":""}}>PROJECT</NavLink></li>
                <li><NavLink to="/contact" className={(e)=>{return e.isActive?"active":""}}>CONTACT</NavLink></li>
              {/* <li><div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>
</div></li> */}
            </ul>
    </div>
  )
}

// <NavLink to="/" className={(e)=>{return e.isActive?"active":""}}>👤</NavLink>
