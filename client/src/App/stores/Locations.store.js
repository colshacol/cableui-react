import { action, computed, observable }from 'mobx'
import FiltersStore from '$Stores/Filters.store'

class LocationsStore {
  // Locations objects for use in generating LocationOverviews
  @observable locations = [{
      city: 'Ontario',
      health: 66.3
    }, {
      city: 'Tokyo',
      health: 12.5
    }, {
      city: 'Dallas',
      health: 41.9
    }, {
      city: 'Queens',
      health: 92.2
    }, {
      city: 'Westlake',
      health: 12.5
    }, {
      city: 'Plano',
      health: 12.5
    }, {
      city: 'Brooklyn',
      health: 12.5
    }, {
      city: 'Mexico City',
      health: 12.5
    }
  ]

  // Array of objects that will feed graphs
  @observable data = []

  @computed get filteredLocations() {
    let
      filters = FiltersStore.activeFilters,
      sorters = FiltersStore.activeSorters,
      query = FiltersStore.filterQuery,
      // Filter out locations that don't match user's query
      matchingLocations = this.locations.filter(location => {
        return location.city.toLowerCase().match(query.toLowerCase())
      })

    // Sort alphabetically if necessary.
    if (sorters.includes('alphabetical')) {
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
      if (filters.includes(health)) {
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

const store = new LocationsStore

export default store
