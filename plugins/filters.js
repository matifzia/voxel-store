import Vue from 'vue'

Vue.filter('leadingTwo', (value) => {
  return value 
    ? parseFloat(value.toString()).toFixed(2)
    : value
})
