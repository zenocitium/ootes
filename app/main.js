import Vue from 'vue'

import $ from 'jquery'
var bootstrap = require("../node_modules/bootstrap/dist/js/bootstrap.min.js")

// SCSS
require('./scss/main.scss')

// Icons
require('./icons.font')

// components
let point = require('./components/point.vue')
Vue.component('point', point)

let step = require('./components/step.vue')
Vue.component('step', step)

// Import zeh router
import router from './router'

const app = new Vue({
  router
}).$mount('#app')
