import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { action, observable } from 'mobx'
import axios from 'axios'

import './FilterBar.styl'
import FiltersStore from '$Stores/Filters.store'
import LocationsStore from '$Stores/Locations.store'

import FiltersMenu from '$Components/FiltersMenu/FiltersMenu'
import SearchIcon from './search.svg'
import ArrowIcon from './arrow.svg'

@observer export default class FilterBar extends Component {
  render() {
    return (
      <div className="FilterBar">
        <div className="container">
          <div className="search">
            <SearchIcon className="SearchIcon"/>
            <input
              onChange={FiltersStore.filterLocations}
              value={FiltersStore.filterQuery}
              placeholder="search locations"
            />
            <div
              onClick={FiltersStore.clearUserInput}
              className="mini-button"
            >
              <p>CLEAR</p>
            </div>
            <div
              onClick={FiltersStore.toggleFiltersMenu}
              className="mini-button"
            >
              <p>FILTERS</p>
            </div>
          </div>
        </div>
        <FiltersMenu
          isShown={`shown-${FiltersStore.filtersMenuVisibilityClass}`}
        />
      </div>
    )
  }
}
