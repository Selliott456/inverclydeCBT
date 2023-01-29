import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'


const Mobilenav = () => {



  return <div id="mobileNav">
    <Menu >
      <Link className="menu-item" to="/home">Home</Link>
      <Link className="menu-item" to="/services">Services</Link>
      <Link className="menu-item" to="/areas">Conditions and Therapy</Link>
      <Link className="menu-item" to="/willwork">Will CBT Work For Me?</Link>
      <Link className="menu-item" to="/fees">Fees</Link>
    </Menu>
  </div>
}

export default Mobilenav