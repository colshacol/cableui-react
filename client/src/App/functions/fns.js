/* @flow */

export default {
  initDataStream(i: number, x:number, a: typeof ObservableArray) {
    setInterval(() => {
      a.forEach(l => {
        if (l.data.length > i) { l.data.shift(1) }
        l.dataPush({
          a: Math.floor(Math.random() * (20 - 15) + 15),
          b: Math.floor(Math.random() * (30 - 20) + 20),
          c: Math.floor(Math.random() * (40 - 30) + 30),
          d: Math.floor(Math.random() * (50 - 35) + 35)
        })
      })
    }, x)
  }
}
