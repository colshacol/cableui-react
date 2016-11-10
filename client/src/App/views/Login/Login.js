import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { browserHistory } from 'react-router'

import css from './Login.css'
import UserStore from 'stores/User.store'

@observer
export default class Login extends Component {
  componentWillMount() { if (UserStore.loggedIn) browserHistory.push('/dash') }

  render() {
    return (
      <div id="Login">
        <div class="container">
          <p>Login</p>
        </div>
      </div>
    )
  }
}
