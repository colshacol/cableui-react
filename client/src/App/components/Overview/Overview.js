/* @flow-weak */

import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import './styles/Overview.css'

import OverviewTitle from './OverviewTitle'
import OverviewHealth from './OverviewHealth'
import OverviewStats from './OverviewStats'

import CssStore from 'stores/Css.store'



@observer
export default class Overview extends Component {
  // Will toggle between '' and 'shown' and be used as a child's class
  @observable
    showMoreBool= false

  // Create absolute health score to dictate the health class.
  @observable
    healthScore = (() => {
      if (this.props.health > 66) return '2'
      else if (this.props.health > 33) return '1'
      else return '0'
    })()

  // When component is hovered, show OverviewStats.
  showMore = () => {
    CssStore.add('scroll-disabled').to('rightColumn')
    this.showMoreBool = true
  }

  // When component is un-hovered, hide OverviewStats.
  hideMore = () => {
    CssStore.remove('scroll-disabled').from('rightColumn')
    this.showMoreBool = false
  }

  render() {
    const
      { city, data } = this.props,
      healthIndicatorClass: string = `health-indicator-${this.healthScore}`,
      classes: string = `_overview health-${this.healthScore}`

    return (
      <div class={classes} onMouseLeave={this.hideMore} onMouseEnter={this.showMore}>
        <div class={healthIndicatorClass}></div>

        <div class="container">
          <div class="initial">
            <OverviewTitle city={this.props.city} />
            <OverviewHealth health={this.props.health} />
          </div>
        </div>

        <OverviewStats shouldRender={this.showMoreBool} city={city} data={data}/>
      </div>
    )
  }
}
