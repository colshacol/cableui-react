import { observable } from 'mobx'

class DashStore {
  @observable value = 'Dash'
}

const store = new DashStore

export default store
