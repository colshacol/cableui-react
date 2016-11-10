/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App/App'
import Dash from 'views/Dash/Dash'
import Home from 'views/Home/Home'
import Login from 'views/Login/Login'
// import Location from 'views/Location/Location'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="/dash" component={Dash}>
        <IndexRoute component={Home}></IndexRoute>
        {/*<Route path="/location/:city" component={Location}></Route>*/}
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
)
