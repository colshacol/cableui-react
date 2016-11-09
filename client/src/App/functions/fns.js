
import LocationsStore from '$Stores/Locations.store'

export function initializeApp(len, int) {
  setInterval(() => {
    LocationsStore.data.push({
      "one": Math.floor(Math.random() * (100 - 83) + 83),
      "two": Math.floor(Math.random() * (100 - 45) + 45),
      "three": Math.floor(Math.random() * (100 - 67) + 67)
    })
    if (LocationsStore.data.length > len) LocationsStore.data.shift(1)
  }, int)
}
