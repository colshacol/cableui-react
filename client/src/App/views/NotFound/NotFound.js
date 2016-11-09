import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import axios from 'axios'

import './NotFound.styl'
import store from './NotFound.store.js'

@observer export default class NotFound extends Component {
  // shouldComponentUpdate() {}
  componentWillMount() {}
  componentDidMount() {}

  render() {
    return (
      <div className="NotFound">
        <div className="container">

        </div>
      </div>
    )
  }
}
