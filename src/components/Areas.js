import React, { useState } from 'react'
// import React from 'react'

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


  return <main id="mainAreas">
    <h1>Areas of Counselling</h1>
    <section className="areasExplain">
      <p>These areas list what can be covered during counselling at CBT Inverclyde.
      However, the list is in no way fixed or exhaustive. If in doubt, it is worth
      getting in contact!
      </p>
      <a href="mailto:rhona@cbtinverclyde.com" className="button">Get in Touch</a>
    </section>
    <section className="dropdownSection">
      <details>
        <summary>
          See All Areas of Counselling
      </summary>
        {areas.map((area, index) => {
          return <div key={index}>
            <p>{area}</p>
          </div>
        })}
      </details>
    </section>
  </main>

}


export default Areas