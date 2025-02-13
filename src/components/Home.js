import React from "react";
import { Link } from "react-router-dom";
import feelings from "../styles/feelings.png";
import clock from "../styles/clock.png";
import rhona from "../styles/rhona.jpeg";

const Home = () => {
  return (
    <main id="homeMain">
      <section id="about" className="card">
        <h2>About</h2>
        <div className="about-content">
          <div className="about-header">
            <img id="rhonaPhoto" src={rhona} alt="Rhona McLaughlin"></img>
            <p>Rhona McLaughlin</p>
          </div>
          <div className="about-info">
            <div className="about-bio">
              <p>
                I am a fully qualified and accredited Cognitive Behavioural
                Psychotherapist. I work across all age groups and address issues
                such as Post Traumatic Stress Disorder, Complex Trauma, Self
                Harm, Psychosis, Anxiety, Low Self Esteem and Depression as well
                as many more.
                <br></br>
                <br></br>I have been working in private practise since 2013.
              </p>
            </div>
            <div className="qualifications">
              <h4>Qualifications</h4>
              <ul>
                <li>
                  Undergraduate BSc Psychology degree (University of Aberdeen)
                </li>
                <li>Certificate and Diploma in CBT (Distance Learning)</li>
                <li>
                  Post Graduate Certificate / Diploma in CBT (University of
                  Dundee)
                </li>
                <li>BABCP/NHS accredited</li>
                <li>
                  SVQ 3 – Health and Social Care (Children and Young People)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <h2>What is CBT?</h2>
      <div className="feelingsRow">
        <div className="feelingsWithLink">
          <p className="feelingsParagraph">
            Cognitive Behavioural Therapy (CBT) is based on the idea that your
            feelings, thoughts and actions are interconnected. People can become
            trapped in negative cycles without the tools to change negative
            patterns.
            <br></br>
            <br></br>
            CBT aims to provide patients with practical ways to improve their
            state of mind and helps them to deal with overwhelming problems in a
            more positive way.
          </p>
          <Link className="button" to="/areas">
            What can be treated with CBT?
          </Link>
        </div>
        <img src={feelings} alt="feelings" id="feelings"></img>
      </div>

      <section id="openingHours" className="card">
        <h3 id="opening">Opening Hours</h3>
        <div className="withclock">
          <img src={clock} alt="clock" id="clock"></img>
          <div className="times">
            <p className="listItem">Mon: 10:00am - 6:00pm (remote only)</p>
            <p className="listItem">Tue: 12:00pm - 7:00pm </p>
            <p className="listItem">
              Wed: 10:00am -1 (in person), 2:10pm - 4:30pm (online)
            </p>
            <p className="listItem">Thu: Non-bookable </p>
            <p className="listItem">Fri-Sun: CLOSED </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
