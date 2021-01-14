// import React, { useState } from 'react'
// import ReactCardFlip from 'react-card-flip'
import React from 'react'

const areas = [
  'Abortion',
  'Abuse',
  'Addiction(s)',
  'ADHD',
  'Anger management',
  'Anorexia nervosa',
  'Anxiety',
  'Aspergers syndrome',
  'Attachment disorder',
  'Bereavement',
  'Binge-eating disorder',
  'Bipolar disorder/Manic depression',
  'Body dysmorphic disorder',
  'Bulimia nervosa',
  'Bullying',
  'Child related issues',
  'Chronic fatigue syndrome/ME',
  'Depression',
  'Dissociation',
  'Domestic violence',
  'Eating disorders',
  'Gender dysphoria',
  'Generalised anxiety disorder',
  'Hearing voices',
  'Hoarding',
  'Low self-confidence',
  'Low self-esteem',
  'Miscarriage',
  'Obsessive compulsive disorder (OCD)',
  'Panic disorder',
  'Passive aggressive behaviour',
  'Personality disorders',
  'Phobias',
  'Post-traumatic stress disorder (PTSD)',
  'Postnatal depression',
  'Psychosis',
  'Relationship issues',
  'Schizophrenia',
  'Seasonal affective disorder (SAD)',
  'Self-harm',
  'Sexuality',
  'Stress',
  'Suicidal thoughts',
  'Trauma',
  'Work-related stress '
]
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const Areas = () => {

  // const [isFlipped, setIsFlipped] = useState(false)
  // 
  // const handleClick = () => {
  // setIsFlipped(!isFlipped)
  // }

  {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */ }
  {/* <div> */ }
  {/* <section className="area-front-item"> */ }
  {/**/ }
  {/* <button className="front-flip-button" onClick={handleClick}>A</button> */ }
  {/* </section> */ }
  {/* </div> */ }
  {/* <div> */ }
  {/* <section className="area-back-item"> */ }
  {/* <h3> this is the other side</h3> */ }
  {/* <button className="front-flip-button" onClick={handleClick}>click</button> */ }
  {/* </section> */ }
  {/* </div> */ }
  {/* </ReactCardFlip> */ }

  return <main>
    {alphabet.map((letter, index) => {
      console.log(letter)
      return <div key={index}>
        <details >
          <summary>
            {letter}
          </summary>
          {areas.filter(area => area.charAt(0) === letter).map((filteredArea, index) => {
            return <div key={index}>
              <p>{filteredArea}</p>
            </div>
          })}
        </details>
      </div>
    })}
  </main>
}


export default Areas