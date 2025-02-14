import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import feelings from "../styles/feelings.png";
import clock from "../styles/clock.png";
import rhona from "../styles/rhona.jpeg";
import fulllogo from "../styles/fulllogo.png";
// import about from "../styles/about.png";  // Commented out until we have the correct image

const testimonials = [
  {
    quote:
      "'Rhona helped me understand my anxiety and gave me the tools to manage it effectively.'",
    author: "- Sarah",
  },
  {
    quote:
      "'Professional, understanding and really helped me work through my issues. Highly recommend.'",
    author: "- Allen",
  },
  {
    quote:
      "'CBT Inverclyde changed my perspective on therapy. The techniques I learned continue to help me daily.'",
    author: "- Emily",
  },
  {
    quote:
      "'Rhona's approach is both professional and compassionate. I felt understood and supported throughout.'",
    author: "- Elliott",
  },
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setIsVisible(true);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main id="homeMain">
      <div className="heroSection">
        <div className="heroRow">
          <div className="logoSection">
            <img
              src={fulllogo}
              alt="CBT Inverclyde"
              className="heroLogo fadeIn"
            />
          </div>
          <div className="quoteSection">
            <div className="testimonialSection">
              <div
                className="testimonial"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                }}
              >
                <p className="quote">
                  {testimonials[currentTestimonial].quote}
                </p>
                <p className="author">
                  {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
            <a
              href="mailto:rhona@inver-cbt.co.uk?subject=CBT%20Enquiry"
              className="heroButton"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="aboutSection">
        <div className="aboutGrid">
          <div className="openingHours">
            <h3>Opening Hours</h3>
            <ul>
              <li>
                Monday: 10:00am - 6:00pm{" "}
                <span className="note">(remote only)</span>
              </li>
              <li>Tuesday: 12:00pm - 7:00pm</li>
              <li>
                Wednesday: 10:00am - 1:00pm{" "}
                <span className="note">(in person)</span>
                <br />
                <span className="indent">
                  2:10pm - 4:30pm <span className="note">(online)</span>
                </span>
              </li>
              <li>
                Thursday: <span className="note">Non-bookable</span>
              </li>
              <li>Friday - Sunday: Closed</li>
            </ul>
            <p className="note">Evening appointments available on request</p>
          </div>
          <div className="aboutText">
            <p>
              CBT Inverclyde offers professional Cognitive Behavioural Therapy
              in Greenock. Our approach is evidence-based and focused on helping
              you develop practical strategies to improve your mental wellbeing.
            </p>
            <p>
              We provide a safe, confidential space where you can work through
              your challenges with a qualified and experienced therapist.
            </p>
          </div>
        </div>
      </div>

      <div className="feelingsRow">
        <div className="feelingsContent">
          <div className="feelingsWithLink">
            <p className="feelingsParagraph">
              Cognitive Behavioural Therapy (CBT) is based on the idea that your
              feelings, thoughts and actions are interconnected. people can
              become trapped in negative cycles without the tools to change
              negative patterns.
              <br></br>
              <br></br>
              CBT aims to provide patients with practical ways to improve their
              state of mind and helps them to deal with overwhelming problems in
              a more positive way.
            </p>
            <Link className="button" to="/services">
              What can be treated with CBT?
            </Link>
          </div>
          <img src={feelings} alt="feelings" id="feelings"></img>
        </div>
      </div>

      <div className="therapistSection">
        <div className="therapistContent">
          <div className="therapistGrid">
            <div className="therapistInfo">
              <div className="therapistText">
                <p>
                  I am a fully qualified and accredited Cognitive Behavioural
                  Psychotherapist. I work across all age groups and address
                  issues such as Post Traumatic Stress Disorder, Complex Trauma,
                  Self Harm, Psychosis, Anxiety, Low Self Esteem and Depression
                  as well as many more.
                </p>
                <p>I have been working in private practise since 2013.</p>
              </div>
              <div className="qualificationsSection">
                <div className="qualifications">
                  <h3>Qualifications</h3>
                  <ul>
                    <li>
                      Undergraduate BSc Psychology degree (University of
                      Aberdeen)
                    </li>
                    <li>
                      Certificate and Diploma in Cognitive Behavioural Therapy
                      (Distance Learning)
                    </li>
                    <li>
                      Post Graduate Certificate / Diploma in Cognitive
                      Behavioural Psychotherapy (University of Dundee)
                    </li>
                    <li>BABCP/NHS accredited</li>
                    <li>
                      SVQ 3 – Health and Social Care (Children and Young People)
                    </li>
                    <li>
                      Accredited member of the British Association for
                      Behavioural and Cognitive Psychotherapies
                    </li>
                  </ul>
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
              </div>
            </div>
            <div className="therapistPhoto">
              <img src={rhona} alt="Rhona McLaughlin - CBT Therapist" />
              <h3>Rhona McLaughlin</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
