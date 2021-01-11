import React from 'react'
import head from '../styles/head.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return <nav>
    <ul id="navList">
      <Link to="/home"><img id="navLogo" src={head} alt="logo"></img></Link>
      <Link className="navButton" to="/fees">Fees</Link>
      <Link className="navButton" to="/services">Services</Link>
      <Link className="navButton" to="/areas">Areas of Counselling</Link>
      <Link className="navButton" to="/willwork">Will CBT Work For Me?</Link>
    </ul>
  </nav>
}

export default Navbar