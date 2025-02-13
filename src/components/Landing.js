import React from "react";
import { Link, Navigate } from "react-router-dom";
import fulllogo from "../styles/fulllogo.png";

const Landing = () => {
  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;

  // If mobile, redirect to home
  if (isMobile) {
    return <Navigate to="/home" />;
  }

  // Otherwise show landing page
  return (
    <main id="landing">
      <div className="landingContent">
        <img
          src={fulllogo}
          alt="CBT Inverclyde"
          className="landingLogo fadeIn"
        />
        <div className="landingText fadeIn">
          <h1>Welcome to CBT Inverclyde</h1>
          <p>Professional Cognitive Behavioural Therapy in Greenock</p>
          <Link to="/home" className="button">
            Enter Site
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Landing;
