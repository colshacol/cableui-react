import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import './LocationOverview.styl'

import OverviewHealth from '$Components/OverviewHealth/OverviewHealth'
import MoreLocationStats from '$Components/MoreLocationStats/MoreLocationStats'

import locationsStore from '$Stores/Locations.store'
import LocationsStore from '$Stores/Locations.store'
import CssStore from '$Stores/Css.store'


@observer export default class LocationOverview extends Component {

  // Will toggle between '' and 'shown' and be used as a child's class
  @observable showMoreBool = false

  // Create absolute health score to dictate the health class.
  @observable adjustedHealthScore = (() => {
    if (this.props.health > 66) return 2
    else if (this.props.health > 33) return 1
    else return 0
  })()

  // Dynamic classes for this component.
  @observable classes = `LocationOverview health-${this.adjustedHealthScore}`

  // When component is hovered, show MoreLocationStats
  showMoreStats = () => {
    CssStore.add('scroll-disabled').to('rightColumn')
    this.showMoreBool = true
  }

  // When component is un-hovered, hide MoreLocationStats
  hideMoreStats = () => {
    CssStore.remove('scroll-disabled').from('rightColumn')
    this.showMoreBool = false
  }

  render() {
    return (
      <div className={this.classes}
        onMouseLeave={this.hideMoreStats}
        onMouseEnter={this.showMoreStats}
      >
        <div className={`health-${this.adjustedHealthScore}`}></div>
        <MoreLocationStats shouldRender={this.showMoreBool} />
        <div className="container">
          <div className="basic">
            <p className="subtitle">OVERVIEW</p>
            <p className="location-city">{this.props.city}</p>
            <OverviewHealth health={`${this.props.health}%`} />
          </div>
        </div>
      </div>
    )
  }
}


// When component is hovered, give the child MoreLocationStats .shown
