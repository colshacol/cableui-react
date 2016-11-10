import { action, computed, observable } from 'mobx'
import DashStore from '../views/Dash/Dash.store'

class FiltersStore {

  @observable
    activeFilters = ['high-health']

  @observable
    activeSorters = ['alphabetical']

  @observable
    filterQuery = ''

  @observable
    filterOptions = []

  @observable
    filtersMenuVisibilityClass = false

  @action // On user input, update the filter query to match query
    filterLocations = (e) => this.filterQuery = e.target.value

  @action // On click, clear the query from the input
    clearUserInput = (e) => {this.filterQuery = ''; console.log('xxx')}

  @action // On click, toggle the visibility of FilterMenu
    toggleFilterMenu = (e) => this.filtersMenuVisibilityClass = !this.filtersMenuVisibilityClass

  @computed
    get filteredLocations() {
      let query = this.filterQuery

      // Filter out locations that don't match user's query
      let matchingLocations = DashStore.locations.filter(location => {
          return location.city.toLowerCase().match(query.toLowerCase())
       })

      // Sort alphabetically if necessary.
      if (this.activeSorters.includes('alphabetical')) {
        matchingLocations.sort((location0, location1) => {
          return location0.city[0] > location1.city[0]
        })
      }

      const
        matchingHealthLocations = [],
        healthIndexes = [[0.00, 33.00], [33.01, 66.00], [66.01, 100.00]],
        healthClasses = [
          'health-low',
          'health-medium',
          'health-high'
        ]

      // Filter out locations with health indexes not requested by user.
      healthClasses.forEach((health, i) => {
        if (this.activeFilters.includes(health)) {
          matchingLocations.forEach(location => {
            const
              indexStart = healthIndexes[i][0],
              indexEnd = healthIndexes[i][1]

            if (location.health > indexStart && location.health < indexEnd) {
              matchingHealthLocations.push(location)
            }
          })
        }
      })

      if (!matchingHealthLocations.length) { return matchingLocations }
      else {
        return matchingLocations.filter(location =>
          matchingHealthLocations.includes(location)
        )
      }
    }
}

const store = new FiltersStore

export default store
