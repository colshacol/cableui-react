import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import './styles/FilterBar.css'

import FiltersStore from 'stores/Filters.store'


import FilterMenu from './FilterMenu'
import FilterInput from './FilterInput'
import MiniButton from '../Buttons/MiniButton'
import SearchIcon from 'assets/SearchIcon.svg'

@observer
export default class FilterBar extends Component {
  @observable
    filterMenuShown = false

  render() {
    return (
      <div class="_filter-bar">
        <div class="container">
          <div class="search">
            <SearchIcon class="_search-icon" />
            <FilterInput onChange={FiltersStore.filterLocations}/>
            <MiniButton text="CLEAR" onClick={FiltersStore.clearUserInput} />
            <MiniButton text="FILTERS" onClick={FiltersStore.toggleFilterMenu} />
          </div>
        </div>

        <FilterMenu isShown={this.filterMenuShown} />
      </div>
    )
  }
}
