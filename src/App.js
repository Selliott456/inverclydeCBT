import React from 'react'
import './styles/style.scss'
import Home from './components/Home'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Areas from './components/Areas'
import Navbar from './components/Navbar'
import Fees from './components/Fees'
import Services from './components/Services'
import Willwork from './components/Willwork'
import Footer from './components/Footer'
import justhead from './styles/head.png'
import justtext from './styles/justtext.png'
import Fade from 'react-reveal/Fade'
import Mobilenav from './components/Mobilenav'
import fulllogo from './styles/fulllogo.png'

const App = () => (
  <BrowserRouter>
    <Mobilenav pageWrapId={"page-wrap"} outerContainerId={"App"} />
    <Navbar />
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/areas" component={Areas} />
      <Route exact path="/fees" component={Fees} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/willwork" component={Willwork} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

const Landing = () => {
  return <main id="landing">
    <div className="landingContent">
      <Fade right>
        <div id="landingRight">
          <img id="text" className="landingImg" src={justtext}></img>
          <Link id="landingButton" to="/home">Come in!</Link>
        </div>
      </Fade>
      <Fade left>
        <img id="head" className="landingImg" src={justhead}></img>
      </Fade>
    </div>
    <div id="mobileLanding">
      <img id="text" className="landingImg" src={fulllogo}></img>
      <Link id="landingButton" to="/home">Come in!</Link>
    </div>
  </main>
}

export default App