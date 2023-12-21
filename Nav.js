import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className="header">
        <div className="name">PORTFOLIO!</div>
        <div className="topop container mx-5">
            <div className="innner">
            <span ><a  className='home'href="/home" >Home</a></span>
            <span ><a className='Skills' href="/skills" >Skills</a></span>
            <span ><a className='Contact' href="/contact" >Contact</a></span>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Nav
