import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
)

const Home = () => {
  return <h1>Hello I work</h1>
}

export default App