import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import axios from 'axios'

import './FiltersMenu.styl'
import store from './FiltersMenu.store.js'

@observer export default class FiltersMenu extends Component {
  render() {
    return (
      <div className={`FiltersMenu  ${this.props.isShown}`}>
        s
      </div>
    )
  }
}
