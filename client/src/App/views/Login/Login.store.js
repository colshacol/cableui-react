import{ observable }from 'mobx'

class LoginStore {
  @observable value = 'Login'
}

const store = new LoginStore

export default store
