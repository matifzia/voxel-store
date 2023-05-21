import Vue from 'vue'

Vue.filter('leadingTwo', (value) => {
  return value && value % 1 !== 0
    ? parseFloat(value.toString()).toFixed(2)
    : value
})
