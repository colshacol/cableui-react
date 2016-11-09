import React from 'react'
import ReactDOM from 'react-dom'
import { Link, browserHistory, Router, Route, IndexRoute } from 'react-router'

import App from './App/App'
import Dash from '$Views/Dash/Dash'
import Home from '$Views/Home/Home'
import Login from '$Views/Login/Login'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="/dash" component={Dash}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
)
