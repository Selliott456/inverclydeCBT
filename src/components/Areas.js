import React, { useState } from  'react' 
import ReactCardFlip from 'react-card-flip'

const Areas = () => {
  
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return<main>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div>
        <section className="area-front-item">
          
          <button className="front-flip-button" onClick={handleClick}>A</button>
          </section>
      </div>
      <div>
        <section className="area-back-item">
          <h3> this is the other side</h3>
          <button className="front-flip-button" onClick={handleClick}>click</button>
        </section>
        </div>
   </ReactCardFlip>
   </main>
     {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button"> */}
     {/* <Dropdown.Item>Abuse</Dropdown.Item>  */}
     {/* <Dropdown.Item>Addiction(s)</Dropdown.Item>    */}
     {/* <Dropdown.Item> ADHD</Dropdown.Item> */}
     {/* <Dropdown.Item>Anger management</Dropdown.Item>    */}
     {/* <Dropdown.Item>Anorexia nervosa</Dropdown.Item>   */}
     {/* <Dropdown.Item>Anxiety</Dropdown.Item>   */}
     {/* <Dropdown.Item>Aspergers syndrome</Dropdown.Item>  */}
     {/* <Dropdown.Item>Attachment disorder</Dropdown.Item> */}
     {/* </DropdownButton> */}
     
     {/* <div className="letterCondition"> */}
    {/* <button>B</button>   */}
     {/* <Dropdown.Item>Bereavement</Dropdown.Item>   */}
     {/* <Dropdown.Item>Binge-eating disorder</Dropdown.Item>    */}
     {/* <Dropdown.Item>Bipolar disorder/Manic depression</Dropdown.Item>   */}
     {/* <Dropdown.Item>Body dysmorphic disorder</Dropdown.Item>  */}
     {/* <Dropdown.Item>Bulimia nervosa</Dropdown.Item>   */}
     {/* <Dropdown.Item>Bullying</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition">   */}
    {/* <button>C</button> */}
     {/* <Dropdown.Item>Child related issues</Dropdown.Item>    */}
     {/* <Dropdown.Item>Chronic fatigue syndrome/ME</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>D</button>    */}
     {/* <Dropdown.Item>Depression</Dropdown.Item>    */}
     {/* <Dropdown.Item>Dissociation</Dropdown.Item>   */}
     {/* <Dropdown.Item>Domestic violence</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>E</button>    */}
     {/* <Dropdown.Item>Eating disorders</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>G</button> */}
     {/* <Dropdown.Item>Gender dysphoria</Dropdown.Item>    */}
     {/* <Dropdown.Item>Generalised anxiety disorder</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>H</button>  */}
     {/* <Dropdown.Item>Hearing voices</Dropdown.Item>    */}
     {/* <Dropdown.Item>Hoarding</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>L</button> */}
     {/* <Dropdown.Item>Low self-confidence</Dropdown.Item>   */}
     {/* <Dropdown.Item>Low self-esteem</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>M</button> */}
     {/* <Dropdown.Item>Miscarriage</Dropdown.Item>    */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
       {/* </div> */}
       {/* <div className="letterCondition"> */}
    {/* <button>O</button> */}
     {/* <Dropdown.Item>Obsessive compulsive disorder (OCD)</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>P</button>   */}
     {/* <Dropdown.Item>Panic disorder</Dropdown.Item>    */}
     {/* <Dropdown.Item>Passive aggressive behaviour</Dropdown.Item>   */}
     {/* <Dropdown.Item>Personality disorders</Dropdown.Item>  */}
     {/* <Dropdown.Item>Phobias</Dropdown.Item>  */}
     {/* <Dropdown.Item>Post-traumatic stress disorder (PTSD)</Dropdown.Item>   */}
     {/* <Dropdown.Item>Postnatal depression</Dropdown.Item>    */}
     {/* <Dropdown.Item>Psychosis</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>R</button>  */}
     {/* <Dropdown.Item>Relationship issues</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>S</button>  */}
     {/* <Dropdown.Item>Schizophrenia</Dropdown.Item>   */}
     {/* <Dropdown.Item>Seasonal affective disorder (SAD)</Dropdown.Item>  */}
     {/* <Dropdown.Item>Self-harm</Dropdown.Item>   */}
     {/* <Dropdown.Item>Sexuality</Dropdown.Item>    */}
     {/* <Dropdown.Item>Stress</Dropdown.Item>   */}
     {/* <Dropdown.Item>Suicidal thoughts</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>T</button> */}
     {/* <Dropdown.Item>Trauma</Dropdown.Item> */}
     {/* </div> */}
     {/* <div className="letterCondition"> */}
    {/* <button>W</button> */}
     {/* <Dropdown.Item>Work-related stress</Dropdown.Item> */}
     {/* </div> */}
   
}


export default Areas