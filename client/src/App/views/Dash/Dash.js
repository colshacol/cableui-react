import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import './Dash.styl'

import UserStore from '$Stores/User.store'
import CssStore from '$Stores/Css.store'

import NavColumn from '$Components/NavColumn/NavColumn'
import FilterBar from '$Components/FilterBar/FilterBar'
 
@observer export default class Dash extends Component {
  render() {
    const classes = CssStore.rightColumn.join(' ')
    return (
      <div className="Dash">
        <div className="container">
          <NavColumn />
          <div className={`right-column ${classes}`}>
            <FilterBar />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
