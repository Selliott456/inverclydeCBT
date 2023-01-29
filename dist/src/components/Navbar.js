import React from 'react'
import logo from '../styles/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return <nav id="nav">
    <ul id="navList"> 
      <Link to="/home"><img id="navLogo" src={logo} alt="logo"></img></Link>
      <Link className="navButton" to="/home">Home</Link>
      <Link className="navButton" to="/services">Services</Link>
      <Link className="navButton" to="/areas">Conditions and Therapy</Link>
      <Link className="navButton" to="/willwork">Will CBT Work For Me?</Link>
      <Link className="navButton" to="/fees">Fees</Link>
    </ul>
  </nav>
}

export default Navbar