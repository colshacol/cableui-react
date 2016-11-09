import { action, computed, observable } from 'mobx'
import LocationsStore from '$Stores/Locations.store'

class FiltersStore {
  @observable activeFilters = []
  @observable activeSorters = ['alphabetical']
  @observable filterQuery = ''
  @observable filterOptions = []

  @observable filtersMenuVisibilityClass = false

  @action // On user input, update the filter query to match query
    filterLocations = (e) => this.filterQuery = e.target.value

  @action // On click, clear the query from the input
    clearUserInput = (e) => this.filterQuery = ''

  @action // On click, toggle the visibility of FiltersMenu
    toggleFiltersMenu = (e) => this.filtersMenuVisibilityClass = !this.filtersMenuVisibilityClass
}

const store = new FiltersStore

export default store
