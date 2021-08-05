import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import About from '../views/About'
import Home from '../views/Home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route render={() => <Redirect to='/home' />} />
      </Switch>
    </Router>
  )
}

export default Routes
