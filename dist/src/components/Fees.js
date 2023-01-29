import React from "react";
import hands from "../styles/hands.png";
import terms from "../styles/terms.png";

const Fees = () => {
  return (
    <main className="mainFees">
      <h1>Fees</h1>
      <div className="feesHands">
        <section className="fees">
          <p>1:1 sessions | £55</p>
          <p>Couples Sessions | £60</p>
          <p>Sessions typically last between 45 and 60 minutes</p>
          <p>
            longer sessions can be arranged and will be charged according to the
            above rate.{" "}
          </p>
          <small>
            fees are subject to review and can be discussed dependent on client
            circumstances
          </small>
        </section>
        <img id="hands" src={hands} alt="hands"></img>
      </div>
      <div className="med">
        <section className="terms">
          <h1>Terms and Conditions</h1>
          <p>
            Cancellations can be made upto 24 hours before the appointment.
            Appointments cancelled after this point will be charged in full
          </p>
          <p>
            Unfortunately, sessions cannot be extended due to late-coming and
            will be charged in full, so please try to be punctual!
          </p>
          <h1>Medical Reports</h1>
          <p>
            Should you require a medical report or letter, it will be charged at
            the session rate stated above. Prices will be agreed prior to
            writing.
          </p>
        </section>
        <img id="hands" src={terms} alt="hands"></img>
      </div>
    </main>
  );
};

export default Fees;
