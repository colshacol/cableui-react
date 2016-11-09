import{ observable }from 'mobx'

class AppStore {
  @observable value = 'App'
}

const store = new AppStore

export default store
