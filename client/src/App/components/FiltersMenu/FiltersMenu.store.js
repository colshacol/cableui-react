import{ observable }from 'mobx'

class FiltersMenuStore {
  @observable value = 'FiltersMenu'
}

const store = new FiltersMenuStore

export default store
