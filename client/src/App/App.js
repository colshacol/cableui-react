/* @flow */

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div class="_app">
        {this.props.children}
      </div>
    )
  }
}
