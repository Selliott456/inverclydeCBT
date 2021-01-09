import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Areas from './components/Areas'
import Navbar from './components/Navbar'
import Fees from './components/Fees'
import Training from './components/Training'
import Services from './components/Services'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/areas" component={Areas} />
      <Route exact path="/fees" component={Fees} />
      <Route exact path="/training" component={Training} />
      <Route exact path="/Services" component={Services} />
    </Switch>
  </BrowserRouter>
)

const Home = () => {
  return <main>
    <Navbar />
    <About />
  </main>
}

export default App