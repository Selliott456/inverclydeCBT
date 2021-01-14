import React from 'react'
import willwork from '../styles/willwork.png'

const Willwork = () => {
  return <main >
    <h1>Will CBT Work For Me?</h1>
    <div className="mainWillWork">
    
    <section >
      <p className="questionPara">CBT suits individuals with all sorts of problems
      – including (but not limited to) depression, anxiety, phobias, difficult
      relationships, obsessive-compulsive disorder and eating
      disorders. <br></br><br></br>
      CBT is evidence-based, which means we know it works!
      The approach is individualised and collaborative meaning
      the client feels empowered with regards to their
      treatment and progress.
    </p>
      <img id="questionImg" src={willwork} alt="question"></img>
    </section>
    </div>
  </main>

}

export default Willwork