import React from "react";
import willwork from "../styles/willwork.png";

const Willwork = () => {
  return (
    <main id="mainWillwork">
      <h1>Will CBT Work For Me?</h1>
      <div className="willCard">
        <div className="willText">
          <div>
            <p>
              CBT suits individuals with all sorts of problems – including (but
              not limited to) depression, anxiety, phobias, difficult
              relationships, obsessive-compulsive disorder and eating disorders.
            </p>
            <p>
              CBT is evidence-based, which means we know it works! The approach
              is individualised and collaborative meaning the client feels
              empowered with regards to their treatment and progress.
            </p>
            <a
              href="mailto:rhona@inver-cbt.co.uk?subject=CBT%20Enquiry"
              className="button"
            >
              Get in Touch
            </a>
          </div>
          <img src={willwork} alt="question" className="willImage" />
        </div>
      </div>
    </main>
  );
};

export default Willwork;
