import{ observable }from 'mobx'

class NotFoundStore {
  @observable value = 'NotFound'
}

const store = new NotFoundStore

export default store
