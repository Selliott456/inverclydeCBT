import React, { useState } from "react";
import { Link } from "react-router-dom";
import feelings from "../styles/feelings.png";
import clock from "../styles/clock.png";
import ReactCardFlip from "react-card-flip";
import rhona from "../styles/rhona.jpeg";

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main id="homeMain">
      <h1> What is CBT?</h1>
      <div className="feelingsRow">
        <div className="feelingsWithLink">
          <p className="feelingsParagraph">
            Cognitive Behavioural Therapy (CBT) is based on the idea that your
            feelings, thoughts and actions are interconnected. people can become
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
      <section id="openingHours">
        <h3 id="opening">Opening Hours</h3>
        <div className="withclock">
          <img src={clock} alt="clock" id="clock"></img>
          <div className="times">
            <p className="listItem">Mon: 9:00am - 5:00pm (remote only)</p>
            <p className="listItem">Tue: 1:00pm - 8:00pm </p>
            <p className="listItem">Wed: CLOSED </p>
            <p className="listItem">Thu: 9:00am - 5:00pm </p>
            <p className="listItem">Fri: 9:00am - 1:00pm </p>
          </div>
        </div>
      </section>
      <section id="about">
        <h1>About</h1>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <section className="area-front-item">
            <div className="titlePhoto">
              <h3>Rhona McLaughlin</h3>
              <img id="rhonaPhoto" src={rhona} alt="rhonaPhoto"></img>
            </div>
            <div className="paraButton">
              <p class="aboutPara">
                I am a fully qualified and accredited Cognitive Behavioural
                Psychotherapist. I work across all age groups and address issues
                such as Post Traumatic Stress Disorder, Complex Trauma, Self
                Harm, Psychosis, Anxiety, Low Self Esteem and Depression as well
                as many more.
                <br></br>
                <br></br>I have been working in private practise since 2013.
              </p>
              <button className="front-flip-button" onClick={handleClick}>
                See Training and Experience
              </button>
            </div>
          </section>
          <section className="area-back-item">
            <div className="qualifications">
              <h1>Qualifications</h1>
              <ul>
                <li>
                  Undergraduate BSc Psychology degree (University of Aberdeen)
                </li>
                <li>
                  Certificate and Diploma in Cognitive Behavioural Therapy
                  (Distance Learning)
                </li>
                <li>
                  Post Graduate Certificate / Diploma in Cognitive Behavioural
                  Psychotherapy (University of Dundee)
                </li>
                <li>BABCP/NHS accredited</li>
                <li>
                  SVQ 3 – Health and Social Care (Children and Young People)
                </li>
                <li>
                  ​Accredited member of the British Association for Behavioural
                  and Cognitive Psychotherapies
                </li>
              </ul>
              <button className="front-flip-button" onClick={handleClick}>
                Back to About
              </button>
            </div>
            <div className="training">
              <h3>Training and Experience</h3>
              <ul>
                <li>Working with Survivors of Sexual Abuse</li>
                <li>Bereavement in a secure setting</li>
                <li>Relationship First Aid (mediation)</li>
                <li>Sleep and Insomnia</li>
                <li>
                  Young Minds (adolescent mental health) – Qualified trainer
                </li>
                <li>
                  Treating Problem Behaviour - Trauma Reconciliation
                  Intervention
                </li>
                <li>Trauma and Attachment</li>
                <li>Safe Talk Suicide alertness</li>
                <li>Life Story work</li>
                <li>Motivational Interviewing</li>
                <li>Therapeutic Crises Intervention</li>
                <li>Adult Resilience</li>
                <li>Risk Assessment training for Sexual behaviour</li>
                <li>Working with resistant and non- compliant families</li>
                <li>Family Therapy</li>
                <li>Child Protection - experienced practitioner</li>
                <li>Zero Tolerance (Sexual Exploitation)</li>
              </ul>
            </div>
          </section>
        </ReactCardFlip>
      </section>
    </main>
  );
};

export default Home;
