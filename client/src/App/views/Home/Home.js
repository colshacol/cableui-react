import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import axios from 'axios'

import './Home.styl'

import LocationsStore from '$Stores/Locations.store'
import FiltersStore from '$Stores/Filters.store'

import { initializeApp } from '$Functions/fns'

import LocationOverview from '$Components/LocationOverview/LocationOverview'

@observer export default class Home extends Component {
  // Give all StatGraphs their widths and start mock data injection.
  componentDidMount() { initializeApp(20, 500) }

  render() {
    // Create new LocationOverview for each location object in LocationsStore
    const locationOverviews = LocationsStore.filteredLocations.map((location, i)=>
      <LocationOverview
        key={i}
        city={location.city}
        health={location.health}
      />
    )

    return (
      <div className="Home view">
        <div className="container">
          <p className="view-title">
            Dashboard Home
          </p>
          <div className="overviews">
            {locationOverviews}
          </div>
        </div>
      </div>
    )
  }
}
