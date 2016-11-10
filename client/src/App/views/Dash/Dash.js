import React, { Component } from 'react'
import { observer } from 'mobx-react'

import './Dash.css'

import $fns from 'fns/fns'

import UserStore from 'stores/User.store'
import CssStore from 'stores/Css.store'
import DashStore from './Dash.store'

import NavColumn from 'comps/NavColumn/NavColumn'
import FilterBar from 'comps/FilterBar/FilterBar'
import DevTools from 'mobx-react-devtools'

@observer
export default class Dash extends Component {
  componentDidMount() {
    $fns.initDataStream(20, 300, DashStore.locations)
  }

  render() {
    const classes = CssStore.rightColumn.join(' ')

    return (
      <div class="_dash">
        <DevTools/>
        <div class="container">
          <NavColumn />
          <div class={`right-column ${classes}`}>
            <FilterBar />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
