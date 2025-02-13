import React from "react";
import hands from "../styles/hands.png";
import terms from "../styles/terms.png";

const Fees = () => {
  return (
    <main id="mainFees">
      <h1>Fees</h1>
      <div className="feesHands">
        <section className="fees">
          <p>1:1 sessions | £60</p>
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
          <h2>Terms and Conditions</h2>
          <p>
            Cancellations can be made upto 24 hours before the appointment.
            Appointments cancelled after this point will be charged in full
          </p>
          <p>
            Unfortunately, sessions cannot be extended due to late-coming and
            will be charged in full, so please try to be punctual!
          </p>
          <h2>Medical Reports</h2>
          <p>
            Should you require a medical report or letter, it will be charged at
            the session rate stated above. Prices will be agreed prior to
            writing.
          </p>
          <h2>Patient Notes</h2>
          <p>
            Patient notes are the property of CBT Inverclyde and can only be
            released for legal requests with a court order. If information is
            required by a patient, a chargeable report can be provided. Please
            note that patient records are only kept for 3 years unless there is
            a legal request for them to be held longer
          </p>
        </section>
        <img id="hands" src={terms} alt="hands"></img>
      </div>
    </main>
  );
};

export default Fees;
