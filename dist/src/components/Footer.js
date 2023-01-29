import React from 'react'
import email from '../styles/email.png'
import phone from '../styles/phone.png'
import address from '../styles/address.png'

const Footer = () => {
  return <main id="mainFooter">
    <div className="contactRow">
      <div className="iconGroup">
        <img className="contactIcon" src={email} alt="email"></img>
        <a className="footerPara" href="mailto:rhona@cbtinverclyde.com">email</a>
      </div>
      <div className="iconGroup">
        <img className="contactIcon" src={phone} alt="phone"></img>
        <p className="footerPara">07938 107 621</p>
      </div>
      <div className="iconGroup">
        <img className="contactIcon" src={address} alt="address"></img>
        <p className="footerPara">22b Crawfurd Street | Greenock | Scotland</p>
      </div>
    </div>
  </main>
}

export default Footer