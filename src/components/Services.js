import React from "react";
import cog from "../styles/cog.png";
import commitment from "../styles/commitment.png";
import behaviour from "../styles/behaviour.png";
import Areas from "./Areas";

const Services = () => {
  return (
    <main id="mainServices">
      <h1>Services at CBT Inverclyde</h1>
      <div className="services-grid">
        <div className="service">
          <div className="service-content">
            <img className="serviceImg" src={cog} alt="cognitive"></img>
            <h2>Cognitive Behavioural Therapies</h2>
          </div>
        </div>
        <div className="service">
          <div className="service-content">
            <img className="serviceImg" src={commitment} alt="commitment"></img>
            <h2>Acceptance and Commitment Therapy</h2>
          </div>
        </div>
        <div className="service">
          <div className="service-content">
            <img className="serviceImg" src={behaviour} alt="behaviour"></img>
            <h2>Behavioural Therapy</h2>
          </div>
        </div>
      </div>

      <Areas />
    </main>
  );
};

export default Services;
