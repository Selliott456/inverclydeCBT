import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <main id="mainFooter">
      <div className="contactRow">
        <div className="iconGroup">
          <MdEmail className="contactIcon" />
          <a className="footerPara" href="mailto:rhona@cbtinverclyde.com">
            email
          </a>
        </div>
        <div className="iconGroup">
          <MdPhone className="contactIcon" />
          <p className="footerPara">07938 107 621</p>
        </div>
        <div className="iconGroup">
          <MdLocationOn className="contactIcon" />
          <p className="footerPara">
            Room 5 | 9 Duff Street | Greenock | Scotland
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
