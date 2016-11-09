import{ autorun, observable }from 'mobx'

class UserStore {
  @observable loggedIn = true
  @observable user = {
    name: 'Jennifer'
  }
}

const store = new UserStore

export default store
