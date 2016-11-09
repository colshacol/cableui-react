import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import axios from 'axios'

import './($NAME).($CSS)'
import store from './($NAME).store.js'

@observer export default class ($NAME) extends Component {
  // shouldComponentUpdate() {}
  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <div className="($NAME)">
        <div className="container">

        </div>
      </div>
    )
  }
}
