import React from 'react'
import { slide as Menu } from 'react-burger-menu'

const Mobilenav = () => {



  return <div id="mobileNav">
    <Menu >
      <a className="menu-item" href="/home">home</a>
      <a className="menu-item" href="/services">services</a>
      <a className="menu-item" href="/areas">Areas of Counselling</a>
      <a className="menu-item" href="/willwork">Will CBT Work For Me?</a>
      <a className="menu-item" href="/fees">Fees</a>
    </Menu>
  </div>
}

export default Mobilenav