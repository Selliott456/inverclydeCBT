import React from 'react'
import { Link } from 'react-router-dom'
import feelings from '../styles/feelings.png'



const Home = () => {
  return <main id="homeMain">
    <h1> What is CBT?</h1>
    <div className="feelingsRow">
      <div className="feelingsWithLink">
        <p className="feelingsParagraph">
          Cognitive behavioural therapy (CBT) is based on the
          idea that your feelings, thoughts and actions are
          interconnected. people can become trapped in negative cycles
          without the tools to change negative patterns.
          <br></br>
          <br></br>
          CBT aims to provide patients with practical ways
          to improve their state of mind and helps them to
          deal with overwhelming problems in a more positive way.
        </p>
        <Link className="button" to="/areas">What can be treated with CBT?</Link>
      </div>
      <img src={feelings} alt="feelings" id="feelings"></img>
    </div>
    <section id="openingHours">
      <h3 id="opening">Opening Hours</h3>
      <p className="listItem">Mon: 9:00am - 5:00pm</p>
      <p className="listItem">Tue: 1:00pm - 8:00pm </p>
      <p className="listItem">Wed: CLOSED </p>
      <p className="listItem">Thu: 9:00am - 5:00pm </p>
      <p className="listItem">Fri: 9:00am - 1:00pm </p>
    </section>
    <section id="contact">
      <h3>Contact</h3>
    </section>
  </main>
}

export default Home