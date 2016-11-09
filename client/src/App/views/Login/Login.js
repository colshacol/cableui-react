import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import axios from 'axios'

import './Login.styl'
import UserStore from '$Stores/User.store'


@observer export default class Login extends Component {
  // shouldComponentUpdate() {}
  componentWillMount() {if (UserStore.loggedIn) browserHistory.push('/dash')}

  componentDidMount() {}

  render() {
    return (
      <div id="Login" className="comp">
        <div className="container">
          <p>Login</p>
        </div>
      </div>
    )
  }
}
