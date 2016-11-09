import { action, computed, observable }from 'mobx'
// import { ClassList } from '$AppPrototypes/ClassList'

class CssStore {
  @observable rightColumn = []

  @action add = (...classes) => {
    return {
      to: (classList) => {
        for (let i = 0, _class = classes[i]; i < classes.length; i++) {
          if (!this[classList].includes(_class)) {
            this[classList].push(_class)
          }
        }
      }
    }
  }

  @action remove = (...classes) => {
    return {
      from: (classList) => {
        for (let i = 0, _class = classes[i]; i < classes.length; i++) {
          if (this[classList].includes(_class)) {
            this[classList].splice(this[classList].indexOf(_class), 1)
          }
        }
      }
    }
  }

  @computed get rightColumnClasses() {
    return this.rightColumn
  }
}

const store = new CssStore
export default store
