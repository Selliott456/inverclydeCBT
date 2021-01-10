import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Areas from './components/Areas'
import Navbar from './components/Navbar'
import Fees from './components/Fees'
import Training from './components/Training'
import Services from './components/Services'
import Willwork from './components/Willwork'
import Footer from './components/Footer'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/areas" component={Areas} />
      <Route exact path="/fees" component={Fees} />
      <Route exact path="/training" component={Training} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/willwork" component={Willwork} />
    </Switch>
  </BrowserRouter>
)

const Home = () => {
  return <main>
    <Navbar />
    <About />
    <Footer />
  </main>
}

export default App