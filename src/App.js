import React from 'react'
import './styles/style.scss'
import Home from './components/Home'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import About from './components/About'
import Areas from './components/Areas'
import Navbar from './components/Navbar'
import Fees from './components/Fees'
import Training from './components/Training'
import Services from './components/Services'
import Willwork from './components/Willwork'
import Footer from './components/Footer'
import justhead from './styles/head.png'
import justtext from './styles/justtext.png'
import Fade from 'react-reveal/Fade'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/areas" component={Areas} />
      <Route exact path="/fees" component={Fees} />
      <Route exact path="/training" component={Training} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/willwork" component={Willwork} />
      <Route exact path="/about" component={About} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

const Landing = () => {
  return <main id="landing">
    <Fade left>
      <img className="landingImg" src={justhead}></img>
    </Fade>
    <Fade right>
      <div id="landingRight">
        <img className="landingImg" src={justtext}></img>
        <Link id="landingButton" to="/home">Come in!</Link>
      </div>
    </Fade>
  </main>
}

export default App