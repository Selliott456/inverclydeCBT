// import ReactCardFlip from 'react-card-flip'




const [isFlipped, setIsFlipped] = useState(false)
  
  const handleClick = () => {
  setIsFlipped(!isFlipped)
  }
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