import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import './MoreLocationStats.styl'

import CssStore from '$Stores/Css.store'
import LocationsStore from '$Stores/Locations.store'

import StatGraph from '$Components/StatGraph/StatGraph'

@observer export default class MoreLocationStats extends Component {
  componentDidMount() { }

  render() {
    const classes = `MoreLocationStats  isShown-${this.props.shouldRender}`
    if (!this.props.shouldRender) return <div className={classes}></div>

    const average = (() => {
      return LocationsStore.data.reduce((total, b) => total + b.stars, 0) / LocationsStore.data.length
    })().toFixed(2)

    return (
      <div className={classes}>
        <p>MORE STATS:</p>
        <StatGraph parentWidth={this.props.locationsWidth}/>
        <StatGraph parentWidth={this.props.locationsWidth}/>
        <StatGraph parentWidth={this.props.locationsWidth}/>
        <StatGraph parentWidth={this.props.locationsWidth}/>
        <StatGraph parentWidth={this.props.locationsWidth}/>
        <p className="stat-average">Average: {average}</p>
      </div>
    )
  }
}
