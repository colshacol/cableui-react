import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'
import './App.styl'


@observer
export default class App extends Component {
  render() {
    return(
      <div className="App">
        {React.cloneElement(this.props.children,
          {loggedIn: true})
        }
      </div>
    )
  }
}
