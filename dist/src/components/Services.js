import React from 'react'
import cog from '../styles/cog.png'
import commitment from '../styles/commitment.png'
import behaviour from '../styles/behaviour.png'


const Services = () => {
  return <main id="mainServices">
    <h1>Services at CBT Inverclyde</h1>
    <div className="service">
      <h2>Cognitive Behavioural Therapies</h2>
      <img className="serviceImg" src={cog} alt="cognitive"></img>
    </div>
    <div className="service">
      <h2>Acceptance and Commitment Therapy</h2>
      <img className="serviceImg" src={commitment} alt="cognitive"></img>
    </div>
    <div className="service">
      <h2>Behavioural Therapy</h2>
      <img className="serviceImg" src={behaviour} alt="cognitive"></img>
    </div>
    
  </main>

}

export default Services