import { observable, computed, action } from 'mobx'

class DashStore {
  get(city) {
    const _this = this
    return {
      get chartData() {
        return Array.from(_this.locations.find((loc) => loc.city === city).data)
      }
    }
  }

  @observable locations = [{
    city: 'Ontario',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  },

  {
    city: 'Tokyo',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  },

  {
    city: 'Dallas',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  },

  {
    city: 'Queens',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  },

  {
    city: 'Westlake',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  },

  {
    city: 'Plano',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  },

  {
    city: 'Brooklyn',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  },

  {
    city: 'Mexico City',
    health: Math.floor(Math.random() * 100),
    data: [],
    @action dataPush(obj) {
      this.data.push(obj)
    }
  }]
}

const store = new DashStore

export default store
