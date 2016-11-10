/* @flow-weak */

import React, { Component } from 'react'
import { observer } from 'mobx-react'

import './Home.css'


import FiltersStore from 'stores/Filters.store'
import DashStore from '../Dash/Dash.store'

import Overview from 'comps/Overview/Overview'

@observer
export default class Home extends Component {
  render() {
    // Create new LocationOverview for each location object in LocationsStore
    const locationOverviews = FiltersStore.filteredLocations.map((loc, i)=>
      <Overview key={i} city={loc.city} health={loc.health} data={loc.data}/>
    )

    return (
      <div class="_home">
        <div class="container">
          <p class="view-title">
            Dashboard Home
          </p>
          <div class="overviews">
            {locationOverviews}
          </div>
        </div>
      </div>
    )
  }
}
